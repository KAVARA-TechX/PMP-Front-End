const { default: axios } = require('axios');

const CreatePackageRequest = (
	packageId,
	startDate,
	endDate,
	numberOfPeople,
	location,
	userId
) => {
	console.log(' 1. start date : ', startDate);
	console.log(' 2. end date', endDate);
	console.log(' 3. number of people', numberOfPeople);
	console.log(' 4. location ', location);
	console.log(' 5. user id : ', userId);

	return axios.post(
		'https://planmy.herokuapp.com/package/create-package-request',
		{ packageId, startDate, endDate, numberOfPeople, location, userId }
	);
};

export default CreatePackageRequest;