import { ArrowBackIcon } from '@chakra-ui/icons';
import {
	Box,
	Text,
	Popover,
	PopoverTrigger,
	Portal,
	PopoverContent,
	useDisclosure,
	Icon,
	PopoverArrow,
	PopoverCloseButton,
	useOutsideClick,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

const Who = ({ setGuest }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const ref = useRef();

	const [numberOfAdults, setNumberOfAdults] = useState(0);
	const [numberOfChilds, setNumberOfChlids] = useState(0);

	useOutsideClick({
		ref: ref,
		handler: () => {
			setGuest(numberOfAdults + numberOfChilds);
			onClose();
		},
	});

	return (
		<Box minW='100px' textAlign={'center'} mt={{ base: 3, lg: 0 }}>
			<Popover zIndex={10000} isOpen={isOpen}>
				<PopoverTrigger zIndex={10000}>
					<Text
						cursor={'pointer'}
						fontSize={20}
						onClick={() => {
							onOpen();
						}}
					>
						{numberOfAdults + numberOfChilds > 0
							? `${numberOfAdults + numberOfChilds} ${
									numberOfAdults + numberOfChilds > 1
										? 'guests'
										: 'guest'
							  }`
							: 'Who'}
					</Text>
				</PopoverTrigger>
				<Box zIndex={110}>
					<Portal zIndex={10000} w='full' h='full'>
						<PopoverContent bg='#FFFDF7' zIndex={10000} ref={ref}>
							<PopoverArrow bg='#FFFDF7' />
							<Box
								zIndex={110}
								h='fit-contnet'
								display={'flex'}
								flexDir='column'
								alignItems={'center'}
								position='relative'
							>
								<Box
									position={'absolute'}
									top='15px'
									right={'10px'}
								>
									<PopoverCloseButton
										onClick={() => {
											onClose();
											setGuest(
												numberOfAdults + numberOfChilds
											);
										}}
									/>
								</Box>
								<Text
									textAlign={'center'}
									fontSize={18}
									mt='15px'
									mb='20px'
								>
									Add Guests
								</Text>
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
												as={AiOutlineMinusCircle}
												cursor={
													numberOfAdults === 0
														? 'not-allowed'
														: 'pointer'
												}
												color={
													numberOfAdults === 0
														? 'gray'
														: '#32BAC9'
												}
												onClick={() => {
													if (numberOfAdults !== 0) {
														setNumberOfAdults(
															(prev) => prev - 1
														);
													}
												}}
												disabled={true}
											/>
											{numberOfAdults} Adults
											<Icon
												as={AiOutlinePlusCircle}
												cursor='pointer'
												color={'#32BAC9'}
												onClick={() => {
													setNumberOfAdults(
														(prev) => prev + 1
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
												as={AiOutlineMinusCircle}
												cursor={
													numberOfChilds === 0
														? 'not-allowed'
														: 'pointer'
												}
												color={
													numberOfChilds === 0
														? 'gray'
														: '#32BAC9'
												}
												onClick={() => {
													if (numberOfChilds != 0) {
														setNumberOfChlids(
															(prev) => prev - 1
														);
													}
												}}
											/>
											{numberOfChilds} Childs
											<Icon
												as={AiOutlinePlusCircle}
												cursor='pointer'
												color={'#32BAC9'}
												onClick={() => {
													setNumberOfChlids(
														(prev) => prev + 1
													);
												}}
											/>
										</Text>
									</Box>
								</Box>
							</Box>
						</PopoverContent>
					</Portal>
				</Box>
			</Popover>
		</Box>
	);
};

export default Who;
