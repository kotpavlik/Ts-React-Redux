import React from 'react';
import Button from './button/Button';
import Posts from './button/posts/Posts';
import s from './ProfileTextarea.module.css';
import * as Yup from 'yup';
import { Form, FormikHelpers, useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../../redux/store/redux-store';
import {AddPostAC, postsType} from '../../../../../redux/reducers/ProfilePage-reducer';


type initialValuesType = {
    postMessage:string
}


const ProfileTextarea = React.memo(() => {

    const dispatch = useDispatch()
    const posts = useSelector<AppStateType,Array<postsType>>( state => state.ProfilePage.posts)


    let MyPosts = posts.map((p) => {
        return (<Posts key={p.id} post={p.message} profilePhoto={p.profilePhoto}/>)
    })


    const formik = useFormik({
        initialValues: {
            postMessage: ''
        },
        validationSchema: Yup.object().shape({
            postMessage: Yup.string()
        }),
        onSubmit: (values:initialValuesType, { setSubmitting }: FormikHelpers<initialValuesType>) => {
            if(formik.values.postMessage.trim().length ) {
                dispatch(AddPostAC(values.postMessage) as any);
                formik.resetForm()
            }
            setSubmitting(false);
        },

    })
    return (
        <div className={s.all_wrapper_profile_textarea}>
            <h3>Posts</h3>
            <div className={s.profile_textarea}>
                <form className={s.form_text}
                      onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        formik.handleSubmit(e)
                }}}>
                    <input
                    name="postMessage"
                    id="postMessage"
                    type="textarea"
                    value={formik.values.postMessage}
                    onChange={formik.handleChange}
                    className={s.textarea}
                    placeholder="wright please"
                />
                    {formik.touched.postMessage && formik.errors.postMessage ? (
                        <div className={s.validation}>{formik.errors.postMessage}</div>
                    ) : null}
                </form>

                <form onSubmit={formik.handleSubmit}>
                    <Button name={'send'} disabled={!formik.isValid}/>
                </form>
            </div>
            <div className={s.posts}>
                {MyPosts}
            </div>
        </div>
    );
})


export default ProfileTextarea;
