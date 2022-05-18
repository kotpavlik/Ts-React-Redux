import {v1} from 'uuid';

export type initialStateType = {
    messages:Array<messagesTypes>
    newMessageText:string
}
export type messagesTypes = {
    id: string
    message: string
}
 const initialState:initialStateType = {
    messages: [
        {id: v1(), message: 'Hi, my dear hackers'},
        {id: v1(), message: 'How are you? My friend'},
        {id: v1(), message: 'Yo Yo Yo. What\'s up?'},
        {id: v1(), message: 'My niga Igor Anufriev'},
        {id: v1(), message: 'Have a good hacking'},
    ],
    newMessageText: ''
}


export const MessagesPageReducer = (state: initialStateType = initialState, action: MessagesActionsTypes):initialStateType => {
    switch (action.type) {
        case 'SEND_MESSAGE_BUTTON':{
            const newMessage: messagesTypes = {
                id: v1(),
                message: state.newMessageText
            }
            return {...state,newMessageText:'',messages:[...state.messages,newMessage]}

        }
        case'SEND_CHANGE_MESSAGE_BUTTON': {
            return {...state,newMessageText: action.NewText}

        }
        default:
            return state;
    }
}

export type MessagesActionsTypes =
    ReturnType<typeof SendMessageButtonAC> |
    ReturnType<typeof SendChangeMessageButtonAC>

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



