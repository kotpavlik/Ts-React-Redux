import React, {ChangeEvent, KeyboardEvent} from 'react';
import Button from './button/Button';
import Posts from './button/posts/Posts';
import s from './ProfileTextarea.module.css';
import {PropsPostTypes} from '../ProfilePosts';



const ProfileTextarea = (props: PropsPostTypes) => {

    let MyPosts = props.posts.map((p) => {
        return (<Posts key={p.id} post={p.message} profilePhoto={p.profilePhoto}/>)
    })

    const onClickHandler = () => {
        // props.addPost();
        props.dispatch({type:'ADD_POST'})
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        // props.addChangePost(text);
        props.dispatch({type:'ADD_CHANGE_POST',text})
    }
    const onKeyPressProfileTextareaHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.ctrlKey && e.key === 'Enter') {
            props.addPost();
        }
    };

    return (
        <div className={s.all_wrapper_profile_textarea}>
            <h3>Posts</h3>
            <div className={s.profile_textarea}>
                <textarea
                    value={props.NewPostText}
                    onKeyPress={onKeyPressProfileTextareaHandler}
                    onChange={onChangeHandler}
                    className={s.textarea}
                    name="posts_area"
                    placeholder="wright please"
                    id="profile_textarea"/>
                <Button name={'send'} onClickHandler={() => {
                    onClickHandler();
                }}/>
            </div>
            <div className={s.posts}>
                {MyPosts}
            </div>
        </div>
    );
};

export default ProfileTextarea;
