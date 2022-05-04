import React, {ChangeEvent, KeyboardEvent} from 'react';
import Button from './button/Button';
import Posts from './button/posts/Posts';
import s from './ProfileTextarea.module.css';
import {PropsPostTypes} from '../ProfilePosts';
import {AddChangePostAC, AddPostAC} from '../../../../../redux/state/state';



const ProfileTextarea = (props: PropsPostTypes) => {

    let MyPosts = props.posts.map((p) => {
        return (<Posts key={p.id} post={p.message} profilePhoto={p.profilePhoto}/>)
    })

    const onClickHandler = () => {
        // props.addPost();
        props.dispatch(AddPostAC())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        // props.addChangePost(text);
        props.dispatch(AddChangePostAC(text))
    }
    const onKeyPressProfileTextareaHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.ctrlKey && e.key === 'Enter') {
            onClickHandler()
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