import {connect} from 'react-redux';
import {AppStateType} from '../../../../../../redux/store/redux-store';
import MessagesCompanion from '../MessagesCompanion';
import {
    messagesTypes,
    SendChangeMessageButtonAC,
    SendMessageButtonAC
} from '../../../../../../redux/reducers/MessagesPage-reducer';
import { Dispatch } from 'redux';
import {profileInfoTypes} from '../../../../profile/Profile';

export type mapDispatchToPropsType = {
    sendMessage: () => void
    sendChangeMessage: (NewText:string) => void
}

export type mapStateToPropsType = {
    newMessageText:string
    messages:Array<messagesTypes>
}

const mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        newMessageText: state.MessagesPage.newMessageText,
        messages:state.MessagesPage.messages
    }
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(SendMessageButtonAC())
        },
        sendChangeMessage: (NewText:string) => {
            dispatch(SendChangeMessageButtonAC(NewText))
        }}

}


export const MessagesCompanionContainer = connect(mapStateToProps,
    mapDispatchToProps)
(MessagesCompanion)