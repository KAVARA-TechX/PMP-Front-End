import axios from 'axios';

const SignupApi = (name, password, email) => {
	return axios.post('https://planmyleisure.herokuapp.com/user/register', {
		name: name,
		password: password,
		email: email,
	});
};

export default SignupApi;
