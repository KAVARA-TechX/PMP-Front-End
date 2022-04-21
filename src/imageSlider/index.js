import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import './style.css';

const ImageSlider = () => {
	return (
		<Box w='80vw' mx='auto' overflowX={'scroll'}>
			{/* slider heading */}
			<Box>
				<Text
					fontSize={30}
					fontWeight={600}
					color='rgba(0,0,0,.6)'
					mb={5}
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
					mx={10}
					w='300px'
					bg='pink.100'
					borderRadius={'xl'}
					boxShadow='2xl'
				></Box>
				<Box
					height='500px'
					mx={10}
					display={'inline-block'}
					w='300px'
					bg='pink.100'
					borderRadius={'xl'}
					boxShadow='2xl'
				></Box>
				<Box
					height='500px'
					mx={10}
					display={'inline-block'}
					w='300px'
					bg='pink.100'
					borderRadius={'xl'}
					boxShadow='2xl'
				></Box>
				<Box
					height='500px'
					mx={10}
					display={'inline-block'}
					w='300px'
					bg='pink.100'
					borderRadius={'xl'}
					boxShadow='2xl'
				></Box>
				<Box
					height='500px'
					mx={10}
					display={'inline-block'}
					w='300px'
					bg='pink.100'
					borderRadius={'xl'}
					boxShadow='2xl'
				></Box>
				<Box
					height='500px'
					mx={10}
					display={'inline-block'}
					w='300px'
					bg='pink.100'
					borderRadius={'xl'}
					boxShadow='2xl'
				></Box>
				<Box
					height='500px'
					mx={10}
					display={'inline-block'}
					w='300px'
					bg='pink.100'
					borderRadius={'xl'}
					boxShadow='2xl'
				></Box>
				<Box
					height='500px'
					mx={10}
					display={'inline-block'}
					w='300px'
					bg='pink.100'
					borderRadius={'xl'}
					boxShadow='2xl'
				></Box>
			</Box>
		</Box>
	);
};

export default ImageSlider;
