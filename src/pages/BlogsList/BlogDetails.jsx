import { Box, Text, Image } from '@chakra-ui/react';
import parse from 'html-react-parser';
import Footer from '../../footer/Footer';
import Nav from '../../nav/Nav';
import img from '../../assets/banner.png';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BlogDetails = () => {
	const val = useLocation();
	const blogData = val.state;
	console.log(blogData);
	useEffect(() => {});
	console.log(blogData.blogBody);

	return (
		<>
			<Nav />
			<Box pl='5vw' pr='5vw' pt='50px' overflow={'hidden'}>
				<Text fontSize={40} fontWeight={600} pb='30px'>
					{blogData.blogHeading}
				</Text>
				<Box
					h='600px'
					pb='30px'
					overflow={'hidden'}
					bgImage={blogData.imageUrl}
					bgSize='cover'
					bgPos={'50% 50%'}
				>
					{/* <Image src={blogData.imageUrl} mx='auto' w='100%' /> */}
				</Box>
				<Text fontSize={20} lineHeight={1.9}>
					{parse(blogData.blogBody)}
				</Text>
			</Box>
			<Footer />
		</>
	);
};

export default BlogDetails;
