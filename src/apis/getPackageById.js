import axios from 'axios';

const getPackageById = (id) => {
	return axios.get(
		`/package/get-package/${id}`
	);
};

export default getPackageById;
