import { Box, Text, Icon, Badge, Checkbox, Stack } from '@chakra-ui/react';
import { CheckIcon, StarIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import img from '../../assets/thingsToDo/dream-vacation.png';
import Nav from '../../nav/Nav';
import Footer from '../../footer/Footer';

const SearchResult = () => {
	// const value = useParams();
	const navigate = useNavigate();

	// const handleBack = () => {
	// 	navigate('/');
	// };

	return (
		<>
			<Nav />
			<Box
				w='100vw'
				h='fit-content'
				pt='5vw'
				position={'relative'}
				display='flex'
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
					<Box>
						<Box
							w={'100%'}
							h={{ base: 'fit-content', lg: '300px' }}
							bg='transparent'
							border='1px solid #2d3748'
							borderRadius={'2xl'}
							mt='20px'
							display={'flex'}
							flexDir={{ base: 'column', lg: 'row' }}
							overflow='hidden'
							boxShadow={'2xl'}
							cursor='pointer'
							onClick={() => {
								navigate('/about-package');
							}}
						>
							<Box
								h={{ base: '200px', lg: '100%' }}
								w={{ base: '100%', lg: '30%' }}
								bgImg={img}
								bgSize='cover'
							></Box>
							<Box
								pl='30px'
								mr={{ base: '30px', lg: '0px' }}
								pt='30px'
								display={'flex'}
								flexDir='column'
								w={{ base: '100%', lg: '40%' }}
							>
								<Text fontSize={20} fontWeight={700}>
									Package one
								</Text>
								<Text
									display={'flex'}
									alignItems='center'
									gap={1}
								>
									3 <StarIcon color='gold' /> Hotel
								</Text>
								<Box
									mt={3}
									display='flex'
									gap='10px'
									flexWrap={'wrap'}
									mr={5}
								>
									<Badge
										bg={'green.200'}
										color='green'
										px={2}
										py={1}
										borderRadius='md'
									>
										<CheckIcon /> BUDGET
									</Badge>{' '}
									<Badge
										bg={'green.200'}
										color='green'
										px={2}
										py={1}
										borderRadius='md'
									>
										<CheckIcon /> SURFING
									</Badge>
									<Badge
										bg={'green.200'}
										color='green'
										px={2}
										py={1}
										borderRadius='md'
									>
										<CheckIcon /> REFUNDABLE
									</Badge>
									<Badge
										bg={'green.200'}
										color='green'
										px={2}
										py={1}
										borderRadius='md'
									>
										<CheckIcon /> KIDS FRIENDLY
									</Badge>
								</Box>
								<Box flexGrow={2} mt={5} />
								<Text
									display={'flex'}
									alignItems='center'
									gap={1}
									mb={3}
								>
									<Icon as={FcGoogle} /> Rated 4.4/5
								</Text>
							</Box>
							<Box
								h='100%'
								w={{ base: '100%', lg: '30%' }}
								bg='gray.700'
								pt='30px'
								pl='30px'
								display={'flex'}
								flexDir='column'
							>
								<Text textAlign={'start'}>
									PACKAGE INCLUDES
								</Text>
								<Text
									textAlign={'start'}
									ml='10px'
									mt='10px'
									fontWeight={300}
								>
									<CheckIcon color={'green.200'} /> Speed boat
									transfer
								</Text>
								<Text textAlign={'start'} fontWeight={300}>
									<CheckIcon color={'green.200'} ml='10px' />{' '}
									24x7 online support
								</Text>
								<Box flexGrow={2}></Box>
								<Box mr='30px' mb='20px' mt='30px'>
									<Text>
										<Badge
											bg='red.600'
											display={'inline-block'}
										>
											14%OFF
										</Badge>{' '}
										<Text
											display={'inline-block'}
											textDecoration='line-through'
											color='gray'
										>
											₹ 74,387
										</Text>
									</Text>
									<Text
										fontSize={20}
										fontWeight={600}
										mb='15px'
									>
										₹ 64,127
									</Text>
									<Box
										bg='green.500'
										// display={'inline-block'}
										fontSize={20}
										fontWeight={600}
										py={'15px'}
										textAlign='center'
										borderRadius={'xl'}
									>
										View Deal
									</Box>
								</Box>
							</Box>
						</Box>
						{/* next card */}
						<Box
							w={'100%'}
							h={{ base: 'fit-content', lg: '300px' }}
							bg='gray.600'
							borderRadius={'2xl'}
							mt='20px'
							display={'flex'}
							flexDir={{ base: 'column', lg: 'row' }}
							overflow='hidden'
							boxShadow={'2xl'}
							cursor='pointer'
							onClick={() => {
								navigate('/about-package');
							}}
						>
							<Box
								h={{ base: '200px', lg: '100%' }}
								w={{ base: '100%', lg: '30%' }}
								bgImg={img}
								bgSize='cover'
							></Box>
							<Box
								pl='30px'
								mr={{ base: '30px', lg: '0px' }}
								pt='30px'
								display={'flex'}
								flexDir='column'
								w={{ base: '100%', lg: '40%' }}
							>
								<Text fontSize={20} fontWeight={700}>
									Package one
								</Text>
								<Text
									display={'flex'}
									alignItems='center'
									gap={1}
								>
									3 <StarIcon color='gold' /> Hotel
								</Text>
								<Box
									mt={3}
									display='flex'
									gap='10px'
									flexWrap={'wrap'}
									mr={5}
								>
									<Badge
										bg={'green.200'}
										color='green'
										px={2}
										py={1}
										borderRadius='md'
									>
										<CheckIcon /> BUDGET
									</Badge>{' '}
									<Badge
										bg={'green.200'}
										color='green'
										px={2}
										py={1}
										borderRadius='md'
									>
										<CheckIcon /> SURFING
									</Badge>
									<Badge
										bg={'green.200'}
										color='green'
										px={2}
										py={1}
										borderRadius='md'
									>
										<CheckIcon /> REFUNDABLE
									</Badge>
									<Badge
										bg={'green.200'}
										color='green'
										px={2}
										py={1}
										borderRadius='md'
									>
										<CheckIcon /> KIDS FRIENDLY
									</Badge>
								</Box>
								<Box flexGrow={2} mt={5} />
								<Text
									display={'flex'}
									alignItems='center'
									gap={1}
									mb={3}
								>
									<Icon as={FcGoogle} /> Rated 4.4/5
								</Text>
							</Box>
							<Box
								h='100%'
								w={{ base: '100%', lg: '30%' }}
								bg='gray.700'
								pt='30px'
								pl='30px'
								display={'flex'}
								flexDir='column'
							>
								<Text textAlign={'start'}>
									PACKAGE INCLUDES
								</Text>
								<Text
									textAlign={'start'}
									ml='10px'
									mt='10px'
									fontWeight={300}
								>
									<CheckIcon color={'green.200'} /> Speed boat
									transfer
								</Text>
								<Text textAlign={'start'} fontWeight={300}>
									<CheckIcon color={'green.200'} ml='10px' />{' '}
									24x7 online support
								</Text>
								<Box flexGrow={2}></Box>
								<Box mr='30px' mb='20px' mt='30px'>
									<Text>
										<Badge
											bg='red.600'
											display={'inline-block'}
										>
											14%OFF
										</Badge>{' '}
										<Text
											display={'inline-block'}
											textDecoration='line-through'
											color='gray'
										>
											₹ 74,387
										</Text>
									</Text>
									<Text
										fontSize={20}
										fontWeight={600}
										mb='15px'
									>
										₹ 64,127
									</Text>
									<Box
										bg='green.500'
										// display={'inline-block'}
										fontSize={20}
										fontWeight={600}
										py={'15px'}
										textAlign='center'
										borderRadius={'xl'}
									>
										View Deal
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Footer />
		</>
	);
};

export default SearchResult;
