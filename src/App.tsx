import React from "react";

import s from "./App.module.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Content from "./components/nav/content/Content";
import NavBar from "./components/nav/navbar/NavBar";

const App = () => {
  return (
    <div className={s.globalWraper}>
      <div className={s.App}>
        <header className={s.headerWraper}>
          <Header />
        </header>
        <nav className={s.nawWraper}>
          <NavBar />
          <Content />
        </nav>
        <footer className={s.footerWraper}>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default App;
