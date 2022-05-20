import React from 'react';
import Button from '../../profile/profile_posts/textarea_send/button/Button';
import s from './FollowButton.module.css'
import {mapDispatchToPropsType, mapStateToPropsType} from './FollowButtonContainer';

type FollowButtonPropsType = mapStateToPropsType & mapDispatchToPropsType

const FollowButton = (props:FollowButtonPropsType) => {
    return (
        <div className={s.follow_unfollow}>
            {props.followed.map((us) => {
                return <Button
                    name={us.followed ? "follow" : "unfollow"}
                    onClickHandler={() => {props.ToggleFollowed(!us.followed,us.id)}}></Button>
            } )}
        </div>
    );
};

export default FollowButton;