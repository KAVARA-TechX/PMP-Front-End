import { Box, Text } from '@chakra-ui/react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../footer/Footer';
import Nav from '../../nav/Nav';

const MyBookings = () => {
	const path = useLocation().pathname.split('/');
	console.log(path);
	const navigate = useNavigate();

	return (
		<>
			<Nav />
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
							path.length === 2 ? '3px solid #32BAC9' : 'none'
						}
						onClick={() => {
							navigate('/mybookings');
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
							navigate('/mybookings/completed');
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
							navigate('/mybookings/cancelled');
						}}
						cursor='pointer'
					>
						Cancelled
					</Text>
				</Box>
			</Box>
			<Outlet />
			<Footer />
		</>
	);
};
export default MyBookings;
