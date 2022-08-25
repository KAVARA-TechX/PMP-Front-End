import {
	Box,
	Text,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	Input,
	Icon,
	Button,
	useToast,
} from '@chakra-ui/react';
import { DayPicker } from 'react-day-picker';
import {
	CheckIcon,
	CloseIcon,
	ArrowBackIcon,
	CheckCircleIcon,
} from '@chakra-ui/icons';
import img from '../../assets/footer.jpg';
import sideImg from '../../assets/thingsToDo/skiing.webp';
import { AccessLoginContext } from '../../context/LoginContext';
import { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import '../../../node_modules/react-day-picker/dist/style.css';
import '../../packages/day-picker.css';
import { addDays } from 'date-fns';
import getUserinfoApi from '../../apis/getUserInfoApi';
import CreatePackageRequest from '../../apis/CreatePackageRequest';
import { useNavigate } from 'react-router-dom';
import PackageCard from '../../components/packageCard/PackageCard';

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

const PackageCardd = ({ data }) => {
	const { loginState, loginclick } = AccessLoginContext();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [choosed, setChoosed] = useState(new Date());
	const [endDate, setEndDate] = useState();
	const [showDate, setShowDate] = useState(true);
	const [showEndDate, setShowEndDate] = useState(false);
	const [endDateFromMonth, setEndDateFromMonth] = useState();
	const [showCity, setShowCity] = useState(false);
	const [showConfigRoom, setShowConfigRoom] = useState(false);
	const [numberOfAdults, setNumberOfAdults] = useState(1);
	const [numberOfChilds, setNumberOfChlids] = useState(0);
	const [cityName, setCityName] = useState('');
	const [loading, setLoading] = useState(false);
	const [isFilled, setIsFilled] = useState(false);
	const toast = useToast();
	const navigate = useNavigate();

	const handleDate = (e) => {
		setEndDateFromMonth(e);
		setChoosed(e);
		setShowDate((prev) => !prev);
		// setShowCity(true);
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
				data._id,
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

	return (
		<>
			{/* {console.log('data is : ', data)} */}
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
						h={'500px'}
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
			<PackageCard data={data} />
			{/* <Box
				w={'100%'}
				h={{ base: 'fit-content', lg: '400px' }}
				bg='gray.600'
				border={'1px solid rgba(255,255,255,0.1)'}
				borderRadius={'2xl'}
				mt='20px'
				display={'flex'}
				flexDir={{ base: 'column', lg: 'row' }}
				overflow='hidden'
				transition={'.5s'}
				_hover={{
					boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
				}}
			>
				<Box
					h={{ base: '200px', lg: '100%' }}
					w={{ base: '100%', lg: '30%' }}
					bgImg={data.image.length > 0 ? data.image[0].url : img}
					bgSize='cover'
					bgPos={'50% 50%'}
				></Box>
				<Box
					bg='#222'
					pl='30px'
					mr={{ base: '30px', lg: '0px' }}
					pt='30px'
					display={'flex'}
					flexDir='column'
					w={{ base: '100%', lg: '40%' }}
				>
					<Text fontSize={20} fontWeight={700}>
						{data.packageTitle}
					</Text>
					<Text display={'flex'} alignItems='center' gap={1}></Text>
					<Box
						as='ul'
						mt={3}
						display='flex'
						flexDir={'column'}
						gap='10px'
						flexWrap={'wrap'}
						pl={5}
						pr={5}
					>
						<Text as='li' color='whiteAlpha.700'>
							{data.packageDetail1}
						</Text>
						{data.packageDetail2 === '' ? (
							<></>
						) : (
							<Text as='li' color='whiteAlpha.700'>
								{data.packageDetail2}
							</Text>
						)}

						{data.packageDetail3 === '' ? (
							<></>
						) : (
							<Text as='li' color='whiteAlpha.700'>
								{data.packageDetail3}
							</Text>
						)}
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
					{String(data.inclusion)
						.split(',')
						.map((item, index) => {
							return (
								<>
									{item === '' ? (
										''
									) : (
										<Text
											textAlign={'start'}
											ml='10px'
											mt='10px'
											fontWeight={300}
											key={index}
										>
											<CheckIcon color={'green.200'} />{' '}
											{item}
										</Text>
									)}
								</>
							);
						})}
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
							<Text>₹{data.startingPrice}</Text>
							<Text fontSize={15} color='whiteAlpha.700'>
								/person
							</Text>
						</Text>
						<Box
							bg='transparent'
							border={'1px solid rgba(255,255,255,.3)'}
							fontSize={20}
							fontWeight={600}
							py={'15px'}
							textAlign='center'
							borderRadius={'xl'}
							cursor='pointer'
							_hover={{
								background: '#fff',
								color: 'rgba(0,0,0,.8)',
							}}
							onClick={() => {
								navigate('/about-package');
							}}
						>
							View Package
						</Box>
					</Box>
				</Box>
			</Box> */}
		</>
	);
};

export default PackageCardd;
