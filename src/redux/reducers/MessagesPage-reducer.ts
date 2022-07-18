import {v1} from 'uuid';

export type initialStateType = {
    messages:Array<messagesTypes>
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
    ]
}


export const MessagesPageReducer = (state: initialStateType = initialState, action: MessagesActionsTypes):initialStateType => {
    switch (action.type) {
        case 'SEND_MESSAGE_BUTTON':{
            const newMessage: messagesTypes = {
                id: v1(),
                message: action.text
            }
            return {...state,messages:[...state.messages,newMessage]}

        }
        default:
            return state;
    }
}

export type MessagesActionsTypes = SendMessageButtonACType


type SendMessageButtonACType = ReturnType<typeof SendMessageButtonAC>
export const SendMessageButtonAC = (text:string) => {
    return {
        type: 'SEND_MESSAGE_BUTTON',
        text
    } as const
}




