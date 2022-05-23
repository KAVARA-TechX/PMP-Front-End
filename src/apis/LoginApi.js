import axios from 'axios';

const LoginApi = (email, password) => {
	return axios.post('https://planmyleisure.herokuapp.com/user/login', {
		email,
		password,
	});
};

export default LoginApi;
