import {connect} from 'react-redux';
import ProfileTextarea from './ProfileTextarea';
import {AppStateType} from '../../../../../redux/store/redux-store';
import {AddChangePostAC, AddPostAC, postsType} from '../../../../../redux/reducers/ProfilePage-reducer';
import {Dispatch} from 'redux';

export type mapStateToProps = {
    NewPostText:string
    posts: Array<postsType>
}
export type mapDispatchToProps = {
    addPost: () => void
    addChangePost: (text:string) => void
}
const mapStateToProps = (state:AppStateType):mapStateToProps => {
    return {
        NewPostText: state.ProfilePage.NewPostText,
        posts: state.ProfilePage.posts,
    }
}

const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToProps => {
    return {
        addPost: () => {
            dispatch(AddPostAC())
        },
        addChangePost: (text:string) => {
           dispatch(AddChangePostAC(text))
        }
    }
}
export const ProfileTextareaContainer = connect(mapStateToProps,mapDispatchToProps)(ProfileTextarea)