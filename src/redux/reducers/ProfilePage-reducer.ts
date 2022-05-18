import {v1} from 'uuid';

export type initialStateType = {
    posts:Array<postsType>
    NewPostText:string
}
export type postsType = {
    id: string
    message: string
    likesCount: number
    profilePhoto: string
}
const initialState:initialStateType = {
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
}

export type ProfileActionsTypes =
ReturnType<typeof AddPostAC> |
ReturnType<typeof AddChangePostAC>

export const ProfilePageReducer = (state:initialStateType = initialState,action:ProfileActionsTypes):initialStateType => {
    switch (action.type) {
        case 'ADD_POST':{
            const NewPost: postsType = {
                id: v1(),
                message: state.NewPostText,
                likesCount: 0,
                profilePhoto: '/static/media/profilePhoto.5ca85af7df747cdacde9.jpeg'
            }
            return  {...state,NewPostText:'',posts:[NewPost,...state.posts]}

            }
        case 'ADD_CHANGE_POST' :{
            return {...state,NewPostText:action.text}

        }
        default:
            return state;
    }
}

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

