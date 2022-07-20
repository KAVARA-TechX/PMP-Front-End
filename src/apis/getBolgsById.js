import axios from 'axios';

const getBlogsById = (id) => {
	return axios.post('https://planmy.herokuapp.com/blog/get-blog-by-id', {
		blogId: id,
	});
};

export default getBlogsById;
