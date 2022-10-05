import axios from 'axios';

const getUserinfoApi = () => {
	let token = localStorage.getItem('token');

	return axios.get('/user/infor', {
		headers: { Authorization: token },
	});
};

export default getUserinfoApi;
