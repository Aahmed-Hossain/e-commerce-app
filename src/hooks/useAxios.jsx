import axios from "axios";

const instance = axios.create({
    baseURL: `https://fire-up-restaurant-server.vercel.app`,
    withCredentials: true
})
const useAxios = () => {
    return instance;
};

export default useAxios;