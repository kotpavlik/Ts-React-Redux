import React from 'react';
import s from './UserLogo.module.css'
import logo_no_photo from '../../../assets/user_no_photo.png'
import {NavLink} from 'react-router-dom';

type UserLogoType = {
    logo:string
    id:number
}

const UserLogo = (props:UserLogoType) => {

    return (

        <NavLink
            className={({ isActive }) => (isActive ? s.activeLink : " ")}
            to={"/profile/" + props.id}
        >
        <div className={s.users_logo}>
            <img className={props.logo ? '' :s.logo}
                 src={props.logo ? props.logo : logo_no_photo } alt="no photo"/>
        </div>
    </NavLink>

    );
};

export default UserLogo;