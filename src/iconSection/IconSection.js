import { Box, Image, Text } from '@chakra-ui/react';
import clipboard from '../assets/icons/clipboard-text.png';
import message from '../assets/icons/messages.png';
import cardtick from '../assets/icons/card-tick.png';
// import x7 from '../assets/icons/24x7.svg';
// import allRounder from '../assets/icons/allRound.svg';
// import easyPrice from '../assets/icons/easyPrice.svg';
// import oneStopShop from '../assets/icons/oneStopShop.svg';

const IconSection = () => {
	return (
		<Box
			w='100vw'
			h='fit-content'
			bg='rgba(14, 135, 246,.25)'
			px='30px'
			py='70px'
			mb={'60px'}
		>
			<Text fontWeight={700} textAlign='center' fontSize={'40px'}>
				Our Gurantee
			</Text>
			<Box display={'grid'} gridTemplateColumns='repeat(3,1fr)' mt='50px'>
				<Box w='300px' mx='auto'>
					<Box
						w='80px'
						h='80px'
						mx='auto'
						display={'flex'}
						justifyContent='center'
						alignItems={'center'}
						borderRadius={'full'}
						overflow='hidden'
						border='3px solid #0e87f6'
						mb='20px'
					>
						<Image src={clipboard} h='40px' />
					</Box>
					<Text fontWeight={700} fontSize='28px' textAlign={'center'}>
						24/7 Assistance
					</Text>
				</Box>
				<Box w='300px' mx='auto'>
					<Box
						w='80px'
						h='80px'
						mx='auto'
						display={'flex'}
						justifyContent='center'
						alignItems={'center'}
						borderRadius={'full'}
						overflow='hidden'
						border='3px solid #0e87f6'
						mb='20px'
					>
						<Image src={message} h='40px' />
					</Box>
					<Text fontWeight={700} fontSize='28px' textAlign={'center'}>
						One-Stop Shop
					</Text>
				</Box>
				<Box w='300px' mx='auto'>
					<Box
						w='80px'
						h='80px'
						mx='auto'
						display={'flex'}
						justifyContent='center'
						alignItems={'center'}
						borderRadius={'full'}
						overflow='hidden'
						border='3px solid #0e87f6'
						mb='20px'
					>
						<Image src={cardtick} h='40px' />
					</Box>
					<Text fontWeight={700} fontSize='28px' textAlign={'center'}>
						All Round Expertise
					</Text>
				</Box>
			</Box>
		</Box>
	);
	// return (
	// 	<Box
	// 		w='100vw'
	// 		h='fit-content'
	// 		bg='#32BAC9'
	// 		display={'grid'}
	// 		gridTemplateColumns={{
	// 			base: 'repeat(2,1fr)',
	// 			lg: 'repeat(4, 1fr)',
	// 		}}
	// 		alignItems='center'
	// 		textAlign={'center'}
	// 		color='white'
	// 		pt={'40px'}
	// 		pb={'40px'}
	// 		rowGap='50px'
	// 		mb={10}
	// 	>
	// 		<Box display={'flex'} flexDir='column' fontWeight={500}>
	// 			<Image src={x7} h='50px' />
	// 			24X7 Assistance
	// 		</Box>
	// 		<Box display={'flex'} flexDir='column' fontWeight={500}>
	// 			<Image src={allRounder} h='50px' />
	// 			All Rounder Expertise
	// 		</Box>
	// 		<Box display={'flex'} flexDir='column' fontWeight={500}>
	// 			<Image src={easyPrice} h='50px' />
	// 			Easy Pricing
	// 		</Box>
	// 		<Box display={'flex'} flexDir='column' fontWeight={500}>
	// 			<Image src={oneStopShop} h='50px' />
	// 			One-Stop Shop
	// 		</Box>
	// 	</Box>
	// );
};

export default IconSection;
