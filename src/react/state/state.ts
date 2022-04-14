import {postsType, profileInfoTypes} from '../../components/nav/profile/Profile';
import {v1} from 'uuid';
import {messagesTypes} from '../../components/nav/messages/Messages';


export type stateType = {
    forProfilePage: ProfilePageType
    forUserProfile: UserPageType
    forMessagesPages: MessagesPageType
}
type ProfilePageType = {
    posts: Array<postsType>
}
type UserPageType = {
    profileInfo: profileInfoTypes
}
type MessagesPageType = {
    messages: Array<messagesTypes>
}


let state: stateType = {
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
        ]
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
        ]
    }
}

export default state;