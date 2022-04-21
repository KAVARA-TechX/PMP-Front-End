import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Packages = () => {
	return (
		<Box w='100vw' h='550px' display={'flex'}>
			<Box
				w='35%'
				h='100%'
				display='flex'
				justifyContent='center'
				alignItems='center'
			>
				<Box>
					<Text
						fontSize={30}
						fontWeight={600}
						position='relative'
						_after={{
							content: '""',
							position: 'absolute',
							left: 0,
							bottom: 0,
							height: '2px',
							width: '90%',
							background: 'orange',
						}}
					>
						Find The Perfect Escape
					</Text>
					<Text>Discover your ideal Experience</Text>
				</Box>
			</Box>
			<Box w='75%' h='100%' display={'flex'} alignItems='center'>
				<Box
					h='400px'
					w='250px'
					bg='Highlight'
					borderRadius={'xl'}
					boxShadow={'2xl'}
					m={5}
				/>
				<Box
					h='400px'
					w='250px'
					bg='pink.100'
					borderRadius={'xl'}
					boxShadow={'2xl'}
					m={5}
				/>
				<Box
					h='400px'
					w='250px'
					bg='ThreeDFace'
					borderRadius={'xl'}
					boxShadow={'2xl'}
					m={5}
				/>
			</Box>
		</Box>
	);
};

export default Packages;
