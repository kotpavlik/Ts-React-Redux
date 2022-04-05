import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './profile_info/ProfileInfo';
import ProfilePosts from './profile_posts/ProfilePosts';
import user_logo from './../../assets/profilePhoto.jpeg';
import user_logo1 from './../../assets/profilePhoto1.jpg';
import user_logo2 from './../../assets/profilePhoto2.jpeg';
import user_logo3 from './../../assets/profilePhoto3.jpg';

import {v1} from 'uuid';

export type postsType = {
    id: string
    message: string
    likesCount: number
    profilePhoto: string
}

const Profile = () => {
    let posts = [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12, profilePhoto: '/static/media/profilePhoto.5ca85af7df747cdacde9.jpeg'},
        {id: v1(), message: 'It\'s my first post', likesCount: 11, profilePhoto: '/static/media/profilePhoto1.d5cde56cdb4a33410ead.jpg'},
        {id: v1(), message: 'Bla-bla-bla', likesCount: 10, profilePhoto:'/static/media/profilePhoto2.bf50647337338a335ccd.jpeg'},
        {id: v1(), message: 'Hi, how are you?', likesCount: 12, profilePhoto: '/static/media/profilePhoto3.89ba50aeb7cf370e9c58.jpg'},
    ]

    console.log(posts);
    debugger
    return (
        <div className={s.profileWrap}>
            <div className={s.profileWrapPosts}>
                <ProfilePosts posts={posts}/>
            </div>
            <div className={s.profileWrapInfo}>
                <ProfileInfo/>
            </div>
        </div>
    );
};

export default Profile;
