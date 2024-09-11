import axios from "../AxiosClient";

export const fetchProfile = () => {
    return axios.get(`/profile`);
}

export const fetchDailyLogs = () => {
    return axios.get(`/daily-log`);
}

export const createDailyLogs = (payload) => {
    return axios.post(`/daily-log`, payload);
}
