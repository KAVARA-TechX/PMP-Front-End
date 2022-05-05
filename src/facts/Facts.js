// import { lazy, Suspense } from 'react';
import { Box, Text } from '@chakra-ui/react';
import image from '../assets/thingsToDo/house.webp';

const Facts = () => {
	return (
		<Box w='100vw' h='fit-content' display='flex' mt='150px' mb={10}>
			<Box
				w={{ base: '0%', lg: '50%' }}
				bgImage={image}
				bgSize='cover'
				bgPosition={'50% 100%'}
			></Box>
			<Box w={{ base: '100%', lg: '50%' }}>
				<Box ml={5}>
					<Text color='orange' fontSize={20} fontWeight={500} mb={1}>
						Plan My Leisure
					</Text>
					<Text
						color='rgba(0,0,0,.7)'
						fontSize={40}
						fontWeight={800}
						lineHeight={1}
						mb={5}
					>
						We help you find your dream vacation
					</Text>
					<Text lineHeight={1.4}>
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
						height={{ base: '150px', lg: '200px' }}
						display='flex'
						flexDir={'column'}
						justifyContent={'center'}
						alignItems='center'
						position={'relative'}
					>
						<Text fontSize={40} fontWeight={600} color='orange'>
							100+
						</Text>

						<Text>Holiday Package</Text>
					</Box>
					<Box
						height={{ base: '150px', lg: '200px' }}
						display='flex'
						flexDir={'column'}
						justifyContent={'center'}
						alignItems='center'
						position={'relative'}
					>
						<Text fontSize={40} fontWeight={600} color='orange'>
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
						<Text fontSize={40} fontWeight={600} color='orange'>
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
						<Text fontSize={40} fontWeight={600} color='orange'>
							1500+
						</Text>
						<Text>Satisfied Clients</Text>
					</Box>
					<Box
						height='150px'
						display='flex'
						flexDir={'column'}
						justifyContent={'center'}
						alignItems='center'
					></Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Facts;
