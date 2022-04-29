import { Box, Button, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import hero from '../assets/main2.jpeg';
import UserForm from '../modal/UserForm';
import { useState, useRef } from 'react';
import './Hero.css';

const Hero = () => {
	const [modalState, setModalState] = useState(false);

	useEffect(() => {
		const headings = document.getElementById('headings').children;
		const timerIn = 3000;
		const timerOut = 2800;

		let index = 0;
		const animateText = () => {
			for (let i = 0; i < headings.length; i++) {
				headings[i].classList.remove('text-in', 'text-out');
			}

			headings[index].classList.add('text-in');

			setTimeout(() => {
				headings[index].classList.add('text-out');
			}, timerOut);

			setTimeout(() => {
				if (index === headings.length - 1) {
					index = 0;
				} else {
					index++;
				}
				animateText();
			}, timerIn);
			// if (index === headings.length - 1) {
			// 	index = 0;
			// } else {
			// 	index += 1;
			// }
			// setTimeout(animateText, 3000);
		};
		animateText();
	}, []);

	return (
		<Box h='500px' w='100vw' bg='red' mb='100px'>
			<UserForm state={modalState} setState={setModalState} />
			<Box
				h='100%'
				backgroundImage={`url(${hero})`}
				backgroundPosition={'right'}
				backgroundRepeat='no-repeat'
				bgSize={'cover'}
				position='relative'
				display={'flex'}
				flexDir='column'
				alignItems={{ base: 'center', lg: 'start' }}
				pl={{ lg: 10 }}
			>
				<Box
					pt={{ base: 100, lg: 130 }}
					// pl={{ base: 0, lg: 100 }}
					lineHeight={1}
					textAlign='center'
				>
					<Text
						as={'div'}
						fontSize={60}
						fontWeight={300}
						color='rgba(0,0,0,.7)'
						lineHeight={1}
						textAlign={{ base: 'center', lg: 'start' }}
						id='headings'
						overflow={'hidden'}
					>
						<Text
							display={'none'}
							id='heading-one'
							w={{ lg: '65%' }}
						>
							It's time for you to experience the inexperienced
						</Text>
						<Text
							display={'none'}
							id='heading-two'
							w={{ lg: '65%' }}
						>
							A wishful escape to your desired destination
						</Text>
						<Text
							display={'none'}
							id='heading-three'
							w={{ lg: '65%' }}
						>
							Visit Maldives- A dream come true / A fantasy
							fulfilled
						</Text>
					</Text>
				</Box>
				<Box
					mt={{ base: 10, lg: 5 }}
					w={{ base: '100%', lg: '70%' }}
					h='100px'
					borderRadius={{ base: '0', lg: 'xl' }}
					display={{ base: modalState ? 'none' : 'flex', lg: 'flex' }}
					justifyContent={{ base: 'center', lg: 'start' }}
					alignItems={{ base: 'center' }}
					position={{ base: 'fixed', lg: 'relative' }}
					bottom={1}
					right={0}
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
			</Box>
		</Box>
	);
};

export default Hero;
