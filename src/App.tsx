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
import { storeType} from './redux/state/state';

type AppPropsType = {
    store: storeType
}

const App = (props: AppPropsType) => {

    let state = props.store.getState()

    let a = profilePhoto1;
    let b = profilePhoto2;
    let c = profilePhoto3;
    const [menuActive, setMenuActive] = useState(false);

    return (
        <div className={s.globalWrapper}>
            <div className={s.App}>
                <header className={s.headerWrapper}>
                    <Header setMenuActive={setMenuActive} menuActive={menuActive}/>
                </header>
                <nav className={s.nawWrapper}>
                    <Routes>
                        <Route path="/" element={<Content/>}/>
                        <Route path="/profile" element={
                            <Profile
                                posts={state.forProfilePage.posts}
                                profileInfo={state.forUserProfile.profileInfo}
                                NewPostText={state.forProfilePage.NewPostText}
                                addPost = {props.store.addPost.bind(props.store) }
                                addChangePost = {props.store.addChangePost.bind(props.store)}
                                dispatch = {props.store.dispatch.bind(props.store)}
                            />}/>
                        <Route path="/messages" element={
                            <Messages
                                profileInfo={state.forUserProfile.profileInfo}
                                messages={state.forMessagesPages.messages}
                                newMessageText={state.forMessagesPages.newMessageText}
                                sendMessageButton = {props.store.sendMessageButton.bind(props.store)}
                                sendChangeMessageButton = {props.store.sendChangeMessageButton.bind(props.store)}
                                dispatch = {props.store.dispatch.bind(props.store)}
                            />}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                    <NavMenu active={menuActive} setMenuActive={setMenuActive}/>
                </nav>
                <footer className={s.footerWrapper}>
                    <Footer/>
                </footer>
            </div>
        </div>
    );
};

export default App;
