import {
	ArrowBackIcon,
	CheckCircleIcon,
	CloseIcon,
	StarIcon,
} from '@chakra-ui/icons';
import {
	Box,
	Text,
	Icon,
	UnorderedList,
	ListItem,
	Modal,
	useDisclosure,
	ModalOverlay,
	ModalContent,
	Input,
	Button,
	useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import {
	AiOutlineMinusCircle,
	AiOutlinePlusCircle,
	AiOutlineStar,
} from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoWhatsapp } from 'react-icons/io';
import img from '../../assets/thingsToDo/dream-vacation.png';
import Nav from '../../nav/Nav';
import './AboutPackage.css';
import Footer from '../../footer/Footer';
import getPackageById from '../../apis/getPackageById';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { setDay } from 'date-fns';
import sideImg from '../../assets/thingsToDo/skiing.png';
import { DayPicker } from 'react-day-picker';
import '../../../node_modules/react-day-picker/dist/style.css';
import { addDays } from 'date-fns';
import getUserinfoApi from '../../apis/getUserInfoApi';
import CreatePackageRequest from '../../apis/CreatePackageRequest';
import { AccessLoginContext } from '../../context/LoginContext';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import logo from '../../assets/logo/logo.png';
import createOrderApi from '../../apis/createOrderApi';
import BookModal from './BookModal';

const days = ['Mon', 'Tus', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'];
const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];
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

const AboutPackage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const got = useParams();
	const [pkgData, setPkgData] = useState({});
	const [loading, setLoading] = useState(true);
	const [sDate, setSDate] = useState();
	const [eDate, setEDate] = useState();
	const { loginState, loginclick } = AccessLoginContext();

	// for modal ------------------------
	const [showDate, setShowDate] = useState(true);
	const [choosed, setChoosed] = useState(new Date());
	const [endDateFromMonth, setEndDateFromMonth] = useState();
	const [showEndDate, setShowEndDate] = useState(false);
	const [endDate, setEndDate] = useState();
	const [showCity, setShowCity] = useState(false);
	const [cityName, setCityName] = useState('');
	const [showConfigRoom, setShowConfigRoom] = useState(false);
	const [numberOfAdults, setNumberOfAdults] = useState(1);
	const [numberOfChilds, setNumberOfChlids] = useState(0);
	const [isFilled, setIsFilled] = useState(false);
	const toast = useToast();
	const [booknowLoading, setBooknowLoading] = useState(false);
	const [book_modal_state, set_book_modal_state] = useState(false);

	const handleBookedPackage = async (response) => {
		// here i have to create a request with the default settings and set it's status to booked and call the save_order api

		try {
			const response = await getUserinfoApi();
			const res = await CreatePackageRequest(
				pkgData.packageId,
				sDate,
				eDate,
				2,
				'somewhere',
				response.data._id,
				'Done'
			);
			console.log('Done ', res);
			setBooknowLoading(false);
			toast({
				title: 'Success',
				description: 'Package is Booked.',
				status: 'success',
				duration: 3000,
				isClosable: true,
			});
		} catch (error) {}
	};

	const handleDate = (e) => {
		if (e !== undefined) {
			setEndDateFromMonth(e);
			setChoosed(e);
		} else {
			setEndDateFromMonth(new Date());
			setChoosed(new Date());
		}

		setShowDate((prev) => !prev);
		setShowEndDate(true);
	};

	const handleEndDate = (e) => {
		setEndDate(e);
		setShowEndDate(false);
		setShowCity(true);
	};

	const handleCity = (cn) => {
		setCityName(cn);
		setShowCity(false);
		setShowConfigRoom(true);
	};

	const handlePackageRequest = async () => {
		setLoading(true);
		try {
			const response = await getUserinfoApi();
			const res = await CreatePackageRequest(
				pkgData.packageId,
				choosed,
				endDate,
				numberOfAdults + numberOfChilds,
				cityName,
				response.data._id
			);
			console.log(res);
			setLoading(false);
			setShowConfigRoom(false);
			setIsFilled(true);
			toast({
				title: 'success',
				description: 'Package request created successfully.',
				status: 'success',
				duration: 8000,
				isClosable: true,
			});
		} catch (error) {
			console.log('error occurred : ', error);
			setLoading(false);
		}
	};
	//-----------------------------------

	// payment related stuff-------------
	const initializeRazorpay = () => {
		return new Promise((resolve) => {
			const script = document.createElement('script');
			script.src = 'https://checkout.razorpay.com/v1/checkout.js';

			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};

			document.body.appendChild(script);
		});
	};

	const handleBookNow = async () => {
		setBooknowLoading(true);
		const res = await initializeRazorpay();
		if (!res) {
			alert('Razorpay failed to load');
		}

		const data = await createOrderApi(
			pkgData.startingPrice * 100,
			'',
			''
		).then((res) => res);
		console.log('we get data from razorpay is ', data);

		console.log('id is :  ', data.data.id);

		var options = {
			key: process.env.REACT_APP_KEY_ID,
			name: 'Plan my leisure',
			currency: 'INR',
			order_id: data.data.id,
			description: 'Thankyou for whatever',
			image: logo,
			handler: function (response) {
				// validate payment through server
				handleBookedPackage(response);
				alert('Yeaaahhh!! payment is successfull.');
				setBooknowLoading(false);
			},
			modal: {
				ondismiss: function () {
					setBooknowLoading(false);
				},
			},
			prefill: {
				name: 'MY name',
				email: 'myemail@gmail.com',
				contact: '9898997790',
			},
		};

		const payment_object = new window.Razorpay(options);
		payment_object.open();
	};
	//-----------------------------------

	useEffect(() => {
		window.scrollTo(0, 0);

		const getData = async () => {
			try {
				const res = await getPackageById(got.id);
				console.log('got => ', res);
				setPkgData(res.data.package[0]);
				setSDate(new Date(res.data.package[0].stayPeriod[0]));
				setEDate(new Date(res.data.package[0].stayPeriod[1]));
				setLoading(false);
			} catch (error) {
				console.log('found some error : ', error);
				setLoading(false);
			}
		};

		getData();
	}, []);

	return (
		<>
			<BookModal
				state={book_modal_state}
				changeState={set_book_modal_state}
				pkgData={pkgData}
			/>
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
									Choose your start date
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
						{showEndDate ? (
							<Box w='400px' pt='50px'>
								<Text
									fontSize={20}
									fontWeight={600}
									textAlign='center'
									display={'flex'}
									justifyContent='space-around'
									alignItems={'center'}
								>
									<ArrowBackIcon
										fontSize={20}
										cursor='pointer'
										onClick={() => {
											setShowEndDate(false);
											setShowDate(true);
										}}
									/>
									Choose your end date
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
										onSelect={handleEndDate}
										mode='single'
										fromMonth={endDateFromMonth}
										disabled={{
											before: addDays(
												endDateFromMonth,
												3
											),
										}}
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
											setShowEndDate(true);
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
												_hover={{
													background:
														'rgba(255,255,255,.2)',
												}}
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
												if (numberOfChilds !== 0) {
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
									<Button
										bg='#32BAC9'
										px='15px'
										py='10px'
										w='80%'
										fontWeight={600}
										borderRadius={'md'}
										textAlign='center'
										onClick={handlePackageRequest}
										cursor='pointer'
										_hover={{
											background: '#32bac9',
										}}
										isLoading={loading}
									>
										Get Trip Cost
									</Button>
								</Box>
							</Box>
						) : (
							<></>
						)}
						{/* show thankyou for submission */}
						{isFilled ? (
							<>
								<Box
									w='400px'
									h='100%'
									pt='50px'
									display={'flex'}
									justifyContent='center'
									alignItems='center'
									position={'relative'}
								>
									<CloseIcon
										position={'absolute'}
										top='20px'
										right='20px'
										cursor={'pointer'}
										onClick={() => {
											onClose();
										}}
									/>
									<Box
										display={'inline-flex'}
										flexDir='column'
										alignItems={'center'}
										justifyContent='center'
									>
										<CheckCircleIcon
											color='green.200'
											fontSize={40}
										/>
										<Text fontSize={30} fontWeight='600'>
											Thank you!
										</Text>
										<Text>Your request has been sent.</Text>
									</Box>
								</Box>
							</>
						) : (
							<></>
						)}
					</Box>
				</ModalContent>
			</Modal>
			{loading ? (
				<></>
			) : (
				<>
					<Box
						h='500px'
						// bgImage={pkgData.image[0].url}
						// bgSize='cover'
						// bgPos={'50% 90%'}
						position={'relative'}
					>
						<Box position={'absolute'} top={0} zIndex={10}>
							<Nav />
						</Box>
						<Box
							position={'absolute'}
							h='fit-content'
							bottom={0}
							right={0}
							left={0}
							zIndex={10}
						>
							<Box position={'absolute'} bottom={0} left='5vw'>
								<Text fontSize={30} fontWeight={700}>
									{pkgData.packageTitle}
								</Text>
								<Text display='flex' mb='10px' gap={3}>
									<Box
										display={'inline-flex'}
										alignItems='center'
									>
										<StarIcon color='gold' />
										<StarIcon color='gold' />
										<StarIcon color='gold' />
										<Icon
											as={AiOutlineStar}
											color='gold'
											fontSize={20}
										/>
										<Icon
											as={AiOutlineStar}
											color='gold'
											fontSize={20}
										/>
									</Box>
									<Box
										display={'inline-flex'}
										alignItems='start'
									>
										<Icon
											as={MdLocationOn}
											color='white'
											fontSize={20}
											p={0}
										/>
										<Text display={'inline-block'}>
											Somewhere . 40m from airport
										</Text>
									</Box>
								</Text>
							</Box>
						</Box>

						<Splide aria-label='images' className='splide-slide'>
							{pkgData.image.map((data, index) => {
								return (
									<SplideSlide key={index}>
										<Box
											w='100%'
											h='500px'
											bgImage={data.url}
											bgSize={'cover'}
											bgPos='50% 50%'
										></Box>
									</SplideSlide>
								);
							})}
						</Splide>
					</Box>
					<Box
						w='100vw'
						display={{ base: 'flex', lg: '' }}
						flexDir='column-reverse'
						minH='100vh'
						position={'relative'}
						px={{ base: '20px', lg: '9vw' }}
						pt='50px'
						pb='50px'
					>
						<Box w={{ base: '100%', lg: 'calc(100vw - 590px)' }}>
							<Box mt='30px'>
								<Text fontSize={'24px'} fontWeight={600}>
									Details
								</Text>
								<Text fontSize={'20px'} pl='5px'>
									{pkgData.packageDetail1}
								</Text>
								<Text fontSize={'20px'} pl='5px'>
									{pkgData.packageDetail2}
								</Text>
								<Text fontSize={'20px'} pl='5px'>
									{pkgData.packageDetail3}
								</Text>
								<Text fontSize={'20px'} pl='5px'>
									{pkgData.packageDetail4}
								</Text>
							</Box>

							<Box mt='30px'>
								<Text fontSize={'24px'} fontWeight={600}>
									Inclusions
								</Text>
								<UnorderedList fontSize={'20px'}>
									{pkgData.inclusion
										.split(',')
										.map((data, index) => {
											return data === '' ? (
												<></>
											) : (
												<ListItem key={index}>
													{data}
												</ListItem>
											);
										})}
								</UnorderedList>
							</Box>
							<Box mt='30px'>
								<Text fontSize={'24px'} fontWeight={600}>
									Resorts
								</Text>
								<UnorderedList fontSize={'20px'}>
									{/* {pkgData.resorts.map((data, index) => {
										return data === '' ? (
											<></>
										) : (
											<ListItem key={index}>
												{data}
											</ListItem>
										);
									})} */}
								</UnorderedList>
							</Box>
							<Box mt='30px'>
								<Text fontSize={'24px'} fontWeight={600}>
									Room Type
								</Text>
								<Text fontSize={'20px'} pl='5px'>
									{pkgData.roomType}
								</Text>
							</Box>
						</Box>
						<Box
							position={{ base: 'none', lg: 'absolute' }}
							w={{ base: '90vw', lg: '400px' }}
							mx='auto'
							h='fit-content'
							bg='white'
							right={'100px'}
							top={'0px'}
							borderRadius='xl'
							pt='20px'
							px='20px'
							pb='30px'
							mt={'30px'}
						>
							<Box
								display={'flex'}
								flexDir='column'
								justifyContent='space-between'
								alignItems='flex-start'
							>
								<Box>
									<Text color='gray.600' fontSize={20}>
										M.R.P
									</Text>
									<Text
										color='black'
										fontSize={30}
										fontWeight={700}
									>
										₹{pkgData.startingPrice}
									</Text>
									{/* <Text fontSize={15} color='green' fontWeight={600}>
								Total Savings: ₹10,000
							</Text> */}
								</Box>
								<Box
									color='white'
									display={'flex'}
									w='100%'
									gap={'20px'}
									boxSizing='border-box'
								>
									<Button
										h='100%'
										isLoading={booknowLoading}
										bg='#0e87f6'
										py='20px'
										fontSize={20}
										borderRadius='xl'
										textAlign={'center'}
										flexGrow={1}
										cursor='pointer'
										onClick={() => {
											loginState
												? set_book_modal_state(true)
												: loginclick.click();
										}}
										_hover={{ background: '#0e87f6' }}
									>
										Book Now
									</Button>
									<Button
										h='100%'
										bg='transparent'
										color='#0e87f6'
										border='3px solid #0e87f6'
										py='18px'
										fontSize={20}
										borderRadius='xl'
										textAlign={'center'}
										flexGrow={1}
										cursor='pointer'
										_hover={{
											background: '#0e87f6',
											color: 'white',
										}}
										onClick={() => {
											loginState
												? onOpen()
												: loginclick.click();
										}}
									>
										Customize
									</Button>
								</Box>
							</Box>
							<Box
								mt='50px'
								display={'none'}
								justifyContent='space-between'
								alignItems={'center'}
								px='30px'
							>
								<Box color={'black'}>
									<Text>Check-in :</Text>
									<Text fontSize={20} fontWeight={700}>
										{days[sDate.getDay()] +
											', ' +
											sDate.getDate() +
											' ' +
											months[sDate.getMonth()]}
									</Text>
								</Box>
								<Box color='black'>
									<Text>Check-out :</Text>
									<Text fontSize={20} fontWeight={700}>
										{days[eDate.getDay()] +
											', ' +
											eDate.getDate() +
											' ' +
											months[eDate.getMonth()]}
									</Text>
								</Box>
							</Box>
							{/* <Box display={'flex'} justifyContent='center' mt='50px'>
						<Box
							w='90%'
							bg='green.300'
							textAlign={'center'}
							display='flex'
							alignItems={'center'}
							gap={3}
							px='10px'
							py='15px'
							borderRadius={'md'}
							justifyContent='center'
						>
							<Icon as={IoLogoWhatsapp} color='green' />{' '}
							<Text color='green'>Contact us on Whatsapp</Text>
						</Box>
					</Box> */}
							{/* <Box display={'flex'} mt='50px' color={'black'}>
						<Box
							display={'flex'}
							alignItems='center'
							gap='10px'
							flexGrow={1}
							justifyContent='center'
						>
							<EmailIcon />
							<Text>Mail this Quote</Text>
						</Box>
						<Box
							display={'flex'}
							alignItems='center'
							gap='10px'
							flexGrow={1}
							justifyContent='center'
						>
							<Icon as={GiCancel} />
							<Text>cancelation policy</Text>
						</Box>
					</Box> */}
						</Box>
					</Box>
					<Footer />
				</>
			)}
		</>
	);
};

export default React.memo(AboutPackage);
