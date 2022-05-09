import { Box, Button, Text, Image } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/banner.png';
import img2 from '../../assets/banner.jpeg';
import Footer from '../../footer/Footer';
import Nav from '../../nav/Nav';

const BlogList = () => {
	const navigate = useNavigate();
	const handleBack = () => {
		navigate('/');
	};
	return (
		<>
			<Nav />
			<Box
				w='100vw'
				h='100vh'
				pl='5vw'
				pr='5vw'
				pt='7vw'
				position={'relative'}
				bg='#DBDBDB'
			>
				{/* heading */}
				<Box pb={5}>
					<Text fontSize={40} fontWeight={700}>
						Blogs
					</Text>
				</Box>
				{/* results */}
				<Box minH='900px' className='new-font'>
					{/* this blog contain a blog in a blog list */}
					<Box
						display={'flex'}
						borderTop='1px solid rgba(0,0,0,.3)'
						borderBottom='1px solid rgba(0,0,0,.3)'
						py={4}
						cursor='pointer'
					>
						{/* this box is for data  */}
						<Box
							w={'60%'}
							pr={4}
							position='relative'
							onClick={() => {
								navigate('/blogs/121212');
							}}
						>
							{/* Heading */}
							<Text
								display={'inline-block'}
								fontSize={30}
								fontWeight={'bold'}
								pb={5}
								pt={4}
								color='gray.600'
							>
								Heading One
							</Text>
							{/* chunck of blog body */}
							<Text display={'inline-block'} color='gray.600'>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since
								the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen
								book.
							</Text>
							<Box
								position={'absolute'}
								bottom={0}
								color='gray.500'
							>
								<Text display={'inline-block'} pr={5}>
									3 min Read
								</Text>
								<Text display={'inline-block'}>April 3</Text>
							</Box>
						</Box>
						{/* this box is for image */}
						<Box w='40%'>
							<Image src={img} />
						</Box>
					</Box>

					<Box
						display={'flex'}
						borderTop='1px solid rgba(0,0,0,.3)'
						borderBottom='1px solid rgba(0,0,0,.3)'
						py={4}
						cursor='pointer'
					>
						{/* this box is for data  */}
						<Box w={'60%'} pr={4} position='relative'>
							{/* Heading */}
							<Text
								display={'inline-block'}
								fontSize={30}
								fontWeight={700}
								pb={5}
								pt={4}
								color='gray.600'
							>
								Heading Two
							</Text>
							{/* chunck of blog body */}
							<Text display={'inline-block'} color='gray.600'>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since
								the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen
								book.
							</Text>
							<Box
								position={'absolute'}
								bottom={0}
								color='gray.500'
							>
								<Text display={'inline-block'} pr={5}>
									3 min Read
								</Text>
								<Text display={'inline-block'}>April 3</Text>
							</Box>
						</Box>
						{/* this box is for image */}
						<Box w='40%'>
							<Image src={img2} />
						</Box>
					</Box>
				</Box>
			</Box>
			<Footer />
		</>
	);
};

export default BlogList;
