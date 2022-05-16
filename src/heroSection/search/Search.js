import { SearchIcon } from '@chakra-ui/icons';
import {
	Box,
	Text,
	Input,
	Button,
	Popover,
	PopoverTrigger,
	Portal,
	PopoverContent,
	PopoverArrow,
	PopoverHeader,
	PopoverCloseButton,
	PopoverBody,
	PopoverFooter,
	useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useNavigate } from 'react-router-dom';
import './Search.css';
import CheckInDate from './searchComponents/CheckInDate';
import CheckOutDate from './searchComponents/CheckOutDate';
import Who from './searchComponents/Who';
import When from './searchComponents/When';

const Search = () => {
	const [location, setLocation] = useState('fdd');
	const [checkinDate, setCheckinDate] = useState(new Date());

	const [guest, setGuest] = useState(1);
	const [submitButton, setSubmitButton] = useState(true);
	const { onOpen, onClose, isOpen } = useDisclosure();
	const [isCheckIn, setIsCheckIn] = useState(false);
	const [checkinValue, setCheckinValue] = useState('CheckIn');
	const [checkoutValue, setCheckoutValue] = useState('CheckOut');
	let today = new Date();
	const navigate = useNavigate();

	today.setDate(today.getDate());
	const [startDate, setStartDate] = useState(
		today.toISOString().substr(0, 10)
	);
	today.setDate(today.getDate() + 1);
	const [endDate, setEndDate] = useState(today.toISOString().substr(0, 10));

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
		if (location !== '') {
			if (startDate !== '') {
				if (endDate !== '') {
					if (guest !== '') {
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

	return (
		<Box
			position='absolute'
			zIndex={9}
			minW={{ base: '80vw', lg: '50vw' }}
			h='fit-content'
			bg='#222222'
			borderRadius={{ base: 'md', lg: 'full' }}
			left='50%'
			bottom={{ base: '-10%', lg: '0%' }}
			transform='translateX(-50%) translateY(50%)'
			boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
			display='flex'
			flexDir={{ base: 'column', lg: 'row' }}
			justifyContent={'space-around'}
			// gridTemplateColumns={{
			// 	base: 'repeat(2,1fr)',
			// 	lg: '25% 25% 25% 25%',
			// }}
			pl={5}
			pr={{ base: 5, lg: 0 }}
			pt={4}
			pb={4}
			alignItems='center'
			flexWrap={'wrap'}
		>
			{/* location */}
			<Box w={{ base: '100%', lg: '100px' }}>
				<Input
					textAlign='center'
					w='100%'
					fontSize={20}
					type='text'
					placeholder='Where'
					outline={'none'}
					border='none'
					pl={0}
					pr={0}
					_focus={{ outline: 'none' }}
					pb={{ base: 3, lg: 0 }}
					onChange={(e) => {
						setLocation(e.target.value);
					}}
				/>
			</Box>
			<When />
			<Who />
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
					bg='#32BAC9'
					color='white'
					onClick={handleForm}
					disabled={submitButton}
					borderRadius={{ base: 'md', lg: 'full' }}
					_hover={{ backgroundColor: '#32BAC9' }}
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
