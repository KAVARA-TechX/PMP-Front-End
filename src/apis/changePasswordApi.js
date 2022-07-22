import axios from 'axios';

const changePasswordApi = (password) => {
	let token = localStorage.getItem('token');

	return axios.post('https://planmyleisure.herokuapp.com/user/reset', {
		headers: { Authorization: token },
		password,
	});
};

export default changePasswordApi;
