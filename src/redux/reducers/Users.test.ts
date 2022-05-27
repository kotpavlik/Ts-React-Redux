import {v1} from 'uuid';
import {FollowedToggleAC, UsersReducer} from './Users-reducer';

test('correct follow-unfollow', () => {
    const id = v1()
    const initialState = {
        users:[
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
        ]}

    const value = false

    const action = FollowedToggleAC(value,id)
    const finishState = UsersReducer(initialState,action)

    expect(initialState).not.toBe(finishState)
    expect(finishState.users[2].followed).toBe(false)
})