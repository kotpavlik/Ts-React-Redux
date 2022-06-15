import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "d29f106d-431e-4e24-b36e-8c4bcc59630f"
    }
})

export const usersAPI = {
    getUsers(currentPage:number, pageSize:number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
    }
};

export const profileAPI = {
    getProfile(userId:number) {
        return instance.get(`profile/` + userId).then(response => {
            return response.data
        });
    },

};

export const followAPI = {
    Follow(id:number) {
        return instance.post(`follow/${id}`, {}).then(response => {
            return response.data
        });
    },
    Unfollow(id:number) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        });
    }
};


export const userAuthAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(response => {
            return response
        });
    },
    loginApi(email:string, password:string, rememberMe:boolean = false, captcha:string) {
        return instance.post(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        }).then(response => {
            return response
        });
    },
    logoutApi() {
        return instance.delete(`auth/login`).then(response => {
            return response
        });
    }

};
export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`).then(response => {
            return response
        });
    }
}