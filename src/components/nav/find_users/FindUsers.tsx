import React, {useEffect, useState} from 'react';
import s from './FindUsers.module.css'
import UserLogo from './user_logo/UserLogo';
import UserStatus from './user_status/UserStatus';
import FollowButton from './follow_button/FollowButton';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, AppStateType} from '../../../redux/store/redux-store';
import {follow, getUsers, unfollow, users} from '../../../redux/reducers/Users-reducer';
import Button from '../profile/profile_posts/textarea_send/button/Button';
import {ExampleAnimation} from '../../assets/lottie/LottieWaitingAnimation';



const UserLogoMemo = React.memo(UserLogo)
const FollowButtonMemo = React.memo(FollowButton)
const UserStatusMemo = React.memo(UserStatus)



export const FindUsers = () => {


    const dispatch:AppDispatch = useDispatch();
    const users = useSelector<AppStateType, Array<users>>(state => state.FindUsersPage.users)
    const currentPage = useSelector<AppStateType, number>(state => state.FindUsersPage.currentPage)
    const pageSize = useSelector<AppStateType, number>(state => state.FindUsersPage.pageSize)
    const totalUsersCount = useSelector<AppStateType,number>(state => state.FindUsersPage.totalUsersCount)
    const portionsSize = useSelector<AppStateType,number>(state => state.FindUsersPage.portionsSize)
    const isFetching =useSelector<AppStateType,boolean>(state => state.FindUsersPage.isFetching)
    const followingInProgress =useSelector<AppStateType,Array<number>>(state => state.FindUsersPage.followingInProgress)

    let PagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= PagesCount; i++) pages.push(i);
    let portionCount = Math.ceil(PagesCount / portionsSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionsSize + 1;
    let rightPortionPageNumber = portionNumber * portionsSize;

   useEffect(()=> {dispatch(getUsers(currentPage, pageSize) as any)},[])

   const  onPageChange = (pageNumber:number) => {
       dispatch(getUsers(pageNumber, pageSize) as any);
    };


    return (

    <div className={s.global_wrapper_find_users}>
        {isFetching ? <div className={s.fetching_users}><ExampleAnimation/> </div>: null}
            <div className={s.userTitle}>Users</div>
            <div className={s.pagination_all_wrapper}>

                <div className={s.buttonContainer}>
                    { portionNumber > 1 ?
                        <Button onClickHandler={()=> {setPortionNumber(portionNumber - 1)}} name={'back'}></Button>
                    :
                        <Button disabled={true} onClickHandler={()=> {setPortionNumber(portionNumber - 1)}} name={'back'}></Button>
                    }
                    <div className={s.pagination}>
                        {pages.filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                            .map((p, i) => {
                                return (
                                    <div
                                        key={i}
                                        className={`${s.countNoActive} ${
                                            currentPage === p && s.count
                                        }`}
                                        onClick={(e) => {
                                            onPageChange(p);
                                        }}
                                    >
                                        {p}
                                    </div>
                                );
                            })}
                    </div>
                    {portionCount > portionNumber ?
                        <Button onClickHandler={()=> {setPortionNumber(portionNumber + 1)}} name={'next'}></Button>
                    :
                        <Button disabled={true} onClickHandler={()=> {setPortionNumber(portionNumber + 1)}} name={'next'}></Button>
                    }
                </div>
            </div>


            {users.map((user) => {
                return (
                    <div key={user.id} className={s.all_wrapper_find_users}>

                        <UserLogoMemo logo={user.photos.small} id={user.id}/>
                        <div className={s.wrapper_status_and_name}>
                            <div className={s.user_name}>{user.name}</div>
                            <UserStatusMemo status={user.status}/>
                        </div>
                        {user.followed ?
                            <FollowButtonMemo id={user.id} followed={user.followed} name={'follow'}
                                disable={followingInProgress.some((id:number) => id === user.id)}
                                              ToggleFollowed={(id: number) => {
                                                  dispatch(follow(id) as any)
                                              }}/>
                            :
                            <FollowButtonMemo id={user.id} followed={user.followed} name={'unfollow'}
                                disable={followingInProgress.some((id:number) => id === user.id)}
                                              ToggleFollowed={(id: number) => {
                                                  dispatch(unfollow(id) as any)
                                              }}/>
                        }

                    </div>
                )
            })}

        </div>

    );
};

