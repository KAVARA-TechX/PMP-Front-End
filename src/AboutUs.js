import { Box, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import Footer from './footer/Footer';
import Nav from './nav/Nav';

const AboutUs = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Nav />
			<Box>
				<Box bg='rgba(14, 135, 246,.25)' pt={'50px'} pb='100px'>
					<Text
						fontSize={{ base: 24, lg: 30 }}
						fontWeight={700}
						color='#222'
						textAlign={'center'}
					>
						About Us
					</Text>
				</Box>
				<Text
					mx={{ base: '20px', lg: '15vw' }}
					px={{ base: '10px', lg: '50px' }}
					py='50px'
					borderRadius={'10px'}
					border='1px solid rgba(255,255,255,.4)'
					lineHeight={2}
					fontSize={16}
					fontWeight={400}
					textAlign='justify'
					position={'relative'}
					bottom='50px'
					background='#fffdf7'
					boxShadow={'lg'}
					box-shadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
				>
					Plan My Leisure, started in 2020, is India’s smoothest
					online D-I-Y travel booking platform which empowers you to
					curate customised holidays for yourself and for your friends
					and family. This itinerary building platform considers
					several factors like the traveller’s interests and budget,
					duration of the trip, number of pax, in order to deliver the
					best service completely online. Plan My Leisure was born out
					of sheer interest in travelling. A lot of passion goes
					behind curating the best travel experiences for you. We make
					sure that you cherish your travels and book with us for all
					your future endeavors. Plan My Leisure guarantees you a
					hassle-free trip with zero regrets.
				</Text>
			</Box>
			<Footer />
		</>
	);
};

export default AboutUs;
