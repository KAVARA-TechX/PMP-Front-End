import axios from 'axios';

const getBlogsById = (id) => {
	return axios.post(
		'/blog/get-blog-by-id',
		{
			blogId: id,
		}
	);
};

export default getBlogsById;
