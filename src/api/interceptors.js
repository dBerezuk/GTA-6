import axios from 'axios';

export const axiosClassic = axios.create({
	baseURL: import.meta.env.VITE_APP_SERVER_URL + '/api'
});