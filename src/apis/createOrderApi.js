import axios from 'axios';

const createOrderApi = (amount, receipt, notes) => {
	console.log('amount is : ', amount);

	return axios.post(
		'/payment/create-order',
		{
			amount,
			currency: 'INR',
			receipt,
			notes,
		}
	);
};

export default createOrderApi;
