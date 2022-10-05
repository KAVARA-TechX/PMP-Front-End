import axios from 'axios';

const getBannerApi = () => {
	return axios.get('/blog/get-Banners');
};

export default getBannerApi;
