import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import s from "./App.module.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Content from "./components/nav/content/Content";
import NavMenu from "./components/nav/navbar/menu/NavMenu";

const App = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className={s.globalWraper}>
      <div className={s.App}>
        <header className={s.headerWraper}>
          <Header setMenuActive={setMenuActive} menuActive={menuActive} />
        </header>
        <nav className={s.nawWraper}>
          <Routes>
            <Route path="/" element={<Content />} />
          </Routes>
          <NavMenu active={menuActive} setMenuActive={setMenuActive} />
        </nav>
        <footer className={s.footerWraper}>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default App;
