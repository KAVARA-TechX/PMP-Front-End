import axios from 'axios';

const UserActivationApi = (token) => {
	return axios.post('https://planmyleisure.herokuapp.com/user/activation', {
		activation_token: token,
	});
};

export default UserActivationApi;
