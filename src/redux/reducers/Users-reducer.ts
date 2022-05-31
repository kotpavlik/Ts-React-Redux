
import {usersAPI} from '../../api/api';
import {AppDispatch} from '../store/redux-store';

export type initialStateType = {
    users: Array<users>
    pageSize:number
    totalUsersCount:number
    currentPage:number
    portionsSize: number
    isFetching:boolean

}

export  type users = {
    id: string
    name: string
    status: string
    photos: {
        small:string
        large:string
    }
    followed: boolean
}


const initialState:initialStateType = {
    users: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    portionsSize: 5,
    isFetching:true

}


export const UsersReducer = (state: initialStateType = initialState, action: UsersReducerACType): initialStateType => {
    switch (action.type) {
        case 'FOLLOWED_TOGGLE': {
                return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: action.value} : el)}
        }
        case 'SET_USERS' : {
            return {...state,users:action.users}
        }
        case 'TOGGLE_IS_FETCHING' : {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case 'SET_CURRENT_PAGE': {
           return {
               ...state,
               currentPage: action.currentPage
           }
        }
        case 'SET_USERS_TOTAL_COUNT' : {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        default:
            return state
    }
};

export type UsersReducerACType =
    FollowedToggleACType | SetUsersACType | ToggleIsFetchingType |
    setCurrentPageType | setUsersTotalCount

export type FollowedToggleACType = ReturnType<typeof FollowedToggleAC>
export const FollowedToggleAC = (value: boolean, id: string) => {
    return {
        type: 'FOLLOWED_TOGGLE',
        value,
        id
    } as const
}

export type SetUsersACType = ReturnType<typeof SetUsersAC>
export const SetUsersAC = (users:Array<users>)=> {
    return {
        type:'SET_USERS',
        users
    } as const
}

export type ToggleIsFetchingType = ReturnType<typeof ToggleIsFetching>
export const ToggleIsFetching = (isFetching:boolean) => ({
    type: 'TOGGLE_IS_FETCHING',
    isFetching
} as const
);

export type setCurrentPageType = ReturnType<typeof SetCurrentPage>
export const SetCurrentPage = (currentPage:number) => ({
    type: 'SET_CURRENT_PAGE',
    currentPage
} as const
);

export type setUsersTotalCount = ReturnType<typeof setUsersTotalCount>
export const setUsersTotalCount = (totalUsersCount:number) => ({
    type: 'SET_USERS_TOTAL_COUNT',
    count: totalUsersCount
} as const
);


    export const getUsers = (page:number, pageSize:number) => {
        return async(dispatch:AppDispatch) => {
            dispatch(ToggleIsFetching(true));
            dispatch(SetCurrentPage(page))
            let data = await usersAPI.getUsers(page, pageSize);
            if (data) {
                dispatch(ToggleIsFetching(false));
                dispatch(SetUsersAC(data.items));
                dispatch(setUsersTotalCount(data.totalCount));}

        }
}
