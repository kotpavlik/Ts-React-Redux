import React from 'react';
import DialogsUsers from './dialogs_users/DialogsUsers';
import s from './Messages.module.css';
import {profileInfoTypes} from '../profile/Profile';

export type propsMessagesTypes = {
    profileInfo: profileInfoTypes
    messages: Array<messagesTypes>
    newMessageText?: string
    SendMessageButtonAC:() => void
    SendChangeMessageButtonAC:(NewText: string) => void
}
export type messagesTypes = {
    id: string
    message: string
}


const Messages = () => {

    return (
        <div className={s.all_messages_wrapper}>
            <div className={s.messagesWrap}>
                <DialogsUsers/>
            </div>
        </div>
    );
};

export default Messages;
