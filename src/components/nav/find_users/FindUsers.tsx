import React from 'react';
import s from './FindUsers.module.css'
import UserLogo from './user_logo/UserLogo';
import UserStatus from './user_status/UserStatus';
import FollowButton from './follow_button/FollowButton';
import {mapDispatchToPropsType, mapStateToPropsType} from './FindUsersContainer';

const UserLogoMemo = React.memo(UserLogo)
const FollowButtonMemo = React.memo(FollowButton)
const UserStatusMemo = React.memo(UserStatus)


type FollowButtonPropsType = mapStateToPropsType & mapDispatchToPropsType
export const FindUsers = (props:FollowButtonPropsType) => {
    return (
        <div className={s.global_wrapper_find_users}>
            {props.users.map((user )=> {
                return (
                    <div key={user.id} className={s.all_wrapper_find_users}>
                        <UserLogoMemo logo={user.photos}/>
                        <div className={s.wrapper_status_and_name}>
                            <div className={s.user_name}>{user.name}</div>
                            <UserStatusMemo status={user.status}/>
                        </div>
                        <FollowButtonMemo id={user.id} followed={user.followed} ToggleFollowed={props.ToggleFollowed}/>
                    </div>
                )
            })}

        </div>

    );
};

