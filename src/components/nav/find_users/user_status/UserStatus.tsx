import React from 'react';
import s from './UserStatus.module.css'

type UserStatusType = {
    status:string
}

const UserStatus = (props:UserStatusType) => {
    return (
        <div className={s.user_status}>
            {props.status}
        </div>
    );
};

export default UserStatus;