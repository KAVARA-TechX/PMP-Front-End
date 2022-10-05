import axios from 'axios';

const getFactsImageApi = () => {
	return axios.get('/blog/get-facts');
};

export default getFactsImageApi;
