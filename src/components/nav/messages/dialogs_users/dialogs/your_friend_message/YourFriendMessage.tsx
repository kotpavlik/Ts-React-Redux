import React from "react";
import s from "./YourFriendMessage.module.css";
import logoYourfriend from "../../../../../assets/logo192.png";

const YourFriendMessage = () => {
  return (
    <div className={s.messages_wrapper}>
      <div className={s.user_dialog_logo}>
        <img src={logoYourfriend} alt="" />
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

export default YourFriendMessage;
