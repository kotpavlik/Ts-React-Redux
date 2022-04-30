import React from 'react';
import s from './ProfilePosts.module.css';
import ProfileTextarea from './textarea_send/ProfileTextarea';
import {postsType} from '../Profile';
import {ActionsTypes} from '../../../../redux/state/state';

export  type PropsPostTypes = {
    posts: Array<postsType>
    NewPostText: string
    addPost: () => void
    addChangePost: (text: string) => void
    dispatch: (action:ActionsTypes) => void
}

const ProfilePosts = (props: PropsPostTypes) => {

    return (
        <div className={s.profile_posts}>
            <ProfileTextarea
                posts={props.posts}
                NewPostText={props.NewPostText}
                addPost={props.addPost}
                addChangePost={props.addChangePost}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default ProfilePosts;
