import {ActionsTypes, UserPageType} from '../state/state';
import {v1} from 'uuid';

type initialStateType = {
    profileInfo: profileInfoTypes
}
 type profileInfoTypes = {
    userId: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
    photos: photosType

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
}

export const UserProfileReducer = (state: UserPageType = initialState, action: ActionsTypes):UserPageType => {
    return state;
};

