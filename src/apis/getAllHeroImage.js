import axios from 'axios';

const getAllHeroImage = () => {
	return axios.get('https://planmyleisure.herokuapp.com/blog/hero-image');
};
export default getAllHeroImage;
