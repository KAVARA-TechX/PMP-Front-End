import { Box, Text, Checkbox, Stack, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Nav from '../../nav/Nav';
import Footer from '../../footer/Footer';
import { useEffect, useState } from 'react';
import searchApi from '../../apis/searchApi';
import PackageCard from '../../components/packageCard/PackageCard';

const SearchResult = () => {
	const value = useParams();
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(true);
	const [notFound, setNotFound] = useState(false);
	const [filter_price, set_filter_price] = useState([]);
	const [filter_star, set_filter_star] = useState([]);

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

	useEffect(() => {
		console.log('filter price ', filter_price);
		console.log('filter star ', filter_star);
	}, [filter_price, filter_star]);

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
					h='fit-content'
					pl='30px'
					pt='30px'
				>
					<Text fontSize={20} fontWeight={800} mb='10px'>
						Price
					</Text>
					<Stack pl='5px'>
						<Checkbox
							onChange={(e) => {
								if (e.target.checked) {
									// add
									set_filter_price((prev) => {
										prev.push('100k');
										return [...prev];
									});
								} else {
									// remove
									set_filter_price((prev) => {
										prev.splice(prev.indexOf('100k'), 1);
										return [...prev];
									});
								}
							}}
						>
							Below ₹100.k
						</Checkbox>
						<Checkbox
							onChange={(e) => {
								if (e.target.checked) {
									// add
									set_filter_price((prev) => {
										prev.push('150k');
										return [...prev];
									});
								} else {
									// remove
									set_filter_price((prev) => {
										prev.splice(prev.indexOf('150k'), 1);
										return [...prev];
									});
								}
							}}
						>
							Below ₹150.k
						</Checkbox>
						<Checkbox
							onChange={(e) => {
								if (e.target.checked) {
									// add
									set_filter_price((prev) => {
										prev.push('200k');
										return [...prev];
									});
								} else {
									// remove
									set_filter_price((prev) => {
										prev.splice(prev.indexOf('200k'), 1);
										return [...prev];
									});
								}
							}}
						>
							Below ₹200.k
						</Checkbox>
						<Checkbox
							onChange={(e) => {
								if (e.target.checked) {
									// add
									set_filter_price((prev) => {
										prev.push('200k+');
										return [...prev];
									});
								} else {
									// remove
									set_filter_price((prev) => {
										prev.splice(prev.indexOf('200k+'), 1);
										return [...prev];
									});
								}
							}}
						>
							Above ₹200.k
						</Checkbox>
					</Stack>
					<Text fontSize={20} fontWeight={800} mb='10px' mt='20px'>
						Star Ratings
					</Text>
					<Stack pl='5px'>
						<Checkbox
							onChange={(e) => {
								if (e.target.checked) {
									// add
									set_filter_star((prev) => {
										prev.push('1');
										return [...prev];
									});
								} else {
									// remove
									set_filter_star((prev) => {
										prev.splice(prev.indexOf('1'), 1);
										return [...prev];
									});
								}
							}}
						>
							1 Star
						</Checkbox>
						<Checkbox
							onChange={(e) => {
								if (e.target.checked) {
									// add
									set_filter_star((prev) => {
										prev.push('2');
										return [...prev];
									});
								} else {
									// remove
									set_filter_star((prev) => {
										prev.splice(prev.indexOf('2'), 1);
										return [...prev];
									});
								}
							}}
						>
							2 Stars
						</Checkbox>
						<Checkbox
							onChange={(e) => {
								if (e.target.checked) {
									// add
									set_filter_star((prev) => {
										prev.push('3');
										return [...prev];
									});
								} else {
									// remove
									set_filter_star((prev) => {
										prev.splice(prev.indexOf('3'), 1);
										return [...prev];
									});
								}
							}}
						>
							3 Stars
						</Checkbox>
						<Checkbox
							onChange={(e) => {
								if (e.target.checked) {
									// add
									set_filter_star((prev) => {
										prev.push('4');
										return [...prev];
									});
								} else {
									// remove
									set_filter_star((prev) => {
										prev.splice(prev.indexOf('4'), 1);
										return [...prev];
									});
								}
							}}
						>
							4 Stars
						</Checkbox>
						<Checkbox
							onChange={(e) => {
								if (e.target.checked) {
									// add
									set_filter_star((prev) => {
										prev.push('5');
										return [...prev];
									});
								} else {
									// remove
									set_filter_star((prev) => {
										prev.splice(prev.indexOf('5'), 1);
										return [...prev];
									});
								}
							}}
						>
							5 Stars
						</Checkbox>
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
							color='gray.300'
						>
							No Result Found
						</Box>
					) : results.length === 0 ? (
						<Box
							h='100%'
							w='100%'
							display={'flex'}
							justifyContent='center'
							alignItems={'center'}
							fontSize='50px'
							color='gray.300'
						>
							No Result Found
						</Box>
					) : (
						<Box>
							{results
								.filter((data) => {
									if (filter_price.length === 0) {
										return true;
									} else {
										if (data.startingPrice >= 200000) {
											if (
												filter_price.indexOf(
													'200k+'
												) !== -1
											) {
												return true;
											}
										} else {
											if (
												filter_price.indexOf('200k') !==
												-1
											) {
												if (
													data.startingPrice <= 200000
												) {
													return true;
												}
											} else if (
												filter_price.indexOf('150k') !==
												-1
											) {
												if (
													data.startingPrice <= 150000
												) {
													return true;
												}
											} else if (
												filter_price.indexOf('100k') !==
												-1
											) {
												if (
													data.startingPrice <= 100000
												) {
													return true;
												}
											}
										}
									}
								})
								.filter((data) => {
									if (filter_star.length === 0) {
										return true;
									} else {
										if (
											filter_star.indexOf(
												String(data.star)
											) === -1
										) {
											return false;
										} else {
											return true;
										}
									}
								})
								.map((data, index) => {
									return (
										<PackageCard
											data={data}
											key={index}
											fromSearchPage={true}
											checkInDate={value.checkInDate}
											checkOutDate={value.checkOutDate}
											guests={value.guests}
										/>
									);
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
