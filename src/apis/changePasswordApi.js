import axios from 'axios';

const changePasswordApi = (password) => {
	let token = localStorage.getItem('token');

	return axios.post('/user/reset', {
		headers: { Authorization: token },
		password,
	});
};

export default changePasswordApi;
