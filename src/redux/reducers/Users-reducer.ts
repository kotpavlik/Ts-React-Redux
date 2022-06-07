import {followAPI, usersAPI} from '../../api/api';
import {AppDispatch} from '../store/redux-store';

export type initialStateType = {
    users: Array<users>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    portionsSize: number
    isFetching: boolean
    followingInProgress: Array<number>

}

export  type users = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}


const initialState: initialStateType = {
    users: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    portionsSize: 5,
    followingInProgress: [],
    isFetching: true,
}


export const UsersReducer = (state: initialStateType = initialState, action: UsersReducerACType): initialStateType => {
    switch (action.type) {
        case 'SET_USERS' : {
            return {...state, users: action.users}
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
        case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        case 'TOGGLE_FOLLOW' : {
            return {
                ...state,
                users: state.users.map(userObj => {
                    if (userObj.id === action.userId) {
                        return {
                            ...userObj,
                            followed: !userObj.followed
                        }
                    }
                    return userObj;
                })
            }
        }
        default:
            return state
    }
};

export type UsersReducerACType =
    SetUsersACType | ToggleIsFetchingType |
    setCurrentPageType | setUsersTotalCount | toggleFollowingInProgress | toggleFollowType


export type SetUsersACType = ReturnType<typeof SetUsersAC>
export const SetUsersAC = (users: Array<users>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}

export type ToggleIsFetchingType = ReturnType<typeof ToggleIsFetching>
export const ToggleIsFetching = (isFetching: boolean) => ({
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const
);

export type setCurrentPageType = ReturnType<typeof SetCurrentPage>
export const SetCurrentPage = (currentPage: number) => ({
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const
);

export type setUsersTotalCount = ReturnType<typeof setUsersTotalCount>
export const setUsersTotalCount = (totalUsersCount: number) => ({
        type: 'SET_USERS_TOTAL_COUNT',
        count: totalUsersCount
    } as const
);

export type toggleFollowingInProgress = ReturnType<typeof toggleFollowingInProgress>
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const
}
export type toggleFollowType = ReturnType<typeof toggleFollow>
export const toggleFollow = (userId: number) => ({
        type: 'TOGGLE_FOLLOW',
        userId
    } as const
);


export const getUsers = (page: number, pageSize: number) => {
    return async (dispatch: AppDispatch) => {
        dispatch(ToggleIsFetching(true));
        dispatch(SetCurrentPage(page))
        let data = await usersAPI.getUsers(page, pageSize);
        if (data) {
            dispatch(ToggleIsFetching(false));
            dispatch(SetUsersAC(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        }

    }
}

export const follow = (id: number) => {
    return async (dispatch: AppDispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        let data = await followAPI.Unfollow(id);
        if (data.resultCode === 0) {
            dispatch(toggleFollow(id));
        }
        dispatch(toggleFollowingInProgress(false, id));
    }
}
export const unfollow = (id: number) => {
    return async (dispatch: AppDispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        let data = await followAPI.Follow(id);
        if (data.resultCode === 0) {
            dispatch(toggleFollow(id));
        }
        dispatch(toggleFollowingInProgress(false, id));
    }
}