import { SearchIcon } from '@chakra-ui/icons';
import {
	Box,
	Text,
	Input,
	Button,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverBody,
	useDisclosure,
	useOutsideClick,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';
import Who from './searchComponents/Who';
import When from './searchComponents/When';
import axios from 'axios';

const Search = () => {
	const [location, setLocation] = useState('');
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [guest, setGuest] = useState(0);
	const [submitButton, setSubmitButton] = useState(true);
	const [c_list, set_c_list] = useState([]);

	const initialFocusRef = useRef();
	const popoverRef = useRef();
	const ref = useRef();

	const navigate = useNavigate();

	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();

	const getDestinationList = async () => {
		if (!sessionStorage.getItem('destination_list')) {
			try {
				const res = await axios.get(
					'https://planmyleisure.herokuapp.com/package/destination-list'
				);
				set_c_list(res.data.destinationArray);
				sessionStorage.setItem(
					'destination_list',
					res.data.destinationArray
				);
			} catch (error) {
				console.log('while loading destination something went wrong');
			}
		}
	};

	const handleForm = () => {
		if (location === '') {
			console.log('trying to submit the wrong thing');
		} else {
			if (guest < 1 || guest === '') {
				console.log('are you fucking idiot');
			} else {
				navigate(
					`/search/${location}/${startDate}/${endDate}/${guest}`
				);
			}
		}
	};

	useEffect(() => {
		if (sessionStorage.getItem('destination_list')) {
			set_c_list(sessionStorage.getItem('destination_list').split(','));
		}
	}, []);

	useEffect(() => {
		console.log(location, startDate, endDate, guest);

		if (location !== '') {
			if (startDate !== undefined) {
				if (endDate !== undefined) {
					if (guest >= 1) {
						setSubmitButton(false);
					} else {
						setSubmitButton(true);
					}
				} else {
					setSubmitButton(true);
				}
			} else {
				setSubmitButton(true);
			}
		} else {
			setSubmitButton(true);
		}
	}, [location, startDate, endDate, guest]);

	useOutsideClick({
		ref: ref,
		handler: () => {
			onClose();
		},
	});

	useEffect(() => {
		if (location.length === 0) {
			onClose();
		}
	}, [location]);

	const handlePopoverTrigger = (e) => {
		onOpen();
		setLocation(e.target.value);
	};

	return (
		<Box
			position='absolute'
			zIndex={9}
			minW={{ base: '80vw', lg: '70vw' }}
			h='fit-content'
			bg='#fffdf7'
			borderRadius={{ base: 'md', lg: 'full' }}
			left='50%'
			bottom={{ base: '-10%', lg: '0%' }}
			transform='translateX(-50%) translateY(50%)'
			boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
			display='flex'
			flexDir={{ base: 'column', lg: 'row' }}
			justifyContent={'space-between'}
			pl={{ base: 5, lg: '50px' }}
			pr={{ base: 5, lg: '20px' }}
			pt={4}
			pb={4}
			alignItems='center'
			flexWrap={'wrap'}
		>
			{/* location */}
			<Box w={{ base: '100%', lg: '100px' }}>
				<Popover
					placement='bottom'
					zIndex={10000}
					isOpen={isOpen}
					onClose={onClose}
					isLazy
					initialFocusRef={initialFocusRef}
				>
					<PopoverTrigger zIndex={10000}>
						<Input
							ref={initialFocusRef}
							value={location}
							textAlign={{ base: 'center', lg: 'start' }}
							w='100%'
							fontSize={20}
							type='text'
							placeholder='Destination'
							outline={'none'}
							border='none'
							pl={0}
							pr={0}
							_focus={{ outline: 'none' }}
							pb={{ base: 3, lg: 0 }}
							onChange={handlePopoverTrigger}
							_placeholder={{
								color: '#696969',
							}}
							onFocus={getDestinationList}
						/>
					</PopoverTrigger>
					<PopoverContent
						w={'250px'}
						maxH='250px'
						overflowY={'scroll'}
						ref={ref}
						position='relative'
						top='-10px'
						bg='#fffdf7'
						left='55px'
						borderRadius={'8px'}
					>
						<PopoverBody>
							{c_list
								.filter((val) => {
									console.log(
										`for ${val}`,
										val
											.toLowerCase()
											.indexOf(location.toLowerCase())
									);
									return val
										.toLowerCase()
										.indexOf(location.toLowerCase()) !== -1
										? true
										: false;
								})
								.map((loc, index) => {
									return (
										<Text
											px='10px'
											_hover={{
												background: 'rgba(0,0,0,.1)',
												cursor: 'pointer',
											}}
											key={index}
											onClick={() => {
												setLocation(loc);
												onClose();
											}}
										>
											{loc}
										</Text>
									);
								}).length !== 0 ? (
								c_list
									.filter((val) =>
										val
											.toLowerCase()
											.indexOf(location.toLowerCase()) !==
										-1
											? true
											: false
									)
									.map((loc, index) => {
										return (
											<Text
												px='10px'
												_hover={{
													background:
														'rgba(0,0,0,.1)',
													cursor: 'pointer',
												}}
												key={index}
												onClick={() => {
													setLocation(loc);
													onClose();
												}}
											>
												{loc}
											</Text>
										);
									})
							) : (
								<Text px='10px'>No Matches Found</Text>
							)}
						</PopoverBody>
					</PopoverContent>
				</Popover>
			</Box>
			<When setStartDate={setStartDate} setEndDate={setEndDate} />
			<Who setGuest={setGuest} />
			{/* search Button */}
			<Box
				w={{ base: '100%', lg: '100px' }}
				display='flex'
				justifyContent={'center'}
				mt={{ base: 5, lg: 0 }}
				// mr={}
			>
				<Button
					h='40px'
					w={{ base: '100%', lg: 'fit-content' }}
					bg='#141177'
					color='white'
					onClick={handleForm}
					disabled={submitButton}
					borderRadius={{ base: 'md', lg: 'full' }}
					_hover={{ backgroundColor: '#0e87f6' }}
					display='flex'
					gap={2}
				>
					<SearchIcon /> Search
				</Button>
			</Box>
		</Box>
	);
};

export default Search;
