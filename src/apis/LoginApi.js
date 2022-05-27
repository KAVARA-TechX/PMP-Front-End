import axios from 'axios';

const LoginApi = (email, password) => {
	// axios.defaults.withCredentials = true;
	// axios.defaults.withCredentials={}
	return axios.post(
		'https://planmy.herokuapp.com/user/login',
		// { withCredentials: true },
		{
			email,
			password,
		}
	);
};

export default LoginApi;
