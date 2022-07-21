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
		'https://planmyleisure.herokuapp.com/brand/become-brand',
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
