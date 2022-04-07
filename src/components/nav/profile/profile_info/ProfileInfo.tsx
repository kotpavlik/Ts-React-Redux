import React from 'react';
import s from './ProfileInfo.module.css';
import { profileInfoTypes} from '../Profile';

type propsProfileInfo = {
    profileInfo: profileInfoTypes
}

const ProfileInfo = (props: propsProfileInfo) => {

    return (
        <div className={s.profileInfo}>
            <div className={s.profileFullName}>
                <h2>{props.profileInfo.fullName} </h2>
            </div>
            <div className={s.profilePhoto}>
                <img src={props.profileInfo.photos.large} alt=""/>
            </div>
            <div className={s.profileStatus}>
                <h3>status :</h3> <div className={s.item}>{props.profileInfo.aboutMe}</div>
            </div>
            <div className={s.profileLookingForAJob}>
                <h3>job</h3>
                <div className={s.item}>{props.profileInfo.lookingForAJob ? 'I\'m working' : 'I\'m not working'}</div>
            </div>
            <div className={s.profileLookingForAJobDescription}>
                <h3>job description </h3>
                <div className={s.item}>{props.profileInfo.lookingForAJobDescription} </div>
            </div>
            <div className={s.profileContacts}>
                <h3>contacts</h3>
                <div className={s.item}>
                {Object.keys(props.profileInfo.contacts)
                    .map((key) => {
                        // @ts-ignore // задать вопрос по поводу ts-ignore. И какой тип задавать props.profileInfo.contacts[key]; и где!!!
                        let contact = props.profileInfo.contacts[key];
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






