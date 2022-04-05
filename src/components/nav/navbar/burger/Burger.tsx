import React from "react";
import s from "./Burger.module.css";
import {BurgerType} from '../../../header/Header';



const Burger = (props: BurgerType) => {

  const onClickHandler = () => {
    props.setMenuActive(!props.menuActive);
  };

  return (
    <div className={s.burgerBtn} onClick={onClickHandler}>
      <span></span>
    </div>
  );
};

export default Burger;
