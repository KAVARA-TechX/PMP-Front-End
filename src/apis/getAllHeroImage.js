import axios from 'axios';

const getAllHeroImage = () => {
	return axios.get('https://planmy.herokuapp.com/blog/hero-image');
};
export default getAllHeroImage;
