import { Box, Text, Image } from '@chakra-ui/react';
import clipboard from './clipboard-text.svg';
import message from '../assets/icons/messages.png';
import cardtick from '../assets/icons/card-tick.png';
import React, { useEffect } from 'react';

const DreamVacation = ({ onLoad }) => {
	useEffect(() => {
		onLoad(true);
	}, []);

	return (
		<Box
			w='100vw'
			h={{ base: 'fit-content', lg: '360px' }}
			bg='rgba(14, 135, 246,.25)'
			px={{ base: '10px', lg: '9vw' }}
			mb={10}
			py='30px'
		>
			<Text
				fontWeight={700}
				textAlign='center'
				fontSize={{ base: '30px', lg: '32px' }}
				color='#141177'
			>
				Let’s find you your dream vacation
			</Text>
			<Box
				display={'grid'}
				gridTemplateColumns={{ base: '1fr', lg: 'repeat(3,1fr)' }}
				mt='50px'
				gap={{ base: '30px', lg: '0' }}
			>
				<Box w='300px' mx='auto' overflow={'hidden'}>
					<Box
						w={{ base: '60px', lg: '70px' }}
						h={{ base: '60px', lg: '70px' }}
						mx='auto'
						display={'flex'}
						justifyContent='center'
						alignItems={'center'}
						borderRadius={'full'}
						overflow='hidden'
						border='3px solid #141177'
						mb='20px'
					>
						{/* <Image
							src={clipboard}
							h={{ base: '30px', lg: '30px' }}
						/> */}
						<svg
							height={'30px'}
							viewBox='0 0 48 48'
							xmlns='http://www.w3.org/2000/svg'
							style={{ fill: '#141177' }}
						>
							<path
								d='M28.7 4H19.3C17.22 4 15.52 5.68 15.52 7.76V9.64C15.52 11.72 17.2 13.4 19.28 13.4H28.7C30.78 13.4 32.46 11.72 32.46 9.64V7.76C32.48 5.68 30.78 4 28.7 4Z'
								fill='#141177'
							/>
							<path
								d='M34.48 9.63996C34.48 12.82 31.88 15.42 28.7 15.42H19.3C16.12 15.42 13.52 12.82 13.52 9.63996C13.52 8.51996 12.32 7.81996 11.32 8.33996C8.50002 9.83996 6.58002 12.82 6.58002 16.24V35.06C6.58002 39.98 10.6 44 15.52 44H32.48C37.4 44 41.42 39.98 41.42 35.06V16.24C41.42 12.82 39.5 9.83996 36.68 8.33996C35.68 7.81996 34.48 8.51996 34.48 9.63996ZM24.76 33.9H16C15.18 33.9 14.5 33.22 14.5 32.4C14.5 31.58 15.18 30.9 16 30.9H24.76C25.58 30.9 26.26 31.58 26.26 32.4C26.26 33.22 25.58 33.9 24.76 33.9ZM30 25.9H16C15.18 25.9 14.5 25.22 14.5 24.4C14.5 23.58 15.18 22.9 16 22.9H30C30.82 22.9 31.5 23.58 31.5 24.4C31.5 25.22 30.82 25.9 30 25.9Z'
								fill='#141177'
							/>
						</svg>
					</Box>
					<Text
						fontWeight={700}
						fontSize={{ base: '22px', lg: '20px' }}
						textAlign={'center'}
					>
						Select a Package
					</Text>
					<Text
						textAlign={'center'}
						fontSize={'16px'}
						lineHeight='24px'
						fontWeight={500}
					>
						Select a destination of your choice and fill in the
						basic information.
					</Text>
				</Box>
				<Box w='300px' mx='auto'>
					<Box
						w={{ base: '60px', lg: '70px' }}
						h={{ base: '60px', lg: '70px' }}
						mx='auto'
						display={'flex'}
						justifyContent='center'
						alignItems={'center'}
						borderRadius={'full'}
						overflow='hidden'
						border='3px solid #141177'
						mb='20px'
					>
						{/* <Image
							src={message}
							color='#090841'
							h={{ base: '30px', lg: '30px' }}
						/> */}
						<svg
							height={'30px'}
							viewBox='0 0 48 48'
							xmlns='http://www.w3.org/2000/svg'
							style={{ fill: '#141177' }}
						>
							<path
								d='M44 25.72C44 30.3 41.64 34.36 38 36.92L35.32 42.82C34.7 44.16 32.9 44.42 31.96 43.28L29 39.72C25.28 39.72 21.86 38.46 19.26 36.36L20.46 34.94C29.7 34.24 37 26.92 37 18C37 16.48 36.78 14.98 36.38 13.54C40.92 15.94 44 20.5 44 25.72Z'
								fill='#141177'
							/>
							<path
								d='M32.6 12.14C30.26 7.34 25.04 4 19 4C10.72 4 4 10.26 4 18C4 22.58 6.36 26.64 10 29.2L12.68 35.1C13.3 36.44 15.1 36.68 16.04 35.56L17.14 34.24L19 32C27.28 32 34 25.74 34 18C34 15.9 33.5 13.92 32.6 12.14ZM24 19.5H14C13.18 19.5 12.5 18.82 12.5 18C12.5 17.18 13.18 16.5 14 16.5H24C24.82 16.5 25.5 17.18 25.5 18C25.5 18.82 24.82 19.5 24 19.5Z'
								fill='#141177'
							/>
						</svg>
					</Box>
					<Text
						fontWeight={700}
						fontSize={{ base: '22px', lg: '20px' }}
						textAlign={'center'}
					>
						Get it Customised
					</Text>
					<Text
						textAlign={'center'}
						px='10px'
						fontSize={'16px'}
						lineHeight='24px'
						fontWeight={500}
					>
						You can personalize your trip as per your wish. Click
						and explore options to complete your customisation.
					</Text>
				</Box>
				<Box w='300px' mx='auto'>
					<Box
						w={{ base: '60px', lg: '70px' }}
						h={{ base: '60px', lg: '70px' }}
						mx='auto'
						display={'flex'}
						justifyContent='center'
						alignItems={'center'}
						borderRadius={'full'}
						overflow='hidden'
						border='3px solid #141177'
						mb='20px'
					>
						{/* <Image
							src={cardtick}
							h={{ base: '30px', lg: '30px' }}
						/> */}
						<svg
							height={'30px'}
							viewBox='0 0 48 48'
							xmlns='http://www.w3.org/2000/svg'
							style={{ fill: '#141177' }}
						>
							<path
								d='M38 30C33.58 30 30 33.58 30 38C30 39.5 30.42 40.92 31.16 42.12C32.54 44.44 35.08 46 38 46C40.92 46 43.46 44.44 44.84 42.12C45.58 40.92 46 39.5 46 38C46 33.58 42.42 30 38 30ZM42.14 37.14L37.88 41.08C37.6 41.34 37.22 41.48 36.86 41.48C36.48 41.48 36.1 41.34 35.8 41.04L33.82 39.06C33.24 38.48 33.24 37.52 33.82 36.94C34.4 36.36 35.36 36.36 35.94 36.94L36.9 37.9L40.1 34.94C40.7 34.38 41.66 34.42 42.22 35.02C42.78 35.62 42.74 36.56 42.14 37.14Z'
								fill='#141177'
							/>
							<path
								d='M44 15.1V16C44 17.1 43.1 18 42 18H6C4.9 18 4 17.1 4 16V15.08C4 10.5 7.7 6.80005 12.28 6.80005H35.7C40.28 6.80005 44 10.52 44 15.1Z'
								fill='#141177'
							/>
							<path
								d='M4 23V32.92C4 37.5 7.7 41.2 12.28 41.2H24.8C25.96 41.2 26.96 40.22 26.86 39.06C26.58 36 27.56 32.68 30.28 30.04C31.4 28.94 32.78 28.1 34.28 27.62C36.78 26.82 39.2 26.92 41.34 27.64C42.64 28.08 44 27.14 44 25.76V22.98C44 21.88 43.1 20.98 42 20.98H6C4.9 21 4 21.9 4 23ZM16 34.5H12C11.18 34.5 10.5 33.82 10.5 33C10.5 32.18 11.18 31.5 12 31.5H16C16.82 31.5 17.5 32.18 17.5 33C17.5 33.82 16.82 34.5 16 34.5Z'
								fill='#141177'
							/>
						</svg>
					</Box>
					<Text
						fontWeight={700}
						fontSize={{ base: '22px', lg: '20px' }}
						textAlign={'center'}
					>
						Pay Securely
					</Text>
					<Text
						textAlign={'center'}
						fontSize={'16px'}
						lineHeight='24px'
						fontWeight={500}
					>
						Pay easily with a safe and secure gateway.
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default React.memo(DreamVacation);
