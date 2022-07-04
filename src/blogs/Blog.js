import { Box, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import img4 from '../assets/thingsToDo/house.png';
import { useEffect, useState } from 'react';
import getBlogsByCount from '../apis/getBlogsByCount';
import './Blog.css';

const Blog = () => {
	const [latestBlogs, setLatestBlogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		const getLatestBlog = async () => {
			try {
				const response = await getBlogsByCount(1, 5);
				setLatestBlogs(response.data.blogs);
				console.log('blog response is : ', response.data.blogs);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};
		getLatestBlog();
	}, []);

	return (
		<Box w={{ base: '100vw', lg: '85vw' }} mx='auto' className='Blog'>
			<Text
				fontSize={30}
				fontWeight={600}
				mb={5}
				textAlign={{ base: 'center', lg: 'start' }}
				className='Blog-heading'
			>
				Blogs
			</Text>
			{loading ? (
				<Box></Box>
			) : (
				<Box
					display={'grid'}
					gridTemplateColumns={{
						base: 'repeat(1,1fr)',
						lg: 'repeat(5,1fr)',
					}}
					gap={3}
					position='relative'
					pb={5}
					color='white'
					fontWeight={'bold'}
				>
					<Box
						bgImage={latestBlogs[0].imageUrl}
						bgSize='cover'
						w='100%'
						minH='200px'
						gridColumnStart={{ lg: 1 }}
						gridColumnEnd={{ lg: 3 }}
						borderRadius='md'
						display={'flex'}
						alignItems='end'
						boxShadow='rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
						cursor={'pointer'}
						onClick={() => {
							navigate(`blogs/${latestBlogs[0]._id}`, {
								state: latestBlogs[0],
							});
						}}
						className='show'
					>
						<Box
							w='100%'
							h='100%'
							display={'none'}
							justifyContent='start'
							alignItems={'end'}
							fontSize='14px'
							px='5px'
							bg='rgba(0,0,0,.3)'
						>
							{latestBlogs[0].blogHeading}
						</Box>
					</Box>
					<Box
						bgImage={latestBlogs[1].imageUrl}
						bgSize='cover'
						w='100%'
						h='200px'
						borderRadius='md'
						gridColumnStart={{ lg: 3 }}
						gridColumnEnd={{ lg: 4 }}
						display={'flex'}
						alignItems='end'
						boxShadow='rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
						cursor={'pointer'}
						onClick={() => {
							navigate(`blogs/${latestBlogs[1]._id}`, {
								state: latestBlogs[1],
							});
						}}
						className='show'
					>
						<Box
							w='100%'
							h='100%'
							display={'none'}
							justifyContent='start'
							alignItems={'end'}
							fontSize='14px'
							px='5px'
							bg='rgba(0,0,0,.3)'
						>
							{latestBlogs[1].blogHeading}
						</Box>
					</Box>
					{/*
					<Box
						bgImage={latestBlogs[2].imageUrl}
						bgSize='cover'
						w='100%'
						h='200px'
						borderRadius='md'
						gridColumnStart={{ lg: 4 }}
						gridColumnEnd={{ lg: 5 }}
						display={'flex'}
						alignItems='end'
						boxShadow='rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
						cursor={'pointer'}
						onClick={() => {
							navigate(`blogs/${latestBlogs[2]._id}`, {
								state: latestBlogs[2],
							});
						}}
						className='show'
					>
						<Box
							w='100%'
							h='100%'
							display={'none'}
							justifyContent='start'
							alignItems={'end'}
							fontSize='14px'
							px='5px'
							bg='rgba(0,0,0,.3)'
						>
							{latestBlogs[2].blogHeading}
						</Box>
					</Box>
					
					<Box
						bgImage={latestBlogs[3].imageUrl}
						bgSize='cover'
						w='100%'
						minH='200px'
						borderRadius='md'
						gridColumnStart={{ lg: 1 }}
						gridColumnEnd={{ lg: 3 }}
						gridRowStart={{ lg: 2 }}
						gridRowEnd={{ lg: 3 }}
						overflow='hidden'
						display={'flex'}
						alignItems='end'
						cursor={'pointer'}
						onClick={() => {
							navigate(`blogs/${latestBlogs[3]._id}`, {
								state: latestBlogs[3],
							});
						}}
						className='show'
					>
						<Box
							w='100%'
							h='100%'
							display={'none'}
							justifyContent='start'
							alignItems={'end'}
							fontSize='14px'
							px='5px'
							bg='rgba(0,0,0,.3)'
						>
							{latestBlogs[3].blogHeading}
						</Box>
					</Box>
					<Box
						bgImage={latestBlogs[4].imageUrl}
						bgSize='cover'
						w='100%'
						h='200px'
						gridColumn={{ lg: '3 / 5' }}
						gridRow={{ lg: '2 / 3' }}
						borderRadius='md'
						display={'flex'}
						alignItems='end'
						boxShadow='rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
						cursor={'pointer'}
						onClick={() => {
							navigate(`blogs/${latestBlogs[4]._id}`, {
								state: latestBlogs[4],
							});
						}}
						className='show'
					>
						<Box
							w='100%'
							h='100%'
							display={'none'}
							justifyContent='start'
							alignItems={'end'}
							fontSize='14px'
							px='5px'
							bg='rgba(0,0,0,.3)'
						>
							{latestBlogs[4].blogHeading}
						</Box>
					</Box>
					<Box
						bgImage={img4}
						bgSize='cover'
						w='100%'
						minH='100px'
						gridColumn={{ lg: '5 / 6' }}
						gridRow={{ lg: '1 / 3' }}
						borderRadius='md'
						display={'flex'}
						alignItems='end'
						boxShadow='rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
					>
						<Box
							w='100%'
							h='100%'
							bg='rgba(0,0,0,.3)'
							color='white'
							fontWeight={600}
							display='flex'
							justifyContent='center'
							alignItems='center'
							fontSize={20}
							cursor='pointer'
							onClick={() => {
								navigate('/blogs');
							}}
						>
							Read More
						</Box>
					</Box>*/}
				</Box>
			)}
		</Box>
	);
};

export default Blog;
