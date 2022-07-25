import {
	ArrowBackIcon,
	CheckCircleIcon,
	CloseIcon,
	Icon,
} from '@chakra-ui/icons';
import {
	Box,
	Button,
	Input,
	Modal,
	ModalContent,
	ModalOverlay,
	Text,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import sideImg from '../../assets/thingsToDo/skiing.webp';
import { DayPicker } from 'react-day-picker';
import '../../../node_modules/react-day-picker/dist/style.css';
import { addDays } from 'date-fns';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import getUserinfoApi from '../../apis/getUserInfoApi';
import CreatePackageRequest from '../../apis/CreatePackageRequest';
import createOrderApi from '../../apis/createOrderApi';
import logo from '../../assets/logo/logo.png';

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

const BookModal = ({
	state,
	changeState,
	pkgData,
	data,
	bookNowButtonLoading,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [showDate, setShowDate] = useState(true);
	const [showEndDate, setShowEndDate] = useState(false);
	const [choosed, setChoosed] = useState(new Date());
	const [endDateFromMonth, setEndDateFromMonth] = useState();
	const [endDate, setEndDate] = useState();
	const [showCity, setShowCity] = useState(false);
	const [cityName, setCityName] = useState('');
	const [showConfigRoom, setShowConfigRoom] = useState(false);
	const [numberOfAdults, setNumberOfAdults] = useState(1);
	const [numberOfChilds, setNumberOfChlids] = useState(0);
	const [loading, setLoading] = useState(false);
	const [isFilled, setIsFilled] = useState(false);
	const toast = useToast();
	console.log('data from previous page : ', data);

	useEffect(() => {
		if (state) {
			if (data) {
				setChoosed(data.checkInDate);
				setEndDate(data.checkOutDate);
				setNumberOfAdults(data.guests);
				handleBookNow();
				bookNowButtonLoading(true);
			} else {
				onOpen();
			}
		}
	}, [state]);

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
		// setShowCity(true);
		setShowConfigRoom(true);
	};

	const handleCity = (cn) => {
		setCityName(cn);
		setShowCity(false);
		setShowConfigRoom(true);
	};

	const handleBookedPackage = async (response) => {
		// here i have to create a request with the default settings and set it's status to booked and call the save_order api

		try {
			const response = await getUserinfoApi();
			const res = await CreatePackageRequest(
				pkgData.packageId,
				choosed,
				endDate,
				numberOfAdults + numberOfChilds,
				'',
				response.data._id,
				'Done',
				pkgData.startingPrice
			);
			console.log('Done ', res);
			toast({
				title: 'Success',
				description: 'Package is Booked.',
				status: 'success',
				duration: 3000,
				isClosable: true,
			});
		} catch (error) {}
	};

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
		setLoading(true);

		const res = await initializeRazorpay();

		if (!res) {
			alert('Razorpay failed to load');
		}
		try {
			const data = await createOrderApi(
				pkgData.startingPrice * 100 * (numberOfAdults + numberOfChilds),
				'',
				''
			);

			console.log('response is data', data);
			if (data.data.statusCode === 400) {
				toast({
					title: 'Error',
					description: data.data.error.description,
					status: 'error',
					duration: 3000,
					isClosable: true,
				});
				setLoading(false);
			} else {
				var options = {
					key: process.env.REACT_APP_KEY_ID,
					name: 'Plan my leisure',
					currency: 'INR',
					order_id: data.data.id,
					description: 'Thankyou for whatever',
					image: logo,
					handler: function (response) {
						// validate payment through server
						console.log('response from razor pay is : ', response);
						handleBookedPackage(response);
						alert('Yeaaahhh!! payment is successfull.');
						setLoading(false);
						setShowConfigRoom(false);
						setIsFilled(true);
					},
					modal: {
						ondismiss: function () {
							setLoading(false);
							bookNowButtonLoading(false);
						},
					},
					// prefill: {},
				};

				const payment_object = new window.Razorpay(options);
				payment_object.open();
			}
		} catch (error) {
			console.log('error', error);
			toast({
				title: 'Error',
				description: 'Something went wrong.',
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
			setLoading(false);
		}
	};

	return (
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
					bg='#FFFDF7'
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
								Check-in date
								<CloseIcon
									fontSize={13}
									cursor='pointer'
									onClick={() => {
										onClose();
										changeState(false);
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
								Check-out date
								<CloseIcon
									fontSize={13}
									cursor='pointer'
									onClick={() => {
										onClose();
										changeState(false);
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
										before: addDays(endDateFromMonth, 3),
									}}
								/>
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
										changeState(false);
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
												: 'rgba(20, 17, 119,1)'
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
										color={'rgba(20, 17, 119,1)'}
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
												: 'rgba(20, 17, 119,1)'
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
										color={'rgba(20, 17, 119,1)'}
										onClick={() => {
											setNumberOfChlids(
												(prev) => prev + 1
											);
										}}
									/>
								</Text>
								<Box flexGrow={2}></Box>
								<Button
									bg='rgba(20, 17, 119,1)'
									px='15px'
									py='10px'
									w='80%'
									fontWeight={600}
									borderRadius={'md'}
									color='white'
									textAlign='center'
									// onClick={handlePackageRequest}
									onClick={handleBookNow}
									cursor='pointer'
									_hover={{
										background: 'rgba(20, 17, 119,1)',
									}}
									isLoading={loading}
								>
									Book Now
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
										changeState(false);
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
									<Text>Your package has been booked.</Text>
								</Box>
							</Box>
						</>
					) : (
						<></>
					)}
				</Box>
			</ModalContent>
		</Modal>
	);
};

export default BookModal;
