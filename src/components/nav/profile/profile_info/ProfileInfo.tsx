import React, {useEffect} from 'react';
import s from './ProfileInfo.module.css';
import logo_no_photo from '../../../assets/user_no_photo.png'
import {AppDispatch, AppStateType} from '../../../../redux/store/redux-store';
import {useDispatch, useSelector} from 'react-redux';
import {
    getProfileThunk,
    profileType
} from '../../../../redux/reducers/UserProfile-reducer';
import { useMatch} from 'react-router-dom';




const ProfileInfo = () => {

    const dispatch:AppDispatch = useDispatch();
    const profile = useSelector<AppStateType,profileType>( state => state.UserProfile.profileInfo)
    const match = useMatch("/profile/:userId/")

   const  refreshProfile = () =>  {
        let userId ;
        if(match) userId = match.params.userId;  // это хук смотри на строку 39.Там всё поймёшь!
        if (!userId) {
            userId = '21125';
        }
        else if (userId === "*") {
            userId = '21125'; //21125
        }
        dispatch(getProfileThunk(Number(userId)) as any)
    }
    useEffect(()=> {refreshProfile()},[])

    return (
        <div className={s.profileInfo}>
            <div className={s.profileFullName}>
                <h2>{profile.fullName} </h2>
            </div>
            <div className={s.profilePhoto}>
                <img src={profile.photos.large ? profile.photos.large : logo_no_photo} alt="no photo"/>
            </div>
            <div className={s.profileStatus}>
                <h3>status :</h3> <div className={s.item}>{profile.aboutMe}</div>
            </div>
            <div className={s.profileLookingForAJob}>
                <h3>job</h3>
                <div className={s.item}>{profile.lookingForAJob ? 'I\'m working' : 'I\'m not working'}</div>
            </div>
            <div className={s.about_me}><h3>about me :</h3> {profile.aboutMe}</div>
            <div className={s.profileLookingForAJobDescription}>
                <h3>job description </h3>
                <div className={s.item}>{profile.lookingForAJobDescription} </div>
            </div>
            <div className={s.profileContacts}>
                <h3>contacts</h3>
                <div className={s.item}>
                {Object.keys(profile.contacts)
                    .map((key) => {
                        debugger
                        // @ts-ignore // задать вопрос по поводу ts-ignore. И какой тип задавать props.profileInfo.contacts[key]; и где!!!
                        let contact = profile.contacts[key];
                        return <Contact key={key} contactTitle={key} contactValue={contact}/>
                    })}
                </div>
            </div>
        </div>
    );
};

type ContactType = {
    contactTitle: string
    contactValue: string
    stopDefAction?:(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>)=> boolean
}

function stopDefAction(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  e.preventDefault();
}

const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
if(!contactValue) {
    return (
        <div className={s.no_contact}>
            <b>{contactTitle}</b> : <a href={contactValue} onClick={stopDefAction}>no sites</a>
        </div>
    );
}
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b> : <a href={contactValue}>go to web site</a>
        </div>
    );
};
export default ProfileInfo;






