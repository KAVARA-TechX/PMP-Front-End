import axios from 'axios';

const googleLoginApi = (tokenId) => {
	console.log('token id is : ', tokenId);
	return axios.post('/user/google-login', {
		tokenId,
	});
};
export default googleLoginApi;
