import { Box, Text, Image } from '@chakra-ui/react';
import Footer from '../../footer/Footer';
import Nav from '../../nav/Nav';
import img from '../../assets/banner.png';

const BlogDetails = () => {
	return (
		<>
			<Nav />
			<Box pl='5vw' pr='5vw' pt='50px' overflow={'hidden'}>
				<Text fontSize={40} fontWeight={600} pb='30px'>
					Heading One
				</Text>
				<Box h='fit-content' pb='30px'>
					<Image src={img} mx='auto' w='90%' />
				</Box>
				<Text fontSize={20} lineHeight={1.9}>
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting, remaining
					essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum
					passages, and more recently with desktop publishing software
					like Aldus PageMaker including versions of Lorem Ipsum.
				</Text>
			</Box>
			<Footer />
		</>
	);
};

export default BlogDetails;
