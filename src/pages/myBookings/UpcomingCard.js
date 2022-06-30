import {
	Box,
	Text,
	Icon,
	UnorderedList,
	ListItem,
	Select,
	Button,
	Badge,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { IoAirplaneSharp } from 'react-icons/io5';
import { MdDateRange } from 'react-icons/md';
import { MdPeopleAlt } from 'react-icons/md';
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';
import createOrderApi from '../../apis/createOrderApi';
import logo from '../../assets/logo/logo.png';
import getPackageById from '../../apis/getPackageById';

const UpcomingCard = ({ data }) => {
	const [payOption, setPayOption] = useState('pay now');
	const [pkgData, setPkgData] = useState();
	const [loading, setLoading] = useState(true);
	const [sDate, setSDate] = useState(new Date());
	const [parts, setParts] = useState([]);

	const eDate = new Date(data.endDate);

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
		const res = await initializeRazorpay();
		if (!res) {
			alert('Razorpay failed to load');
		}

		const data = await createOrderApi(
			pkgData.startingPrice * 100,
			'iiii',
			'uuuu'
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
				alert('Yeaaahhh!! payment is successfull.');
				alert('razorpay payment id :', response.razorpay_payment_id);
				alert('razorpay order id : ', response.razorpay_order_id);
				alert('razorpay signature : ', response.razorpay_signature);
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
					setParts(
						data.paymentType.split(',')[0].split(':')[1].split('-')
					);
				} catch (error) {
					setParts([]);
				}
				setLoading(false);
			} catch (error) {
				console.log('areeee errror aareee hai', error);
				// setPkgData({ packageTitle: 'package is Deleted' });
			}
		};

		getPackageData();
	}, []);

	// -------------------------------------------------------

	useEffect(() => {
		console.log('pkd data is ', pkgData);
	}, [pkgData]);

	return (
		<>
			{console.log('data is : ', data)}
			{loading ? (
				<></>
			) : pkgData.packageTitle === 'package is Deleted' ? (
				<>{console.log('i will not show it')}</>
			) : (
				<Box
					w='100%'
					h='300px'
					bg='transparent'
					border='1px solid #2d3748'
					borderRadius={'20px'}
					overflow='hidden'
					display={'flex'}
				>
					<Box
						w='30%'
						h='100%'
						bgImage={pkgData.image[0].url}
						bgSize='cover'
						bgPos={'50% 50%'}
					></Box>
					<Box
						pl='10px'
						w='35%'
						display={'flex'}
						flexDir='column'
						pb='20px'
					>
						<Box h='fit-content'>
							<Text fontSize={'24px'} fontWeight={700}>
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
										fontSize={'20px'}
										color='rgba(255,255,255,.5)'
									/>

									<Text pl='10px'>{data.location}</Text>
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
										fontSize={'20px'}
										color='rgba(255,255,255,.5)'
									/>
									<Text pl='10px'>
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
										fontSize={'20px'}
										color='rgba(255,255,255,.5)'
									/>
									<Text pl='10px'>{data.numberOfPeople}</Text>
								</Box>
							</Box>
						</Box>
						<Box
							flexGrow={1}
							mt='20px'
							ml='20px'
							display={'grid'}
							gridTemplateColumns='repeat(3,1fr)'
						>
							<Box>
								<Text>Resorts :</Text>
								<UnorderedList>
									{/* {pkgData.resorts.map((data, index) => {
										return (
											<ListItem key={index}>
												{data}
											</ListItem>
										);
									})} */}
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
						{/* <Box display={'flex'} alignItems='center' gap='10px'>
							<Text>See complete package : </Text>
							<Icon
								as={BsFillFileEarmarkPdfFill}
								color='red.500'
								cursor={'pointer'}
							/>
						</Box> */}
					</Box>
					<Box
						h='100%'
						w='35%'
						bg='gray.700'
						pr='20px'
						display={'flex'}
						flexDir='column'
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
								<Text fontSize={'18px'}>Total Amount</Text>
								<Text fontSize={'24px'} fontWeight={700}>
									{/* {payOption === 'pay now'
										? 'Rs 30,000/-'
										: 'Rs 9,000/month'} */}
									{'Rs ' + pkgData.startingPrice}
								</Text>
							</Box>
							<Box
								display={'flex'}
								flexDir='column'
								alignItems={'flex-end'}
								gap='10px'
							>
								<Box
									fontSize='20px'
									display={
										data.paymentStatus === 'Confirmed'
											? 'none'
											: 'inline-block'
									}
									bg={
										data.paymentStatus === 'Done'
											? 'green.500'
											: 'rgba(255,240,0,.3)'
									}
									color='#fff'
									backdropFilter={'Blur(10px)'}
									px='20px'
									py='10px'
									borderRadius={'10px'}
									fontWeight={600}
								>
									{data.paymentStatus === undefined
										? 'Processing'
										: data.paymentStatus === 'Done'
										? 'Booked'
										: 'Processing'}
								</Box>
								<Box
									display={
										data.paymentStatus === 'Confirmed'
											? 'inline-block'
											: 'none'
									}
								>
									<Text fontSize={'16px'}>Payment Plan</Text>
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
								</Box>
							</Box>
						</Box>
						{payOption === 'pay now' ? (
							<Box
								pb='20px'
								display={
									data.paymentStatus === 'Requested'
										? 'none'
										: data.paymentStatus === 'Done'
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
									bg='#32BAC9'
									w='80%'
									onClick={handleBookNow}
								>
									Pay Now
								</Button>
								<Text
									textDecor={'underline'}
									color='rgba(255,255,255,.5)'
								>
									Cancel Booking
								</Text>
							</Box>
						) : (
							<Box
								flexGrow={1}
								display='flex'
								flexDir={'column'}
								justifyContent='center'
								alignItems={'center'}
								pb='20px'
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
													<Button
														bg='#32BAC9'
														w='80%'
													>
														Pay - {data}
													</Button>
												</Box>
											</Box>
										);
									})}

									{/* <Box
										border={'1px solid rgba(0,0,0,.6)'}
										borderRadius={'10px'}
										overflow='hidden'
									>
										<Text
											bg='rgba(0,0,0,.6)'
											textAlign={'center'}
										>
											Month-2
										</Text>
										<Box
											display={'flex'}
											justifyContent='center'
											py='5px'
										>
											<Button bg='#32BAC9' w='80%'>
												Pay
											</Button>
										</Box>
									</Box> */}
									{/* <Box
										borderRadius={'10px'}
										overflow='hidden'
										border={'1px solid rgba(0,0,0,.6)'}
									>
										<Text
											bg='rgba(0,0,0,.6)'
											textAlign={'center'}
										>
											Month-3
										</Text>
										<Box
											display={'flex'}
											justifyContent='center'
											py='5px'
											bg='transparent'
										>
											<Button bg='#32BAC9' w='80%'>
												Pay
											</Button>
										</Box>
									</Box> */}
								</Box>
								<Box>
									<Text
										textDecor={'underline'}
										textAlign='center'
										color='rgba(255,255,255,.5)'
									>
										Cancel Booking
									</Text>
								</Box>
							</Box>
						)}
					</Box>
				</Box>
			)}
		</>
	);
};

export default React.memo(UpcomingCard);
