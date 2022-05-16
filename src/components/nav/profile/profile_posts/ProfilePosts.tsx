import React from 'react';
import s from './ProfilePosts.module.css';
import ProfileTextarea from './textarea_send/ProfileTextarea';
import {postsType} from '../Profile';
import {ActionsTypes} from '../../../../redux/state/state';

export  type PropsPostTypes = {
    posts: Array<postsType>
    NewPostText: string
    AddPostAC:() => void
    AddChangePostAC:(text:string) => void
}

const ProfilePosts = (props: PropsPostTypes) => {

    return (
        <div className={s.profile_posts}>
            <ProfileTextarea
                posts={props.posts}
                NewPostText={props.NewPostText}
                AddPostAC={props.AddPostAC}
                AddChangePostAC={props.AddChangePostAC}
            />
        </div>
    );
};

export default ProfilePosts;
