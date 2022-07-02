import axios from 'axios';

const updateProfile = (name, email, gender, dob, phone, address, avatar) => {
	let token = localStorage.getItem('token');

	return axios.patch(
		'https://planmy.herokuapp.com/user/update-profile',
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
