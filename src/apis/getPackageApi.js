import axios from 'axios';

const getPackageApi = () => {
	const [count, page] = [3, 1];

	return axios.post(
		'https://planmyleisure.herokuapp.com/package/get-packages',
		{
			count,
			page,
		}
	);
};

export default getPackageApi;
