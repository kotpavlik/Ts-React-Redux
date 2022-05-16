import {connect} from 'react-redux';
import ProfileTextarea from './ProfileTextarea';
import {AppStateType} from '../../../../../redux/store/redux-store';
import {AddChangePostAC, AddPostAC} from '../../../../../redux/reducers/ProfilePage-reducer';

const mapStateToProps = (state:AppStateType) => {
    return {
        NewPostText: state.ProfilePage.NewPostText,
        posts: state.ProfilePage.posts,
    }
}
export const ProfileTextareaContainer = connect(mapStateToProps,
    { AddPostAC,AddChangePostAC}
)(ProfileTextarea)