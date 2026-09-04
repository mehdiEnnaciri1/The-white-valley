/* Moteur de carrousels — The White Valley
   Trois mécaniques sur un seul moteur, choisies par l'attribut data-fx :

     data-fx="flow"     la vue centrale en volume, les voisines tournées et floutées
     data-fx="squeeze"  une bande ouverte, les autres réduites à un onglet vertical
     data-fx="arc"      les vues posées sur un arc, la centrale redressée

   Attributs lus sur le conteneur [data-fx] :
     data-every   ms entre deux vues en défilement automatique (défaut 4400)
     data-slat    largeur d'une bande fermée, mode squeeze (défaut 84px)
     data-spread  degrés entre deux vues, mode arc (défaut 16)
     data-radius  rayon de l'arc en px, mode arc (défaut 1200)
     data-tone    "dark" quand le carrousel est posé sur fond sombre (couleur des points)

   Attributs lus sur les enfants :
     [data-fxstage]  la scène (glissement, clavier)
     [data-fxi]      une vue ; data-cap="n" relie la vue au n-ième [data-fxc]
     [data-fxopen]   le bloc de texte visible quand la bande est ouverte (squeeze)
     [data-fxslat]   l'onglet vertical visible quand la bande est fermée (squeeze)
     [data-fxc]      un bloc de légende en fondu sous le carrousel
     [data-fxd]      un point de navigation
     [data-fxp] [data-fxn]  précédent / suivant
     [data-fxk]      compteur « 03 / 09 »
     [data-fxbar]    barre de progression

   Le défilement automatique s'arrête au survol, au focus clavier, hors écran,
   onglet en arrière-plan, et si le visiteur a demandé de réduire les animations. */
(function (global) {
  'use strict';

  var TICK = 240;
  var instances = [];
  var timer = null;
  var io = null;

  function reduced() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function reveal(el) {
    el.style.opacity = '1';
    el.style.transform = 'none';
  }

  function initReveals(root, opts) {
    if (opts.revealOnScroll === false || reduced()) {
      root.querySelectorAll('[data-reveal]').forEach(reveal);
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          reveal(e.target);
          io.unobserve(e.target);
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
    }
    root.querySelectorAll('[data-reveal]').forEach(function (el) {
      if (el.__rev) return;
      el.__rev = 1;
      io.observe(el);
    });
  }

  function build(el, opts) {
    var mode = el.dataset.fx;
    var own = function (sel) {
      return Array.prototype.slice.call(el.querySelectorAll(sel)).filter(function (n) {
        return n.closest('[data-fx]') === el;
      });
    };
    var stage = own('[data-fxstage]')[0];
    var items = own('[data-fxi]');
    var caps = own('[data-fxc]');
    var dots = own('[data-fxd]');
    var keys = own('[data-fxk]');
    var bars = own('[data-fxbar]');
    var dark = el.dataset.tone === 'dark';
    var spread = Number(el.dataset.spread || 16);
    var radius = Number(el.dataset.radius || 1200);
    var slat = el.dataset.slat || '84px';

    var f = {
      el: el, mode: mode, items: items, i: 0, t: 0, hover: false,
      every: Number(opts.interval || el.dataset.every || 4400)
    };
    if (!items.length) return f;

    f.paint = function () {
      var n = items.length;
      items.forEach(function (it, j) {
        var p = j - f.i;
        if (p > n / 2) p -= n;
        if (p < -n / 2) p += n;
        var a = Math.abs(p);

        if (mode === 'flow') {
          var s = a === 0 ? 1 : a === 1 ? 0.86 : 0.74;
          it.style.transform = 'translateX(' + (p * 54) + '%) translateZ(' + (-a * 110) + 'px) rotateY(' + (p * -11) + 'deg) scale(' + s + ')';
          it.style.opacity = a === 0 ? '1' : a === 1 ? '0.4' : '0';
          it.style.filter = a === 0 ? 'none' : 'blur(' + Math.min(a * 3.5, 8) + 'px)';
          it.style.zIndex = String(20 - a);
          it.style.visibility = a <= 2 ? 'visible' : 'hidden';
          it.style.pointerEvents = a <= 1 ? 'auto' : 'none';
        } else if (mode === 'arc') {
          var ang = p * spread;
          var rad = ang * Math.PI / 180;
          var x = Math.sin(rad) * radius;
          var y = (1 - Math.cos(rad)) * radius;
          var sc = a === 0 ? 1.18 : Math.max(0.62, 1 - a * 0.07);
          it.style.transform = 'translate(-50%,0) translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) rotate(' + ang.toFixed(2) + 'deg) scale(' + sc.toFixed(3) + ')';
          it.style.opacity = a > 3 ? '0' : String((1 - a * 0.17).toFixed(2));
          it.style.filter = a <= 1 ? 'none' : 'blur(' + ((a - 1) * 1.6).toFixed(1) + 'px)';
          it.style.zIndex = String(20 - a);
        } else {
          var on = j === f.i;
          it.style.flexGrow = on ? '1' : '0';
          it.style.flexBasis = on ? '0px' : slat;
          var open = it.querySelector('[data-fxopen]');
          if (open) {
            open.style.opacity = on ? '1' : '0';
            open.style.transform = on ? 'none' : 'translateY(16px)';
          }
          var tab = it.querySelector('[data-fxslat]');
          if (tab) tab.style.opacity = on ? '0' : '1';
          var im = it.querySelector('img');
          if (im) im.style.filter = on ? 'none' : 'grayscale(.35) brightness(.7)';
        }
      });

      if (caps.length) {
        var raw = items[f.i].dataset.cap;
        var key = raw == null ? f.i : Number(raw);
        caps.forEach(function (c, k) {
          var on = k === key;
          c.style.opacity = on ? '1' : '0';
          c.style.transform = on ? 'none' : 'translateY(18px)';
          c.style.pointerEvents = on ? 'auto' : 'none';
        });
      }

      dots.forEach(function (d, j) {
        var on = j === f.i;
        d.style.background = on ? (dark ? '#ffffff' : 'var(--accent)') : 'transparent';
        d.style.borderColor = on ? (dark ? '#ffffff' : 'var(--accent)') : (dark ? 'rgba(255,255,255,.3)' : 'var(--line)');
        d.style.transform = on ? 'scale(1.4)' : 'none';
      });
      keys.forEach(function (k) {
        k.textContent = String(f.i + 1).padStart(2, '0') + ' / ' + String(items.length).padStart(2, '0');
      });
      bars.forEach(function (b) { b.style.width = ((f.i + 1) / items.length * 100).toFixed(1) + '%'; });
    };

    f.go = function (n) {
      var L = items.length;
      f.i = ((n % L) + L) % L;
      f.t = 0;
      f.paint();
    };

    own('[data-fxp]').forEach(function (b) { b.addEventListener('click', function () { f.go(f.i - 1); }); });
    own('[data-fxn]').forEach(function (b) { b.addEventListener('click', function () { f.go(f.i + 1); }); });
    dots.forEach(function (d, j) { d.addEventListener('click', function () { f.go(j); }); });
    items.forEach(function (it, j) {
      it.addEventListener('click', function () { f.go(j); });
      if (mode === 'squeeze') it.addEventListener('mouseenter', function () { f.go(j); });
    });

    el.addEventListener('pointerenter', function () { f.hover = true; });
    el.addEventListener('pointerleave', function () { f.hover = false; });
    el.addEventListener('focusin', function () { f.hover = true; });
    el.addEventListener('focusout', function () { f.hover = false; });

    /* Glissement maintenu : la scène suit le doigt, puis se cale sur la vue suivante. */
    if (stage && mode !== 'squeeze') {
      var sx = 0, dragging = false;
      stage.addEventListener('pointerdown', function (e) {
        dragging = true; sx = e.clientX;
        stage.style.transition = 'none';
        stage.style.cursor = 'grabbing';
        if (stage.setPointerCapture) stage.setPointerCapture(e.pointerId);
      });
      stage.addEventListener('pointermove', function (e) {
        if (!dragging) return;
        stage.style.transform = 'translateX(' + ((e.clientX - sx) * 0.28).toFixed(1) + 'px)';
      });
      var release = function (e) {
        if (!dragging) return;
        dragging = false;
        var dx = e.clientX - sx;
        stage.style.transition = 'transform .5s cubic-bezier(.22,.9,.3,1)';
        stage.style.transform = 'none';
        stage.style.cursor = 'grab';
        if (Math.abs(dx) > 46) f.go(f.i + (dx < 0 ? 1 : -1));
      };
      stage.addEventListener('pointerup', release);
      stage.addEventListener('pointercancel', release);
      stage.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') { e.preventDefault(); f.go(f.i + 1); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); f.go(f.i - 1); }
      });
    }

    f.paint();
    return f;
  }

  function tick() {
    instances = instances.filter(function (f) { return document.contains(f.el); });
    if (document.hidden || reduced()) return;
    instances.forEach(function (f) {
      if (f.hover || !f.items || f.items.length < 2 || f.autoplay === false) return;
      var r = f.el.getBoundingClientRect();
      if (r.bottom < 80 || r.top > window.innerHeight - 80) return;
      f.t += TICK;
      if (f.t >= f.every) f.go(f.i + 1);
    });
  }

  /* init(racine, options)
     options : { autoplay: true, interval: null, revealOnScroll: true }
     Renvoie une fonction de nettoyage, à appeler au démontage (React : useEffect). */
  function init(root, opts) {
    root = root || document;
    opts = opts || {};
    initReveals(root, opts);
    var mine = [];
    root.querySelectorAll('[data-fx]').forEach(function (el) {
      if (el.__fx) return;
      el.__fx = 1;
      var f = build(el, opts);
      f.autoplay = opts.autoplay !== false;
      instances.push(f);
      mine.push(f);
    });
    if (!timer) timer = setInterval(tick, TICK);
    return function destroy() {
      mine.forEach(function (f) { f.el.__fx = 0; });
      instances = instances.filter(function (f) { return mine.indexOf(f) === -1; });
    };
  }

  global.TWVCarousels = { init: init };
})(window);
