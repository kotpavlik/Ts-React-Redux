import React from "react";
import s from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={s.navBar}>
      <div>
        <a href="#">profile</a>
      </div>
      <div>
        <a href="#">messages</a>
      </div>
      <div>
        <a href="#">music</a>
      </div>
      <div>
        <a href="#">news</a>
      </div>
      <div>
        <a href="#">setings</a>
      </div>
    </div>
  );
};

export default NavBar;
