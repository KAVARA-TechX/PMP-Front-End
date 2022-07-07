import {
	Box,
	Text,
	Icon,
	Badge,
	Checkbox,
	Stack,
	Spinner,
} from '@chakra-ui/react';
import { CheckIcon, StarIcon } from '@chakra-ui/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import img from '../../assets/thingsToDo/dream-vacation.png';
import Nav from '../../nav/Nav';
import Footer from '../../footer/Footer';
import { useEffect, useState } from 'react';
import searchApi from '../../apis/searchApi';
import PackageCard from '../../components/packageCard/PackageCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const SearchResult = () => {
	const value = useParams();
	const navigate = useNavigate();
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(true);
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);

		const getData = async () => {
			console.log('use parms valu is ', value);
			try {
				const res = await searchApi(
					value.location,
					value.checkInDate,
					value.checkOutDate
				);
				setResults(res.data.result);
				console.log('response is : ', res.data.result);
				setLoading(false);
			} catch (error) {
				console.log('error is ', error);
				setNotFound(true);
				setLoading(false);
			}
		};

		getData();
	}, []);

	return (
		<>
			<Nav />
			<Box
				w='100vw'
				h='fit-content'
				pt='5vw'
				position={'relative'}
				display='flex'
				pb='50px'
			>
				{/* filter column */}
				<Box
					display={{ base: 'none', lg: 'block' }}
					w='20%'
					h='300px'
					pl='30px'
					pt='30px'
				>
					<Text fontSize={20} fontWeight={800} mb='10px'>
						Price
					</Text>
					<Stack pl='5px'>
						<Checkbox>Below ₹100.k</Checkbox>
						<Checkbox>Below ₹150.k</Checkbox>
						<Checkbox>Below ₹200.k</Checkbox>
						<Checkbox>Above ₹100.k</Checkbox>
					</Stack>
					<Text fontSize={20} fontWeight={800} mb='10px' mt='20px'>
						Star Ratings
					</Text>
					<Stack pl='5px'>
						<Checkbox>3 Stars</Checkbox>
						<Checkbox>4 Stars</Checkbox>
						<Checkbox>5 Stars</Checkbox>
					</Stack>
				</Box>
				<Box
					w={{ base: '100%', lg: '80%' }}
					pr={{ base: '10px', lg: '30px' }}
					mx={{ base: '20px', lg: '0' }}
				>
					{/* heading */}
					<Box>
						<Text fontSize={30}>Search Result</Text>
					</Box>
					{/* results */}
					{loading ? (
						<Box
							w='100%'
							h='400px'
							display={'flex'}
							justifyContent='center'
							alignItems={'center'}
						>
							<Spinner />
						</Box>
					) : notFound ? (
						<Box
							h='100%'
							w='100%'
							display={'flex'}
							justifyContent='center'
							alignItems={'center'}
							fontSize='50px'
							color='rgba(255,255,255,.3)'
						>
							No Result Found
						</Box>
					) : (
						<Box>
							{results.map((data, index) => {
								return <PackageCard data={data} key={index} />;
							})}
						</Box>
					)}
				</Box>
			</Box>
			<Footer />
		</>
	);
};

export default SearchResult;
