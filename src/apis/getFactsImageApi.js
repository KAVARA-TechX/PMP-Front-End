import axios from 'axios';

const getFactsImageApi = () => {
	return axios.get('https://planmyleisure.herokuapp.com/blog/get-facts');
};

export default getFactsImageApi;
