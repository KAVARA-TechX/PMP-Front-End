import { lazy, Suspense, useEffect, useState } from 'react';
import Hero from './heroSection/Hero';
import { Box, useToast } from '@chakra-ui/react';
import Banner from './banner/Banner';
import { useLocation } from 'react-router-dom';

const Facts = lazy(() => {
	return import('./facts/Facts');
});
const DreamVacation = lazy(() => {
	return import('./dreamVacation/DreamVacation');
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
const IconSection = lazy(() => {
	return import('./iconSection/IconSection');
});
const Blog = lazy(() => {
	return import('./blogs/Blog');
});
// const Partners = lazy(() => {
// 	return import('./partners/Partners');
// });
const Footer = lazy(() => {
	return import('./footer/Footer');
});

const Homepage = () => {
	const [load, setLoad] = useState(false);
	const location = useLocation();
	const toast = useToast();

	useEffect(() => {
		try {
			if (location.state.account) {
				toast({
					title: 'Success',
					description:
						'Account is created successfully! Please login to continue.',
					status: 'success',
					position: 'top',
					duration: 9000,
					isClosable: true,
				});
			}
		} catch (error) {}
	});

	useEffect(() => {
		setTimeout(() => {
			setLoad(true);
		}, 100);
	}, []);
	return (
		<Box overflow='hidden'>
			<Hero /> {/* Responsive Done */}
			{load ? (
				<>
					<Suspense fallback={<div></div>}>
						<Facts />
					</Suspense>
					<Suspense fallback={<div></div>}>
						<DreamVacation />
					</Suspense>
					<Suspense fallback={<div></div>}>
						<Packages />
					</Suspense>
					<Suspense fallback={<div></div>}>
						<SpaceBetween space='50px' />
					</Suspense>
					<Suspense>
						<Banner />
					</Suspense>
					<Suspense fallback={<div></div>}>
						<ImageSlider /> {/* Responsive Done */}
					</Suspense>
					<Suspense fallback={<div></div>}>
						{/*<Partners /> {/* Responsive Done */}
					</Suspense>
					<Suspense fallback={<div></div>}>
						<IconSection />
					</Suspense>
					<Suspense fallback={<div></div>}>
						<Blog />
					</Suspense>
					<Suspense fallback={<div></div>}>
						<Footer /> {/* Responsive Done */}
					</Suspense>
				</>
			) : (
				<></>
			)}
		</Box>
	);
};

export default Homepage;
