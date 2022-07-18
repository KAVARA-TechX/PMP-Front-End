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

import { useEffect, useState } from 'react';
import brandsRequest from '../apis/brandsRequest';

const BrandsModal = ({ state, setState }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [cname, setCname] = useState('');
	const [cwebsite, setCwebsite] = useState('');
	const [bType, setBtype] = useState('');
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

	return (
		<Modal isOpen={isOpen} size='full' onClose={onClose}>
			<ModalOverlay />
			<ModalContent bg='transperant' position={'relative'}>
				<Box
					position={'absolute'}
					w='600px'
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
							/>
						</Box>
					</Box>
					<Box display={'flex'} justifyContent='center' pt='30px'>
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
			</ModalContent>
		</Modal>
	);
};

export default BrandsModal;
