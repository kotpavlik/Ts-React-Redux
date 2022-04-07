import React, {FC} from 'react';
import s from "./DialogsUsersMessage.module.css";
import dialog_logo from "../../../../../assets/profilePhoto.jpeg";

type DialogsUsersMessagePropsType = {
    message: string
    key:string
}

const DialogsUsersMessage:FC<DialogsUsersMessagePropsType> = (props) => {
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
            {props.message}
          consectetur adipisicing elit. Placeat, quaerat!
        </div>
      </div>
    </div>
  );
};

export default DialogsUsersMessage;
