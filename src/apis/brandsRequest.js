import axios from 'axios';

const brandsRequest = (
	firstName,
	lastName,
	email,
	mobileNumber,
	companyName,
	companyWebsite,
	businessType
) => {
	return axios.post(
		'/brand/become-brand',
		{
			firstName,
			lastName,
			email,
			mobileNumber,
			companyName,
			companyWebsite,
			businessType,
		}
	);
};

export default brandsRequest;
