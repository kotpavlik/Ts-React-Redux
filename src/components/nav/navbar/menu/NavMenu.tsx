import React from "react";
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
        <div className={s.menuHeader}>
          <span className="material-icons">account_circle</span>
          <a href="#">profile</a>
        </div>
        <div className={s.menuHeader}>
          <span className="material-icons">email</span>
          <a href="#">messages</a>
        </div>
        <div className={s.menuHeader}>
          <span className="material-icons">music_note</span>
          <a href="#">music</a>
        </div>
        <div className={s.menuHeader}>
          <span className="material-icons">perm_device_information</span>
          <a href="#">news</a>
        </div>
        <div className={s.menuHeader}>
          <span className="material-icons">settings</span>
          <a href="#">setings</a>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
