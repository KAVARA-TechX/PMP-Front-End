import { CloseIcon } from '@chakra-ui/icons';
import {
	Box,
	Input,
	Modal,
	ModalContent,
	ModalOverlay,
	Button,
	Text,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import brandsRequest from '../apis/brandsRequest';

const BrandsModal = ({ state, setState }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [fname, setFname] = useState('');
	const [check_fname, set_check_fname] = useState(false);
	const [lname, setLname] = useState('');
	const [check_lname, set_check_lname] = useState(false);
	const [email, setEmail] = useState('');
	const [check_email, set_check_Email] = useState(false);
	const [phone, setPhone] = useState('');
	const [check_phone, set_check_phone] = useState(false);
	const [cname, setCname] = useState('');
	const [check_cname, set_check_cname] = useState(false);
	const [cwebsite, setCwebsite] = useState('');
	const [check_cwebsite, set_check_cwebsite] = useState(false);
	const [bType, setBtype] = useState('');
	const [check_bType, set_check_bType] = useState(false);
	const [loading, setLoading] = useState(false);
	const toast = useToast();

	useEffect(() => {
		if (state) {
			onOpen();
		}
		// eslint-disable-next-line
	}, [state]);

	const clean = () => {
		setFname('');
		setLname('');
		setEmail('');
		setPhone('');
		setCname('');
		setCwebsite('');
		setBtype('');
	};

	const handleSubmit = async () => {
		setLoading(true);
		try {
			const res = await brandsRequest(
				fname,
				lname,
				email,
				phone,
				cname,
				cwebsite,
				bType
			);
			console.log('brand response is : ', res);
			setLoading(false);
			toast({
				title: 'Thank you!',
				description: 'Your submission has been sent.',
				status: 'success',
				duration: 3000,
				isClosable: true,
			});
			onClose();
			clean();
		} catch (error) {
			setLoading(false);
		}
	};

	const checkFormBeforeSubmit = () => {
		if (
			fname === '' ||
			lname === '' ||
			email === '' ||
			phone === '' ||
			cname === '' ||
			cwebsite === '' ||
			bType === ''
		) {
			if (fname === '') {
				set_check_fname(true);
			} else {
				set_check_fname(false);
			}

			if (lname === '') {
				set_check_lname(true);
			} else {
				set_check_lname(false);
			}

			if (email === '') {
				set_check_Email(true);
			} else {
				set_check_Email(false);
			}

			if (phone === '') {
				set_check_phone(true);
			} else {
				set_check_phone(false);
			}

			if (cname === '') {
				set_check_cname(true);
			} else {
				set_check_cname(false);
			}

			if (cwebsite === '') {
				set_check_cwebsite(true);
			} else {
				set_check_cwebsite(false);
			}

			if (bType === '') {
				set_check_bType(true);
			} else {
				set_check_bType(false);
			}
		} else {
			handleSubmit();
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
					px='25px'
					py='30px'
					borderRadius='10px'
				>
					<Box
						display={'flex'}
						alignItems='center'
						justifyContent={'space-between'}
					>
						<Text fontSize={20} fontWeight={600}>
							Brands
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
								type='text'
								value={fname}
								onChange={(e) => {
									setFname(e.target.value);
								}}
								isInvalid={check_fname}
							/>
						</Box>
						<Box pt='20px'>
							<Text>Last Name</Text>
							<Input
								type='text'
								value={lname}
								onChange={(e) => {
									setLname(e.target.value);
								}}
								isInvalid={check_lname}
							/>
						</Box>
						<Box pt='20px'>
							<Text>Email</Text>
							<Input
								type='email'
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								isInvalid={check_email}
							/>
						</Box>
						<Box pt='20px'>
							<Text>Mobile Number</Text>
							<Input
								type='number'
								value={phone}
								onChange={(e) => {
									setPhone(e.target.value);
								}}
								isInvalid={check_phone}
							/>
						</Box>
						<Box pt='20px'>
							<Text>Company Name</Text>
							<Input
								type='text'
								value={cname}
								onChange={(e) => {
									setCname(e.target.value);
								}}
								isInvalid={check_cname}
							/>
						</Box>
						<Box pt='20px'>
							<Text>Company Website</Text>
							<Input
								type='text'
								value={cwebsite}
								onChange={(e) => {
									setCwebsite(e.target.value);
								}}
								isInvalid={check_cwebsite}
							/>
						</Box>
						<Box pt='20px'>
							<Text>Business Type</Text>
							<Input
								type='text'
								value={bType}
								onChange={(e) => {
									setBtype(e.target.value);
								}}
								isInvalid={check_bType}
							/>
						</Box>
					</Box>
					<Box display={'flex'} justifyContent='center' pt='30px'>
						<Button
							bg='#141177'
							color='#fff'
							_hover={{ background: '#141177' }}
							onClick={checkFormBeforeSubmit}
							isLoading={loading}
						>
							Submit
						</Button>
					</Box>
				</Box>
			</ModalContent>
		</Modal>
	);
};

export default React.memo(BrandsModal);
