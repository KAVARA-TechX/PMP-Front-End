import axios from 'axios';

const searchApi = (text, startDate = '', endDate = '', numberOfPeople = '') => {
	return axios.post('https://planmy.herokuapp.com/package/search-package', {
		text,
		period: [startDate, endDate],
	});
};

export default searchApi;
