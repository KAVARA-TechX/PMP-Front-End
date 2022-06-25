import { Box, Button, Icon, Text } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import UserForm from '../modal/UserForm';
import { useState } from 'react';
import Nav from '../nav/Nav';
import getAllHeroImage from '../apis/getAllHeroImage';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';
import Search from './search/Search';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './Hero.css';

const names = [
	{ city: 'Delhi', location: 'india' },
	{ city: 'Gujarat', location: 'Gandhidham' },
	{ city: 'xyz', location: 'moon' },
];

const Hero = () => {
	const [modalState, setModalState] = useState(false);
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [city, setCity] = useState('');
	const [location, setLocation] = useState('');
	const imgRef = useRef();
	const splide_ref = useRef();
	const [currentIndex, setCurrentIndex] = useState(0);
	const prev = useRef();
	const next = useRef();

	const makeItMove = (len) => {
		let slides = document.querySelector('.slides');
		// const allSlide = document.querySelectorAll('.slide');

		let index = 0;

		const interval = setInterval(() => {
			index++;
			slides.style.transform = `translateX(-${100 * index}vw)`;
			slides.style.transition = '1s';
			if (index === len + 1) {
				slides.style.transition = 'none';
				slides = document.querySelector('.slides');
				index = 0;
				slides.style.transform = `translateX(-${100 * index}vw)`;
			}
		}, 3000);

		return interval;
	};

	useEffect(() => {
		// let interval = undefined;
		const getImages = async () => {
			try {
				const response = await getAllHeroImage();
				// 		// setLength((prev) => response.data.heroImages.length);
				console.log('hero response is : ', response);
				setImages((prev) => response.data.heroImages);
				setLoading(false);
				// 		interval = makeItMove(response.data.heroImages.length);
			} catch (error) {
				console.log('something went wrong');
			}
		};
		getImages();
		// return () => {
		// 	clearInterval(interval);
		// };
	}, []);

	// useEffect(() => {
	// 	console.log(splide_ref.current.splide.index);
	// }, [splide_ref]);

	return (
		<>
			<Box className='hero'>
				<Box pos={'absolute'} zIndex={100}>
					<Nav />
				</Box>
				{/* <Box pos={'absolute'} zindex={102}></Box> */}
				<Splide
					aria-label='images'
					options={{
						type: 'loop',
						gap: '1rem',
						autoplay: true,
						pauseOnHover: false,
						resetProgress: false,
						height: '500px',
						interval: 2000,
						transition: 'slide',
					}}
					hasTrack={false}
					ref={splide_ref}
					onMove={(e) => {
						console.log('move is great', e);
						setCurrentIndex(e.index);
					}}
				>
					<div className='splide__arrows'>
						<div className='orange_bar'></div>
						<p className='slider_city'>
							{names[currentIndex].city}
						</p>
						<p className='slider_location'>
							{names[currentIndex].location}
						</p>
						<div className='slider_controls'>
							<button
								className='splide__arrow splide__arrow--prev'
								ref={prev}
							>
								<Icon
									as={AiOutlineLeftCircle}
									transform='rotate(180deg)'
									fontSize='24px'
									color='#fff !important'
								/>
							</button>
							<button
								className='splide__arrow splide__arrow--next'
								ref={next}
							>
								<Icon
									as={AiOutlineRightCircle}
									fontSize='24px'
									fill='#fff'
								/>
							</button>
						</div>
					</div>
					<Search />
					<Box>
						<SplideTrack>
							{images.map((data, index) => {
								return (
									<SplideSlide key={index}>
										<Box
											w='100vw'
											h='500px'
											bgImage={data.imageUrl[0].url}
											bgSize='cover'
										>
											<Text
												zindex='10'
												w={{ base: '100%', lg: '50%' }}
												bg='rgba(0,0,0,.1)'
												boxShadow={
													'0 0 0 10000px rgba(0,0,0,.1)'
												}
												color={'rgba(255,255,255,1)'}
												position='absolute'
												top={{ base: '40%', lg: '30%' }}
												left={{
													base: '50%',
													lg: '30px',
												}}
												transform={{
													base: 'translateX(-50%) translateY(-50%)',
													lg: 'none',
												}}
												fontSize={50}
												fontWeight={500}
												lineHeight={1}
												textAlign={{
													base: 'center',
													lg: 'start',
												}}
											>
												{data.title}
											</Text>
										</Box>
									</SplideSlide>
								);
							})}
						</SplideTrack>
					</Box>
				</Splide>
			</Box>
		</>
		// <>
		// 	<Box
		// 		h='500px'
		// 		w='100vw'
		// 		mb={{ base: '170px', lg: '100px' }}
		// 		position={'relative'}
		// 	>
		// 		<UserForm state={modalState} setState={setModalState} />
		// 		<Box position={'absolute'} top='0' zIndex={10}>
		// 			<Nav />
		// 		</Box>
		// 		<Box className='slides' display={'flex'} ref={imgRef}>
		// 			{loading ? (
		// 				<></>
		// 			) : (
		// 				<>
		// 					{images.map((data, index) => {
		// 						return (
		// 							<Box
		// 								className='slide'
		// 								w={'100vw'}
		// 								h='500px'
		// 								bgImage={data.imageUrl[0].url}
		// 								bgSize='cover'
		// 								bgPos={'50% 50%'}
		// 								flexShrink={'0'}
		// 								pt={{ base: 100, lg: 130 }}
		// 								position='relative'
		// 								overflow={'hidden'}
		// 								key={index}
		// 							>
		// 								<Text
		// 									w={{ base: '100%', lg: '50%' }}
		// 									bg='rgba(0,0,0,.3)'
		// 									boxShadow={
		// 										'0 0 0 10000px rgba(0,0,0,.3)'
		// 									}
		// 									color={'white'}
		// 									position='absolute'
		// 									top={{ base: '40%', lg: '30%' }}
		// 									left={{ base: '50%', lg: '30px' }}
		// 									transform={{
		// 										base: 'translateX(-50%) translateY(-50%)',
		// 										lg: 'none',
		// 									}}
		// 									fontSize={50}
		// 									fontWeight={300}
		// 									lineHeight={1}
		// 									textAlign={{
		// 										base: 'center',
		// 										lg: 'start',
		// 									}}
		// 								>
		// 									{data.title}
		// 								</Text>
		// 							</Box>
		// 						);
		// 					})}
		// 					<Box
		// 						className='slide'
		// 						w={'100vw'}
		// 						h='500px'
		// 						bgImage={images[0].imageUrl[0].url}
		// 						bgSize='cover'
		// 						bgPos={'50% 50%'}
		// 						flexShrink={'0'}
		// 						pt={{ base: 100, lg: 130 }}
		// 						position='relative'
		// 						overflow={'hidden'}
		// 					>
		// 						<Text
		// 							w={{ base: '100%', lg: '50%' }}
		// 							bg='rgba(0,0,0,.3)'
		// 							boxShadow={'0 0 0 10000px rgba(0,0,0,.3)'}
		// 							color={'white'}
		// 							position='absolute'
		// 							top={{ base: '40%', lg: '30%' }}
		// 							left={{ base: '50%', lg: '30px' }}
		// 							transform={{
		// 								base: 'translateX(-50%) translateY(-50%)',
		// 								lg: 'none',
		// 							}}
		// 							fontSize={50}
		// 							fontWeight={300}
		// 							lineHeight={1}
		// 							textAlign={{ base: 'center', lg: 'start' }}
		// 						>
		// 							{images[0].title}
		// 						</Text>
		// 					</Box>
		// 				</>
		// 			)}
		// 		</Box>
		// 		<Box
		// 			mt={{ base: 10, lg: 5 }}
		// 			w={{ base: '100%', lg: '70%' }}
		// 			h='100px'
		// 			borderRadius={{ base: '0', lg: 'xl' }}
		// 			display={{
		// 				base: modalState ? 'none' : 'flex',
		// 				lg: 'flex',
		// 			}}
		// 			justifyContent={{ base: 'center', lg: 'start' }}
		// 			alignItems={{ base: 'center' }}
		// 			position={{ base: 'fixed', lg: 'absolute' }}
		// 			bottom={{ base: 1, lg: '120px' }}
		// 			right={0}
		// 			left={{ lg: '50px' }}
		// 			zIndex={{ base: 10000000, lg: 1 }}
		// 		></Box>
		// 		<Search />
		// 		<Box
		// 			display={{ base: 'none', lg: 'inline-block' }}
		// 			position={'absolute'}
		// 			right='0'
		// 			top='50%'
		// 			transform='translateY(-50%)'
		// 			h='190px'
		// 			w='200px'
		// 			bg='rgba(8, 32, 50,.65)'
		// 			borderRadius={'32px 0 0 32px'}
		// 			pr='50px'
		// 			pt='40px'
		// 		>
		// 			<Box
		// 				h='3px'
		// 				w='50px'
		// 				bg=' #0E87F6'
		// 				float={'right'}
		// 				borderRadius={'full'}
		// 			></Box>
		// 			<Text textAlign={'end'} fontSize='20px' mt='7px'>
		// 				city
		// 			</Text>
		// 			<Text textAlign={'end'} fontSize='24px' fontWeight={600}>
		// 				location
		// 			</Text>
		// 			<Box float={'right'} mt='20px'>
		// 				<Icon
		// 					h='fit-content'
		// 					w='fit-content'
		// 					as={AiOutlineLeftCircle}
		// 					fontSize='40px'
		// 					mx={5}
		// 					cursor='pointer'
		// 					borderRadius='full'
		// 					p={0}
		// 				/>
		// 				<Icon
		// 					as={AiOutlineRightCircle}
		// 					fontSize='40px'
		// 					cursor='pointer'
		// 				/>
		// 			</Box>
		// 		</Box>
		// 	</Box>
		// </>
	);
};

export default Hero;
