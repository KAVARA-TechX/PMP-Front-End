import axios from 'axios';

const getRefereshToken = (id) => {
	axios.defaults.withCredentials = true;

	return axios.post(
		'https://planmyleisure.herokuapp.com/user/refresh_token',
		{
			withCredentials: true,
		}
	);
};

export default getRefereshToken;
