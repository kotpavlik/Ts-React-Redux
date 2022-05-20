import React from 'react';
import s from './UserLogo.module.css'

const UserLogo = () => {
    return (
        <div className={s.users_logo}>
            <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" alt=""/>
        </div>
    );
};

export default UserLogo;