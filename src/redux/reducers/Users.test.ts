
import {
    SetCurrentPage,
    SetUsersAC,
    setUsersTotalCount,
    ToggleIsFetching,
    users,
    UsersReducer
} from './Users-reducer';

const id = 209087
const initialState = {
    users: [
        {
            id: 20908752, name: 'Igor', status: 'hello hackers everything',
            photos:{
                small:'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
                large:''
            } ,
            followed: true
        },
        {
            id: 20908753, name: 'Dasha', status: 'hello hackers',
            photos:{
                small:'https://trikky.ru/wp-content/blogs.dir/1/files/2016/12/Avatar_1481048766783.png',
                large:''
            } ,
            followed: false
        },
        {
            id: id, name: 'Nina', status: 'good game',
            photos:{
                small:'https://games.mail.ru/pre_xl_resize/hotbox/content_files//gallery/2020/12/11/7421d4ff88134f7a9c0cf86ac846e2e9.png',
                large:''
            } ,
            followed: true
        }
    ],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    portionsSize: 8,
    isFetching: true,
    followingInProgress:[]
}

test('correct set users from API', () => {
    const users:Array<users> = [
        {
            id: 20908756, name: 'No Name', status: 'no status',
            photos:{
                small:'no small photo',
                large:'no large photo'
            } ,
            followed: true
        },
        {
            id: 20908759, name: 'No Name two', status: 'no status two',
            photos:{
                small: 'no small photo two',
                large: 'no large photo two'
            } ,
            followed: false
        }
    ]
    const action = SetUsersAC(users)
    const finishState = UsersReducer(initialState, action)

    expect(finishState).not.toBe(initialState)
    expect(finishState.users.length).toBe(2)
    expect(finishState.users[1].name).toBe('No Name two')
    expect(finishState.users[1].photos.small).toBe('no small photo two')
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