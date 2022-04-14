import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';

import s from './App.module.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Content from './components/nav/content/Content';
import Messages from './components/nav/messages/Messages';
import Music from './components/nav/music/Music';
import NavMenu from './components/nav/navbar/menu/NavMenu';
import News from './components/nav/news/News';
import Profile from './components/nav/profile/Profile';
import Settings from './components/nav/setings/Settings';
import profilePhoto1 from './components/assets/profilePhoto1.jpg';
import profilePhoto2 from './components/assets/profilePhoto2.jpeg';
import profilePhoto3 from './components/assets/profilePhoto3.jpg';
import {stateType} from './react/state/state';

type AppPropsType = {
    state: stateType
}

const App = (props: AppPropsType) => {

    let a = profilePhoto1;
    let b = profilePhoto2;
    let c = profilePhoto3;
    const [menuActive, setMenuActive] = useState(false);


    return (
        <div className={s.globalWraper}>
            <div className={s.App}>
                <header className={s.headerWraper}>
                    <Header setMenuActive={setMenuActive} menuActive={menuActive}/>
                </header>
                <nav className={s.nawWraper}>
                    <Routes>
                        <Route path="/" element={<Content/>}/>
                        <Route path="/profile" element={
                            <Profile
                                posts={props.state.forProfilePage.posts}
                                profileInfo={props.state.forUserProfile.profileInfo}/>}/>
                        <Route path="/messages" element={
                            <Messages
                                profileInfo={props.state.forUserProfile.profileInfo}
                                messages={props.state.forMessagesPages.messages}/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                    <NavMenu active={menuActive} setMenuActive={setMenuActive}/>
                </nav>
                <footer className={s.footerWraper}>
                    <Footer/>
                </footer>
            </div>
        </div>
    );
};

export default App;
