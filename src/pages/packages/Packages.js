import Nav from '../../nav/Nav';
import {
	Box,
	Text,
	Icon,
	Badge,
	Modal,
	useDisclosure,
	ModalOverlay,
	ModalContent,
	Input,
} from '@chakra-ui/react';
import { ArrowBackIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { FcGoogle } from 'react-icons/fc';
import Footer from '../../footer/Footer';
import img from '../../assets/footer.jpg';
import { CalendarIcon } from '@chakra-ui/icons';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import sideImg from '../../assets/thingsToDo/skiing.png';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import '../../../node_modules/react-day-picker/dist/style.css';
import '../../packages/day-picker.css';
import { AccessLoginContext } from '../../context/LoginContext';

const city = [
	{ name: 'Bengaluru,IN', code: 'BLR' },
	{ name: 'Trivandrum,IN', code: 'TRV' },
	{ name: 'Delhi,IN', code: 'DEL' },
	{ name: 'Kolkata,IN', code: 'CCU' },
	{ name: 'Mumbai,IN', code: 'BOM' },
	{ name: 'Chemmai,IN', code: 'MAA' },
	{ name: 'Hyderabad,IN', code: 'HYD' },
	{ name: 'Jaipur,IN', code: 'JAI' },
	{ name: 'Pune,IN', code: 'PNQ' },
	{ name: 'Bhubaneshwar,IN', code: 'BBI' },
	{ name: 'Patna,IN', code: 'PAT' },
	{ name: 'Lucknow,IN', code: 'LKO' },
	{ name: 'Aurangabad,IN', code: 'IXU' },
	{ name: 'Kozhikode,IN', code: 'CCJ' },
	{ name: 'Nagpur,IN', code: 'NAG' },
	{ name: 'Kochi,IN', code: 'COK' },
	{ name: 'Amritsar,IN', code: 'ATQ' },
	{ name: 'Coimbatore,IN', code: 'CJB' },
	{ name: 'Trichy,IN', code: 'TRZ' },
	{ name: 'Indore,IN', code: 'IDR' },
	{ name: 'Varanasi,IN', code: 'VNS' },
	{ name: 'Madurai,IN', code: 'IXM' },
	{ name: 'Guwahati,IN', code: 'GAU' },
	{ name: 'Mangalore,IN', code: 'IXE' },
];

const PackagesPage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [choosed, setChoosed] = useState(new Date());

	const [showDate, setShowDate] = useState(true);
	const [showCity, setShowCity] = useState(false);
	const [showConfigRoom, setShowConfigRoom] = useState(false);
	const [numberOfAdults, setNumberOfAdults] = useState(1);
	const [numberOfChilds, setNumberOfChlids] = useState(0);

	const { loginState, loginclick } = AccessLoginContext();

	const handleDate = (e) => {
		setChoosed(e);
		setShowDate((prev) => !prev);
		setShowCity(true);
	};

	const handleCity = () => {
		setShowCity(false);
		setShowConfigRoom(true);
	};

	return (
		<>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				size='full'
				isCentered
				position='relative'
			>
				<ModalOverlay />
				<ModalContent bg='transparent' overflow={'hidden'}>
					<Box
						w='fit-content'
						h='500px'
						position={'absolute'}
						bg='#222222'
						top='50%'
						left='50%'
						transform={'translate(-50%,-50%)'}
						borderRadius='xl'
						display={'flex'}
						overflow='hidden'
					>
						<Box
							w='300px'
							bgImg={sideImg}
							bgSize='cover'
							display={{ base: 'none', lg: 'block' }}
						></Box>
						{showDate ? (
							<Box w='400px' pt='50px'>
								<Text
									fontSize={20}
									fontWeight={600}
									textAlign='center'
									display={'flex'}
									justifyContent='space-around'
									alignItems={'center'}
								>
									<Box></Box>
									Choose your date
									<CloseIcon
										fontSize={13}
										cursor='pointer'
										onClick={() => {
											onClose();
										}}
									/>
								</Text>
								<Box
									h='100%'
									w='100%'
									display={'flex'}
									justifyContent='center'
									pt={'50px'}
								>
									<DayPicker
										selected={choosed}
										onSelect={handleDate}
										mode='single'
										fromMonth={new Date()}
										disabled={{ before: new Date() }}
									/>
								</Box>
							</Box>
						) : (
							<></>
						)}
						{/* choose your departure city */}
						{showCity ? (
							<Box w='400px' display={'flex'} flexDir='column'>
								<Text
									fontSize={20}
									fontWeight={600}
									textAlign='center'
									pt='40px'
									display={'flex'}
									justifyContent='space-around'
									alignItems={'center'}
								>
									<ArrowBackIcon
										fontSize={20}
										cursor='pointer'
										onClick={() => {
											setShowCity(false);
											setShowDate(true);
										}}
									/>
									Choose your departure city
									<CloseIcon
										fontSize={13}
										cursor='pointer'
										onClick={() => {
											onClose();
										}}
									/>
								</Text>
								<Box mx='20px' mt='20px'>
									<Input type='text' />
								</Box>
								<Box
									flexGrow={2}
									mt='10px'
									mx='20px'
									overflowX={'scroll'}
								>
									{city.map((item, index) => {
										return (
											<Text
												display={'flex'}
												justifyContent='space-between'
												borderBottom={'1px solid gray'}
												py='10px'
												cursor={'pointer'}
												onClick={() => {
													handleCity(item.name);
												}}
												key={index}
											>
												<Text>{item.name}</Text>
												<Text>{item.code}</Text>
											</Text>
										);
									})}
								</Box>
								<Box w='100%' display={'flex'}>
									<Box
										pb='10px'
										bg='gray'
										borderRight={'1px solid black'}
									>
										<Text textAlign={'center'}>
											I'm departing from Outside India
										</Text>
									</Box>
									<Box pb='10px' bg='gray'>
										<Text textAlign={'center'}>
											I have booked my flights already
										</Text>
									</Box>
								</Box>
							</Box>
						) : (
							<></>
						)}
						{showConfigRoom ? (
							<Box w='400px' display={'flex'} flexDir='column'>
								<Text
									fontSize={20}
									fontWeight={600}
									textAlign='center'
									pt='40px'
									display={'flex'}
									justifyContent='space-around'
									alignItems={'center'}
								>
									<ArrowBackIcon
										fontSize={20}
										cursor='pointer'
										onClick={() => {
											setShowConfigRoom(false);
											setShowCity(true);
										}}
									/>
									Configure your room
									<CloseIcon
										fontSize={13}
										cursor='pointer'
										onClick={() => {
											onClose();
										}}
									/>
								</Text>
								<Box
									mt='80px'
									display={'flex'}
									flexDir='column'
									alignItems={'center'}
									gap={5}
									h='100%'
									pb={5}
								>
									<Text
										fontSize={20}
										fontWeight={600}
										display='flex'
										alignItems='center'
										gap={5}
									>
										<Icon
											as={AiOutlineMinusCircle}
											cursor={
												numberOfAdults === 1
													? 'not-allowed'
													: 'pointer'
											}
											color={
												numberOfAdults === 1
													? 'gray'
													: '#32BAC9'
											}
											onClick={() => {
												if (numberOfAdults !== 1) {
													setNumberOfAdults(
														(prev) => prev - 1
													);
												}
											}}
											disabled={true}
										/>
										{numberOfAdults} Adults
										<Icon
											as={AiOutlinePlusCircle}
											cursor='pointer'
											color={'#32BAC9'}
											onClick={() => {
												setNumberOfAdults(
													(prev) => prev + 1
												);
											}}
										/>
									</Text>
									<Text
										fontSize={20}
										fontWeight={600}
										display='flex'
										alignItems='center'
										gap={5}
									>
										<Icon
											as={AiOutlineMinusCircle}
											cursor={
												numberOfChilds === 0
													? 'not-allowed'
													: 'pointer'
											}
											color={
												numberOfChilds === 0
													? 'gray'
													: '#32BAC9'
											}
											onClick={() => {
												if (numberOfChilds != 0) {
													setNumberOfChlids(
														(prev) => prev - 1
													);
												}
											}}
										/>
										{numberOfChilds} Childs
										<Icon
											as={AiOutlinePlusCircle}
											cursor='pointer'
											color={'#32BAC9'}
											onClick={() => {
												setNumberOfChlids(
													(prev) => prev + 1
												);
											}}
										/>
									</Text>
									<Box flexGrow={2}></Box>
									<Box
										bg='#32BAC9'
										px='15px'
										py='10px'
										w='80%'
										fontWeight={600}
										borderRadius={'md'}
										textAlign='center'
									>
										Get Trip Cost
									</Box>
								</Box>
							</Box>
						) : (
							<></>
						)}
					</Box>
				</ModalContent>
			</Modal>
			<Box
				bgImg={img}
				bgSize='cover'
				height='600px'
				position={'relative'}
			>
				<Nav />
				<Box
					position='absolute'
					left='50%'
					top={{ base: '50%', lg: '50%' }}
					transform='translate(-50%,-50%)'
					display={'flex'}
					flexDir='column'
					justifyContent={'center'}
					alignItems='center'
				>
					<Text
						fontSize={{ base: 40, lg: 50 }}
						fontWeight={700}
						textAlign={{ base: 'center' }}
					>
						Maldives Tour Packages
					</Text>
					<Text></Text>
					{/* <Box
						mt={5}
						bg='#32BAC9'
						borderRadius='2xl'
						px='20px'
						py='10px'
						display={'inline-flex'}
						justifyContent='center'
						alignItems={'center'}
						fontWeight={700}
						cursor='pointer'
						onClick={() => {
							window.scrollBy({
								top: 600,
								left: 0,
								behavior: 'smooth',
							});
						}}
					>
						VIEW ALL PACKAGES
					</Box> */}
				</Box>
				{/* black box with details */}
				<Box
					position={'absolute'}
					bottom='0'
					w='100%'
					h='fit-content'
					bg='black'
					display={{ base: 'none', lg: 'flex' }}
					justifyContent='space-between'
					px='5vw'
					py='20px'
					boxShadow={'-10px -70px 1000px  black'}
				>
					<Box>
						<Text fontSize={15} color='gray.500'>
							IDEAL DURATION
						</Text>
						<Text fontSize={20}>4 - 5 days</Text>
					</Box>
					<Box>
						<Text fontSize={15} color='gray.500'>
							BEST TIME
						</Text>
						<Text
							fontSize={20}
							display='flex'
							alignItems='center'
							gap={2}
						>
							<CalendarIcon /> Feb - Apr
						</Text>
					</Box>
					<Box>
						<Text fontSize={15} color='gray.500'>
							PRICES STARTS AT
						</Text>
						<Text fontSize={20}>₹27,118/person</Text>
					</Box>
					<Box>
						<Text fontSize={15} color='gray.500'>
							VISA PROCESSING
						</Text>
						<Text fontSize={20}>10 days</Text>
					</Box>
					<Box>
						<Text fontSize={15} color='gray.500' textAlign={'end'}>
							OUR PLANNING EXPERTISE
						</Text>
						<Text
							fontSize={20}
							display='flex'
							gap={2}
							alignItems='center'
						>
							<Box>
								<Icon as={BsStarFill} fill='gold' />
								<Icon as={BsStarFill} fill='gold' />
								<Icon as={BsStarFill} fill='gold' />
								<Icon as={BsStarFill} fill='gold' />
								<Icon as={BsStarHalf} fill='gold' />
							</Box>
							from 290 travellers
						</Text>
					</Box>
				</Box>
			</Box>
			<Box w='100vw' px='5vw' pt='50px' overflow={'hidden'}>
				<Text fontSize={30} mb={4}>
					Maldives Tour Package
				</Text>
				<Text lineHeight={7}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras vulputate, sapien id eleifend tincidunt, massa risus
					vehicula diam, ac ornare sapien est at elit. Interdum et
					malesuada fames ac ante ipsum primis in faucibus. Nunc at
					nunc sem. Quisque consequat ligula in odio maximus molestie.
					Aliquam placerat ex nulla, eget pretium magna accumsan a.
					Vestibulum diam libero, vulputate et aliquet pulvinar,
					pulvinar vel lorem. Vestibulum finibus ex sit amet ligula
					dapibus pretium. Proin consectetur est et porttitor lacinia.
					Curabitur bibendum, orci ut mollis luctus, ligula nisi
					aliquet quam, a fringilla lorem magna et eros. Sed sed
					turpis ac erat commodo porta. Integer consequat efficitur
					mauris, sed suscipit ante mattis eget. Fusce vehicula nec
					lacus in lobortis. Duis mattis lacus vel tortor semper
					porttitor. Quisque commodo magna sit amet erat vulputate
					consequat.
				</Text>
				{/* package cards */}
				<Box pt={'40px'} pb='40px'>
					<Box
						w={'100%'}
						h={{ base: 'fit-content', lg: '350px' }}
						bg='gray.600'
						borderRadius={'2xl'}
						mt='20px'
						display={'flex'}
						flexDir={{ base: 'column', lg: 'row' }}
						overflow='hidden'
						cursor='pointer'
						onClick={() => {
							if (loginState == true) {
								onOpen();
							} else {
								loginclick.click();
							}
						}}
						transition={'.5s'}
						_hover={{
							boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
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
								3 Nights to Maldives Holiday
							</Text>
							<Text display={'flex'} alignItems='center' gap={1}>
								{/* 3 <Icon as={BsStarFill} color='gold' /> Hotel */}
							</Text>
							<Box
								as='ul'
								mt={3}
								display='flex'
								gap='10px'
								flexWrap={'wrap'}
								pl={5}
								pr={5}
							>
								<Text as='li' color='whiteAlpha.700'>
									Lounge in the lap of luxury in your
									overwater villa
								</Text>
								<Text as='li' color='whiteAlpha.700'>
									Explore pristine beaches with your loved one
									in absolute privacy
								</Text>
								<Text as='li' color='whiteAlpha.700'>
									Witness the vibrant sea life in the
									turquoise depths of the indian Ocean
								</Text>
							</Box>
							<Box flexGrow={2} mt={5} />
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
							<Text textAlign={'start'}>PACKAGE INCLUDES</Text>
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
								<CheckIcon color={'green.200'} ml='10px' /> 24x7
								online support
							</Text>
							<Box flexGrow={2}></Box>
							<Box mr='30px' mb='20px' mt='30px'>
								<Text>
									<Text
										display={'inline-block'}
										color='whiteAlpha.800'
									>
										Starts From
									</Text>
								</Text>
								<Text
									fontSize={20}
									fontWeight={600}
									mb='15px'
									display={'flex'}
									alignItems='end'
								>
									<Text>₹ 64,127</Text>
									<Text fontSize={15} color='whiteAlpha.700'>
										/person
									</Text>
								</Text>
								<Box
									bg='#32BAC9'
									// display={'inline-block'}
									fontSize={20}
									fontWeight={600}
									py={'15px'}
									textAlign='center'
									borderRadius={'xl'}
								>
									Customise
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

export default PackagesPage;
