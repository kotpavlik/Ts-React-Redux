import React from 'react';
import s from './DialogsUsers.module.css';
import {MessagesCompanionContainer} from './dialogs/your_friend_message/MessagesCompanionContainer';
import {DialogUsersContainer} from './users_in_dialog/UsersInDialogsContainer';

const DialogsUsers = () => {
    return (
        <div className={s.dialogs_users_wrapper}>
            <div className={s.users_in_dialog}>
                <DialogUsersContainer/>
            </div>
            <div className={s.dialogs}>
               <MessagesCompanionContainer/>
            </div>
        </div>
    );
};

export default DialogsUsers;
