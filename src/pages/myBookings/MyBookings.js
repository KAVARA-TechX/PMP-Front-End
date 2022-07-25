import { Box, Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import getUserinfoApi from '../../apis/getUserInfoApi';
import GetUserRequestedPackages from '../../apis/GetUserRequestedPackages';
import Footer from '../../footer/Footer';
import Nav from '../../nav/Nav';

const MyBookings = () => {
	const [upcoming, set_upcoming] = useState([]);
	const [completed, set_completed] = useState([]);
	const [cancelled, set_cancelled] = useState([]);
	const [main_loading, set_main_loading] = useState(true);
	const path = useLocation().pathname.split('/');
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);

		if (localStorage.getItem('token')) {
			set_main_loading(false);
		} else {
			navigate('/');
		}

		getData();
	}, []);

	const getData = async () => {
		try {
			const res = await getUserinfoApi();

			if (res.data._id.length > 10) {
				const response = await GetUserRequestedPackages(res.data._id);

				for (let i = 0; i < response.data.requests.length; i++) {
					console.log(`${i + 1} => `, response.data.requests[i]);

					if (response.data.requests[i].status === 'Cancelled') {
						set_cancelled((prev) => {
							prev.push(response.data.requests[i]);
							return [...prev];
						});
					} else {
						// check for date
						const todaysDate = new Date();

						if (
							todaysDate.getFullYear() >
							parseInt(
								response.data.requests[i].endDate.split('-')[0]
							)
						) {
							set_completed((prev) => {
								prev.push(response.data.requests[i]);
								return [...prev];
							});
						} else {
							if (
								todaysDate.getFullYear() ===
								parseInt(
									response.data.requests[i].endDate.split(
										'-'
									)[0]
								)
							) {
								if (
									todaysDate.getMonth() + 1 >
									parseInt(
										response.data.requests[i].endDate.split(
											'-'
										)[1]
									)
								) {
									set_completed((prev) => {
										prev.push(response.data.requests[i]);
										return [...prev];
									});
								} else {
									if (
										todaysDate.getMonth() + 1 ===
										parseInt(
											response.data.requests[
												i
											].endDate.split('-')[1]
										)
									) {
										if (
											todaysDate.getDate() >
											parseInt(
												response.data.requests[
													i
												].endDate.split('-')[2]
											)
										) {
											set_completed((prev) => {
												prev.push(
													response.data.requests[i]
												);
												return [...prev];
											});
										} else {
											set_upcoming((prev) => {
												prev.push(
													response.data.requests[i]
												);
												return [...prev];
											});
										}
									} else {
										set_upcoming((prev) => {
											prev.push(
												response.data.requests[i]
											);
											return [...prev];
										});
									}
								}
								setLoading(false);
							} else {
								set_upcoming((prev) => {
									prev.push(response.data.requests[i]);
									return [...prev];
								});
							}
						}
					}
				}
			}
			setLoading(false);
		} catch (error) {
			console.log('error occurred ', error);
			setLoading(false);
		}
	};

	return (
		<>
			<Nav />
			{main_loading ? (
				<Box
					h='calc(100vh - 80px)'
					w='100vw'
					display={'flex'}
					justifyContent='center'
					alignItems={'center'}
				>
					<Spinner />
				</Box>
			) : (
				<>
					<Box
						w='100vw'
						overflow={'hidden'}
						px={{ base: '20px', lg: '5vw' }}
						pt='50px'
						display={'flex'}
						flexDir={{ base: 'column', lg: 'row' }}
						justifyContent={{ lg: 'space-between' }}
						alignItems='center'
					>
						<Box display={'inline-flex'} overflow='hidden'>
							<Text
								fontSize={{ base: 15, lg: 20 }}
								fontWeight={600}
								px='13px'
								py='5px'
								borderBottom={
									path.length === 2
										? '3px solid #32BAC9'
										: 'none'
								}
								onClick={() => {
									navigate('/mybookings', {
										state: upcoming,
									});
								}}
								cursor='pointer'
							>
								Upcoming
							</Text>
							<Text
								fontSize={{ base: 15, lg: 20 }}
								fontWeight={600}
								px='13px'
								py='5px'
								borderBottom={
									path.length === 3 && path[2] === 'completed'
										? '3px solid #32BAC9'
										: 'none'
								}
								onClick={() => {
									navigate('/mybookings/completed', {
										state: completed,
									});
								}}
								cursor='pointer'
							>
								Completed
							</Text>
							<Text
								fontSize={{ base: 15, lg: 20 }}
								fontWeight={600}
								borderBottom={
									path.length === 3 && path[2] === 'cancelled'
										? '3px solid #32BAC9'
										: 'none'
								}
								px='13px'
								py='5px'
								onClick={() => {
									navigate('/mybookings/cancelled', {
										state: cancelled,
									});
								}}
								cursor='pointer'
							>
								Cancelled
							</Text>
						</Box>
					</Box>
					{loading ? (
						<Box
							h='50vh'
							w='100vw'
							display={'flex'}
							justifyContent='center'
							alignItems={'center'}
						>
							<Spinner />
						</Box>
					) : (
						<Outlet
							context={{
								upcoming: upcoming,
								completed: completed,
								cancelled: cancelled,
							}}
						/>
					)}
				</>
			)}
			<Footer />
		</>
	);
};
export default MyBookings;
