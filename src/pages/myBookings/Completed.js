import { Box, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Completed = () => {
	const navigate = useNavigate();

	return (
		<Box
			px={{ base: '20px', lg: '5vw' }}
			minH={'40vh'}
			display={'flex'}
			justifyContent='center'
			alignItems={'center'}
		>
			<Box display={'flex'} flexDir='column'>
				<Text fontSize={25} fontWeight={600}>
					You have no completed bookings
				</Text>
			</Box>
		</Box>
	);
};

export default Completed;
