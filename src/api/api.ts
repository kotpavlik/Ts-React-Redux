import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'd29f106d-431e-4e24-b36e-8c4bcc59630f'
    }
})

type ItemsType = {
    name: string
    id: number
    followed: boolean
    photos: {
        small: string
        large: string
    }
    status: string
    uniqueUrlName: string

}
export type UsersAPIType = {
    error: string
    items: Array<ItemsType>
    totalCount: number
}
export type ProfileAPIType = {
    aboutMe: string
    contacts: {
        facebook: string
        github: string
        instagram: string
        mainLink: string
        twitter: string
        vk: string
        website: string
        youtube: string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        small: string
        large: string
    }
    userId: number
}
export type FollowUnfollowType = {
    data: {}
    fieldsErrors: Array<string>
    messages: string
    resultCode: number
}
type DataForAuthType = {
    email: string
    id: number
    login: string
}
type DataForLoginType = {
    userId: number
}
export type ResponseAuthAPIType<D> = {
    data: D
    fieldsErrors: Array<string>
    messages: string
    resultCode: number
}


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersAPIType>(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
    }
};

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileAPIType>(`profile/` + userId).then(response => {
            return response.data
        });
    },

};

export const followAPI = {
    Follow(id: number) {
        return instance.post<FollowUnfollowType>(`follow/${id}`, {}).then(response => {
            return response.data
        });
    },
    Unfollow(id: number) {
        return instance.delete<FollowUnfollowType>(`follow/${id}`).then(response => {
            return response.data
        });
    }
};


export const userAuthAPI = {
    getAuth() {
        return instance.get<ResponseAuthAPIType<DataForAuthType>>(`auth/me`).then(response => {
            return response
        });
    },
    loginApi(email: string, password: string, rememberMe: boolean = false, captcha: string) {
        return instance.post<ResponseAuthAPIType<DataForLoginType>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        }).then(response => {
            return response
        });
    },
    logoutApi() {
        return instance.delete<ResponseAuthAPIType<{}>>(`auth/login`).then(response => {
            return response
        });
    }

};
export const securityAPI = {
    getCaptcha() {
        return instance.get<{url:string}>(`security/get-captcha-url`).then(response => {
            return response
        });
    }
}