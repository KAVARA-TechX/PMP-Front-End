import { Box, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/banner.jpeg';
import img2 from '../assets/VisitMaldives.png';
import img3 from '../assets/MainBanner2.png';
import img4 from '../assets/thingsToDo/house.png';
import img5 from '../assets/banner.png';
import img6 from '../assets/footer.jpg';

const Blog = () => {
	const navigate = useNavigate();

	return (
		<Box w={{ base: '100vw', lg: '80vw' }} mx='auto'>
			<Text
				fontSize={30}
				fontWeight={600}
				color='rgba(0,0,0,.6)'
				mb={5}
				textAlign={{ base: 'center', lg: 'start' }}
			>
				Blogs
			</Text>
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
					bgImage={img1}
					bgSize='cover'
					w='100%'
					minH='200px'
					gridColumnStart={{ lg: 1 }}
					gridColumnEnd={{ lg: 3 }}
					borderRadius='md'
					display={'flex'}
					alignItems='end'
					pb={3}
					pl={2}
					boxShadow='rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
				>
					Blog One
				</Box>
				<Box
					bgImage={img2}
					bgSize='cover'
					w='100%'
					h='200px'
					borderRadius='md'
					gridColumnStart={{ lg: 3 }}
					gridColumnEnd={{ lg: 4 }}
					display={'flex'}
					alignItems='end'
					pb={3}
					pl={2}
					boxShadow='rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
				>
					Blog Two
				</Box>
				<Box
					bgImage={img3}
					bgSize='cover'
					w='100%'
					h='200px'
					borderRadius='md'
					gridColumnStart={{ lg: 4 }}
					gridColumnEnd={{ lg: 5 }}
					display={'flex'}
					alignItems='end'
					pb={3}
					pl={2}
					boxShadow='rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
				>
					Blog Three
				</Box>
				<Box
					bgImage={img4}
					bgSize='cover'
					w='100%'
					minH='200px'
					borderRadius='md'
					gridColumnStart={{ lg: 5 }}
					gridColumnEnd={{ lg: 6 }}
					gridRowStart={{ lg: 1 }}
					gridRowEnd={{ lg: 3 }}
					overflow='hidden'
				>
					<Box
						w='100%'
						h='100%'
						bg='rgba(0,0,0,.2)'
						color='white'
						fontWeight={'bold'}
						display='flex'
						justifyContent='center'
						alignItems='center'
						fontSize={30}
						cursor='pointer'
						onClick={() => {
							navigate('/blogs');
						}}
					>
						Read More
					</Box>
				</Box>
				<Box
					bgImage={img5}
					bgSize='cover'
					w='100%'
					h='150px'
					gridColumn={{ lg: '1 / 3' }}
					borderRadius='md'
					display={'flex'}
					alignItems='end'
					pb={3}
					pl={2}
					boxShadow='rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
				>
					Blog Four
				</Box>
				<Box
					bgImage={img6}
					bgSize='cover'
					w='100%'
					h='150px'
					gridColumn={{ lg: '3 / 5' }}
					borderRadius='md'
					display={'flex'}
					alignItems='end'
					pb={3}
					pl={2}
					boxShadow='rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
				>
					Blog Five
				</Box>
			</Box>
		</Box>
	);
};

export default Blog;
