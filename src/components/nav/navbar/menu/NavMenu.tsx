import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavMenu.module.css";

type NavMenuType = {
  active: boolean;
  setMenuActive: Function;
};

const NavMenu = (props: NavMenuType) => {
  return (
    <div
      className={props.active ? `${s.menu} ${s.active}` : s.menu}
      onClick={() => {
        props.setMenuActive(false);
      }}
    >
      <div className={s.blur} />
      <div className={s.menuContent} onClick={(e) => e.stopPropagation()}>
        <div className={s.wrap}>
          <div className={s.menuHeader}>
            <span className="material-icons">account_circle</span>

            <NavLink
              className={({ isActive }) => (isActive ? s.activeLink : " ")}
              to="/profile"
            >
              profile
            </NavLink>
          </div>
          <div className={s.menuHeader}>
            <span className="material-icons">email</span>

            <NavLink
              className={({ isActive }) => (isActive ? s.activeLink : " ")}
              to="/messages"
            >
              messages
            </NavLink>
          </div>
          <div className={s.menuHeader}>
            <span className="material-icons">music_note</span>
            <NavLink
              className={({ isActive }) => (isActive ? s.activeLink : " ")}
              to="/music"
            >
              music
            </NavLink>
          </div>
          <div className={s.menuHeader}>
            <span className="material-icons">perm_device_information</span>
            <NavLink
              className={({ isActive }) => (isActive ? s.activeLink : " ")}
              to="/news"
            >
              news
            </NavLink>
          </div>
          <div className={s.menuHeader}>
            <span className="material-icons">settings</span>
            <NavLink
              className={({ isActive }) => (isActive ? s.activeLink : " ")}
              to="/setings"
            >
              setings
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
