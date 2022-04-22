import React from 'react';
import Button from './button/Button';
import Posts from './button/posts/Posts';
import s from './Textarea.module.css';
import {PropsPostTypes} from '../ProfilePosts';



const ProfileTextarea = (props: PropsPostTypes) => {

    let MyPosts = props.posts.map((p )=> {
        return (<Posts key={p.id} post={p.message} profilePhoto={p.profilePhoto}/>)})


    return (
        <div className={s.all_wrapper_profile_textarea}>
            <h3>Posts</h3>
            <div className={s.profile_textarea}>
                <textarea className={s.textarea} name="posts_area" placeholder="wright please" id="profile_textarea"/>
                <Button name={'send'} onClickHandler={()=>{alert('hooow')}}/>
            </div>
            <div className={s.posts}>
                {MyPosts}
            </div>
        </div>
    );
};

export default ProfileTextarea;
