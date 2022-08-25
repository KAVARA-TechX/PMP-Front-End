import { Box, Text, Image } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import img from '../../assets/banner.png';
// import img2 from '../../assets/banner.jpeg';
// import Footer from '../../footer/Footer';
import Nav from '../../nav/Nav';
// import parse from 'html-react-parser';
import React, { useEffect, useState, Suspense } from 'react';

const Footer = React.lazy(() => {
	return import('../../footer/Footer');
});

const Blog = ({ data }) => {
	const navigate = useNavigate();
	const ca = new Date(data.createdAt);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const monthName = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	return (
		<Box
			display={'flex'}
			flexDir={{ base: 'column', lg: 'row' }}
			borderTop='1px solid rgba(255,255,255,.3)'
			borderBottom='1px solid rgba(255,255,255,.3)'
			py={4}
			cursor='pointer'
		>
			{/* this box is for data  */}
			<Box
				w={{ base: '100%', lg: '60%' }}
				h='fit-content'
				pb={10}
				pr={4}
				position='relative'
				onClick={() => {
					navigate(`/blogs/${data._id}`);
				}}
				order={{ base: 2, lg: 1 }}
			>
				{/* Heading */}
				<Text
					display={'block'}
					fontSize={30}
					fontWeight={'bold'}
					pb={5}
					pt={4}
					textAlign='justify'
				>
					{data.blogHeading}
				</Text>
				{/* chunck of blog body */}
				<Text display={'inline-block'}>
					{data.blogBody !== undefined
						? data.blogBody.blogBody.replace(/(<([^>]+)>)/gi, '')
								.length > 200
							? data.blogBody.blogBody
									.replace(/(<([^>]+)>)/gi, '')
									.slice(0, 200) + '...'
							: data.blogBody.blogBody.replace(
									/(<([^>]+)>)/gi,
									''
							  )
						: ''}
				</Text>
				<Box position={'absolute'} bottom={0}>
					<Text display={'inline-block'} color='gray.600'>
						{monthName[ca.getMonth()]} {ca.getDate()}
					</Text>
				</Box>
			</Box>
			{/* this box is for image */}
			<Box w={{ base: '100%', lg: '40%' }} order={{ base: 1, lg: 2 }}>
				<Image
					src={data.imageUrl
						.replace('https', 'http')
						.replace('http', 'https')}
				/>
			</Box>
		</Box>
	);
};

const BlogList = () => {
	const [blogList, setBlogList] = useState([]);
	// const navigate = useNavigate();
	// const handleBack = () => {
	// 	navigate('/');
	// };

	useEffect(() => {
		const getBlogs = async () => {
			try {
				const response = await axios.get(
					'/blog/get-blogs'
				);
				console.log(response);
				setBlogList(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		getBlogs();
	}, []);

	return (
		<>
			<Nav />
			<Box
				w='100vw'
				pl='9vw'
				pr='9vw'
				pt='7vw'
				position={'relative'}
				pb='50px'
			>
				{/* heading */}
				<Box pb={5}>
					<Text fontSize={40} fontWeight={700}>
						Blogs
					</Text>
				</Box>
				{/* results */}
				<Box minH='fit-content' className='new-font'>
					{/* this blog contain a blog in a blog list */}
					{blogList.map((blog, index) => {
						return <Blog data={blog} key={index} />;
					})}
				</Box>
			</Box>
			<Suspense fallback={'loading..'}>
				<Footer />
			</Suspense>
		</>
	);
};

export default BlogList;
