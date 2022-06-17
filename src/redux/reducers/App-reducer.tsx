import {AppDispatch} from '../store/redux-store';
import {getAuthAboutUs} from './Auth-reducer';
import {getUsers} from './Users-reducer';


export type initialStateType = {
    initialized:boolean
}
const initialState = {
    initialized:false
}

export const appReducer = (state:initialStateType = initialState,action:AllInitializedType): typeof initialState => {
    switch(action.type){
        case 'SET_INITIALIZED' : {
            return {
                ...state,initialized:true
            }
        }
        default:
            return state
    }
}

export type AllInitializedType = initializedACType
export type initializedACType = ReturnType<typeof initializedAC>
const initializedAC =()=> {
    return {
        type:'SET_INITIALIZED'
    } as const
}

export const initializedApp = () => {
    return (dispatch:AppDispatch) =>{
        let promise = dispatch(getAuthAboutUs() as any);
        Promise.all([promise])
            .then(()=> {
                dispatch(initializedAC())
            })
    }
}