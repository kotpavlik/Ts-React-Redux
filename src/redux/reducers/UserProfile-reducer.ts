import {AppDispatch} from '../store/redux-store';
import {profileAPI} from '../../api/api';


type initialStateType = {
    profileInfo: profileType
}
export type profileType = {
    aboutMe:string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
    photos:photosType

}
 type contactsType = {
    github: string | undefined
    vk: string | undefined
    facebook: string | undefined
    instagram: string | undefined
    twitter: string | undefined
    website: string | undefined
    youtube: string | undefined
    mainLink: string | undefined
}
 type photosType = {
    small: string | undefined
    large: string | undefined
}

const initialState:initialStateType = {
    profileInfo: {
        userId: 20,
        aboutMe: 'Hi, I am a student',
        lookingForAJob: false,
        lookingForAJobDescription: 'i\'m searching for a job',
        fullName: 'Igor Anufriev',
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
}

export type userProfileACType = SetProfileACType | SetContactsACType

export const UserProfileReducer = (state: initialStateType = initialState, action:userProfileACType):initialStateType => {
    switch(action.type) {
        case 'SET_PROFILE' : {
            debugger
            return {...state,profileInfo:action.profile}
        }
        default:
            return state;
    }
};

export type SetProfileACType = ReturnType<typeof SetProfileAC>
export const SetProfileAC = (profile:profileType) => {
    debugger
    return {
        type: 'SET_PROFILE',
        profile
    } as const
}
export type SetContactsACType = ReturnType<typeof setContacts>
export const setContacts = (contacts:string) => {
    return{
        type: 'SET_USER_CONTACTS',
            contacts
    } as const
}


export const getProfileThunk = (userId:number) => {
    return async(dispatch:AppDispatch) => {
        debugger
        let data = await profileAPI.getProfile(userId);
        debugger
            dispatch(SetProfileAC(data))}
}

