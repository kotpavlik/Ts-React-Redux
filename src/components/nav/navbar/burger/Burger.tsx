import React from "react";
import s from "./Burger.module.css";

const Burger = (props: any) => {
  return (
    <div className={s.burgerBtn} onClick={() => props.setActive(!props.active)}>
      <span></span>
    </div>
  );
};

export default Burger;
