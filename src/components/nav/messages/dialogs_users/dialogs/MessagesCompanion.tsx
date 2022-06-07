import React, {ChangeEvent,KeyboardEvent} from 'react';
import Button from '../../../profile/profile_posts/textarea_send/button/Button';
import s from './MessagesCompanion.module.css';
import YourFriendMessage from './your_friend_message/YourFriendMessage';
import YouMessages from './you_messages/YouMessages';
import {messagesTypes} from '../../../../../redux/reducers/MessagesPage-reducer';
import {mapDispatchToPropsType, mapStateToPropsType} from './your_friend_message/MessagesCompanionContainer';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../../../redux/store/redux-store';
import {profileType} from '../../../../../redux/reducers/UserProfile-reducer';




const MessagesCompanion: React.FC<mapStateToPropsType & mapDispatchToPropsType > = (props) => {

debugger
    const profile = useSelector<AppStateType,profileType>( state => state.UserProfile.profileInfo)

    const onChangeTextarea = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        // props.sendChangeMessageButton(text);
        props.sendChangeMessage(text)

    }

    const onKeyPressTextareaHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (props.newMessageText) {
            let newMessageText = props.newMessageText.trim();
            if (e.ctrlKey && e.key === 'Enter' && newMessageText) {
                onClickMessageButton()
            }
        }
    };
    const onClickMessageButton = () => {
        // props.sendMessageButton();
        props.sendMessage()

    }
    const disabledLogic =()=> {
        if (props.newMessageText !== undefined) {return !!props.newMessageText.trim() ? false : true}
    }
    debugger
    return (
        <div className={s.wrapper_MessagesCompanion}>
            <div className={s.overflow_for_MessagesCompanion}>
                {props.messages.map((m:messagesTypes) => {

                    if (m.id === profile.userId.toString()) {
                        return <YouMessages key={m.id} message={m.message}/>
                    } else {
                        return <YourFriendMessage key={m.id} message={m.message}/>
                    }
                })}
            </div>

            <div className={s.mess_com_textarea}>
        <textarea
            value = {props.newMessageText}
            onChange={onChangeTextarea}
            onKeyPress={onKeyPressTextareaHandler}
            className={s.textarea}
            name="posts_area"
            placeholder="wright please"
            id="profile_texta"
        />
                <Button name={'send'} disabled={disabledLogic()} onClickHandler={()=>{onClickMessageButton()}}/>
            </div>
        </div>
    );
};

export default MessagesCompanion;
