import React from "react";
import s from "./Burger.module.css";

type BurgerType = {
  setActive: Function;
  active: boolean;
};

const Burger = (props: BurgerType) => {
  return (
    <div className={s.burgerBtn} onClick={() => props.setActive(!props.active)}>
      <span></span>
    </div>
  );
};

export default Burger;
