import { axiosClassic } from '@/api/interceptors.js';

class RequestService {
	_url = '/request';

	constructor() {
	}

	countFeeds() {
		return axiosClassic.get(this._url);
	}

	createFeed(data) {
		return axiosClassic.post(this._url, data);
	}
}

export default new RequestService;