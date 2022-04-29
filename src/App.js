import { lazy, Suspense } from 'react';
import Hero from './heroSection/Hero';
import { Box } from '@chakra-ui/react';

const Facts = lazy(() => {
	return import('./facts/Facts');
});
const Packages = lazy(() => {
	return import('./packages/Packages');
});
const SpaceBetween = lazy(() => {
	return import('./spaceBetween/SpaceBetween');
});
const ImageSlider = lazy(() => {
	return import('./imageSlider/ImageSlider');
});
const Partners = lazy(() => {
	return import('./partners/Partners');
});
const Footer = lazy(() => {
	return import('./footer/Footer');
});

const App = () => {
	return (
		<Box overflow='hidden'>
			<Hero /> {/* Responsive Done */}
			<Suspense fallback={<div>Loading...</div>}>
				<Facts /> {/* Responsive Done */}
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<Packages /> {/* Responsive Done*/}
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<SpaceBetween space='50px' />
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<ImageSlider /> {/* Responsive Done */}
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<Partners /> {/* Responsive Done */}
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<Footer /> {/* Responsive Done */}
			</Suspense>
		</Box>
	);
};

export default App;
