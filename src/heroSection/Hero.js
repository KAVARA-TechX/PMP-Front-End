import { Box, Button, Text, Image } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import hero from '../assets/main2.jpeg';
import UserForm from '../modal/UserForm';
import { useState } from 'react';
// import './Hero.css';
import one from '../assets/banner.jpeg';
import two from '../assets/main2.jpeg';
import Search from './search/Search';

const Hero = () => {
	const [modalState, setModalState] = useState(false);

	useEffect(() => {
		let slides = document.querySelector('.slides');
		const allSlide = document.querySelectorAll('.slide');

		let index = 0;

		setInterval(() => {
			index++;
			slides.style.transform = `translateX(-${100 * index}vw)`;
			slides.style.transition = '1s';
			if (index === 3) {
				slides.style.transition = 'none';
				slides = document.querySelector('.slides');
				index = 0;
				slides.style.transform = `translateX(-${100 * index}vw)`;
			}
		}, 3000);
	});

	return (
		<>
			<Box h='500px' w='100vw' mb='100px' position={'relative'}>
				<UserForm state={modalState} setState={setModalState} />
				<Box className='slides' display={'flex'}>
					<Box
						className='slide'
						w={'100vw'}
						h='500px'
						bgImage={hero}
						bgSize='cover'
						bgPos={'50% 50%'}
						flexShrink={'0'}
						pt={{ base: 100, lg: 130 }}
						position='relative'
					>
						<Text
							color={'black'}
							position='absolute'
							top='30%'
							left={'30px'}
							fontSize={60}
							fontWeight={300}
							lineHeight={1}
						>
							It's time for you to <br />
							experience the inexperienced
						</Text>
					</Box>
					<Box
						className='slide'
						w={'100vw'}
						h='500px'
						bgImage={one}
						bgSize='cover'
						bgPos={'50% 50%'}
						flexShrink={'0'}
						pt={{ base: 100, lg: 130 }}
						position='relative'
					>
						<Text
							color={'black'}
							position='absolute'
							top='30%'
							left={'30px'}
							fontSize={60}
							fontWeight={300}
							lineHeight={1}
						>
							A wishful escape to <br /> your desired destination
						</Text>
					</Box>
					<Box
						className='slide'
						w={'100vw'}
						h='500px'
						bgImage={hero}
						bgSize='cover'
						bgPos={'50% 50%'}
						flexShrink={'0'}
						pt={{ base: 100, lg: 130 }}
						position='relative'
					>
						<Text
							color={'black'}
							position='absolute'
							top='30%'
							left={'30px'}
							fontSize={60}
							fontWeight={300}
							lineHeight={1}
						>
							It's time for you to <br /> experience the
							inexperienced
						</Text>
					</Box>
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
				>
					<Button
						fontSize={20}
						color='white'
						bg='orange'
						w={{ base: '90%', lg: '150px' }}
						h='50px'
						_hover={{
							background: 'orange',
						}}
						onClick={() => {
							setModalState(true);
						}}
					>
						Discover Now
					</Button>
				</Box>
				<Search />
				<Button position={'absolute'} top={7} right={10}>
					Login
				</Button>
			</Box>
		</>
	);

	// return (
	// 	<>
	// 		<Box h='500px' w='100vw' mb='100px' overflow={'hidden'}>
	// 			<UserForm state={modalState} setState={setModalState} />

	// 			<Box
	// 				h='100%'
	// 				// backgroundImage={`url(${hero})`}
	// 				// bgImage={`url(${hero})`}
	// 				// backgroundPosition={'right'}
	// 				// backgroundRepeat='no-repeat'
	// 				// bgSize={'cover'}
	// 				position='relative'
	// 				display={'flex'}
	// 				flexDir='column'
	// 				alignItems={{ base: 'center', lg: 'start' }}
	// 				pl={{ lg: 10 }}
	// 			>
	// 				<Box h='100%' w='100vw' bgImage={hero} bgSize='cover'></Box>
	// 				<Box h='100%' w='100vw'>
	// 					<Image src={hero} />
	// 				</Box>
	// 				<Search />
	// 				<Button position={'absolute'} right={'50px'} top={'20px'}>
	// 					Login
	// 				</Button>
	// 				<Box
	// 					pt={{ base: 100, lg: 130 }}
	// 					// pl={{ base: 0, lg: 100 }}
	// 					lineHeight={1}
	// 					textAlign='center'
	// 				>
	// 					<Text
	// 						as={'div'}
	// 						fontSize={60}
	// 						fontWeight={300}
	// 						color='rgba(0,0,0,.7)'
	// 						lineHeight={1}
	// 						textAlign={{ base: 'center', lg: 'start' }}
	// 						id='headings'
	// 						overflow={'hidden'}
	// 					>
	// 						<Text
	// 							display={'none'}
	// 							id='heading-one'
	// 							w={{ lg: '65%' }}
	// 						>
	// 							It's time for you to experience the
	// 							inexperienced
	// 						</Text>
	// 						<Text
	// 							display={'none'}
	// 							id='heading-two'
	// 							w={{ lg: '65%' }}
	// 						>
	// 							A wishful escape to your desired destination
	// 						</Text>
	// 						<Text
	// 							display={'none'}
	// 							id='heading-three'
	// 							w={{ lg: '65%' }}
	// 						>
	// 							Visit Maldives- A dream come true / A fantasy
	// 							fulfilled
	// 						</Text>
	// 					</Text>
	// 				</Box>
	// 				<Box
	// 					mt={{ base: 10, lg: 5 }}
	// 					w={{ base: '100%', lg: '70%' }}
	// 					h='100px'
	// 					borderRadius={{ base: '0', lg: 'xl' }}
	// 					display={{
	// 						base: modalState ? 'none' : 'flex',
	// 						lg: 'flex',
	// 					}}
	// 					justifyContent={{ base: 'center', lg: 'start' }}
	// 					alignItems={{ base: 'center' }}
	// 					position={{ base: 'fixed', lg: 'relative' }}
	// 					bottom={1}
	// 					right={0}
	// 					zIndex={{ base: 10000000, lg: 1 }}
	// 				>
	// 					<Button
	// 						fontSize={20}
	// 						color='white'
	// 						bg='orange'
	// 						w={{ base: '90%', lg: '150px' }}
	// 						h='50px'
	// 						_hover={{
	// 							background: 'orange',
	// 						}}
	// 						onClick={() => {
	// 							setModalState(true);
	// 						}}
	// 					>
	// 						Discover Now
	// 					</Button>
	// 				</Box>
	// 			</Box>
	// 		</Box>
	// 	</>
	// );
};

export default Hero;
