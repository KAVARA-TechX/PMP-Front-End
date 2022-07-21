import axios from 'axios';

const getBannerApi = () => {
	return axios.get('https://planmyleisure.herokuapp.com/blog/get-Banners');
};

export default getBannerApi;
