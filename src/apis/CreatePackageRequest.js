const { default: axios } = require('axios');

const CreatePackageRequest = (
	packageId,
	startDate,
	endDate,
	numberOfPeople,
	location,
	userId,
	paymentStatus = 'Requested'
) => {
	console.log(' 1. start date : ', startDate);
	console.log(' 2. end date', endDate);
	console.log(' 3. number of people', numberOfPeople);
	console.log(' 4. location ', location);
	console.log(' 5. user id : ', userId);

	return axios.post(
		'/package/create-package-request',
		{
			packageId,
			startDate,
			endDate,
			numberOfPeople,
			location,
			userId,
			paymentStatus: { status: paymentStatus },
			paymentType: { parts: [], normal: { price: '', status: false } },
		}
	);
};

export default CreatePackageRequest;
