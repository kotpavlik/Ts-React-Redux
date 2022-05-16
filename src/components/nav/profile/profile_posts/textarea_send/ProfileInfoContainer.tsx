import ProfileInfo from '../../profile_info/ProfileInfo';
import {AppStateType} from '../../../../../redux/store/redux-store';
import {SendChangeMessageButtonAC} from '../../../../../redux/reducers/MessagesPage-reducer';
import {connect} from 'react-redux';

const mapStateToProps = (state:AppStateType) => {
    return {
        profileInfo: state.UserProfile.profileInfo
    }
}

export const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo)