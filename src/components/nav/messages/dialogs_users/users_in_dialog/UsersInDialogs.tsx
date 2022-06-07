import React from "react";
import DialogsUsersMessage from "./dialogs_users_message/DialogsUsersMessage";
import s from "./UsersInDialogs.module.css";
import {profileInfoTypes} from '../../../profile/Profile';
import {messagesTypes} from '../../../../../redux/reducers/MessagesPage-reducer';

type propsUserDialogsType = {
    messages: Array<messagesTypes>
}

const UsersInDialogs: React.FC<propsUserDialogsType>= (props) => {

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
        {props.messages.map((m)=>{
          return <DialogsUsersMessage message={m.message} key={m.id}/>
        })}
      </div>
    </div>
  );
};

export default UsersInDialogs;
