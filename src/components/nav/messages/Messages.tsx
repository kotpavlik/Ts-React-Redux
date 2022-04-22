import React from 'react';
import DialogsUsers from './dialogs_users/DialogsUsers';
import s from './Messages.module.css';
import {profileInfoTypes} from '../profile/Profile';

export type propsMessagesTypes = {
    profileInfo: profileInfoTypes
    messages: Array<messagesTypes>
    newMessageText?: string
}
export type messagesTypes = {
    id: string
    message: string
}


const Messages: React.FC<propsMessagesTypes> = (props) => {

    return (
        <div className={s.all_messages_wrapper}>
            <div className={s.messagesWrap}>
                <DialogsUsers
                    profileInfo={props.profileInfo}
                    messages={props.messages}
                    newMessageText={props.newMessageText}/>
            </div>
        </div>
    );
};

export default Messages;
