import { SearchIcon } from '@chakra-ui/icons';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Input,
	InputGroup,
	InputLeftElement,
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
	Text,
	Button,
	useDisclosure,
	Icon,
	PopoverContent,
	Popover,
	PopoverTrigger,
	PopoverBody,
} from '@chakra-ui/react';

import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { addDays } from 'date-fns';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import c_list from '../search/list.json';
import SearchResultPopover from './SearchResultPopover';

const MobileModal = ({ state, changeState, handleStart }) => {
	const search_modal = useRef(null);
	const [endDate, setEndDate] = useState();
	const main_modal_card = gsap.utils.selector(search_modal);
	const [startDate, setStartDate] = useState(new Date());
	const [isCheckInSelected, setIsCheckInSelected] = useState(false);
	const [numberOfAdults, setNumberOfAdults] = useState(0);
	const [numberOfChilds, setNumberOfChlids] = useState(0);
	const [location, setLocation] = useState('');
	const date_accoridion_ref = useRef();
	const who_accordion_btn = useRef();
	const [search_status, set_search_status] = useState(true);
	const navigate = useNavigate();
	const ref = useRef();
	const initialFocusRef = useRef();

	const handleSearch = () => {
		console.log('in home star and end is ', startDate, endDate);
		changeState(false);
		onClose();
		let guest = numberOfAdults + numberOfChilds;
		navigate(`/search/${location}/${startDate}/${endDate}/${guest}`);
	};

	const handleCheckIn = (e) => {
		setStartDate(e);
		setIsCheckInSelected(true);
		console.log('check in date is : ', e);
	};

	const handleCheckOut = (e) => {
		setEndDate(e);
		console.log('check out date is : ', e);
		date_accoridion_ref.current.click();
		who_accordion_btn.current.click();
	};

	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		if (
			location === '' ||
			endDate === undefined ||
			numberOfAdults + numberOfChilds === 0
		) {
			set_search_status(true);
		} else {
			set_search_status(false);
		}
	}, [location, startDate, endDate, numberOfAdults, numberOfChilds]);

	useEffect(() => {
		if (state) {
		}
	}, []);

	useEffect(() => {
		if (state) {
			onOpen();
		}
	}, [state]);

	return (
		<Drawer
			isOpen={isOpen}
			onClose={onClose}
			placement='bottom'
			size={'full'}
		>
			<DrawerOverlay />
			<DrawerContent
				bg='transparent'
				overflow={'hidden'}
				position={'relative'}
				zIndex={20000000000}
			>
				<Box
					position={'absolute'}
					h='100vh'
					w='100vw'
					bg='#FFFDF7'
					ref={search_modal}
					zIndex={20000000000}
					overflowY='scroll'
					display={'flex'}
					flexDir='column'
				>
					<DrawerCloseButton
						border='1px solid black'
						borderRadius={'full'}
						onClick={() => {
							changeState(false);
						}}
					/>
					{/* for location */}
					<Accordion defaultIndex={[0]} allowToggle mt='80px'>
						{/* location */}
						<Box
							mt='10px'
							w='95vw'
							mx='auto'
							h='fit-content'
							borderRadius='20px'
							px='15px'
							pt={'15px'}
							pb='20px'
							bg='white'
							boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}
						>
							<AccordionItem border={'none'}>
								<h2>
									<AccordionButton>
										<Box flex='1' textAlign='left'>
											<Text
												fontSize={'23px'}
												fontWeight={900}
											>
												Destination
											</Text>
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<SearchResultPopover
										location={location}
										setLocation={setLocation}
									/>
									{/* <InputGroup h='50px'>
										<InputLeftElement
											h='50px'
											pointerEvents='none'
											children={
												<SearchIcon color='gray.300' />
											}
										/>
										<Input
											h='50px'
											type='text'
											placeholder='Search Destination'
											value={location}
											onChange={(e) => {
												setLocation(e.target.value);
											}}
										/>
									</InputGroup> */}
								</AccordionPanel>
							</AccordionItem>
						</Box>
						{/* Date */}
						<Box
							mt='10px'
							w='95vw'
							mx='auto'
							h='fit-content'
							borderRadius='20px'
							px='15px'
							pt={'15px'}
							pb='20px'
							bg='white'
							boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}
						>
							<AccordionItem border={'none'}>
								<h2>
									<AccordionButton ref={date_accoridion_ref}>
										<Box flex='1' textAlign='left'>
											<Text
												fontSize={'23px'}
												fontWeight={900}
											>
												Travel Dates
											</Text>
										</Box>
										<AccordionIcon
										// ref={date_accoridion_ref}
										/>
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<Box display='flex' gap={'5px'}>
										<Button
											flexGrow={1}
											textAlign='center'
											py='10px'
											bg='gray'
											color='white'
											borderRadius={'10px'}
											_hover={{ background: 'gray' }}
											isDisabled={isCheckInSelected}
										>
											Check-In
										</Button>
										<Button
											flexGrow={1}
											textAlign='center'
											py='10px'
											bg='gray'
											color='white'
											borderRadius={'10px'}
											isDisabled={!isCheckInSelected}
										>
											Check-Out
										</Button>
									</Box>
									<Box>
										{!isCheckInSelected ? (
											// checkin
											<Box
												h='fit-contnet'
												display={'flex'}
												flexDir='column'
												alignItems={'center'}
											>
												<DayPicker
													mode='single'
													selected={startDate}
													onSelect={handleCheckIn}
													fromDate={new Date()}
													disabled={{
														before: new Date(),
													}}
												/>
											</Box>
										) : (
											//checkout
											<Box
												h='fit-contnet'
												display={'flex'}
												flexDir='column'
												alignItems={'center'}
											>
												<DayPicker
													mode='single'
													selected={endDate}
													onSelect={handleCheckOut}
													fromDate={addDays(
														startDate,
														1
													)}
													disabled={{
														before: new Date(),
													}}
												/>
											</Box>
										)}
									</Box>
								</AccordionPanel>
							</AccordionItem>
						</Box>
						{/* no. of people */}
						<Box
							mt='10px'
							w='95vw'
							mx='auto'
							h='fit-content'
							borderRadius='20px'
							px='15px'
							pt={'15px'}
							pb='20px'
							bg='white'
							boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}
						>
							<AccordionItem border={'none'}>
								<h2>
									<AccordionButton ref={who_accordion_btn}>
										<Box flex='1' textAlign='left'>
											<Text
												fontSize={'23px'}
												fontWeight={900}
											>
												No. of travellers
											</Text>
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<Box
										h='fit-contnet'
										display={'flex'}
										flexDir='column'
										alignItems={'center'}
										position='relative'
										pt='30px'
									>
										<Box display={'flex'} flexDir='column'>
											<Box
												display={'flex'}
												flexDir='column'
												alignItems={'center'}
												gap={5}
												h='100%'
												pb={5}
											>
												<Text
													fontSize={18}
													fontWeight={600}
													display='flex'
													alignItems='center'
													gap={5}
												>
													<Icon
														as={
															AiOutlineMinusCircle
														}
														cursor={
															numberOfAdults === 0
																? 'not-allowed'
																: 'pointer'
														}
														color={
															numberOfAdults === 0
																? 'gray'
																: '#141177'
														}
														onClick={() => {
															if (
																numberOfAdults !==
																0
															) {
																setNumberOfAdults(
																	(prev) =>
																		prev - 1
																);
															}
														}}
														disabled={true}
													/>
													{numberOfAdults} Adults
													<Icon
														as={AiOutlinePlusCircle}
														cursor='pointer'
														color={'#141177'}
														onClick={() => {
															setNumberOfAdults(
																(prev) =>
																	prev + 1
															);
														}}
													/>
												</Text>
												<Text
													fontSize={18}
													fontWeight={600}
													display='flex'
													alignItems='center'
													gap={5}
												>
													<Icon
														as={
															AiOutlineMinusCircle
														}
														cursor={
															numberOfChilds === 0
																? 'not-allowed'
																: 'pointer'
														}
														color={
															numberOfChilds === 0
																? 'gray'
																: '#141177'
														}
														onClick={() => {
															if (
																numberOfChilds !=
																0
															) {
																setNumberOfChlids(
																	(prev) =>
																		prev - 1
																);
															}
														}}
													/>
													{numberOfChilds} Childs
													<Icon
														as={AiOutlinePlusCircle}
														cursor='pointer'
														color={'#141177'}
														onClick={() => {
															setNumberOfChlids(
																(prev) =>
																	prev + 1
															);
														}}
													/>
												</Text>
											</Box>
										</Box>
									</Box>
								</AccordionPanel>
							</AccordionItem>
						</Box>
					</Accordion>
					<Box flexGrow={1} h='40px'></Box>
					<Box
						display={'flex'}
						justifyContent='center'
						mt='30px'
						mb='50px'
					>
						<Button
							w='50%'
							h='50px'
							bg='#141177'
							color='white'
							isDisabled={search_status}
							onClick={handleSearch}
						>
							Search
						</Button>
					</Box>
				</Box>
			</DrawerContent>
		</Drawer>
	);
};

export default MobileModal;
