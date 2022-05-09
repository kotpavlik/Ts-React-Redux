import React from "react";
import s from "./Button.module.css";

type ButtonPropsType ={
    name: string
    onClickHandler: () => void
    disabled?: boolean
}

const Button = (props:ButtonPropsType) => {
  return (
    <div className={s.button_wrapper}>
      <button disabled={props.disabled} className={s.button} onClick={props.onClickHandler}>{props.name}</button>
    </div>
  );
};

export default Button;
