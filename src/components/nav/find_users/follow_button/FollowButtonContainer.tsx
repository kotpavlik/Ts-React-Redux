import { connect } from "react-redux";
import FollowButton from './FollowButton';
import {FollowedToggleAC, users} from '../../../../redux/reducers/Users-reducer';
import {AppStateType} from '../../../../redux/store/redux-store';
import {Dispatch} from 'redux';

export type mapStateToPropsType = {
    followed: Array<users>
}
export type mapDispatchToPropsType = {
    ToggleFollowed: (value:boolean,id:string) => void
}


const mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        followed: state.FindUsersPage
    }
}

const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        ToggleFollowed: (value:boolean,id:string) => {
            dispatch(FollowedToggleAC(value,id))
        }
    }
}
export const FollowButtonContainer = connect(mapStateToProps,mapDispatchToProps)(FollowButton)