import React from 'react';
import s from './FindUsers.module.css'
import UserLogo from './user_logo/UserLogo';
import UserStatus from './user_status/UserStatus';
import FollowButton from './follow_button/FollowButton';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../redux/store/redux-store';
import {FollowedToggleAC, users} from '../../../redux/reducers/Users-reducer';

const UserLogoMemo = React.memo(UserLogo)
const FollowButtonMemo = React.memo(FollowButton)
const UserStatusMemo = React.memo(UserStatus)



export const FindUsers = () => {

    const dispatch = useDispatch();
    const users = useSelector<AppStateType, Array<users>>(state => state.FindUsersPage)

    return (
        <div className={s.global_wrapper_find_users}>
            {users.map((user) => {
                return (
                    <div key={user.id} className={s.all_wrapper_find_users}>
                        <UserLogoMemo logo={user.photos}/>
                        <div className={s.wrapper_status_and_name}>
                            <div className={s.user_name}>{user.name}</div>
                            <UserStatusMemo status={user.status}/>
                        </div>
                        <FollowButtonMemo id={user.id} followed={user.followed}
                                          ToggleFollowed={(value: boolean, id: string) => {
                                              dispatch(FollowedToggleAC(value, id))
                                          }}/>
                    </div>
                )
            })}

        </div>

    );
};

