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
	const [location, setLocation] = useState('');

	const [guest, setGuest] = useState(0);
	const [submitButton, setSubmitButton] = useState(true);

	const navigate = useNavigate();

	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();

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
				<Input
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
					onChange={(e) => {
						setLocation(e.target.value);
					}}
					_placeholder={{
						color: '#696969',
					}}
				/>
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
