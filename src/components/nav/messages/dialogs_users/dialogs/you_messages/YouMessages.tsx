import React from "react";
import s from "./YouMessages.module.css";
import logo_companion from "../../../../../assets/profilePhoto.jpeg";

const YouMessages = () => {
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
          voluptate dignissimos esse possimus quas, molestias error minus
          praesentium, atque reiciendis ut. Error libero a aliquam, ducimus nam
          debitis suscipit voluptatibus.
        </div>
      </div>
    </div>
  );
};

export default YouMessages;
