import { Box, Text, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../../nav/Nav';

const SearchResult = () => {
	const value = useParams();
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
				pt='5vw'
				position={'relative'}
			>
				{/* heading */}
				<Box>
					<Text fontSize={30}>Search Result</Text>
				</Box>
				{/* results */}
				<Box minH='900px'>
					<Box
						w='100%'
						h='150px'
						bg='gray.600'
						borderRadius={'2xl'}
						mt='20px'
					/>
					<Box
						w='100%'
						h='150px'
						bg='gray.600'
						borderRadius={'2xl'}
						mt='20px'
					/>
					<Box
						w='100%'
						h='150px'
						bg='gray.600'
						borderRadius={'2xl'}
						mt='20px'
					/>
					<Box
						w='100%'
						h='150px'
						bg='gray.600'
						borderRadius={'2xl'}
						mt='20px'
					/>
				</Box>
			</Box>
		</>
	);
};

export default SearchResult;