import axios from 'axios';

const UserActivationApi = (token) => {
	return axios.post('https://planmy.herokuapp.com/user/activation', {
		activation_token: token,
	});
};

export default UserActivationApi;
