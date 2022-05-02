import {postsType, profileInfoTypes} from '../../components/nav/profile/Profile';
import {v1} from 'uuid';
import {messagesTypes} from '../../components/nav/messages/Messages';


export type storeType = {
    _state: stateType
    addPost: () => void
    addChangePost: (text: string) => void
    sendMessageButton: () => void
    sendChangeMessageButton: (NewText: string) => void
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => stateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof AddPostAC> |
    ReturnType<typeof AddChangePostAC> |
    ReturnType<typeof  SendMessageButtonAC> |
    ReturnType<typeof SendChangeMessageButtonAC>


export const AddPostAC = () => {
    return {
        type: 'ADD_POST'
    } as const
}
export const AddChangePostAC = (text:string) => {
    return {
        type: 'ADD_CHANGE_POST',
        text
    } as const
}
export const SendMessageButtonAC = () => {
   return {
       type: 'SEND_MESSAGE_BUTTON'
   } as const
}
export const  SendChangeMessageButtonAC = (NewText:string) => {
    return {
        type:'SEND_CHANGE_MESSAGE_BUTTON',
        NewText
    } as const
}

export type stateType = {
    forProfilePage: ProfilePageType
    forUserProfile: UserPageType
    forMessagesPages: MessagesPageType
}
type ProfilePageType = {
    posts: Array<postsType>
    NewPostText: string
}
type UserPageType = {
    profileInfo: profileInfoTypes
}
type MessagesPageType = {
    messages: Array<messagesTypes>
    newMessageText: string
}


const store: storeType = {
    _state: {
        forProfilePage: {
            posts: [
                {
                    id: v1(),
                    message: 'Hi, how are you?',
                    likesCount: 12,
                    profilePhoto: '/static/media/profilePhoto.5ca85af7df747cdacde9.jpeg'
                },
                {
                    id: v1(),
                    message: 'It\'s my first post',
                    likesCount: 11,
                    profilePhoto: '/static/media/profilePhoto1.d5cde56cdb4a33410ead.jpg'
                },
                {
                    id: v1(),
                    message: 'Bla-bla-bla',
                    likesCount: 10,
                    profilePhoto: '/static/media/profilePhoto2.bf50647337338a335ccd.jpeg'
                },
                {
                    id: v1(),
                    message: 'Hi, how are you?',
                    likesCount: 12,
                    profilePhoto: '/static/media/profilePhoto3.89ba50aeb7cf370e9c58.jpg'
                },
            ],
            NewPostText: ''
        },
        forUserProfile: {
            profileInfo: {
                userId: v1(),
                aboutMe: 'Hi, I am a student',
                lookingForAJob: false,
                lookingForAJobDescription: 'i\'m searching for a job',
                fullName: 'Kot Pavlik',
                contacts: {
                    github: 'https://github.com/kotpavlik?tab=repositories',
                    vk: 'https://vk.com/etotcosmos',
                    facebook: '',
                    instagram: 'https://www.instagram.com/_igor_anufriev/?hl=ru',
                    twitter: 'https://twitter.com/home',
                    website: 'https://pinkpunk.by/ru/',
                    youtube: '',
                    mainLink: 'https://www.linkedin.com/feed'
                },
                photos: {
                    small: '/static/media/profilePhoto.5ca85af7df747cdacde9.jpeg',
                    large: '/static/media/profilePhoto.5ca85af7df747cdacde9.jpeg'
                }
            }
        },
        forMessagesPages: {
            messages: [
                {id: v1(), message: 'Hi, my dear hackers'},
                {id: v1(), message: 'How are you? My friend'},
                {id: v1(), message: 'Yo Yo Yo. What\'s up?'},
                {id: v1(), message: 'My niga Igor Anufriev'},
                {id: v1(), message: 'Have a good hacking'},
            ],
            newMessageText: ''
        }
    },
    addPost() {
        const NewPost: postsType = {
            id: v1(),
            message: this._state.forProfilePage.NewPostText,
            likesCount: 0,
            profilePhoto: '/static/media/profilePhoto.5ca85af7df747cdacde9.jpeg'
        }
        this._state.forProfilePage.posts.unshift(NewPost)
        this._state.forProfilePage.NewPostText = ''
        this._onChange()
    },
    addChangePost(text: string) {
        this._state.forProfilePage.NewPostText = text;
        this._onChange()
    },
    sendMessageButton() {
        const newMessage: messagesTypes = {
            id: v1(),
            message: this._state.forMessagesPages.newMessageText
        }
        this._state.forMessagesPages.messages.push(newMessage)
        this._state.forMessagesPages.newMessageText = ''
        this._onChange()
    },
    sendChangeMessageButton(NewText: string) {
        this._state.forMessagesPages.newMessageText = NewText;
        this._onChange()
    },
    _onChange() {
        console.log('state changed')
    },
    subscribe(callback) {
        this._onChange = callback;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD_POST') {
            const NewPost: postsType = {
                id: v1(),
                message: this._state.forProfilePage.NewPostText,
                likesCount: 0,
                profilePhoto: '/static/media/profilePhoto.5ca85af7df747cdacde9.jpeg'
            }
            this._state.forProfilePage.posts.unshift(NewPost)
            this._state.forProfilePage.NewPostText = ''
            this._onChange()
        } else if (action.type === 'ADD_CHANGE_POST') {
            this._state.forProfilePage.NewPostText = action.text;
            this._onChange()
        } else if (action.type === 'SEND_MESSAGE_BUTTON') {
            const newMessage: messagesTypes = {
                id: v1(),
                message: this._state.forMessagesPages.newMessageText
            }
            this._state.forMessagesPages.messages.push(newMessage)
            this._state.forMessagesPages.newMessageText = ''
            this._onChange()
        } else if (action.type === 'SEND_CHANGE_MESSAGE_BUTTON') {
            this._state.forMessagesPages.newMessageText = action.NewText;
            this._onChange()
        }
    }

}


export default store;