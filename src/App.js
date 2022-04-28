import React from 'react';
import Banner from './banner/Banner';
import Facts from './facts/Facts';
import Footer from './footer/Footer';
import Hero from './heroSection/Hero';
import ImageSlider from './imageSlider/ImageSlider';
import Packages from './packages/Packages';
import Partners from './partners/Partners';
import SpaceBetween from './spaceBetween/SpaceBetween';
import { Box } from '@chakra-ui/react';

const App = () => {
	return (
		<Box overflow='hidden'>
			<Hero /> {/* Responsive Done */}
			<Facts /> {/* Responsive Done */}
			<Packages /> {/* Responsive Done*/}
			<SpaceBetween space='50px' />
			{/* <Banner /> Responsive Done */}
			<ImageSlider /> {/* Responsive Done */}
			<Partners /> {/* Responsive Done */}
			<Footer /> {/* Responsive Done */}
		</Box>
	);
};

export default App;
