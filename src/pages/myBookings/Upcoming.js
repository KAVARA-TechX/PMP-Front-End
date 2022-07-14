import { Box, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getUserinfoApi from '../../apis/getUserInfoApi';
import GetUserRequestedPackages from '../../apis/GetUserRequestedPackages';
import UpcomingCard from './UpcomingCard';

const Upcoming = () => {
	const navigate = useNavigate();
	const [requests, setRequests] = useState([]);
	const [loading, setLoading] = useState(true);
	const [state, setState] = useState(false);

	useEffect(() => {
		const requestedPackages = async () => {
			try {
				const res = await getUserinfoApi();

				if (res.data._id.length > 10) {
					const response = await GetUserRequestedPackages(
						res.data._id
					);
					setRequests(response.data.requests);
					setLoading(false);
				}
			} catch (error) {
				console.log('error occurred ', error);
				setLoading(false);
			}
		};
		requestedPackages();
	}, [state]);

	return (
		<>
			{loading ? (
				<Box
					h='500px'
					display={'flex'}
					justifyContent='center'
					alignItems={'center'}
				>
					<Spinner />
				</Box>
			) : (
				<>
					{requests.length !== 0 ? (
						<Box
							px='5vw'
							display={'flex'}
							flexDir='column'
							gap='20px'
							mt='30px'
							mb='50px'
						>
							{requests.map((data, index) => {
								return (
									<UpcomingCard
										data={data}
										key={index}
										changeState={setState}
									/>
								);
							})}
						</Box>
					) : (
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
					)}
				</>
			)}
		</>
	);
};
export default React.memo(Upcoming);
