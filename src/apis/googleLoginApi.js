import axios from 'axios';

const googleLoginApi = (tokenId) => {
	console.log('token id is : ', tokenId);
	return axios.post('https://planmy.herokuapp.com/user/google-login', {
		tokenId,
	});
};
export default googleLoginApi;
