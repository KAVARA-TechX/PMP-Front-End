import axios from 'axios';

const getBannerApi = () => {
	return axios.get('https://planmy.herokuapp.com/blog/get-Banners');
};

export default getBannerApi;
