import { createStore,applyMiddleware, combineReducers} from '@reduxjs/toolkit'
import  thunkMiddleware from 'redux-thunk'
import {UserProfileReducer} from '../reducers/UserProfile-reducer';
import {ProfilePageReducer} from '../reducers/ProfilePage-reducer';
import {MessagesPageReducer} from '../reducers/MessagesPage-reducer';
import {UsersReducer} from '../reducers/Users-reducer';




const rootReducer = combineReducers({
    MessagesPage: MessagesPageReducer,
    UserProfile: UserProfileReducer,
    ProfilePage: ProfilePageReducer,
    FindUsersPage : UsersReducer
})

export type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>


export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware)) ;


// export const setupStore = () => {
//     return  configureStore (
//         {reducer: rootReducer}
//     );
// }

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof rootReducer>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppStore = ReturnType<typeof setupStore>
// export type AppDispatch = ['dispatch']