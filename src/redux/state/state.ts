
import react from 'react'
// import { profileInfoTypes} from '../../components/nav/profile/Profile';
// import {v1} from 'uuid';
// import {
//     MessagesPageReducer,
//     messagesTypes,
//     SendChangeMessageButtonAC,
//     SendMessageButtonAC
// } from '../reducers/MessagesPage-reducer';
// import {AddChangePostAC, AddPostAC, postsType, ProfilePageReducer} from '../reducers/ProfilePage-reducer';
// import {UserProfileReducer} from '../reducers/UserProfile-reducer';
// import {RootReducerType} from '../store/redux-store';
//
//
// export type storeType = {
//     _state: stateType
//     _onChange: () => void
//     subscribe: (callback: () => void) => void
//     getState: () => stateType
//     dispatch: (action: RootReducerType) => void
// }
//
// export type ActionsTypes =
//     ReturnType<typeof SendMessageButtonAC> |
//     ReturnType<typeof SendChangeMessageButtonAC> |
//     ReturnType<typeof AddPostAC> |
//     ReturnType<typeof AddChangePostAC>
//
//
// export type stateType = {
//     forProfilePage: ProfilePageType
//     forUserProfile: UserPageType
//     forMessagesPages: MessagesPageType
// }
// export type ProfilePageType = {
//     posts: Array<postsType>
//     NewPostText: string
// }
// export type UserPageType = {
//     profileInfo: profileInfoTypes
// }
// export type MessagesPageType = {
//     messages: Array<messagesTypes>
//     newMessageText: string
// }
//
//
// const store: storeType = {
//     _state: {
//         forProfilePage: {
//             posts: [
//                 {
//                     id: v1(),
//                     message: 'Hi, how are you?',
//                     likesCount: 12,
//                     profilePhoto: '/static/media/profilePhoto.5ca85af7df747cdacde9.jpeg'
//                 },
//                 {
//                     id: v1(),
//                     message: 'It\'s my first post',
//                     likesCount: 11,
//                     profilePhoto: '/static/media/profilePhoto1.d5cde56cdb4a33410ead.jpg'
//                 },
//                 {
//                     id: v1(),
//                     message: 'Bla-bla-bla',
//                     likesCount: 10,
//                     profilePhoto: '/static/media/profilePhoto2.bf50647337338a335ccd.jpeg'
//                 },
//                 {
//                     id: v1(),
//                     message: 'Hi, how are you?',
//                     likesCount: 12,
//                     profilePhoto: '/static/media/profilePhoto3.89ba50aeb7cf370e9c58.jpg'
//                 },
//             ],
//             NewPostText: ''
//         },
//         forUserProfile: {
//             profileInfo: {
//                 userId: v1(),
//                 aboutMe: 'Hi, I am a student',
//                 lookingForAJob: false,
//                 lookingForAJobDescription: 'i\'m searching for a job',
//                 fullName: 'Kot Pavlik',
//                 contacts: {
//                     github: 'https://github.com/kotpavlik?tab=repositories',
//                     vk: 'https://vk.com/etotcosmos',
//                     facebook: '',
//                     instagram: 'https://www.instagram.com/_igor_anufriev/?hl=ru',
//                     twitter: 'https://twitter.com/home',
//                     website: 'https://pinkpunk.by/ru/',
//                     youtube: '',
//                     mainLink: 'https://www.linkedin.com/feed'
//                 },
//                 photos: {
//                     small: '/static/media/profilePhoto.5ca85af7df747cdacde9.jpeg',
//                     large: '/static/media/profilePhoto.5ca85af7df747cdacde9.jpeg'
//                 }
//             }
//         },
//         forMessagesPages: {
//             messages: [
//                 {id: v1(), message: 'Hi, my dear hackers'},
//                 {id: v1(), message: 'How are you? My friend'},
//                 {id: v1(), message: 'Yo Yo Yo. What\'s up?'},
//                 {id: v1(), message: 'My niga Igor Anufriev'},
//                 {id: v1(), message: 'Have a good hacking'},
//             ],
//             newMessageText: ''
//         }
//     },
//
//     _onChange() {
//         console.log('state changed')
//     },
//     subscribe(callback) {
//         this._onChange = callback;
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action) {
//         this._state.forProfilePage = ProfilePageReducer(this._state.forProfilePage, action);
//         this._state.forUserProfile = UserProfileReducer(this._state.forUserProfile, action);
//         this._state.forMessagesPages = MessagesPageReducer(this._state.forMessagesPages, action)
//         this._onChange()
//     }
//
//
// }
//
//
// export default store;