import axios from 'axios';

const getBlogsByCount = (page, count) => {
	return axios.post('https://planmy.herokuapp.com/blog/get-blogs-by-count', {
		page,
		count,
	});
};

export default getBlogsByCount;
