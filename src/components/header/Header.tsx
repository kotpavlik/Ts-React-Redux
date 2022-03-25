import React from "react";
import s from "./Header.module.css";
import logo from "./../assets/logo192.png";
import Burger from "../nav/navbar/burger/Burger";

type BurgerType = {
  menuActive: boolean;
  setMenuActive: Function;
};

const Header = (props: BurgerType) => {
  return (
    <div className={s.header}>
      <Burger setActive={props.setMenuActive} active={props.menuActive} />

      <h1>
        Welc
        <img src={logo} className={s.logo} alt="logo is late" />
        me
      </h1>
    </div>
  );
};

export default Header;
