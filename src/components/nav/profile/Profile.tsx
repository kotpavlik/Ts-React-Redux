import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './profile_info/ProfileInfo';
import ProfilePosts from './profile_posts/ProfilePosts';


import {v1} from 'uuid';

export type postsType = {
    id: string
    message: string
    likesCount: number
    profilePhoto: string
}
export type profileInfoTypes = {
    userId: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
    photos: photosType
}
export type contactsType = {
    github: string | undefined
    vk: string | undefined
    facebook: string | undefined
    instagram: string | undefined
    twitter: string | undefined
    website: string | undefined
    youtube: string | undefined
    mainLink: string | undefined
}
export type photosType = {
    small: string | undefined
    large: string | undefined
}


const Profile = () => {
    const posts = [
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

    const profileInfo: profileInfoTypes = {
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
            small : '/static/media/profilePhoto.5ca85af7df747cdacde9.jpeg',
            large: '/static/media/profilePhoto.5ca85af7df747cdacde9.jpeg'
        }
    }


    return (
        <div className={s.profileWrap}>
            <div className={s.profileWrapPosts}>
                <ProfilePosts posts={posts}/>
            </div>
            <div className={s.profileWrapInfo}>

                <ProfileInfo profileInfo={profileInfo}/>
            </div>
        </div>
    );
};

export default Profile;
