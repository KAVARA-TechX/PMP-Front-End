import axios from 'axios';

const updateProfile = (name, email, gender, dob, phone, address, avatar) => {
	let token = localStorage.getItem('token');

	return axios.patch(
		'/user/update-profile',
		{
			name,
			email,
			gender,
			dob,
			phone,
			address,
		},
		{ headers: { Authorization: token } }
	);
};

export default updateProfile;
