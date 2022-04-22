import React from 'react';
import MessagesCompanion from './dialogs/MessagesCompanion';
import s from './DialogsUsers.module.css';
import UsersInDialogs from './users_in_dialog/UsersInDialogs';
import {propsMessagesTypes} from '../Messages';

const DialogsUsers: React.FC<propsMessagesTypes> = (props) => {
    return (
        <div className={s.dialogs_users_wrapper}>
            <div className={s.users_in_dialog}>
                <UsersInDialogs profileInfo={props.profileInfo} messages={props.messages}/>
            </div>
            <div className={s.dialogs}>
                <MessagesCompanion profileInfo={props.profileInfo}
                                   messages={props.messages}
                                   newMessageText={props.newMessageText}/>
            </div>
        </div>
    );
};

export default DialogsUsers;
