import axios from 'axios';

const createLead = (name, email, phone) => {
	const date = new Date();
	const day = date.getDate().toString().padStart(2, '0');
	const month = date.getMonth().toString().padStart(2, '0');
	const year = date.getFullYear().toString();
	const completeDate = day + '/' + month + '/' + year;
	console.log(name, email, phone);
	console.log(completeDate);

	return axios.post('https://planmyleisure.herokuapp.com/lead/create-lead', {
		name,
		phone,
		source: 'Landing Page',
		date: completeDate,
		concern: 'true',
	});
};

export default createLead;
