import React from "react";
import s from "./Login.module.css";
import {Field, Form, Formik, FormikHelpers} from 'formik';
import * as yup from "yup";
import { Navigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/reducers/Auth-reducer';
import {AppStateType} from '../../redux/store/redux-store';

type initialValuesType = {
    email: string,
    password:string,
    rememberMe: boolean,
    confirmPassword: string,
    captcha:string
}

export const Login = React.memo(() => {

    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType,boolean>(state => state.AuthPage.isAuth)
    const CaptchaUrl = useSelector<AppStateType,string>(state => state.AuthPage.CaptchaUrl)

    const validationsSchema = yup.object().shape({
        email: yup
            .string()
            .typeError("should be a string")
            .required("required"),
        password: yup
            .string()
            .typeError("should be a string")
            .required("required"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "passwords do not match")
            .required("required"),
        captcha: yup
            .string()
            .typeError("should be a string")

    });
    const initialValues = {
        email: "",
        password: "",
        rememberMe: false,
        confirmPassword: "",
        captcha:""
    };


    const onSubmit = (values:initialValuesType, { setSubmitting, setStatus}: FormikHelpers<initialValuesType>) => {
        dispatch(login(values.email, values.password, values.rememberMe,values.captcha,setStatus) as any)
        setSubmitting(false);
    };

    if (isAuth) {
        return <Navigate to={"/profile/*"}/>
    }

    return (
        <div className={s.loginWrapper}>
            <div className={s.formStyles}>
                <Formik
                    initialValues={initialValues}
                    validateOnBlur
                    onSubmit={onSubmit}
                    validationSchema={validationsSchema}
                >
                    {({ errors, touched, isValid, dirty, status }) => (
                        <Form>
                            <div className={s.form}>
                                <div>
                                    <label htmlFor={`email`}>email</label>
                                    <br />
                                    <Field
                                        className={s.inputLogForm}
                                        type={`email`}
                                        name={`email`}
                                        placeholder={"email"}
                                    />
                                    {touched.email && errors.email && (
                                        <div className={s.error}>{errors.email}</div>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor={`password`}>password</label>
                                    <br />
                                    <Field
                                        className={s.inputLogForm}
                                        type={`password`}
                                        name={`password`}
                                        placeholder={"Password"}
                                    />
                                    {touched.password && errors.password && (
                                        <div className={s.error}>{errors.password}</div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor={`confirmPassword`}>confirm password</label>
                                    <br />
                                    <Field
                                        className={s.inputLogForm}
                                        type={`password`}
                                        name={`confirmPassword`}
                                        placeholder={`confirm password`}
                                    />
                                </div>
                                {touched.confirmPassword && errors.confirmPassword && (
                                    <div className={s.error}>{errors.confirmPassword}</div>
                                )}
                            </div>

                            <div className={s.rememberMe}>
                                <Field
                                    className={s.check}
                                    type={`checkbox`}
                                    name={`rememberMe`}
                                />
                                <label className={s.checkLabel} htmlFor={`rememberMe`}>
                                   remember me
                                </label>
                            </div>

                            <div className={s.errorAPItext}> {status} </div>
                            <div className={s.captcha}>
                                {CaptchaUrl && <img src={CaptchaUrl}/>}
                                {CaptchaUrl &&
                                    <div>
                                        <label htmlFor={`captcha`}>enter numbers and letters</label>
                                        <br />
                                        <Field
                                            className={s.inputLogForm}
                                            type={`input`}
                                            name={`captcha`}
                                            placeholder={"captcha"}
                                        />
                                        {touched.email && errors.email && (
                                            <div className={s.error}>{errors.email}</div>
                                        )}
                                    </div>}
                            </div>
                            <div className={s.buttonWrapper}>
                                <button
                                    className={s.buttonLog}
                                    disabled={!isValid && !dirty}
                                    type={`submit`}
                                >
                                    send
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
})
