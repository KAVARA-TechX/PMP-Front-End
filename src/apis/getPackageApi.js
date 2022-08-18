import axios from 'axios';

const getPackageApi = () => {
	const [count, page] = [15, 1];

	return axios.get('https://planmy.herokuapp.com/package/get-packages', {
		count,
		page,
	});
};

export default getPackageApi;
