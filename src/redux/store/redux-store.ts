import { createStore,applyMiddleware, combineReducers} from '@reduxjs/toolkit'
import  thunkMiddleware from 'redux-thunk'
import {UserProfileReducer} from '../reducers/UserProfile-reducer';
import {ProfilePageReducer} from '../reducers/ProfilePage-reducer';
import {MessagesPageReducer} from '../reducers/MessagesPage-reducer';
import {UsersReducer} from '../reducers/Users-reducer';
import {loadState, saveState} from '../../utilities/localStorage';
import {AuthReducer} from '../reducers/Auth-reducer';





const rootReducer = combineReducers({
    MessagesPage: MessagesPageReducer,
    UserProfile: UserProfileReducer,
    ProfilePage: ProfilePageReducer,
    FindUsersPage : UsersReducer,
    AuthPage : AuthReducer
})


export const store = createStore(rootReducer,loadState(),applyMiddleware(thunkMiddleware)) ;

store.subscribe(() => {
    saveState({
        MessagesPage:store.getState().MessagesPage,
        UserProfile:store.getState().UserProfile,
        ProfilePage:store.getState().ProfilePage,
        FindUsersPage:store.getState().FindUsersPage,
        AuthPage:store.getState().AuthPage
    })
})

export type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export type AppDispatch = typeof store.dispatch
