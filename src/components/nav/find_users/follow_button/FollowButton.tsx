import React from 'react';
import Button from '../../profile/profile_posts/textarea_send/button/Button';
import s from './FollowButton.module.css'

type FollowButtonPropsType = {
    id: number
    followed: boolean
    ToggleFollowed: ( id: number) => void
    disable?:boolean
    name:string
}

const FollowButton = (props: FollowButtonPropsType) => {
    return (
        <div className={s.follow_unfollow}>
            <Button
                name={props.name}
                onClickHandler={() => {props.ToggleFollowed(props.id)}}/>

        </div>
    );
};

export default FollowButton;