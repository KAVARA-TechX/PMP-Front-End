import { Box, Image, Spinner, Text } from '@chakra-ui/react';
import parse from 'html-react-parser';
import Footer from '../../footer/Footer';
import Nav from '../../nav/Nav';
// import img from '../../assets/banner.png';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './blogDetails.css';
import getBlogsById from '../../apis/getBolgsById';

const BlogDetails = () => {
	const blogId = useParams().id;
	const [loading, set_loading] = useState(true);

	const [blogData, setBlogData] = useState(null);

	useEffect(() => {
		window.scrollTo(0, 0);

		const getData = async () => {
			try {
				const res = await getBlogsById(blogId);
				setBlogData(res.data.blog);
				set_loading(false);
			} catch (error) {
				console.log('something went wrong ');
			}
		};

		getData();
	}, []);

	return (
		<>
			<Nav />
			{loading ? (
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
						bgImage={blogData.imageUrl
							.replace('https', 'http')
							.replace('http', 'https')}
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
						{parse(blogData.blogBody.blogBody)}
					</Box>
				</Box>
			)}
			<Footer />
		</>
	);
};

export default BlogDetails;
