import React from "react";
import DialogsUsersMessage from "./dialogs_users_message/DialogsUsersMessage";
import s from "./UsersInDialogs.module.css";

const UsersInDialogs = () => {
  return (
    <div className={s.users_dialogs}>
      <div className={s.searching}>
        <div className={s.flexbox}>
          <div className={s.search}>
            <div>
              <input type="text" placeholder="Search . . ." required />
            </div>
          </div>
        </div>
      </div>
      <div className={s.wrapper_DialogsUsersMessage}>
        <DialogsUsersMessage />
        <DialogsUsersMessage />
        <DialogsUsersMessage />
        <DialogsUsersMessage />
        <DialogsUsersMessage />
        <DialogsUsersMessage />
        <DialogsUsersMessage />
        <DialogsUsersMessage />
        <DialogsUsersMessage />
      </div>
    </div>
  );
};

export default UsersInDialogs;
