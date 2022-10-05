import axios from 'axios';

const SignupApi = (name, password, email) => {
	return axios.post('/user/register', {
		name: name,
		password: password,
		email: email,
	});
};

export default SignupApi;
