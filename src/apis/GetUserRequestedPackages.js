import axios from 'axios';

const GetUserRequestedPackages = (userId) => {
	console.log('user id for the request is ', userId);
	return axios.get(
		'https://planmy.herokuapp.com/package/get-package-request-by-user',
		{ data: { userId: '628b692d0df76f76290fb6c0' } }
	);
};

export default GetUserRequestedPackages;
