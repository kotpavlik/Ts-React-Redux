import React from "react";
import s from "./ProfileInfo.module.css";
import profilePhoto from "../../../assets/profilePhoto.jpeg";

const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <div className={s.profileFullName}>
        <h2>Kot Pavlik </h2>
      </div>
      <div className={s.profilePhoto}>
        <img src={profilePhoto} alt="" />
      </div>
      <div className={s.profileStatus}>
        <h3>status :</h3> hello my dear hackers
      </div>
      <div className={s.profileLookingForAJob}>
        <h3>job :</h3>
        <input type="checkbox" name="working" id="working" />
        <label htmlFor="working"> I'am working</label>
        <br />
        <input type="checkbox" name="noWorking" id="noWorking" />
        <label htmlFor="noWorking"> I'am search work</label>
      </div>
      <div className={s.profileLookingForAJobDescription}>
        <h3>job description :</h3>
        Hi gues.My name Igor and I react and redux developer. I'm search job in
        IT
      </div>
      <div className={s.profileContacts}>
        <h3>contacts :</h3>
        <a href="google.com">github</a>
        <a href="google.com">vk</a>
        <a href="google.com">facebook</a>
        <a href="google.com">instagram</a>
        <a href="google.com">twitter</a>
        <a href="google.com">website</a>
        <a href="google.com">youtube</a>
        <a href="google.com">mainLink</a>
      </div>
    </div>
  );
};

export default ProfileInfo;
