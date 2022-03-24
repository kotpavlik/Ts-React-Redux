import React from "react";
import s from "./Header.module.css";
import logo from "./../assets/logo192.png";

const Header = () => {
  return (
    <div className={s.header}>
      <h1>
        Welc
        <img src={logo} className={s.logo} alt="logo is late" />
        me
      </h1>
    </div>
  );
};

export default Header;
