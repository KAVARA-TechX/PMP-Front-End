import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Facts = () => {
	return (
		<Box w='100vw' h='fit-content' display='flex' mt='150px' mb={10}>
			<Box w={{ base: '0%', lg: '50%' }} bg='green.200'></Box>
			<Box w={{ base: '100%', lg: '50%' }}>
				<Box ml={5}>
					<Text color='orange' fontSize={20} fontWeight={500} mb={1}>
						Traveler Point
					</Text>
					<Text
						color='rgba(0,0,0,.7)'
						fontSize={40}
						fontWeight={800}
						lineHeight={1}
						mb={5}
					>
						We helping you find your dream vacation
					</Text>
					<Text lineHeight={1.4}>
						Lorem ipsum dolor sit amet, consectertr adipisciing elit
						ut aliquanm, purus sit amet luctus venenatis, lectus
						magna fringilla urna, porttitor rhoncus dolor purus non
						enim praesent elementum facilisis leo, vel
					</Text>
				</Box>
				<Box display={'grid'} gridTemplateColumns='repeat(2,1fr)'>
					<Box
						height={{ base: '150px', lg: '200px' }}
						display='flex'
						flexDir={'column'}
						justifyContent={'center'}
						alignItems='center'
						position={'relative'}
						_after={{
							content: '""',
							position: 'absolute',
							width: '2px',
							height: '60%',
							background: 'gray',
							right: 0,
							bottom: 0,
						}}
						_before={{
							content: '""',
							position: 'absolute',
							width: '60%',
							height: '2px',
							background: 'gray',
							bottom: 0,
							right: 0,
						}}
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
						_before={{
							content: '""',
							position: 'absolute',
							width: '60%',
							height: '2px',
							background: 'gray',
							bottom: 0,
							left: 0,
						}}
					>
						<Text fontSize={40} fontWeight={600} color='orange'>
							201
						</Text>
						<Text>Luxury Hotel</Text>
					</Box>
					<Box
						height={{ base: '150px', lg: '200px' }}
						display='flex'
						flexDir={'column'}
						justifyContent={'center'}
						alignItems='center'
						position={'relative'}
						_after={{
							content: '""',
							position: 'absolute',
							width: '2px',
							height: '60%',
							background: 'gray',
							top: 0,
							right: 0,
						}}
					>
						<Text fontSize={40} fontWeight={600} color='orange'>
							15
						</Text>
						<Text>Elite Airlines</Text>
					</Box>
					<Box
						height='150px'
						display='flex'
						flexDir={'column'}
						justifyContent={'center'}
						alignItems='center'
					>
						<Text fontSize={40} fontWeight={600} color='orange'>
							120M+
						</Text>
						<Text>Satisfied Traveler</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Facts;
