import {v1} from 'uuid';

export type initialStateType = Array<users>
export  type users = {
    id: string
    name: string
    status: string
    photos: string
    followed: boolean
}


const initialState = [
    {
        id: v1(), name: 'Igor', status: 'hello hackers everything',
        photos: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
        followed: true
    },
    {
        id: v1(), name: 'Dasha', status: 'hello hackers',
        photos: 'https://trikky.ru/wp-content/blogs.dir/1/files/2016/12/Avatar_1481048766783.png',
        followed: false
    },
    {
        id: v1(), name: 'Nina', status: 'good game',
        photos: 'https://games.mail.ru/pre_xl_resize/hotbox/content_files//gallery/2020/12/11/7421d4ff88134f7a9c0cf86ac846e2e9.png',
        followed: true
    }
]

export const UsersReducer = (state: initialStateType = initialState, action: UsersReducerACType): initialStateType => {
    switch (action.type) {
        case 'FOLLOWED_TOGGLE': {
            return state.map(el => el.id === action.id ? {...el,followed:action.value}:el)
        }
        default:
            return state
    }
};

export type UsersReducerACType = FollowedToggleACType

export type FollowedToggleACType = ReturnType<typeof FollowedToggleAC>
export const FollowedToggleAC = (value: boolean,id:string) => {
    return {
        type: 'FOLLOWED_TOGGLE',
        value,
        id
    } as const
}

// export type SetUsersACType = ReturnType<typeof SetUsersAC>
// export const SetUsersAC =()=> {
//     return {
//         type:'SET_USERS'
//     }
// }
