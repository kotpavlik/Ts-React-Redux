import React from 'react';
import {ActionsTypes, ProfilePageType} from '../state/state';
import {postsType} from '../../components/nav/profile/Profile';
import {v1} from 'uuid';





export const ProfilePageReducer = (state:ProfilePageType,action:ActionsTypes) => {
    switch (action.type) {
        case 'ADD_POST':{
            const NewPost: postsType = {
                id: v1(),
                message: state.NewPostText,
                likesCount: 0,
                profilePhoto: '/static/media/profilePhoto.5ca85af7df747cdacde9.jpeg'
            }
            let stateCopy = {...state,NewPostText:'',posts:[NewPost,...state.posts]}
            return stateCopy;
            }
        case 'ADD_CHANGE_POST' :{
            let stateCopy = {...state,NewPostText:action.text}
            return stateCopy;
        }
        default:
            return state;
    }
}

export const AddPostAC = () => {
    return {
        type: 'ADD_POST'
    } as const
}
export const AddChangePostAC = (text:string) => {
    return {
        type: 'ADD_CHANGE_POST',
        text
    } as const
}

