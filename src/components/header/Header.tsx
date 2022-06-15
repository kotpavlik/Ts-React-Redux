import React from "react";
import s from "./Header.module.css";
import logo from "./../assets/logo192.png";
import Burger from "../nav/navbar/burger/Burger";
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store/redux-store';
import {logout} from '../../redux/reducers/Auth-reducer';
import user_no_photo from '../assets/user_no_photo.png'


export type BurgerType = {
  menuActive: boolean;
  setMenuActive: Function;
};

const Header = (props: BurgerType) => {
    debugger
    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType,boolean>(state => state.AuthPage.isAuth)
    const id = useSelector<AppStateType,number>(state => state.AuthPage.id)
    const photo_logo = useSelector<AppStateType,string | undefined>(state => state.UserProfile.profileInfo.photos.small)

  return (
    <div className={s.header}>
      <Burger setMenuActive={props.setMenuActive} menuActive={props.menuActive} />

      <h1>
        Welc
        <NavLink to="/">
          <img src={logo} className={s.logo} alt="logo is late" />
        </NavLink>
        me
      </h1>

            <div className={s.singIn}>

                {isAuth ?
                    <div className={s.logoAndExitFlex}>
                        <div className={s.exit} onClick={()=>{dispatch(logout() as any)} }>exit</div>
                        <NavLink to={`/profile/${id}`}>
                            <div className={s.profilePhoto}>
                                <img src={photo_logo ? photo_logo : user_no_photo } alt="logo is late"/>
                            </div>
                        </NavLink>

                    </div>
                    :
                    <NavLink to="/login">
                        sing in
                    </NavLink>
                }

            </div>


    </div>
  );
};

export default Header;
