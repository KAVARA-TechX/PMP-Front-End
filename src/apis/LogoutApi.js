import axios from 'axios';

const LogoutApi = () => {
	return axios.get('/user/logout');
};
export default LogoutApi;
