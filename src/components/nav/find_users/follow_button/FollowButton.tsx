import React from 'react';
import Button from '../../profile/profile_posts/textarea_send/button/Button';
import s from './FollowButton.module.css'

type FollowButtonPropsType = {
    id: string
    followed: boolean
    ToggleFollowed: (followed: boolean, id: string) => void
}

const FollowButton = (props: FollowButtonPropsType) => {
    return (
        <div className={s.follow_unfollow}>
            <Button
                name={props.followed ? 'follow' : 'unfollow'}
                onClickHandler={() => {props.ToggleFollowed(!props.followed, props.id)}}/>

        </div>
    );
};

export default FollowButton;