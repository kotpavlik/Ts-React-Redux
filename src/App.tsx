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
import {AppStateType} from './redux/store/redux-store';
import {SendChangeMessageButtonAC, SendMessageButtonAC} from './redux/reducers/MessagesPage-reducer';
import {AddChangePostAC, AddPostAC} from './redux/reducers/ProfilePage-reducer';
import {connect} from 'react-redux';
import {FindUsers} from './components/nav/find_users/FindUsers';
import {Login} from './components/login/Login';


const ContentMemo= React.memo(Content)
const ProfileMemo =React.memo(Profile)
const MessagesMemo =React.memo(Messages)
const MusicMemo =React.memo(Music)
const NewsMemo =React.memo(News)
const SettingsMemo =React.memo(Settings)
const FindUsersMemo = React.memo(FindUsers)


export type mapStateToPropsType = AppStateType

export type  mapDispatchToPropsType ={
    SendMessageButtonAC:() => void
    SendChangeMessageButtonAC:(NewText: string) => void
    AddPostAC:() => void
    AddChangePostAC:(text:string) => void
}

export const App  = (props:mapStateToPropsType & mapDispatchToPropsType) => {


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
                        <Route path="/" element={<ContentMemo/>}/>
                        <Route path="/profile/:userId" element={<ProfileMemo/>}/>
                        <Route path="/messages" element={<MessagesMemo/>}/>
                        <Route path="/music" element={<MusicMemo/>}/>
                        <Route path="/news" element={<NewsMemo/>}/>
                        <Route path="/settings" element={<SettingsMemo/>}/>
                        <Route path="/users" element={<FindUsersMemo/>}/>
                        <Route path="/login" element={<Login/>}/>
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





const mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return state
}

export default connect(mapStateToProps,{SendMessageButtonAC,SendChangeMessageButtonAC,AddPostAC,AddChangePostAC})(App)