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
import  {MessagesPageType, ProfilePageType, UserPageType} from './redux/state/state';
import {AppStateType} from './redux/store/redux-store';
import {SendChangeMessageButtonAC, SendMessageButtonAC} from './redux/reducers/MessagesPage-reducer';
import {AddChangePostAC, AddPostAC} from './redux/reducers/ProfilePage-reducer';
import {connect} from 'react-redux';


export type mapStateToPropsType = {
    MessagesPage:MessagesPageType
    UserProfile:UserPageType
    ProfilePage:ProfilePageType
}

export type  mapDispatchToPropsType ={
    SendMessageButtonAC:() => void
    SendChangeMessageButtonAC:(NewText: string) => void
    AddPostAC:() => void
    AddChangePostAC:(text:string) => void
}

export const App  = (props:mapStateToPropsType & mapDispatchToPropsType) => {
debugger

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
                            <Profile/>}/>
                        <Route path="/messages" element={
                            <Messages/>}/>
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





const mapStateToProps = (state:AppStateType) => {
    return state
}

export default connect(mapStateToProps,{SendMessageButtonAC,SendChangeMessageButtonAC,AddPostAC,AddChangePostAC})(App)