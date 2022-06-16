import {AppDispatch} from '../store/redux-store';
import {securityAPI, userAuthAPI} from '../../api/api';

export type initialStateAuth = {
    id: number
    email: string
    login: string
    isAuth: boolean
    CaptchaUrl: string
}
export type globalAuthType = setUserAuthDataType | getCaptchaUrlSuccessType

const initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false,
    CaptchaUrl: ''
}

export const AuthReducer =(state:initialStateAuth = initialState,action:globalAuthType)=> {
   switch(action.type){
       case 'SET_USER_DATA':
       case 'GET_CAPTCHA_URL':
           return {
               ...state,
               ...action.payload
           };
       default:
           return state

   }
}



type setUserAuthDataType = ReturnType<typeof setUserAuthData>
export const setUserAuthData = (id:number, email:string, login:string, isAuth:boolean) => {

    return {
        type: 'SET_USER_DATA',
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const
}

type getCaptchaUrlSuccessType = ReturnType<typeof getCaptchaUrlSuccess>
export const getCaptchaUrlSuccess = (CaptchaUrl:string) => {
    return {
        type: 'GET_CAPTCHA_URL',
        payload: {
            CaptchaUrl
        }
    } as const
}

export const getAuthAboutUs = () => {
    return async(dispatch:AppDispatch) => {
        let response = await userAuthAPI.getAuth();
        if (response.data.resultCode === 0) {
            let {
                id,
                email,
                login
            } = response.data.data;
            dispatch(setUserAuthData(id, email, login, true));
        }
    }
}

export type ThunkType =  (dispatch: AppDispatch) => Promise<void>

export const getCaptchaUrl = ():ThunkType => {
    return async(dispatch:AppDispatch) => {
        let response = await securityAPI.getCaptcha();
        let CaptchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(CaptchaUrl))
    }
}
export const login = (email:string, password:string, rememberMe:boolean, captcha:string, setStatus:(status:string)=>void) => {
    return async(dispatch:AppDispatch & any) => {
        let response = await userAuthAPI.loginApi(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            await dispatch(getAuthAboutUs());
            dispatch(getCaptchaUrlSuccess(''));
        } else {
            if (response.data.resultCode === 10) {
                await dispatch(getCaptchaUrl())
            }
           setStatus(response.data.messages)
        }
    }
}
export const logout = () => {
    return async(dispatch:AppDispatch | any) => {
        let response = await userAuthAPI.logoutApi();
        if (response.data.resultCode === 0) {
            dispatch(setUserAuthData(0, '', '', false));
        }
    }
}