import React, { useEffect } from 'react';
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
} from '@chakra-ui/react';
import main1 from '../assets/main1.jpeg';

const UserForm = ({ state, setState }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = React.useRef();
	const finalRef = React.useRef();

	useEffect(() => {
		if (state) {
			onOpen();
		}
	});

	return createPortal(
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
							bgPosition={'50% 80%'}
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
							<Input ref={initialRef} placeholder='Name' />
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Email</FormLabel>
							<Input placeholder='xyz@email.com' type='email' />
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Mobile No.</FormLabel>
							<Input placeholder='+91 0000000000' type='number' />
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button bg='orange' color='white' mr={3}>
							Get Quote
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>,

		document.getElementById('modal')
	);
};

export default UserForm;
