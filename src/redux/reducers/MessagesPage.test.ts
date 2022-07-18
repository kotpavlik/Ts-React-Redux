import {v1} from 'uuid';
import {
    initialStateType,
    MessagesPageReducer,
    SendMessageButtonAC
} from './MessagesPage-reducer'

test('correct send messages', () => {
    const initialState: initialStateType = {
        messages: [
            {id: v1(), message: 'Hi, my dear hackers'},
            {id: v1(), message: 'How are you? My friend'},
            {id: v1(), message: 'Yo Yo Yo. What\'s up?'},
            {id: v1(), message: 'My niga Igor Anufriev'},
            {id: v1(), message: 'Have a good hacking'},
        ]
    }

    const action = SendMessageButtonAC('hello')
    const newState = MessagesPageReducer(initialState, action)

    expect(initialState.messages.length).not.toBe(newState.messages.length)
    expect(newState.messages.length === 6).toBe(true)
})
