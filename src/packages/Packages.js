import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Packages = () => {
	return (
		<Box
			w='100vw'
			display={'flex'}
			flexDir={{ base: 'column', lg: 'row' }}
			alignItems='center'
		>
			<Box
				w={{ base: '100%', lg: '35%' }}
				h='100%'
				display='flex'
				justifyContent='center'
				alignItems='center'
			>
				<Box>
					<Text
						fontSize={{ base: 25, lg: 30 }}
						fontWeight={600}
						position='relative'
						_after={{
							base: {
								content: '""',
								position: 'absolute',
								left: 0,
								bottom: 0,
								height: '2px',
								width: '100%',
								background: 'orange',
							},
							lg: {
								content: '""',
								position: 'absolute',
								left: 0,
								bottom: 0,
								height: '2px',
								width: '85%',
								background: 'orange',
							},
						}}
					>
						Find The Perfect Escape
					</Text>
					<Text textAlign={{ base: 'center', lg: 'start' }}>
						Discover your ideal Experience
					</Text>
				</Box>
			</Box>
			<Box
				w={{ base: '100%', lg: '75%' }}
				h='100%'
				display={'flex'}
				alignItems='center'
				overflowX={{ base: 'scroll', lg: 'none' }}
			>
				<Box
					h='400px'
					minW={{ base: '250px' }}
					bg='Highlight'
					borderRadius={'xl'}
					boxShadow={'0 3px 10px rgb(0,0,0,0.2)'}
					m={5}
				/>
				<Box
					h='400px'
					minW={{ base: '250px' }}
					bg='pink.100'
					borderRadius={'xl'}
					boxShadow={'0 3px 10px rgb(0,0,0,0.2)'}
					m={5}
				/>
				<Box
					h='400px'
					minW={{ base: '250px' }}
					bg='ThreeDFace'
					borderRadius={'xl'}
					boxShadow={'0 3px 10px rgb(0,0,0,0.2)'}
					m={5}
				/>
			</Box>
		</Box>
	);
};

export default Packages;
