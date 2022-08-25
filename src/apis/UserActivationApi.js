import axios from 'axios';

const UserActivationApi = (token) => {
	return axios.post('/user/activation', {
		activation_token: token,
	});
};

export default UserActivationApi;
