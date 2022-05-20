import { connect } from "react-redux";
import {Dispatch} from 'redux';
import {FindUsers} from './FindUsers';
import {FollowedToggleAC, users} from '../../../redux/reducers/Users-reducer';
import {AppStateType} from '../../../redux/store/redux-store';

export type mapStateToPropsType = {
    users: Array<users>
}
export type mapDispatchToPropsType = {
    ToggleFollowed: (value:boolean,id:string) => void
}


const mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        users: state.FindUsersPage
    }
}

const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        ToggleFollowed: (value:boolean,id:string) => {
            dispatch(FollowedToggleAC(value,id))
        }
    }
}
export const FindUsersContainer = connect(mapStateToProps,mapDispatchToProps)(FindUsers)