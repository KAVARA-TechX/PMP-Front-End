import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons';
import {
	Box,
	Input,
	Modal,
	ModalContent,
	ModalOverlay,
	Button,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import travelAgentApi from '../apis/travelAgentApi';

const TravelAgentModal = ({ state, setState }) => {
	const [fname, setFname] = useState('');
	const [checkFname, setCheckFname] = useState(false);
	const [lname, setLname] = useState('');
	const [checkLname, setCheckLname] = useState(false);
	const [email, setEmail] = useState('');
	const [checkEmail, setCheckEmail] = useState(false);
	const [phone, setPhone] = useState('');
	const [checkPhone, setCheckPhone] = useState(false);
	const [loading, setLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		if (state) {
			onOpen();
		}
		// eslint-disable-next-line
	}, [state]);

	const handleSubmit = async () => {
		if (
			fname === '' ||
			lname === '' ||
			email === '' ||
			String(phone).length !== 10
		) {
			if (fname === '') {
				setCheckFname(true);
			}
			if (lname === '') {
				setCheckLname(true);
			}
			if (email === '') {
				setCheckEmail(true);
			}
			if (String(phone).length !== 10) {
				setCheckPhone(true);
			}
		} else {
			// make the request
			setLoading(true);
			try {
				const response = await travelAgentApi(
					fname,
					lname,
					email,
					phone
				);
				console.log('response is : ', response);
				setLoading(false);
				setIsSubmitted(true);
			} catch (error) {
				console.log('error is : ', error);
				setLoading(false);
			}
		}
	};

	return (
		<Modal isOpen={isOpen} size='full' onClose={onClose}>
			<ModalOverlay />
			<ModalContent bg='transperant' position={'relative'}>
				<Box
					position={'absolute'}
					w={{ base: '95vw', lg: '600px' }}
					h='fit-content'
					bg='#fffdf7'
					left='50%'
					top='50%'
					transform={'translate(-50%,-50%)'}
					borderRadius='10px'
				>
					{isSubmitted ? (
						<Box
							w='100%'
							h='100%'
							display={'flex'}
							justifyContent='center'
							alignItems={'center'}
							position='relative'
							px='40px'
							py='40px'
						>
							<CloseIcon
								position={'absolute'}
								top='20px'
								right='20px'
								cursor={'pointer'}
								onClick={() => {
									onClose();
									setState(false);
								}}
							/>
							<Box
								display={'inline-flex'}
								flexDir='column'
								alignItems={'center'}
								justifyContent='center'
							>
								<CheckCircleIcon
									color='green.200'
									fontSize={40}
								/>
								<Text fontSize={30} fontWeight='600'>
									Thank you!
								</Text>
								<Text>Your request has been sent.</Text>
							</Box>
						</Box>
					) : (
						<Box px='25px' py='30px'>
							<Box
								display={'flex'}
								alignItems='center'
								justifyContent={'space-between'}
							>
								<Text fontSize={20} fontWeight={600}>
									Travel Agents
								</Text>
								<CloseIcon
									cursor={'pointer'}
									onClick={() => {
										setState(false);
										onClose();
									}}
								/>
							</Box>
							<Box>
								<Box pt='20px'>
									<Text>First Name</Text>
									<Input
										value={fname}
										type='text'
										isInvalid={checkFname}
										onChange={(e) => {
											setFname(e.target.value);
										}}
									/>
								</Box>
								<Box pt='20px'>
									<Text>Last Name</Text>
									<Input
										value={lname}
										type='text'
										isInvalid={checkLname}
										onChange={(e) => {
											setLname(e.target.value);
										}}
									/>
								</Box>
								<Box pt='20px'>
									<Text>Email</Text>
									<Input
										value={email}
										type='text'
										isInvalid={checkEmail}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
								</Box>
								<Box pt='20px'>
									<Text>Mobile Number</Text>
									<Input
										value={phone}
										type='text'
										isInvalid={checkPhone}
										onChange={(e) => {
											setPhone(e.target.value);
										}}
									/>
								</Box>
							</Box>
							<Box
								display={'flex'}
								justifyContent='center'
								pt='30px'
							>
								<Button
									bg='#141177'
									color='#fff'
									_hover={{ background: '#141177' }}
									onClick={handleSubmit}
									isLoading={loading}
								>
									Submit
								</Button>
							</Box>
						</Box>
					)}
				</Box>
			</ModalContent>
		</Modal>
	);
};

export default TravelAgentModal;
