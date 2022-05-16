import {connect} from 'react-redux';
import {AppStateType} from '../../../../../../redux/store/redux-store';
import MessagesCompanion from '../MessagesCompanion';
import {SendChangeMessageButtonAC, SendMessageButtonAC} from '../../../../../../redux/reducers/MessagesPage-reducer';



const mapStateToProps = (state:AppStateType) => {
    return {
        newMessageText: state.MessagesPage.newMessageText,
        profileInfo:state.UserProfile.profileInfo,
        messages:state.MessagesPage.messages
    }
}


export const MessagesCompanionContainer = connect(mapStateToProps,
    {SendMessageButtonAC,SendChangeMessageButtonAC})
(MessagesCompanion)