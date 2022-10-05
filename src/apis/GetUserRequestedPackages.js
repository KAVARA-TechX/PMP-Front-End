import axios from 'axios';

const GetUserRequestedPackages = async (userId) => {
	console.log('user id for the request is ', userId);

	return axios.get(
		`/package/get-package-request-by-user/${userId}`
	);
};

export default GetUserRequestedPackages;
