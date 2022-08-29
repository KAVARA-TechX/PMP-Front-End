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
import React, { useState, useRef } from 'react';
import CheckInDate from './CheckInDate';

const When = ({ setStartDate }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const popoverRef = useRef();


	const [checkInDate, setCheckInDate] = useState();


	const [checkoutValue, setCheckoutValue] = useState('Travel Date');

	useOutsideClick({
		ref: popoverRef,
		handler: () => {
			onClose();
		},
	});

	const handleCheckInDate = (e) => {
		onClose();
		setCheckoutValue(`${e.getDate()}/${e.getMonth() + 1}/${e.getFullYear()}`
		);
		setCheckInDate(e);
		setStartDate(e);

	};

	return (
		<Box
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
							<CheckInDate
								handleStart={handleCheckInDate}
								current={checkInDate}
							/>
						</PopoverContent>
					</Portal>
				</Box>
			</Popover>
		</Box>
	);
};

export default React.memo(When);
