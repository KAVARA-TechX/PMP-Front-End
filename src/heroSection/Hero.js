import { Box, Icon, Skeleton, Text } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import Nav from '../nav/Nav';
import getAllHeroImage from '../apis/getAllHeroImage';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';
import Search from './search/Search';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './Hero.css';
import MobileSearch from './mobileSearch/MobileSearch';

const Hero = ({ onLoad }) => {
	console.log('running hero-0');
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(true);
	const splide_ref = useRef();
	const [currentIndex, setCurrentIndex] = useState(0);
	const prev = useRef();
	const next = useRef();

	const makeItMove = (len) => {
		let slides = document.querySelector('.slides');

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
		// this is to autoplay video on safari
		console.log('running hero-1');
		// let interval = undefined;
		const getImages = async () => {
			if (sessionStorage.getItem('hero_slider')) {
				setImages(JSON.parse(sessionStorage.getItem('hero_slider')));
				setLoading(false);
				onLoad(true);
			} else {
				try {
					const response = await getAllHeroImage();
					setImages((prev) => response.data.heroImages);
					sessionStorage.setItem(
						'hero_slider',
						JSON.stringify(response.data.heroImages)
					);
					setLoading(false);
					onLoad(true);
				} catch (error) {}
			}
		};
		getImages();
	}, []);

	return (
		<>
			{console.log('running hero-2')}
			{loading ? (
				<Skeleton h='500px' />
			) : (
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
							interval: 15000,
							transition: 'slide',
						}}
						hasTrack={false}
						ref={splide_ref}
						onMove={(e) => {
							setCurrentIndex(e.index);
						}}
					>
						<div className='splide__arrows'>
							<div className='orange_bar'></div>
							<p className='slider_city'>
								{images.length === 0
									? ''
									: images[currentIndex].city}
							</p>
							<p className='slider_location'>
								{images.length === 0
									? ''
									: images[currentIndex].location}
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
						{window.innerWidth <= 991 ? (
							<MobileSearch />
						) : (
							<Search />
						)}
						<Box>
							<SplideTrack>
								{images.length === 0 ? (
									<></>
								) : (
									images.map((data, index) => {
										return (
											<SplideSlide key={index}>
												<Box
													w='100vw'
													h='500px'
													position={'relative'}
													overflowX='hidden'
												>
													{data.imageUrl[0]
														.resource_type ===
													'video' ? (
														<Box
															w='100%'
															h='100%'
															dangerouslySetInnerHTML={{
																__html: `<video
															autoPlay='autoplay'
															loop
															muted='true'
															playsinline
															style="
																height: 100%;
																width: 100%;
																object-fit:cover;
															"
															
														>
															<source
																src=${data.imageUrl[0].secure_url}
															/>
														</video>`,
															}}
														></Box>
													) : (
														<Box
															w='100%'
															h='100%'
															bgImage={
																data.imageUrl[0]
																	.secure_url
															}
															bgSize='cover'
															bgPos={'50% 50%'}
														></Box>
													)}
													<Text
														w={{
															base: 'calc(100vw - 20px)',
															lg: '50%',
														}}
														bg='rgba(0,0,0,.1)'
														boxShadow={
															'0 0 0  10000px rgba(0,0,0,.1)'
														}
														color={'white'}
														position='absolute'
														top={{
															base: '40%',
															lg: '30%',
														}}
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
									})
								)}
							</SplideTrack>
						</Box>
					</Splide>
				</Box>
			)}
		</>
	);
};

export default React.memo(Hero);
