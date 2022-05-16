import {
	Box,
	Popover,
	PopoverTrigger,
	Text,
	Portal,
	PopoverContent,
	useDisclosure,
} from '@chakra-ui/react';
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
import { addDays, format } from 'date-fns';
import CheckOutDate from './CheckOutDate';
import CheckInDate from './CheckInDate';

const When = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [isCheckInSelected, setIsCheckInSelected] = useState(false);

	const [checkInDate, setCheckInDate] = useState(new Date());
	const [checkOutDate, setCheckoutDate] = useState();

	const [checkoutValue, setCheckoutValue] = useState('When');

	const handleCheckInDate = (e) => {
		setCheckInDate(e);
		setIsCheckInSelected(true);
	};

	const handleCheckOutDate = (e) => {
		setCheckoutDate((prev) => e);
		setCheckoutValue(
			`${checkInDate.getDate()}/${
				checkInDate.getMonth() + 1
			}/${checkInDate.getFullYear()} - ${checkOutDate.getDate()}/${
				checkOutDate.getMonth() + 1
			}/${checkOutDate.getFullYear()}`
		);
		setIsCheckInSelected(false);
		onClose();
	};
	return (
		<Box
			// minW='100px'
			textAlign={'center'}
			minW={{ base: '50%', lg: '100px' }}
		>
			<Popover zIndex={10000} isOpen={isOpen}>
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
						<PopoverContent bg='#222222' zIndex={10000}>
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
