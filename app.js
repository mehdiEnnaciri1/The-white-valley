/* App — compilé depuis Maison Zenith.html */
function App() {
  const [splash, setSplash] = useState(true);
  const [theme, setTheme] = useState(window.TWEAK_DEFAULTS.theme);
  const [heroV, setHeroV] = useState(window.TWEAK_DEFAULTS.heroVariant);
  const [editMode, setEdit] = useState(false);
  const [season, setSeason] = useState('ete');
  const [lang, setLang] = useState('fr');
  const openBooking = () => {
    const url = lang === 'en' ? 'https://le-zenith-hotel-spa.hotelrunner.com/bv3/search?currency=MAD&locale=en-US' : 'https://le-zenith-hotel-spa.hotelrunner.com/bv3/search?currency=MAD&locale=fr-FR';
    window.open(url, '_blank', 'noopener');
  };
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);
  useEffect(() => {
    document.body.dataset.season = season;
  }, [season]);
  useEffect(() => {
    const onMsg = e => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setEdit(true);
      if (d.type === '__deactivate_edit_mode') setEdit(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const persist = edits => window.parent.postMessage({
    type: '__edit_mode_set_keys',
    edits
  }, '*');
  const onTheme = t => {
    setTheme(t);
    persist({
      theme: t
    });
  };
  const onHero = v => {
    setHeroV(v);
    persist({
      heroVariant: v
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, splash && /*#__PURE__*/React.createElement(SplashScreen, {
    onDone: () => setSplash(false)
  }), /*#__PURE__*/React.createElement(Nav, {
    onBook: openBooking,
    season: season,
    onSeason: setSeason,
    lang: lang,
    onLang: setLang
  }), /*#__PURE__*/React.createElement(Hero, {
    variant: heroV,
    season: season,
    lang: lang
  }), /*#__PURE__*/React.createElement("div", {
    className: "bb-wrap"
  }, /*#__PURE__*/React.createElement(BookingBar, {
    lang: lang
  })), /*#__PURE__*/React.createElement(Intro, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Marquee, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Rooms, {
    onBook: openBooking,
    lang: lang
  }), /*#__PURE__*/React.createElement(Experiences, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Instagram, null), /*#__PURE__*/React.createElement(Destinations, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Editorial, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Newsletter, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Footer, {
    lang: lang,
    season: season
  }), editMode && /*#__PURE__*/React.createElement("div", {
    className: "tw"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw__h"
  }, /*#__PURE__*/React.createElement("em", null, "Tweaks"), /*#__PURE__*/React.createElement("span", null, "Z\xC9NITH")), /*#__PURE__*/React.createElement("div", {
    className: "tw__group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tw__lbl"
  }, "Palette"), /*#__PURE__*/React.createElement("div", {
    className: "tw__opts"
  }, /*#__PURE__*/React.createElement("button", {
    className: `tw__opt ${theme === 'dark-brass' ? 'is-active' : ''}`,
    onClick: () => onTheme('dark-brass')
  }, "Dark \xB7 Laiton"), /*#__PURE__*/React.createElement("button", {
    className: `tw__opt ${theme === 'light-brass' ? 'is-active' : ''}`,
    onClick: () => onTheme('light-brass')
  }, "Ivoire \xB7 Laiton"), /*#__PURE__*/React.createElement("button", {
    className: `tw__opt ${theme === 'dark-sage' ? 'is-active' : ''}`,
    onClick: () => onTheme('dark-sage')
  }, "Dark \xB7 Sauge"), /*#__PURE__*/React.createElement("button", {
    className: `tw__opt ${theme === 'dark-gold' ? 'is-active' : ''}`,
    onClick: () => onTheme('dark-gold')
  }, "Dark \xB7 Or (v0)"))), /*#__PURE__*/React.createElement("div", {
    className: "tw__group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tw__lbl"
  }, "Hero"), /*#__PURE__*/React.createElement("div", {
    className: "tw__opts"
  }, /*#__PURE__*/React.createElement("button", {
    className: `tw__opt ${heroV === 'split' ? 'is-active' : ''}`,
    onClick: () => onHero('split')
  }, "\xC9ditorial \xB7 2 col"), /*#__PURE__*/React.createElement("button", {
    className: `tw__opt ${heroV === 'full' ? 'is-active' : ''}`,
    onClick: () => onHero('full')
  }, "Cin\xE9ma \xB7 plein \xE9cran")))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
