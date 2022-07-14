import { Box, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import Nav from '../../nav/Nav';

const ListingPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Nav />
			<Box
				w='100vw'
				h='100vh'
				pl='5vw'
				pr='5vw'
				pt='5vw'
				position={'relative'}
			>
				{/* heading */}
				<Box>
					<Text fontSize={30}>Listings</Text>
				</Box>
			</Box>
		</>
	);
};

export default ListingPage;
