import React from 'react';
import Banner from './banner';
import Facts from './facts';
import Footer from './footer';
import Hero from './heroSection/Hero';
import ImageSlider from './imageSlider';
import Packages from './packages/Packages';
import Partners from './partners';
import SearchHotel from './searchHotel';

const App = () => {
	return (
		<>
			<Hero />
			<Facts />
			<Packages />
			<Banner />
			<ImageSlider />
			<Partners />
			{/* <SearchHotel /> */}
			<Footer />
		</>
	);
};

export default App;
