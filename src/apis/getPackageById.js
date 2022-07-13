import axios from 'axios';

const getPackageById = (id) => {
	return axios.get(`https://planmy.herokuapp.com/package/get-package/${id}`);
};

export default getPackageById;
