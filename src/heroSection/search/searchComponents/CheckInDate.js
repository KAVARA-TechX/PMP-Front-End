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

const CheckInDate = ({ current, handleStart }) => {
	const [checkinDate, setCheckinDate] = useState(current);

	const handleCheckIn = (e) => {
		setCheckinDate(e);
		handleStart(e);
	};

	return (
		<Box>
			<Box zIndex={110}>
				<Box
					zIndex={110}
					h='fit-contnet'
					display={'flex'}
					flexDir='column'
					alignItems={'center'}
				>
					<Text textAlign={'center'} fontSize={18} mt={5} mb={3}>
						Choose Check-in Date
					</Text>
					<DayPicker
						mode='single'
						selected={checkinDate}
						onSelect={handleCheckIn}
						fromDate={new Date()}
						disabled={{ before: new Date() }}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default CheckInDate;
