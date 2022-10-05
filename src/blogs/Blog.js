import { Box, Skeleton, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import img4 from '../assets/thingsToDo/house.webp';
import React, { useEffect, useState } from 'react';
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
				console.log(error.response);
				setLoading(false);
			}
		};
		getLatestBlog();
	}, []);

	return (
		<Box
			w={{ base: '100vw', lg: '82vw' }}
			mx='auto'
			mb={10}
			className='Blog'
			px={{ base: '20px', lg: 0 }}
		>
			<Text
				fontSize={30}
				fontWeight={600}
				mb={5}
				textAlign={{ base: 'center', lg: 'start' }}
				className='Blog-heading'
				color={'#141177'}
			>
				Blogs
			</Text>
			{loading ? (
				<>
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
						<Skeleton
							h='200px'
							w='100%'
							gridColumnStart={{ lg: 1 }}
							gridColumnEnd={{ lg: 3 }}
						/>
						<Skeleton
							h='200px'
							w='100%'
							gridColumnStart={{ lg: 3 }}
							gridColumnEnd={{ lg: 4 }}
						/>
						<Skeleton
							h='200px'
							w='100%'
							gridColumnStart={{ lg: 4 }}
							gridColumnEnd={{ lg: 5 }}
						/>
						<Skeleton
							h='200px'
							w='100%'
							gridColumnStart={{ lg: 1 }}
							gridColumnEnd={{ lg: 3 }}
							gridRowStart={{ lg: 2 }}
							gridRowEnd={{ lg: 3 }}
						/>
						<Skeleton
							h='200px'
							w='100%'
							gridColumn={{ lg: '3 / 5' }}
							gridRow={{ lg: '2 / 3' }}
						/>
						<Skeleton
							minH='200px'
							w='100%'
							gridColumn={{ lg: '5 / 6' }}
							gridRow={{ lg: '1 / 3' }}
						/>
					</Box>
				</>
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
					{latestBlogs[0] === undefined ? (
						''
					) : (
						<Box
							bgImage={latestBlogs[0].imageUrl
								.replace('https', 'http')
								.replace('http', 'https')}
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
								navigate(`blogs/${latestBlogs[0]._id}`);
							}}
							overflow='hidden'
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
					)}
					{latestBlogs[1] === undefined ? (
						''
					) : (
						<Box
							bgImage={latestBlogs[1].imageUrl
								.replace('https', 'http')
								.replace('http', 'https')}
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
								navigate(`blogs/${latestBlogs[1]._id}`);
							}}
							className='show'
							overflow='hidden'
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
					)}
					{latestBlogs[2] === undefined ? (
						<></>
					) : (
						<Box
							bgImage={latestBlogs[2].imageUrl
								.replace('https', 'http')
								.replace('http', 'https')}
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
								navigate(`blogs/${latestBlogs[2]._id}`);
							}}
							className='show'
							overflow='hidden'
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
					)}
					{latestBlogs[3] === undefined ? (
						<></>
					) : (
						<Box
							bgImage={latestBlogs[3].imageUrl
								.replace('https', 'http')
								.replace('http', 'https')}
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
								navigate(`blogs/${latestBlogs[3]._id}`);
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
					)}
					{latestBlogs[4] === undefined ? (
						<></>
					) : (
						<Box
							bgImage={latestBlogs[4].imageUrl
								.replace('https', 'http')
								.replace('http', 'https')}
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
								navigate(`blogs/${latestBlogs[4]._id}`);
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
					)}
					<Box
						bgImage={img4}
						bgSize='cover'
						w='100%'
						minH='100px'
						gridColumn={{ lg: '5 / 6' }}
						gridRow={{ lg: '1 / 3' }}
						borderRadius='md'
						display={latestBlogs.length < 4 ? 'none' : 'flex'}
						alignItems='end'
						boxShadow='rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
						overflow='hidden'
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
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default React.memo(Blog);
