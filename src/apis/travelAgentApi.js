import axios from 'axios';

const travelAgentApi = (firstName, lastName, email, mobileNumber) => {
	return axios.post(
		'/agent/become-agent',
		{
			firstName,
			lastName,
			email,
			mobileNumber,
		}
	);
};

export default travelAgentApi;
