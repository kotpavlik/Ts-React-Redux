import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import s from "./App.module.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Content from "./components/nav/content/Content";
import Messages from "./components/nav/messages/Messages";
import Music from "./components/nav/music/Music";
import NavMenu from "./components/nav/navbar/menu/NavMenu";
import News from "./components/nav/news/News";
import Profile, {postsType, profileInfoTypes} from './components/nav/profile/Profile';
import Settings from "./components/nav/setings/Settings";
import {v1} from 'uuid';
import profilePhoto1 from './components/assets/profilePhoto1.jpg';
import profilePhoto2 from './components/assets/profilePhoto2.jpeg';
import profilePhoto3 from './components/assets/profilePhoto3.jpg';

const App = () => {
  let a = profilePhoto1; let b = profilePhoto2; let c= profilePhoto3;
  const [menuActive, setMenuActive] = useState(false);
  const posts: Array<postsType> = [
    {
      id: v1(),
      message: 'Hi, how are you?',
      likesCount: 12,
      profilePhoto: '/static/media/profilePhoto.5ca85af7df747cdacde9.jpeg'
    },
    {
      id: v1(),
      message: 'It\'s my first post',
      likesCount: 11,
      profilePhoto: '/static/media/profilePhoto1.d5cde56cdb4a33410ead.jpg'
    },
    {
      id: v1(),
      message: 'Bla-bla-bla',
      likesCount: 10,
      profilePhoto: '/static/media/profilePhoto2.bf50647337338a335ccd.jpeg'
    },
    {
      id: v1(),
      message: 'Hi, how are you?',
      likesCount: 12,
      profilePhoto: '/static/media/profilePhoto3.89ba50aeb7cf370e9c58.jpg'
    },
  ]
  const profileInfo: profileInfoTypes = {
    userId: v1(),
    aboutMe: 'Hi, I am a student',
    lookingForAJob: false,
    lookingForAJobDescription: 'i\'m searching for a job',
    fullName: 'Kot Pavlik',
    contacts: {
      github: 'https://github.com/kotpavlik?tab=repositories',
      vk: 'https://vk.com/etotcosmos',
      facebook: '',
      instagram: 'https://www.instagram.com/_igor_anufriev/?hl=ru',
      twitter: 'https://twitter.com/home',
      website: 'https://pinkpunk.by/ru/',
      youtube: '',
      mainLink: 'https://www.linkedin.com/feed'
    },
    photos: {
      small : '/static/media/profilePhoto.5ca85af7df747cdacde9.jpeg',
      large: '/static/media/profilePhoto.5ca85af7df747cdacde9.jpeg'
    }
  }
  const messages = [
    {id: v1(), message: 'Hi, my dear hackers'},
    {id: v1(), message: 'How are you? My friend'},
    {id: v1(), message: 'Yo Yo Yo. What\'s up?'},
    {id: v1(), message: 'My niga Igor Anufriev'},
    {id: v1(), message: 'Have a good hacking'},
  ]


  return (
    <div className={s.globalWraper}>
      <div className={s.App}>
        <header className={s.headerWraper}>
          <Header setMenuActive={setMenuActive} menuActive={menuActive} />
        </header>
        <nav className={s.nawWraper}>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/profile" element={<Profile posts={posts} profileInfo={profileInfo}/>} />
            <Route path="/messages" element={<Messages profileInfo={profileInfo} messages={messages}/>} />
            <Route path="/music" element={<Music />} />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <NavMenu active={menuActive} setMenuActive={setMenuActive} />
        </nav>
        <footer className={s.footerWraper}>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default App;
