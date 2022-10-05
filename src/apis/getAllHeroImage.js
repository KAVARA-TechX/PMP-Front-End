import axios from 'axios';

const getAllHeroImage = () => {
	return axios.get('/blog/hero-image');
};
export default getAllHeroImage;
