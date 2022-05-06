import { Box, Text } from '@chakra-ui/react';

const Blog = () => {
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
				borderBottom={'2px solid orange'}
				pb={5}
			>
				<Box
					bg='gray.600'
					w='100%'
					minH='200px'
					// gridColumn={{ lg: '1 / 3' }}
					gridColumnStart={{ lg: 1 }}
					gridColumnEnd={{ lg: 3 }}
					borderRadius='md'
				></Box>
				<Box
					bg='gray.600'
					w='100%'
					h='200px'
					borderRadius='md'
					gridColumnStart={{ lg: 3 }}
					gridColumnEnd={{ lg: 4 }}
				>
					{' '}
				</Box>
				<Box
					bg='gray.600'
					w='100%'
					h='200px'
					borderRadius='md'
					gridColumnStart={{ lg: 4 }}
					gridColumnEnd={{ lg: 5 }}
				>
					{' '}
				</Box>
				<Box
					bg='gray.600'
					w='100%'
					minH='200px'
					borderRadius='md'
					gridColumnStart={{ lg: 5 }}
					gridColumnEnd={{ lg: 6 }}
					gridRowStart={{ lg: 1 }}
					gridRowEnd={{ lg: 3 }}
				></Box>
				<Box
					bg='gray.600'
					w='100%'
					h='150px'
					gridColumn={{ lg: '1 / 3' }}
					borderRadius='md'
				></Box>
				<Box
					bg='gray.600'
					w='100%'
					h='150px'
					gridColumn={{ lg: '3 / 5' }}
					borderRadius='md'
				></Box>
				<Text
					bg='white'
					position={'absolute'}
					bottom={0}
					left='50%'
					transform='translate(-50%,50%)'
					cursor={'pointer'}
				>
					Read More
				</Text>
			</Box>
		</Box>
	);
};

export default Blog;
