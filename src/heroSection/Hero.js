import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import UserForm from '../modal/UserForm';
import { useState } from 'react';
import Nav from '../nav/Nav';
import getAllHeroImage from '../apis/getAllHeroImage';

const Hero = () => {
	const [modalState, setModalState] = useState(false);
	// const [length, setLength] = useState(0);
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(true);
	const imgRef = useRef();

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
		let interval = undefined;

		const getImages = async () => {
			try {
				const response = await getAllHeroImage();
				// setLength((prev) => response.data.heroImages.length);
				setImages((prev) => response.data.heroImages);
				setLoading(false);
				interval = makeItMove(response.data.heroImages.length);
			} catch (error) {
				console.log('something went wrong');
			}
		};

		getImages();

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<>
			<Box
				h='500px'
				w='100vw'
				mb={{ base: '230px', lg: '100px' }}
				position={'relative'}
			>
				<UserForm state={modalState} setState={setModalState} />
				<Box position={'absolute'} top='0' zIndex={10}>
					<Nav />
				</Box>
				<Box className='slides' display={'flex'} ref={imgRef}>
					{loading ? (
						<></>
					) : (
						<>
							{images.map((data, index) => {
								return (
									<Box
										className='slide'
										w={'100vw'}
										h='500px'
										bgImage={data.imageUrl[0].url}
										bgSize='cover'
										bgPos={'50% 50%'}
										flexShrink={'0'}
										pt={{ base: 100, lg: 130 }}
										position='relative'
										overflow={'hidden'}
										key={index}
									>
										<Text
											w='50%'
											bg='rgba(0,0,0,.3)'
											boxShadow={
												'0 0 0 10000px rgba(0,0,0,.3)'
											}
											color={'white'}
											position='absolute'
											top={{ base: '40%', lg: '30%' }}
											left={{ base: '50%', lg: '30px' }}
											transform={{
												base: 'translateX(-50%) translateY(-50%)',
												lg: 'none',
											}}
											fontSize={50}
											fontWeight={300}
											lineHeight={1}
											textAlign={{
												base: 'center',
												lg: 'start',
											}}
										>
											{data.title}
										</Text>
									</Box>
								);
							})}
							<Box
								className='slide'
								w={'100vw'}
								h='500px'
								bgImage={images[0].imageUrl[0].url}
								bgSize='cover'
								bgPos={'50% 50%'}
								flexShrink={'0'}
								pt={{ base: 100, lg: 130 }}
								position='relative'
								overflow={'hidden'}
							>
								<Text
									w='50%'
									bg='rgba(0,0,0,.3)'
									boxShadow={'0 0 0 10000px rgba(0,0,0,.3)'}
									color={'white'}
									position='absolute'
									top={{ base: '40%', lg: '30%' }}
									left={{ base: '50%', lg: '30px' }}
									transform={{
										base: 'translateX(-50%) translateY(-50%)',
										lg: 'none',
									}}
									fontSize={50}
									fontWeight={300}
									lineHeight={1}
									textAlign={{ base: 'center', lg: 'start' }}
								>
									{images[0].title}
								</Text>
							</Box>
						</>
					)}
				</Box>
				<Box
					mt={{ base: 10, lg: 5 }}
					w={{ base: '100%', lg: '70%' }}
					h='100px'
					borderRadius={{ base: '0', lg: 'xl' }}
					display={{
						base: modalState ? 'none' : 'flex',
						lg: 'flex',
					}}
					justifyContent={{ base: 'center', lg: 'start' }}
					alignItems={{ base: 'center' }}
					position={{ base: 'fixed', lg: 'absolute' }}
					bottom={{ base: 1, lg: '120px' }}
					right={0}
					left={{ lg: '50px' }}
					zIndex={{ base: 10000000, lg: 1 }}
				></Box>
				{/* <Search /> */}
			</Box>
		</>
	);
};

export default Hero;
