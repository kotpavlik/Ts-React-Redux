import React from 'react';
import Button from '../../../profile/profile_posts/textarea_send/button/Button';
import s from './MessagesCompanion.module.css';
import YourFriendMessage from './your_friend_message/YourFriendMessage';
import YouMessages from './you_messages/YouMessages';
import {messagesTypes, propsMessagesTypes} from '../../Messages';

const MessagesCompanion: React.FC<propsMessagesTypes> = (props) => {
    return (
        <div className={s.wrapper_MessagesCompanion}>
            <div className={s.overflow_for_MessagesCompanion}>
                {props.messages.map((m:messagesTypes) => {

                    if (m.id === props.profileInfo.userId) {
                        return <YouMessages key={m.id} message={m.message}/>
                    } else {
                        return <YourFriendMessage key={m.id} message={m.message}/>
                    }
                })}
            </div>
            <div className={s.mess_com_textarea}>
        <textarea
            className={s.textarea}
            name="posts_area"
            placeholder="wright please"
            id="profile_texta"
        />
                <Button name={'send'} onClickHandler={()=>{alert('hey')}}/>
            </div>
        </div>
    );
};

export default MessagesCompanion;
