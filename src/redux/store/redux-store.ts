import { createStore,applyMiddleware,compose, combineReducers} from '@reduxjs/toolkit'
import  thunkMiddleware from 'redux-thunk'
import {UserProfileReducer} from '../reducers/UserProfile-reducer';
import {ProfilePageReducer} from '../reducers/ProfilePage-reducer';
import {MessagesPageReducer} from '../reducers/MessagesPage-reducer';
import {UsersReducer} from '../reducers/Users-reducer';
import {loadState, saveState} from '../../utilities/localStorage';
import {AuthReducer} from '../reducers/Auth-reducer';
import {appReducer} from '../reducers/App-reducer';

// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }  // for redux addon in browser


const rootReducer = combineReducers({
    MessagesPage: MessagesPageReducer,
    UserProfile: UserProfileReducer,
    ProfilePage: ProfilePageReducer,
    FindUsersPage : UsersReducer,
    AuthPage : AuthReducer,
    InitializedApp : appReducer
})

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // for redux addon in browser
export const store = createStore(rootReducer,loadState(),applyMiddleware(thunkMiddleware)) ;

store.subscribe(() => {
    saveState({
        MessagesPage:store.getState().MessagesPage,
        UserProfile:store.getState().UserProfile,
        ProfilePage:store.getState().ProfilePage,
        FindUsersPage:store.getState().FindUsersPage,
        AuthPage:store.getState().AuthPage,
        InitializedApp:store.getState().InitializedApp
    })
})

export type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export type AppDispatch = typeof store.dispatch
