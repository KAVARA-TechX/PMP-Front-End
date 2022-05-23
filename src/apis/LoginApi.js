import axios from 'axios';

const LoginApi = (email, password) => {
	return axios.post('https://planmy.herokuapp.com/user/login', {
		email,
		password,
	});
};

export default LoginApi;
