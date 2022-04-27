import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = React.useRef();
	const finalRef = React.useRef();
	const { isSubmitted, SetIsSubmitted } = AccessFormState();

	const handleForm = async () => {
		try {
			const response = await createLead(name, email, phone);
			console.log(response);
			SetIsSubmitted(true);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (state) {
			onOpen();
		}
	}, [state]);

	return createPortal(
		isSubmitted ? (
			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
				maxWidth={'50vw'}
			>
				<ModalOverlay />
				<ModalContent maxW='600px'>
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
							get customised quotation
						</Box>
					</ModalHeader>
					<ModalCloseButton
						color='white'
						onClick={() => {
							setState(false);
						}}
					/>
					<ModalBody pb={6}>
						<Box
							pt={5}
							display={'flex'}
							flexDir='column'
							alignItems={'center'}
						>
							<CheckCircleIcon fontSize={40} color='green.500' />
							<Text color='green.400' fontSize={20} mt={2}>
								Form Submitted Successfully!
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
				>
					<ModalOverlay />
					<ModalContent maxW='600px'>
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
								get customised quotation
							</Box>
						</ModalHeader>
						<ModalCloseButton
							color='white'
							onClick={() => {
								setState(false);
							}}
						/>
						<ModalBody pb={6}>
							<FormControl>
								<FormLabel>Name</FormLabel>
								<Input
									ref={initialRef}
									placeholder='Name'
									onChange={(e) => {
										setName(e.target.value);
									}}
								/>
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Email</FormLabel>
								<Input
									placeholder='xyz@email.com'
									type='email'
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
							</FormControl>
							<FormControl mt={4}>
								<FormLabel>Mobile No.</FormLabel>
								<Input
									placeholder='+91 0000000000'
									type='number'
									onChange={(e) => {
										setPhone(e.target.value);
									}}
								/>
							</FormControl>
						</ModalBody>

						<ModalFooter>
							<Button
								bg='orange'
								color='white'
								mr={3}
								onClick={handleForm}
							>
								Get Quote
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</>
		),

		document.getElementById('modal')
	);
};

export default UserForm;
