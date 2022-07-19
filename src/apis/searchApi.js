import axios from 'axios';

const searchApi = (text, startDate = '', endDate = '', numberOfPeople = '') => {
	const start_date = new Date(startDate);

	var MyDate = new Date(startDate);
	var MyDateString;
	var MyEDate = new Date(endDate);
	var MyEndDateString;

	MyDateString =
		MyDate.getFullYear() +
		'-' +
		('0' + (MyDate.getMonth() + 1)).slice(-2) +
		'-' +
		('0' + MyDate.getDate()).slice(-2);

	MyEndDateString =
		MyEDate.getFullYear() +
		'-' +
		('0' + (MyEDate.getMonth() + 1)).slice(-2) +
		'-' +
		('0' + MyEDate.getDate()).slice(-2);

	console.log(MyDateString, MyEndDateString);

	return axios.post('https://planmy.herokuapp.com/package/search-package', {
		title: text,
		period: [MyDateString, MyEndDateString],
	});
};

export default searchApi;
