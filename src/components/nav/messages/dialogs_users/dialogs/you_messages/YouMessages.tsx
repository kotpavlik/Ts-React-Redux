import React from "react";
import s from "./YouMessages.module.css";
import logo_companion from "../../../../../assets/profilePhoto.jpeg";
import {propsMessagesTypes} from '../../../Messages';

type YourMessagePropsType = {
    message: string
}
const YouMessages = (props:YourMessagePropsType) => {
  return (
    <div className={s.messages_wrapper}>
      <div className={s.user_dialog_logo}>
        <img src={logo_companion} alt="" />
      </div>
      <div className={s.user_dialog_name_last_massage}>
        <div className={s.user_dialog_name_}>
          <h3>Kot Pavlik</h3>
        </div>
        <div className={s.user_dialog_massage}>
            {props.message}
        </div>
      </div>
    </div>
  );
};

export default YouMessages;
