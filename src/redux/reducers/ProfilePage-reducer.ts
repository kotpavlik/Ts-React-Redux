import {v1} from 'uuid';


export type initialStateType = {
    posts: Array<postsType>
}

export type postsType = {
    id: string
    message: string
    likesCount: number
    profilePhoto: string
}
const initialState: initialStateType = {
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
    ]
}

export type ProfileActionsTypes = AddPostACType


export const ProfilePageReducer = (state: initialStateType = initialState, action: ProfileActionsTypes): initialStateType => {
    switch (action.type) {
        case 'ADD_POST': {
            const NewPost: postsType = {
                id: v1(),
                message: action.message,
                likesCount: 0,
                profilePhoto: '/static/media/profilePhoto.5ca85af7df747cdacde9.jpeg'
            }
            return {...state, posts: [NewPost, ...state.posts]}
        }
        default:
            return state;
    }
}

export type AddPostACType = ReturnType<typeof AddPostAC>
export const AddPostAC = (message:string) => {
    return {
        type: 'ADD_POST',
        message
    } as const
}






