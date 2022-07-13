import axios from 'axios';

const LogoutApi = () => {
	return axios.get('https://planmy.herokuapp.com/user/logout');
};
export default LogoutApi;
