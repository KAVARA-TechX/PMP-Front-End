import axios from 'axios';

const searchApi = (text, startDate = '', endDate = '', numberOfPeople = '') => {
	var MyDate = new Date(startDate);
	var MyDateString;

	MyDate.setDate(MyDate.getDate() + 20);

	MyDateString =
		MyDate.getFullYear() +
		'-' +
		('0' + (MyDate.getMonth() + 1)).slice(-2) +
		'-' +
		('0' + MyDate.getDate()).slice(-2);

	var MyEDate = new Date(endDate);
	var MyEndDateString;

	MyEDate.setDate(MyEDate.getDate() + 20);

	MyEndDateString =
		MyEDate.getFullYear() +
		'-' +
		('0' + (MyEDate.getMonth() + 1)).slice(-2) +
		'-' +
		('0' + MyEDate.getDate()).slice(-2);

	console.log('search api ', text, `${MyDateString}`, MyEndDateString);
	return axios.post('https://planmy.herokuapp.com/package/search-package', {
		title: text,
		period: [MyDateString, MyEndDateString],
	});
};

export default searchApi;
