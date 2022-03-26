import React from "react";
import s from "./Button.module.css";

const Button = () => {
  return (
    <div className={s.button_wrapper}>
      <button className={s.button}> send </button>
    </div>
  );
};

export default Button;
