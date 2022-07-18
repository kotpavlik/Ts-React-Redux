import React from "react";
import s from "./Button.module.css";


type ButtonPropsType ={
    name: string
    onClickHandler?: () => void
    disabled?: boolean
    type?:"button" | "submit" | "reset" | undefined

}

const Button = (props:ButtonPropsType) => {
    debugger
  return (
    <div className={s.button_wrapper}>
      <button disabled={props.disabled} className={s.button} onClick={props.onClickHandler}> {props.name} </button>
    </div>
  );
};

export default Button;
