import React from 'react';
import s from './UserLogo.module.css'

type UserLogoType = {
    logo:string
}

const UserLogo = (props:UserLogoType) => {
    return (
        <div className={s.users_logo}>
            <img src={props.logo} alt=""/>
        </div>
    );
};

export default UserLogo;