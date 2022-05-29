import {v1} from 'uuid';
import {
    FollowedToggleAC,
    SetCurrentPage,
    SetUsersAC,
    setUsersTotalCount,
    ToggleIsFetching,
    users,
    UsersReducer
} from './Users-reducer';

const id = v1()
const initialState = {
    users: [
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
            id: id, name: 'Nina', status: 'good game',
            photos: 'https://games.mail.ru/pre_xl_resize/hotbox/content_files//gallery/2020/12/11/7421d4ff88134f7a9c0cf86ac846e2e9.png',
            followed: true
        }
    ],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    portionsSize: 8,
    isFetching: true
}

test('correct follow-unfollow', () => {
    const value = false
    const action = FollowedToggleAC(value, id)
    const finishState = UsersReducer(initialState, action)

    expect(initialState).not.toBe(finishState)
    expect(finishState.users[2].followed).toBe(false)
})
test('correct set users from API', () => {
    const users:Array<users> = [
        {
            id: v1(), name: 'No Name', status: 'no status',
            photos: 'no photo',
            followed: true
        },
        {
            id: v1(), name: 'No Name two', status: 'no status two',
            photos: 'no photo two ',
            followed: false
        }
    ]
    const action = SetUsersAC(users)
    const finishState = UsersReducer(initialState, action)

    expect(finishState).not.toBe(initialState)
    expect(finishState.users.length).toBe(2)
    expect(finishState.users[1].name).toBe('No Name two')
})
test('correct toggle is fetching', () => {
    const isFetching:boolean = false
    const action = ToggleIsFetching(isFetching)
    const finishState = UsersReducer(initialState, action)

    expect(finishState.isFetching).toBe(false)
})
test('correct setting current page', () => {
    const currentPage:number = 2;
    const action = SetCurrentPage(currentPage)
    const finishState = UsersReducer(initialState, action)

    expect(finishState.currentPage).toBe(2)
})
test('correct setting users total count', () => {
    const totalCount:number = 5;
    const action = setUsersTotalCount(totalCount)
    const finishState = UsersReducer(initialState, action)

    expect(finishState.totalUsersCount).toBe(5)
})