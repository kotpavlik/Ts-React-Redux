import React from 'react';
import Button from '../../../profile/profile_posts/textarea_send/button/Button';
import s from './MessagesCompanion.module.css';
import YourFriendMessage from './your_friend_message/YourFriendMessage';
import YouMessages from './you_messages/YouMessages';
import {messagesTypes, SendMessageButtonAC} from '../../../../../redux/reducers/MessagesPage-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../../redux/store/redux-store';
import {profileType} from '../../../../../redux/reducers/UserProfile-reducer';
import {FormikHelpers, useFormik} from 'formik';
import * as Yup from 'yup';


type initialValuesType = {
    textMessage: string
}
// если мы хотим использовать connect то нам нужно так типизировать пропсы :React.FC<mapStateToPropsType & mapDispatchToPropsType >
const MessagesCompanion = () => {

    const profile = useSelector<AppStateType, profileType>(state => state.UserProfile.profileInfo)
    const messages = useSelector<AppStateType, Array<messagesTypes>>(state => state.MessagesPage.messages)
    const dispatch = useDispatch()

    // const onChangeTextarea = (e:ChangeEvent<HTMLTextAreaElement>) => {
    //     let text = e.currentTarget.value;
    //     props.sendChangeMessage(text)
    //
    // }
    //
    // const onKeyPressTextareaHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (props.newMessageText) {
    //         let newMessageText = props.newMessageText.trim();
    //         if (e.ctrlKey && e.key === 'Enter' && newMessageText) {
    //             onClickMessageButton()
    //         }
    //     }
    // };
    // const onClickMessageButton = () => {
    //     props.sendMessage()
    //
    // }
    // const disabledLogic =()=> {
    //     if (props.newMessageText !== undefined) {return !!props.newMessageText.trim() ? false : true}
    // }

    const formik = useFormik({
        initialValues: {
            textMessage: ''
        },
        validationSchema: Yup.object().shape({
            textMessage: Yup.string()
        }),
        onSubmit: (values: initialValuesType, {setSubmitting}: FormikHelpers<initialValuesType>) => {
            if (formik.values.textMessage.trim().length) {
                dispatch(SendMessageButtonAC(values.textMessage) as any);
                formik.resetForm()
            }
            setSubmitting(false);
        },

    })

    return (
        <div className={s.wrapper_MessagesCompanion}>
            <div className={s.overflow_for_MessagesCompanion}>
                {messages.map((m: messagesTypes) => {

                    if (m.id === profile.userId.toString()) {
                        return <YouMessages key={m.id} message={m.message}/>
                    } else {
                        return <YourFriendMessage key={m.id} message={m.message}/>
                    }
                })}
            </div>

            <div className={s.mess_com_textarea}>
                <form className={s.form_text}
                      onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                              formik.handleSubmit(e)
                          }
                      }}>
                    <input
                        name="textMessage"
                        id="textMessage"
                        type="textarea"
                        value={formik.values.textMessage}
                        onChange={formik.handleChange}
                        className={s.textarea}
                        placeholder="wright please"

                    />
                </form>
                <form onSubmit={formik.handleSubmit}>
                    <Button name={'send'} disabled={!formik.isValid}/>
                </form>
            </div>
        </div>
    );
};

export default MessagesCompanion;
