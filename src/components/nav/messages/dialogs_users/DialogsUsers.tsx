import React from 'react';
import s from './DialogsUsers.module.css';
import {DialogUsersContainer} from './users_in_dialog/UsersInDialogsContainer';
import MessagesCompanion from './dialogs/MessagesCompanion';

const DialogUsersContainerMemo = React.memo(DialogUsersContainer)
const MessagesCompanionMemo = React.memo(MessagesCompanion)

const DialogsUsers = () => {
    return (
        <div className={s.dialogs_users_wrapper}>
            <div className={s.users_in_dialog}>
                <DialogUsersContainerMemo/>
            </div>
            <div className={s.dialogs}>
               <MessagesCompanionMemo/>
            </div>
        </div>
    );
};

export default DialogsUsers;
