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
        debugger
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
    }
};