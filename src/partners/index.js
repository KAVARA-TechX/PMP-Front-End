import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { ReactComponent as One } from '../assets/logos/one.svg';
import { ReactComponent as Two } from '../assets/logos/two.svg';
import { ReactComponent as Three } from '../assets/logos/three.svg';
import { ReactComponent as Four } from '../assets/logos/four.svg';
import { ReactComponent as Five } from '../assets/logos/five.svg';
import { ReactComponent as Six } from '../assets/logos/six.svg';
import { ReactComponent as Seven } from '../assets/logos/seven.svg';
import { ReactComponent as Eight } from '../assets/logos/eight.svg';
import { ReactComponent as Nine } from '../assets/logos/nine.svg';
import { ReactComponent as Ten } from '../assets/logos/ten.svg';
import { ReactComponent as Eleven } from '../assets/logos/eleven.svg';
import { ReactComponent as Twelve } from '../assets/logos/twelve.svg';

const Partners = () => {
	return (
		<Box w='80vw' mx='auto' mt={10}>
			{/* heading */}
			<Box
				w='100%'
				display={'flex'}
				flexDir='column'
				alignItems={'center'}
			>
				<Text fontSize={40} fontWeight={600} color='rgba(0,0,0,.6)'>
					Our Partners
				</Text>
				<Text fontSize={20} color='rgba(0,0,0,.3)'>
					We team up with the best to give you an unmatchable
					experience
				</Text>
			</Box>
			{/* logos */}
			<Box
				display={'flex'}
				justifyContent='space-around'
				mt={5}
				pt={10}
				pb={10}
				mb={10}
			>
				<Box display={'inline-block'}>
					<One width='50px' height='50px' />
				</Box>
				<Box display={'inline-block'}>
					<Two width='50px' height='50px' />
				</Box>
				<Box display={'inline-block'}>
					<Three width='50px' height='50px' />
				</Box>
				<Box display={'inline-block'}>
					<Four width='50px' height='50px' color='blue.200' />
				</Box>
				<Box display={'inline-block'}>
					<Five width='50px' height='50px' />
				</Box>
				<Box display={'inline-block'}>
					<Six width='50px' height='50px' />
				</Box>
				<Box display={'inline-block'}>
					<Seven width='50px' height='50px' />
				</Box>
				<Box display={'inline-block'}>
					<Nine width='50px' height='50px' />
				</Box>
				<Box display={'inline-block'}>
					<Eight width='50px' height='50px' />
				</Box>
				<Box display={'inline-block'}>
					<Ten width='50px' height='50px' />
				</Box>
				<Box display={'inline-block'}>
					<Eleven width='50px' height='50px' />
				</Box>
				<Box display={'inline-block'}>
					<Twelve width='50px' height='50px' />
				</Box>
			</Box>
		</Box>
	);
};

export default Partners;
