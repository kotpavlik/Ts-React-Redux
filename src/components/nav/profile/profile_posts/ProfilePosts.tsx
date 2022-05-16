import React from 'react';
import s from './ProfilePosts.module.css';
import {ProfileTextareaContainer} from './textarea_send/ProfileTextareaContainer';



const ProfilePosts = () => {

    return (
        <div className={s.profile_posts}>
          <ProfileTextareaContainer/>
        </div>
    );
};

export default ProfilePosts;
