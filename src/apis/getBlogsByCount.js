import axios from 'axios';

const getBlogsByCount = (page, count) => {
	return axios.post(
		'https://planmyleisure.herokuapp.com/blog/get-blogs-by-count',
		{ page, count }
	);
};

export default getBlogsByCount;
