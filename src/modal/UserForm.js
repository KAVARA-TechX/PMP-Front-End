import React from 'react';
import { useEffect, useState } from 'react';
import {
	Modal,
	useDisclosure,
	Box,
	Input,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	FormControl,
	FormLabel,
	Text,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import createLead from '../apis/createLead';
import main1 from '../assets/thingsToDo/scuba.webp';
import { AccessFormState } from '../context/formStateContext';

const UserForm = ({ state, setState }) => {
	const [loading, SetLoading] = useState(false);
	const [name, setName] = useState('');
	const [checkName, setCheckName] = useState(false);
	const [email, setEmail] = useState('');
	const [checkEmail, setCheckEmail] = useState(false);
	const [phone, setPhone] = useState('');
	const [checkPhone, setCheckPhone] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = React.useRef();
	const finalRef = React.useRef();
	const { isSubmitted, SetIsSubmitted } = AccessFormState();

	const handleForm = async () => {
		SetLoading(true);
		// let's first check if any input is empty or not
		if (name === '' || email === '' || phone === '') {
			if (name === '') setCheckName(true);
			if (email === '') setCheckEmail(true);
			if (phone === '') setCheckPhone(true);
			SetLoading(false);
		} else {
			// now we will check for phone number length
			if (phone.length === 10) {
				try {
					const response = await createLead(name, email, phone);
					console.log(response);
					SetIsSubmitted(true);
					SetLoading(false);
					setTimeout(() => {
						console.log('timer is out');
						setState(false);
						onClose();
					}, 5000);
				} catch (err) {
					console.log(err);
					SetLoading(false);
				}
			} else {
				setCheckPhone(true);
				SetLoading(false);
			}
		}
	};

	useEffect(() => {
		if (state) {
			onOpen();
		}
	});

	return isSubmitted ? (
		<Modal
			initialFocusRef={initialRef}
			finalFocusRef={finalRef}
			isOpen={isOpen}
			onClose={onClose}
			maxWidth={'50vw'}
			borderRadius={'20px'}
		>
			<ModalOverlay />
			<ModalContent maxW='600px' borderRadius={'20px'} overflow='hidden'>
				<ModalCloseButton
					onClick={() => {
						setState(false);
					}}
				/>
				<ModalBody
					pb={6}
					bg='#fffdf7'
					borderRadius={'20px'}
					overflow='hidden'
				>
					<Box
						pt={5}
						display={'flex'}
						flexDir='column'
						alignItems={'center'}
					>
						<CheckCircleIcon fontSize={40} color='green.500' />
						<Text
							color='green.400'
							fontSize={20}
							mt={2}
							textAlign='center'
						>
							Request submitted succesfully.
							<br /> We will get in touch with you shortly.
						</Text>
					</Box>
				</ModalBody>
			</ModalContent>
		</Modal>
	) : (
		<>
			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
				maxWidth={'50vw'}
				borderRadius={'20px'}
			>
				<ModalOverlay />
				<ModalContent
					maxW='600px'
					borderRadius={'20px'}
					overflow='hidden'
				>
					<ModalHeader p={0}>
						<Box
							bgImage={main1}
							bgPosition={'50% 60%'}
							bgSize={'cover'}
							color='white'
							h='200px '
							display={'flex'}
							alignItems='center'
							fontSize={30}
							fontWeight={800}
							px={5}
							textTransform='uppercase'
						>
							Customize your trip.
						</Box>
					</ModalHeader>
					<ModalCloseButton
						onClick={() => {
							setState(false);
						}}
					/>
					<ModalBody pb={6} bg='#fffdf7'>
						<FormControl>
							<FormLabel>Name</FormLabel>
							<Input
								isInvalid={checkName}
								ref={initialRef}
								placeholder='Name'
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Email</FormLabel>
							<Input
								isInvalid={checkEmail}
								placeholder='Email'
								type='email'
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Mobile No.</FormLabel>
							<Input
								isInvalid={checkPhone}
								placeholder='+91 0000000000'
								type='number'
								value={phone}
								onChange={(e) => {
									setPhone(e.target.value);
								}}
							/>
							<Input type='text' value='landing page' hidden />
						</FormControl>
					</ModalBody>

					<ModalFooter bg='#fffdf7'>
						<Button
							isLoading={loading}
							_hover={{
								backgroundColor: '#141177',
							}}
							bg='#141177'
							color='white'
							mr={3}
							onClick={() => {
								handleForm();
							}}
						>
							Get Quote
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default UserForm;
