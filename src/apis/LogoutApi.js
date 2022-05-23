import axios from 'axios';

const LogoutApi = () => {
	return axios.get('https://planmyleisure.herokuapp.com/user/logout');
};
export default LogoutApi;
