import React from "react";
import s from "./Header.module.css";
import logo from "./../assets/logo192.png";
import Burger from "../nav/navbar/burger/Burger";
import { NavLink } from "react-router-dom";

export type BurgerType = {
  menuActive: boolean;
  setMenuActive: Function;
};

const Header = (props: BurgerType) => {
  return (
    <div className={s.header}>
      <Burger setMenuActive={props.setMenuActive} menuActive={props.menuActive} />

      <h1>
        Welc
        <NavLink to="/">
          <img src={logo} className={s.logo} alt="logo is late" />
        </NavLink>
        me
      </h1>
    </div>
  );
};

export default Header;
