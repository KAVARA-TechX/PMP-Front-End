import axios from 'axios';

const LoginApi = (email, password) => {
	// axios.defaults.withCredentials = true;
	// axios.defaults.withCredentials={}
	return axios.post('https://planmyleisure.herokuapp.com/user/login', {
		email,
		password,
	});
};

export default LoginApi;
