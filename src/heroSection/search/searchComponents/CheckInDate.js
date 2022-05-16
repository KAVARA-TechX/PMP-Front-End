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
			{/* <Popover zIndex={10000} isOpen={isOpen}> */}
			{/* <PopoverTrigger zIndex={10000}>
					<Text
						cursor={'pointer'}
						fontSize={20}
						onClick={() => {
							onOpen();
						}}
					>
						{checkinValue}
					</Text>
				</PopoverTrigger> */}
			<Box zIndex={110}>
				{/* <Portal zIndex={10000} w='full' h='full'> */}
				{/* <PopoverContent bg='#222222' zIndex={10000}> */}
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
				{/* </PopoverContent> */}
				{/* </Portal> */}
			</Box>
			{/* </Popover> */}
		</Box>
	);
};

export default CheckInDate;
