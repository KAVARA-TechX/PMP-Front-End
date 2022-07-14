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
				<Text fontSize={20} fontWeight={300}>
					Are you looking for a{' '}
					<Text
						as='span'
						color='#32bac9'
						cursor={'pointer'}
						onClick={() => {
							navigate('/mybookings');
						}}
					>
						upcoming
					</Text>{' '}
					or{' '}
					<Text
						as='span'
						color='#32bac9'
						cursor={'pointer'}
						onClick={() => {
							navigate('/mybookings/cancelled');
						}}
					>
						cancelled
					</Text>{' '}
					booking ?
				</Text>
			</Box>
		</Box>
	);
};

export default Completed;
