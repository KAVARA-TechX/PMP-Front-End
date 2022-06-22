import { Box, Text } from '@chakra-ui/react';
import { DayPicker } from 'react-day-picker';
import { useEffect, useState } from 'react';
import { addDays } from 'date-fns';

const CheckOutDate = ({ startWith, handleEnd }) => {
	const [checkoutDate, setCheckoutDate] = useState();

	const handleCheckOut = (e) => {
		setCheckoutDate(e);
		handleEnd(e);
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
						Choose Check-out Date
					</Text>
					<DayPicker
						mode='single'
						selected={checkoutDate}
						onSelect={handleCheckOut}
						fromDate={addDays(startWith, 1)}
						disabled={{ before: new Date() }}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default CheckOutDate;
