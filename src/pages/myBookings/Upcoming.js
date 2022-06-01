import { Box, Image, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getUserinfoApi from '../../apis/getUserInfoApi';
import GetUserRequestedPackages from '../../apis/GetUserRequestedPackages';
import img from '../../assets/bookings/undraw_Starry_window_re_0v82.png';

const Upcoming = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const requestedPackages = async () => {
			try {
				const res = await getUserinfoApi();
				const response = await GetUserRequestedPackages(res.data._id);

				console.log('response is ', response.data);
			} catch (error) {
				console.log('error occurred ', error);
			}
		};
		requestedPackages();
	});

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
					You have no upcoming bookings
				</Text>
				<Text fontSize={20} fontWeight={300}>
					Are you looking for a{' '}
					<Text
						as='span'
						color='#32bac9'
						cursor={'pointer'}
						onClick={() => {
							navigate('/mybookings/completed');
						}}
					>
						completed
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
export default Upcoming;
