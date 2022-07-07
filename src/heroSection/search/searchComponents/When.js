import {
	Box,
	Popover,
	PopoverTrigger,
	Text,
	Portal,
	PopoverContent,
	useDisclosure,
	useOutsideClick,
} from '@chakra-ui/react';
import { DayPicker } from 'react-day-picker';
import { useState, useRef } from 'react';
import { addDays, format } from 'date-fns';
import CheckOutDate from './CheckOutDate';
import CheckInDate from './CheckInDate';

const When = ({ setStartDate, setEndDate }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const popoverRef = useRef();

	const [isCheckInSelected, setIsCheckInSelected] = useState(false);

	const [checkInDate, setCheckInDate] = useState();
	const [checkOutDate, setCheckoutDate] = useState();

	const [checkoutValue, setCheckoutValue] = useState('When');

	useOutsideClick({
		ref: popoverRef,
		handler: () => {
			onClose();
		},
	});

	const handleCheckInDate = (e) => {
		setCheckInDate(e);
		setStartDate(e);
		setIsCheckInSelected(true);
	};

	const handleCheckOutDate = (e) => {
		onClose();
		setCheckoutValue(
			`${checkInDate.getDate()}/${
				checkInDate.getMonth() + 1
			}/${checkInDate.getFullYear()} - ${e.getDate()}/${
				e.getMonth() + 1
			}/${e.getFullYear()}`
		);
		setCheckoutDate((prev) => e);
		setEndDate(e);

		// setEndDate(e);
		setIsCheckInSelected(false);
	};
	return (
		<Box
			// minW='100px'
			textAlign={'center'}
			minW={{ base: '50%', lg: '100px' }}
		>
			<Popover zIndex={10000} isOpen={isOpen} isLazy>
				<PopoverTrigger zIndex={10000}>
					<Text
						cursor={'pointer'}
						fontSize={20}
						onClick={() => {
							onOpen();
						}}
						whiteSpace='nowrap'
					>
						{checkoutValue}
					</Text>
				</PopoverTrigger>
				<Box zIndex={110}>
					<Portal zIndex={10000} w='full' h='full'>
						<PopoverContent
							bg='#FFFDF7'
							zIndex={10000}
							ref={popoverRef}
						>
							{!isCheckInSelected ? (
								<CheckInDate
									handleStart={handleCheckInDate}
									current={checkInDate}
								/>
							) : (
								<CheckOutDate
									startWith={checkInDate}
									handleEnd={handleCheckOutDate}
								/>
							)}
						</PopoverContent>
					</Portal>
				</Box>
			</Popover>
		</Box>
	);
};

export default When;
