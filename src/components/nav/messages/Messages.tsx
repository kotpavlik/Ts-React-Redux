import React from 'react';
import DialogsUsers from './dialogs_users/DialogsUsers';
import s from './Messages.module.css';
import {profileInfoTypes} from '../profile/Profile';
import {ActionsTypes} from '../../../redux/state/state';

export type propsMessagesTypes = {
    profileInfo: profileInfoTypes
    messages: Array<messagesTypes>
    newMessageText?: string
    sendMessageButton: () => void
    sendChangeMessageButton: (NewText:string) => void
    dispatch: (action:ActionsTypes) => void
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
                    newMessageText={props.newMessageText}
                    sendMessageButton={props.sendMessageButton}
                    sendChangeMessageButton={props.sendChangeMessageButton}
                    dispatch ={props.dispatch}
                />
            </div>
        </div>
    );
};

export default Messages;
