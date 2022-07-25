import {
	Box,
	Text,
	Icon,
	UnorderedList,
	ListItem,
	Select,
	Button,
	Badge,
	useToast,
	AlertDialog,
	AlertDialogOverlay,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogBody,
	Input,
	AlertDialogFooter,
	useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { IoAirplaneSharp } from 'react-icons/io5';
import { MdDateRange } from 'react-icons/md';
import { MdPeopleAlt } from 'react-icons/md';
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';
import createOrderApi from '../../apis/createOrderApi';
import logo from '../../assets/logo/logo.png';
import getPackageById from '../../apis/getPackageById';
import getUserinfoApi from '../../apis/getUserInfoApi';
import CreatePackageRequest from '../../apis/CreatePackageRequest';
import axios from 'axios';

const UpcomingCard = ({ data, changeState }) => {
	const [payOption, setPayOption] = useState('pay now');
	const [pkgData, setPkgData] = useState();
	const [loading, setLoading] = useState(true);
	const [sDate, setSDate] = useState(new Date());
	const [payLoading, setPayLoading] = useState(false);
	const [parts, setParts] = useState([]);
	const toast = useToast();
	const eDate = new Date(data.endDate);
	const [refetch, set_refetch] = useState(false);

	// for alert
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancleRef = useRef();
	const [c_loading, set_c_loading] = useState(false);

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

	const handlePayInParts = async (amount_to_be_paid, parts_index) => {
		if (
			parts_index === 0
				? true
				: parts[parts_index - 1].amount === true
				? true
				: false
		) {
			const res = await initializeRazorpay();

			if (!res) {
				alert('Razorpay failed to load');
			}

			// check if it's last or not
			const pay_status = parts_index + 1 === parts.length;

			const order_data = await createOrderApi(
				amount_to_be_paid.amount * 100,
				'',
				''
			).then((res) => res);

			var options = {
				key: process.env.REACT_APP_KEY_ID,
				name: 'Plan my leisure',
				currency: 'INR',
				order_id: order_data.data.id,
				description: 'Thankyou for whatever',
				image: logo,
				handler: function (response) {
					setParts((prev) => {
						prev[parts_index] = {
							amount: amount_to_be_paid.amount,
							status: true,
						};
						return [...prev];
					});
					handlePartsPackagePaid(pay_status);
					alert('Yeaaahhh! payment done');
				},
				modal: {
					ondismiss: function () {},
				},
				prefill: {
					name: 'MY name',
					email: 'myemail@gmail.com',
					contact: '9898997790',
				},
			};

			const payment_object = new window.Razorpay(options);
			payment_object.open();
		} else {
			alert('Please pay in sequence.');
		}
	};

	const handleBookNow = async () => {
		setPayLoading(true);

		const res = await initializeRazorpay();

		if (!res) {
			alert('Razorpay failed to load');
		}

		const order_data = await createOrderApi(
			pkgData.startingPrice * 100 * data.numberOfPeople,
			'',
			''
		).then((res) => res);
		console.log('we get data from razorpay is ', order_data);

		console.log('id is :  ', order_data.data.id);

		var options = {
			key: process.env.REACT_APP_KEY_ID,
			name: 'Plan my leisure',
			currency: 'INR',
			order_id: order_data.data.id,
			description: 'Thankyou for whatever',
			image: logo,
			handler: function (response) {
				// validate payment through server
				handleBookedPackage(response);
				alert('Yeaaahhh!! payment is successfull.');
			},
			modal: {
				ondismiss: function () {
					setPayLoading(false);
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

	useEffect(() => {
		const getPackageData = async () => {
			try {
				const res = await getPackageById(data.packageId);
				console.log('package is : ', res);
				setPkgData(
					res.data.package[0] === null
						? { packageTitle: 'package is Deleted' }
						: res.data.package[0]
				);
				try {
					setParts(data.paymentType.parts);
					setLoading(false);
				} catch (error) {
					setParts([]);
					setLoading(false);
				}
			} catch (error) {
				console.log('areeee errror aareee hai', error);
				// setPkgData({ packageTitle: 'package is Deleted' });
			}
		};

		getPackageData();
	}, [refetch]);

	// -------------------------------------------------------

	const handlePartsPackagePaid = async (pay_status, parts_index) => {
		try {
			const response = await getUserinfoApi();
			const res = await axios.patch(
				'https://planmyleisure.herokuapp.com/package/update-request-package',
				{
					packageId: data._id,
					paymentStatus: pay_status
						? { status: 'Done' }
						: { status: 'Confirmed' },
					paymentType: { parts: parts, normal: {} },
				}
			);
		} catch (error) {}
	};

	const handleBookedPackage = async (response) => {
		// here i have to create a request with the default settings and set it's status to booked and call the save_order api

		try {
			const response = await getUserinfoApi();
			const res = await axios.patch(
				'https://planmyleisure.herokuapp.com/package/update-request-package',
				{
					packageId: data._id,
					paymentStatus: { status: 'Done' },
				}
			);
			console.log('resssssssssss : ', res);
			setPayLoading(false);
			toast({
				title: 'Success',
				description: 'Package is Booked.',
				status: 'success',
				duration: 3000,
				isClosable: true,
			});
			changeState((prev) => !prev);
		} catch (error) {}
	};

	const handleFormCancelStatus = async () => {
		set_c_loading(true);
		try {
			const res = await axios.patch(
				'https://planmyleisure.herokuapp.com/package/update-request-package',
				{
					packageId: data._id,
					status:
						data.paymentStatus.status === 'Done' ||
						data.paymentStatus.status === 'Confirmed'
							? 'RequestedCancellation'
							: 'Cancelled',
				}
			);
			console.log('i just want to cancel the request : ', res);
			set_c_loading(false);
			onClose();
			set_refetch((prev) => !prev);
		} catch (error) {
			set_c_loading(false);
		}
	};

	return (
		<>
			<AlertDialog
				isOpen={isOpen}
				onClose={onClose}
				leastDestructiveRef={cancleRef}
			>
				<AlertDialogOverlay>
					<AlertDialogContent bg='#fffdf7'>
						<AlertDialogHeader fontSize={'lg'} fontWeight={'bold'}>
							Are you sure?
						</AlertDialogHeader>
						<AlertDialogBody>
							<Text mb='10px'>
								Are you sure you want to cancel this trip?
							</Text>
						</AlertDialogBody>
						<AlertDialogFooter>
							<Button ref={cancleRef} onClick={onClose}>
								Cancel
							</Button>
							<Button
								colorScheme='red'
								ml={3}
								onClick={handleFormCancelStatus}
								isLoading={c_loading}
							>
								Confirm
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
			{console.log('data is : ', data)}
			{loading ? (
				<></>
			) : pkgData.packageTitle === 'package is Deleted' ? (
				<>{console.log('i will not show it')}</>
			) : (
				<Box
					w='100%'
					h={{ base: 'fit-content', lg: '300px' }}
					bg='transparent'
					border='1px solid #2d3748'
					borderRadius={'20px'}
					overflow='hidden'
					display={'flex'}
					flexDir={{ base: 'column', lg: 'row' }}
				>
					<Box
						w={{ base: '100%', lg: '30%' }}
						h={{ base: '300px', lg: '100%' }}
						bgImage={pkgData.image[0].secure_url}
						bgSize='cover'
						bgPos={'50% 50%'}
					></Box>
					<Box
						pl='10px'
						w={{ base: '100%', lg: '35%' }}
						display={'flex'}
						flexDir='column'
						pb='20px'
					>
						<Box h='fit-content'>
							<Text
								fontSize={{ base: '20px', lg: '24px' }}
								fontWeight={700}
							>
								{loading ? 'loading' : pkgData.packageTitle}
							</Text>
							<Box display={'flex'} mt='5px' pl='5px'>
								<Box
									display={'flex'}
									alignItems='center'
									pr='10px'
									borderRight={'1px solid gray'}
								>
									<Icon
										as={IoAirplaneSharp}
										fontSize={{ base: '16px', lg: '20px' }}
										color='rgba(0,0,0,.5)'
									/>

									<Text
										pl='10px'
										fontSize={{ base: '14px', lg: '20px' }}
									>
										{data.location}
									</Text>
								</Box>
								<Box
									display={'flex'}
									alignItems='center'
									pl='10px'
									pr='10px'
									borderRight={'1px solid gray'}
								>
									<Icon
										as={MdDateRange}
										fontSize={{ base: '14px', lg: '20px' }}
										color='rgba(0,0,0,.5)'
									/>
									<Text
										pl='10px'
										fontSize={{ base: '14px', lg: '20px' }}
									>
										{`${sDate.getDate()}/${
											sDate.getMonth() + 1
										}/${sDate.getFullYear()}`}
										-
										{`${eDate.getDate()}/${
											eDate.getMonth() + 1
										}/${eDate.getFullYear()}`}
									</Text>
								</Box>
								<Box
									display={'flex'}
									alignItems='center'
									pl='10px'
								>
									<Icon
										as={MdPeopleAlt}
										fontSize={{ base: '14px', lg: '20px' }}
										color='rgba(0,0,0,.5)'
									/>
									<Text
										pl='10px'
										fontSize={{ base: '14px', lg: '20px' }}
									>
										{data.numberOfPeople}
									</Text>
								</Box>
							</Box>
						</Box>
						<Box
							flexGrow={1}
							mt='20px'
							ml='20px'
							display={{ base: 'none', lg: 'grid' }}
							gridTemplateColumns='repeat(3,1fr)'
						>
							<Box>
								<Text>Resorts :</Text>
								<UnorderedList>
									{pkgData.resorts.values.map(
										(data, index) => {
											return (
												<ListItem key={index}>
													{data}
												</ListItem>
											);
										}
									)}
								</UnorderedList>
							</Box>
							<Box>
								<Text>Inclusions : </Text>
								<UnorderedList>
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
							<Text>
								Room Type :<br /> {pkgData.roomType}
							</Text>
						</Box>
						{data.pdf === undefined || data.pdf === '' ? (
							<></>
						) : (
							<Box
								display={'flex'}
								alignItems='center'
								gap='10px'
								pt={{ base: '20px', lg: '' }}
							>
								<Text>See complete package : </Text>
								<a href={data.pdf} target='blank'>
									<Icon
										as={BsFillFileEarmarkPdfFill}
										color='red.500'
										cursor={'pointer'}
									/>
								</a>
							</Box>
						)}
					</Box>
					<Box
						h={{ base: 'fit-content', lg: '100%' }}
						w={{ base: '100%', lg: '35%' }}
						bg='gray.700'
						pr='20px'
						display={'flex'}
						flexDir='column'
						color='#fff'
						position='relative'
						pb={{ base: '50px', lg: '' }}
					>
						<Box
							pr='20px'
							pl='20px'
							pt='10px'
							display={'flex'}
							justifyContent='space-between'
							alignItems={'center'}
						>
							<Box
								display='inline-flex'
								flexDir={'column'}
								alignItems={'flex-start '}
							>
								<Text fontSize={{ base: '16px', lg: '18px' }}>
									Total Amount
								</Text>
								<Text
									fontSize={{ base: '16px', lg: '18px' }}
									fontWeight={700}
								>
									{'Rs ' + pkgData.startingPrice}
								</Text>
							</Box>
							<Box
								display={'flex'}
								flexDir='column'
								alignItems={'flex-end'}
								gap='10px'
							>
								{/* shows payment status processing or done */}
								<Box
									fontSize={{ base: '14px', lg: '20px' }}
									display={
										data.status === 'Cancelled'
											? 'inline-block'
											: data.status ===
											  'RequestedCancellation'
											? 'inline-block'
											: data.paymentStatus.status ===
											  'Confirmed'
											? 'none'
											: 'inline-block'
									}
									bg={
										data.status === 'Cancelled'
											? 'red'
											: data.paymentStatus.status ===
											  'Done'
											? data.status ===
											  'RequestedCancellation'
												? 'red.500'
												: 'green.500'
											: 'rgba(255,240,0,.3)'
									}
									color='#fff'
									backdropFilter={'Blur(10px)'}
									px='20px'
									py='10px'
									borderRadius={'10px'}
									fontWeight={600}
								>
									{data.status === 'Cancelled'
										? 'Cancelled'
										: data.status ===
										  'RequestedCancellation'
										? 'Requested Cancellation'
										: data.paymentStatus.status ===
										  undefined
										? 'Processing'
										: data.paymentStatus.status === 'Done'
										? 'Booked'
										: 'Processing'}
								</Box>

								<Box
									fontSize={{ base: '14px', lg: '20px' }}
									display={
										data.paymentStatus.status ===
										'Confirmed'
											? 'inline-block'
											: 'none'
									}
								>
									<Text>Payment Plan</Text>
									{parts.length === 0 ? (
										<></>
									) : parts.filter((data) => {
											return data.status;
									  }).length !== 0 ? (
										<Text
											color='gray.400'
											textAlign={'end'}
										>
											pay in parts
										</Text>
									) : (
										<Select
											w='130px'
											value={payOption}
											onChange={(e) => {
												setPayOption(e.target.value);
											}}
										>
											<option value={'pay now'}>
												pay now
											</option>
											<option value='pay in parts'>
												pay in parts
											</option>
										</Select>
									)}
								</Box>
							</Box>
						</Box>
						{payOption === 'pay now' &&
						parts.filter((data) => {
							return data.status;
						}).length === 0 ? (
							<Box
								fontSize={{ base: '14px', lg: '20px' }}
								pb='40px'
								display={
									data.paymentStatus.status === 'Requested'
										? 'none'
										: data.paymentStatus.status === 'Done'
										? 'none'
										: 'flex'
								}
								flexGrow={1}
								flexDir='column'
								justifyContent='flex-end'
								mt='20px'
								alignItems={'center'}
							>
								<Button
									bg='#0e87f6'
									w='80%'
									onClick={handleBookNow}
									isLoading={payLoading}
								>
									Pay Now
								</Button>
							</Box>
						) : (
							<Box
								flexGrow={1}
								display='flex'
								flexDir={'column'}
								justifyContent='center'
								alignItems={'center'}
								pb='20px'
								fontSize={{ base: '14px', lg: '20px' }}
							>
								<Box
									w='100%'
									pb='20px'
									display={'grid'}
									flexGrow={1}
									gridTemplateColumns='repeat(3,1fr)'
									mt='20px'
									alignItems={'center'}
									gap='10px 10px'
									pl='20px'
								>
									{parts.map((data, index) => {
										return (
											<Box
												border={
													'1px solid rgba(0,0,0,.6)'
												}
												borderRadius={'10px'}
												overflow='hidden'
											>
												<Text
													bg='rgba(0,0,0,.6)'
													textAlign={'center'}
												>
													Month-{index + 1}
												</Text>
												<Box
													display={'flex'}
													justifyContent='center'
													py='5px'
												>
													{data.status === true ? (
														<Button
															bg='green.400'
															w='80%'
															_hover={{
																background:
																	'green.400',
															}}
															cursor={
																'not-allowed'
															}
														>
															Paid
														</Button>
													) : (
														<Button
															bg='#0e87f6'
															w='80%'
															onClick={() => {
																handlePayInParts(
																	data,
																	index
																);
															}}
														>
															Pay - {data.amount}
														</Button>
													)}
												</Box>
											</Box>
										);
									})}
								</Box>
							</Box>
						)}
						{data.status === 'Cancelled' ||
						data.status === 'RequestedCancellation' ? (
							<></>
						) : (
							<Box
								position={'absolute'}
								bottom='10px'
								left='50%'
								transform={'translateX(-50%)'}
							>
								<Text
									textDecor={'underline'}
									textAlign='center'
									color='rgba(255,255,255,.5)'
									onClick={onOpen}
									cursor='pointer'
								>
									Cancel Booking
								</Text>
							</Box>
						)}
					</Box>
				</Box>
			)}
		</>
	);
};

export default React.memo(UpcomingCard);
