import axios from 'axios';

const getBlogsById = (id) => {
	return axios.post(
		'https://planmyleisure.herokuapp.com/blog/get-blog-by-id',
		{
			blogId: id,
		}
	);
};

export default getBlogsById;
