// import { lazy, Suspense } from 'react';
import { Box, Text } from '@chakra-ui/react';
import image from '../assets/thingsToDo/dream-vacation.png';
import './Facts.css';

const Facts = () => {
	return (
		<Box
			w='100vw'
			h='fit-content'
			display='flex'
			mt={{ base: '200px', lg: '100px' }}
			mb={10}
			className='facts'
			px={{ base: '10px', lg: '7.5vw' }}
			gap='20px'
		>
			<Box
				w={{ base: '0%', lg: '45%' }}
				mb={10}
				borderRadius='20px'
				bgImage={image}
				bgSize='cover'
				bgPosition={'50% 50%'}
			></Box>
			<Box
				w={{ base: '100%', lg: '35.57%' }}
				h='fit-content'
				flexGrow={1}
			>
				<Box ml={{ base: 0, lg: 5 }}>
					<Text fontSize={18} fontWeight={500} mb={1}>
						Plan My Leisure
					</Text>
					<Text
						fontSize={32}
						fontWeight={800}
						lineHeight={1}
						mb={5}
						className='facts-heading'
					>
						We help you find your dream vacation
					</Text>
					<Text
						lineHeight={1.4}
						textAlign='start'
						fontSize={16}
						// pr={{ base: '', lg: '10px' }}
					>
						We make sure you enjoy your leisure to the fullest .
						Over the years, we have helped more than 10000
						travellers find the perfect holiday package to their
						favourite holiday destinations.
					</Text>
				</Box>
				<Box
					mx={10}
					display={'grid'}
					gridTemplateColumns='repeat(2,1fr)'
					gap={0}
				>
					<Box
						height={{ base: '100px', lg: '150px' }}
						display='flex'
						flexDir={'column'}
						justifyContent={'center'}
						alignItems='center'
						position={'relative'}
					>
						<Text fontSize={38} fontWeight={600} color='#0e87f6'>
							100+
						</Text>

						<Text>Holiday Packages</Text>
					</Box>
					<Box
						height={{ base: '100px', lg: '150px' }}
						display='flex'
						flexDir={'column'}
						justifyContent={'center'}
						alignItems='center'
						position={'relative'}
					>
						<Text fontSize={38} fontWeight={600} color='#0e87f6'>
							1000+
						</Text>
						<Text>Travellers</Text>
					</Box>
					<Box
						height={{ base: '150px', lg: '200px' }}
						display='flex'
						flexDir={'column'}
						justifyContent={'center'}
						alignItems='center'
						position={'relative'}
					>
						<Text fontSize={38} fontWeight={600} color='#0e87f6'>
							15+
						</Text>
						<Text>Destinations</Text>
					</Box>
					<Box
						height={{ base: '150px', lg: '200px' }}
						display='flex'
						flexDir={'column'}
						justifyContent={'center'}
						alignItems='center'
						position={'relative'}
					>
						<Text fontSize={38} fontWeight={600} color='#0e87f6'>
							1500+
						</Text>
						<Text>Satisfied Clients</Text>
					</Box>
					{/* <Box
						height='150px'
						display='flex'
						flexDir={'column'}
						justifyContent={'center'}
						alignItems='center'
					></Box> */}
				</Box>
			</Box>
		</Box>
	);
};

export default Facts;
