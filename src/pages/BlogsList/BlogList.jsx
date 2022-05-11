import { Box, Text, Image } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/banner.png';
import img2 from '../../assets/banner.jpeg';
// import Footer from '../../footer/Footer';
import Nav from '../../nav/Nav';
import parse from 'html-react-parser';
import React, { useEffect, useState, Suspense } from 'react';

const Footer = React.lazy(() => {
	return import('../../footer/Footer');
});

const Blog = ({ data }) => {
	const navigate = useNavigate();
	const ca = new Date(data.createdAt);
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
			borderTop='1px solid rgba(255,255,255,.3)'
			borderBottom='1px solid rgba(255,255,255,.3)'
			py={4}
			cursor='pointer'
		>
			{/* this box is for data  */}
			<Box
				w={'60%'}
				pr={4}
				position='relative'
				onClick={() => {
					navigate(`/blogs/${data._id}`, { state: data });
				}}
			>
				{/* Heading */}
				<Text
					display={'block'}
					fontSize={30}
					fontWeight={'bold'}
					pb={5}
					pt={4}
				>
					{data.blogHeading}
				</Text>
				{/* chunck of blog body */}
				<Text display={'inline-block'}>
					{/* Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book. */}
					{data.blogBody
						? data.blogBody.replace(/(<([^>]+)>)/gi, '')
						: ''}
				</Text>
				<Box position={'absolute'} bottom={0}>
					<Text display={'inline-block'} pr={5} color='gray.600'>
						3 min Read
					</Text>
					<Text display={'inline-block'} color='gray.600'>
						{monthName[ca.getMonth()]} {ca.getDate()}
					</Text>
				</Box>
			</Box>
			{/* this box is for image */}
			<Box w='40%'>
				<Image src={data.imageUrl} />
			</Box>
		</Box>
	);
};

const BlogList = () => {
	const [blogList, setBlogList] = useState([]);
	const navigate = useNavigate();
	const handleBack = () => {
		navigate('/');
	};

	useEffect(() => {
		const getBlogs = async () => {
			try {
				const response = await axios.get(
					'https://planmyleisure.herokuapp.com/blog/get-blogs'
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
				pl='5vw'
				pr='5vw'
				pt='7vw'
				position={'relative'}
				bg='#222222'
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
