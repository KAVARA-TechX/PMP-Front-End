import { Box, Text } from '@chakra-ui/react';
import Footer from './footer/Footer';
import Nav from './nav/Nav';

const AboutUs = () => {
	return (
		<>
			<Nav />
			<Box>
				<Box bg='#32BAC9' pt={'50px'} pb='100px'>
					<Text
						fontSize={30}
						fontWeight={700}
						color='#222'
						textAlign={'center'}
					>
						About Us
					</Text>
				</Box>
				<Text
					mx='15vw'
					px='50px'
					py='50px'
					borderRadius={'10px'}
					border='1px solid rgba(255,255,255,.4)'
					lineHeight={2}
					fontSize={18}
					fontWeight={400}
					textAlign='justify'
					position={'relative'}
					bottom='50px'
					background='#222'
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
