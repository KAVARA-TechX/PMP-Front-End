import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import './style.css';

const ImageSlider = () => {
	return (
		<Box w={{ base: '100vw', lg: '80vw' }} mx='auto' overflowX={'scroll'}>
			{/* slider heading */}
			<Box>
				<Text
					fontSize={30}
					fontWeight={600}
					color='rgba(0,0,0,.6)'
					mb={5}
					textAlign={{ base: 'center', lg: 'start' }}
				>
					Visit Maldives
				</Text>
			</Box>
			{/* slider cards */}
			<Box
				as='div'
				id='scrollbar'
				overflowX={'scroll'}
				overflowY='hidden'
				display='block'
				whiteSpace='nowrap'
				pb={10}
			>
				{/* card */}
				<Box
					height='500px'
					display={'inline-block'}
					mx={5}
					w='300px'
					bg='pink.100'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2)'
				></Box>
				<Box
					height='500px'
					mx={5}
					display={'inline-block'}
					w='300px'
					bg='pink.100'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2)'
				></Box>
				<Box
					height='500px'
					mx={5}
					display={'inline-block'}
					w='300px'
					bg='pink.100'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2)'
				></Box>
				<Box
					height='500px'
					mx={5}
					display={'inline-block'}
					w='300px'
					bg='pink.100'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2)'
				></Box>
				<Box
					height='500px'
					mx={5}
					display={'inline-block'}
					w='300px'
					bg='pink.100'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2)'
				></Box>
				<Box
					height='500px'
					mx={5}
					display={'inline-block'}
					w='300px'
					bg='pink.100'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2)'
				></Box>
				<Box
					height='500px'
					mx={5}
					display={'inline-block'}
					w='300px'
					bg='pink.100'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2)'
				></Box>
				<Box
					height='500px'
					mx={5}
					display={'inline-block'}
					w='300px'
					bg='pink.100'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2)'
				></Box>
			</Box>
		</Box>
	);
};

export default ImageSlider;
