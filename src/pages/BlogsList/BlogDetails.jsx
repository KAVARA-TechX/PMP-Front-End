import { Box, Text } from '@chakra-ui/react';
import parse from 'html-react-parser';
import Footer from '../../footer/Footer';
import Nav from '../../nav/Nav';
// import img from '../../assets/banner.png';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './blogDetails.css';

const BlogDetails = () => {
	const val = useLocation();
	const blogData = val.state;
	console.log(blogData);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	console.log(blogData.blogBody);

	return (
		<>
			<Nav />
			<Box
				px={{ base: '20px', lg: '9vw' }}
				pt='50px'
				overflow={'hidden'}
				bg='#f5f5f5'
				color='#222'
				pb='50px'
			>
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
				<Box
					fontSize={20}
					lineHeight={1.9}
					className='blog-details-container'
				>
					{parse(blogData.blogBody)}
				</Box>
			</Box>
			<Footer />
		</>
	);
};

export default BlogDetails;
