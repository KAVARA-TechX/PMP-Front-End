import axios from 'axios';

const googleLoginApi = (tokenId) => {
	console.log('token id is : ', tokenId);
	return axios.post('https://planmyleisure.herokuapp.com/user/google-login', {
		data: { tokenId },
	});
};
export default googleLoginApi;
