import axios from 'axios';

const getPackageApi = () => {
	const [count, page] = [10, 1];

	return axios.post('https://planmy.herokuapp.com/package/get-packages', {
		count,
		page,
	});
};

export default getPackageApi;
