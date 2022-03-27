import React from "react";
import s from "./DialogsUsersMessage.module.css";
import dialog_logo from "../../../../../assets/profilePhoto.jpeg";

const DialogsUsersMessage = () => {
  return (
    <div className={s.dialog_friend}>
      <div className={s.user_dialog_logo}>
        <img src={dialog_logo} alt="" />
      </div>
      <div className={s.user_dialog_name_last_massage}>
        <div className={s.user_dialog_name_}>
          <h3>Kot Pavlik</h3>
        </div>
        <div className={s.user_dialog_massage}>
          hello how are you my dear friend and Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Placeat, quaerat!
        </div>
      </div>
    </div>
  );
};

export default DialogsUsersMessage;
