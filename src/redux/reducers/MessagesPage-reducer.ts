import React from 'react';
import {v1} from 'uuid';
import {messagesTypes} from '../../components/nav/messages/Messages';
import {ActionsTypes, MessagesPageType} from '../state/state';




export const MessagesPageReducer = (state: MessagesPageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'SEND_MESSAGE_BUTTON':{
            const newMessage: messagesTypes = {
                id: v1(),
                message: state.newMessageText
            }
            let stateCopy = {...state,newMessageText:'',messages:[...state.messages,newMessage]}
            return stateCopy;
        }
        case'SEND_CHANGE_MESSAGE_BUTTON': {
            let stateCopy = {...state,newMessageText: action.NewText}
            return stateCopy;
        }
        default:
            return state;
    }
}

export const SendMessageButtonAC = () => {
    return {
        type: 'SEND_MESSAGE_BUTTON'
    } as const
}
export const SendChangeMessageButtonAC = (NewText: string) => {
    return {
        type: 'SEND_CHANGE_MESSAGE_BUTTON',
        NewText
    } as const
}



