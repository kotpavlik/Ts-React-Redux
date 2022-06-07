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
            debugger
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