import { Box, chakra, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import React from 'react';
import hero from '../assets/main2.jpeg';

const MotionUnorderedList = chakra(motion.ul, {
	shouldForwardProp: isValidMotionProp,
});
const MotionListItems = chakra(motion.li, {
	shouldForwardProp: isValidMotionProp,
});

const Hero = () => {
	return (
		<Box h='500px' w='100vw' bg='red' mb='100px'>
			<Box
				h='100%'
				backgroundImage={`url(${hero})`}
				backgroundPosition={'right'}
				backgroundRepeat='no-repeat'
				bgSize={'cover'}
				position='relative'
			>
				<Box pt={150} pl={100} lineHeight={1}>
					<Text
						fontSize={60}
						fontWeight={500}
						color='rgba(0,0,0,.5)'
						lineHeight={0.9}
					>
						It's time for a new
					</Text>
					<Text fontSize={70} fontWeight={800} color='rgba(0,0,0,.7)'>
						EXPERIENCE
					</Text>
				</Box>
				<Box
					w='700px'
					h='100px'
					bg='orange'
					borderRadius='xl'
					position='absolute'
					bottom='-50px'
					left='50%'
					transform='translateX(-50%)'
					boxShadow={'2xl'}
				></Box>
			</Box>
		</Box>
	);
};

export default Hero;
