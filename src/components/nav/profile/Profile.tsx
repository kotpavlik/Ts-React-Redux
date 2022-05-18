import React from 'react';
import s from './Profile.module.css';
import ProfilePosts from './profile_posts/ProfilePosts';
import {ProfileInfoContainer} from './profile_posts/textarea_send/ProfileInfoContainer';

const ProfilePostsMemo = React.memo(ProfilePosts)
const ProfileInfoContainerMemo = React.memo(ProfileInfoContainer)


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

    return (
        <div className={s.profileWrap}>
            <div className={s.profileWrapPosts}>
                <ProfilePostsMemo/>
            </div>
            <div className={s.profileWrapInfo}>

                <ProfileInfoContainerMemo/>
            </div>
        </div>
    );
};

export default Profile;
