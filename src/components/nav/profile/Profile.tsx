import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './profile_info/ProfileInfo';
import ProfilePosts from './profile_posts/ProfilePosts';
import profilePhoto from '../../assets/profilePhoto.jpeg';
import profilePhoto1 from '../../assets/profilePhoto1.jpg';
import profilePhoto2 from '../../assets/profilePhoto2.jpeg';
import profilePhoto3 from '../../assets/profilePhoto3.jpg';



type profilePropsType = {
    posts:Array<postsType>
    profileInfo:profileInfoTypes
}
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


const Profile:React.FC<profilePropsType> = (props) => {

    return (
        <div className={s.profileWrap}>
            <div className={s.profileWrapPosts}>
                <ProfilePosts posts={props.posts}/>
            </div>
            <div className={s.profileWrapInfo}>

                <ProfileInfo profileInfo={props.profileInfo}/>
            </div>
        </div>
    );
};

export default Profile;
