import axios from 'axios';

const getFactsImageApi = () => {
	return axios.get('https://planmy.herokuapp.com/blog/get-facts');
};

export default getFactsImageApi;
