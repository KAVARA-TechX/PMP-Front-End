import axios from 'axios';

const getUserinfoApi = () => {
	let token = localStorage.getItem('token');

	return axios.get('https://planmy.herokuapp.com/user/infor', {
		headers: { Authorization: token },
	});
};

export default getUserinfoApi;
