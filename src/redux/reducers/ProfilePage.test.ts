import {v1} from 'uuid';
import {AddChangePostAC, AddPostAC, initialStateType, ProfilePageReducer} from './ProfilePage-reducer';
 const initialState: initialStateType = {
    posts: [
        {
            id: v1(),
            message: 'Hi, how are you?',
            likesCount: 12,
            profilePhoto: '/static/media/profilePhoto.5ca85af7df747cdacde9.jpeg'
        },
        {
            id: v1(),
            message: 'It\'s my first post',
            likesCount: 11,
            profilePhoto: '/static/media/profilePhoto1.d5cde56cdb4a33410ead.jpg'
        },
        {
            id: v1(),
            message: 'Bla-bla-bla',
            likesCount: 10,
            profilePhoto: '/static/media/profilePhoto2.bf50647337338a335ccd.jpeg'
        },
        {
            id: v1(),
            message: 'Hi, how are you?',
            likesCount: 12,
            profilePhoto: '/static/media/profilePhoto3.89ba50aeb7cf370e9c58.jpg'
        },
    ],
    NewPostText: ''
 }
test('correct add post', () => {


    const action = AddPostAC()
    const updateState = ProfilePageReducer(initialState, action)

    expect(initialState.posts.length).not.toBe(updateState.posts.length)
    expect(updateState.posts[0].likesCount).toBe(0)
    expect(updateState.posts[0].message).toBe(updateState.NewPostText)
})

test('correct wright letter', () => {

    const text = 'hello'
    const action = AddChangePostAC(text)
    const updateState = ProfilePageReducer(initialState, action)

    expect(updateState.NewPostText).toBe('hello')

})