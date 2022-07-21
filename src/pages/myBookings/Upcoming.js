import { Box, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import getUserinfoApi from '../../apis/getUserInfoApi';
import GetUserRequestedPackages from '../../apis/GetUserRequestedPackages';
import UpcomingCard from './UpcomingCard';

const Upcoming = (props) => {
	const navigate = useNavigate();
	const [requests, setRequests] = useState(useOutletContext().upcoming);
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState(false);

	console.log('value in upcoming : ', useOutletContext().upcoming);

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
							{requests
								.filter((data) => {
									return data.status === 'Cancelled'
										? false
										: true;
								})
								.map((data, index) => {
									return <></>;
								}).length === 0 ? (
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
													navigate(
														'/mybookings/completed'
													);
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
													navigate(
														'/mybookings/cancelled'
													);
												}}
											>
												cancelled
											</Text>{' '}
											booking ?
										</Text>
									</Box>
								</Box>
							) : (
								requests
									.filter((data) => {
										return data.status === 'Cancelled'
											? false
											: true;
									})
									.map((data, index) => {
										return (
											<UpcomingCard
												data={data}
												key={index}
												changeState={setState}
											/>
										);
									})
							)}
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
