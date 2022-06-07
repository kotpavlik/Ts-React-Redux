import {connect} from 'react-redux';
import UsersInDialogs from './UsersInDialogs';
import {AppStateType} from '../../../../../redux/store/redux-store';

const mapDispatchToPropsType = (state:AppStateType) => {
    return {

        messages:state.MessagesPage.messages
    }
}

export const DialogUsersContainer = connect(mapDispatchToPropsType)(UsersInDialogs)