import axios from 'axios';

const getPackageById = (id) => {
	return axios.get(
		`https://planmyleisure.herokuapp.com/package/get-package/${id}`
	);
};

export default getPackageById;
