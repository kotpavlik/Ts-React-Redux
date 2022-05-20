import React from 'react';
import s from './FindUsers.module.css'
import UserLogo from './user_logo/UserLogo';
import UserStatus from './user_status/UserStatus';
import {FollowButtonContainer} from './follow_button/FollowButtonContainer';

const UserLogoMemo = React.memo(UserLogo)
const FollowButtonMemo = React.memo(FollowButtonContainer)
const UserStatusMemo = React.memo(UserStatus)

export const FindUsers = () => {
    return (
        <div className={s.global_wrapper_find_users}>
            <div className={s.all_wrapper_find_users}>
                <UserLogoMemo/>
                <UserStatusMemo/>
                <FollowButtonMemo/>
            </div>
        </div>

    );
};

