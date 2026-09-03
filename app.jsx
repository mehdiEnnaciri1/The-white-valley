/* App — compilé depuis Maison Zenith.html */
const { useState, useEffect } = React;

function App() {
  const [splash,    setSplash]  = useState(true);
  const [theme,     setTheme]   = useState(window.TWEAK_DEFAULTS.theme);
  const [heroV,     setHeroV]   = useState(window.TWEAK_DEFAULTS.heroVariant);
  const [editMode,  setEdit]    = useState(false);
  const [season,    setSeason]  = useState('ete');
  const [lang,      setLang]    = useState('fr');

  /* Audit 28/08 · point 23 : le moteur branché ici était celui d'un autre établissement.
     openBooking() (components.jsx) ouvre le moteur The White Valley dès que son URL est
     renseignée, et bascule sur l'e-mail de réservation tant qu'elle ne l'est pas. */
  const handleBooking = () => openBooking(lang);

  useEffect(() => { document.body.dataset.theme  = theme;  }, [theme]);
  useEffect(() => { document.body.dataset.season = season; }, [season]);
  /* La langue du document suit le sélecteur FR/EN (lecteurs d'écran, moteurs, césure). */
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode')   setEdit(true);
      if (d.type === '__deactivate_edit_mode') setEdit(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const persist  = (edits) => window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
  const onTheme  = (t) => { setTheme(t); persist({ theme: t }); };
  const onHero   = (v) => { setHeroV(v); persist({ heroVariant: v }); };

  return (
    <>
      {splash && <SplashScreen onDone={() => setSplash(false)} />}
      <Nav onBook={handleBooking} season={season} onSeason={setSeason} lang={lang} onLang={setLang} />
      <Hero variant={heroV} season={season} lang={lang} onBook={handleBooking} />
      <div className="bb-wrap"><BookingBar lang={lang} /></div>
      <Reperes lang={lang} />
      <Intro lang={lang} />
      <Rooms onBook={handleBooking} lang={lang} />
      <Saisons lang={lang} onBook={handleBooking} />
      <Experiences lang={lang} />
      <Destinations lang={lang} season={season} />
      <Newsletter lang={lang} />
      <DernierAppel lang={lang} onBook={handleBooking} />
      <Footer lang={lang} season={season} />

      {editMode && (
        <div className="tw">
          <div className="tw__h"><em>Tweaks</em><span>WHITE VALLEY</span></div>
          <div className="tw__group">
            <span className="tw__lbl">Palette</span>
            <div className="tw__opts">
              <button className={`tw__opt ${theme==='dark-brass'?'is-active':''}`}  onClick={() => onTheme('dark-brass')}>Dark · Laiton</button>
              <button className={`tw__opt ${theme==='light-brass'?'is-active':''}`} onClick={() => onTheme('light-brass')}>Ivoire · Laiton</button>
              <button className={`tw__opt ${theme==='dark-sage'?'is-active':''}`}   onClick={() => onTheme('dark-sage')}>Dark · Sauge</button>
              <button className={`tw__opt ${theme==='dark-gold'?'is-active':''}`}   onClick={() => onTheme('dark-gold')}>Dark · Or (v0)</button>
            </div>
          </div>
          <div className="tw__group">
            <span className="tw__lbl">Hero</span>
            <div className="tw__opts">
              <button className={`tw__opt ${heroV==='split'?'is-active':''}`} onClick={() => onHero('split')}>Éditorial · 2 col</button>
              <button className={`tw__opt ${heroV==='full'?'is-active':''}`}  onClick={() => onHero('full')}>Cinéma · plein écran</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
