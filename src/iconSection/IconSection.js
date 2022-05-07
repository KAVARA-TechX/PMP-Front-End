import { Box, Image } from '@chakra-ui/react';
import x7 from '../assets/icons/24x7.svg';
import allRounder from '../assets/icons/allRound.svg';
import easyPrice from '../assets/icons/easyPrice.svg';
import oneStopShop from '../assets/icons/oneStopShop.svg';

const IconSection = () => {
	return (
		<Box
			w='100vw'
			h='100px'
			bg='#32BAC9'
			display={'grid'}
			gridTemplateColumns={'repeat(4, 1fr)'}
			alignItems='center'
			textAlign={'center'}
			color='white'
			mb={10}
		>
			<Box display={'flex'} flexDir='column' fontWeight={500}>
				<Image src={x7} h='50px' />
				24X7 Assistance
			</Box>
			<Box display={'flex'} flexDir='column' fontWeight={500}>
				<Image src={allRounder} h='50px' />
				All Rounder Expertise
			</Box>
			<Box display={'flex'} flexDir='column' fontWeight={500}>
				<Image src={easyPrice} h='50px' />
				Easy Pricing
			</Box>
			<Box display={'flex'} flexDir='column' fontWeight={500}>
				<Image src={oneStopShop} h='50px' />
				One-Stop Shop
			</Box>
		</Box>
	);
};

export default IconSection;
