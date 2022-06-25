import axios from 'axios';

const createOrderApi = (amount, receipt, notes) => {
	return axios.post('https://planmy.herokuapp.com/payment/create-order', {
		amount,
		currency: 'INR',
		receipt,
		notes,
	});
};

export default createOrderApi;
