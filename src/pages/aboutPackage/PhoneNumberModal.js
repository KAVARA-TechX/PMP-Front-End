import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	Input,
	Modal,
	ModalContent,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

const PhoneNumberModal = ({ state, changeState, nextModal, anotherModal }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();
	const [phone, set_phone] = useState('');
	const [proceed, set_proceed] = useState(true);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (state) {
			onOpen();
		}
	}, [state]);

	useEffect(() => {
		if (String(phone).length === 10) {
			set_proceed(false);
		} else {
			set_proceed(true);
		}
	}, [phone]);

	const handleMobileNumberUpdate = async () => {
		setLoading(true);
		try {
			let token = localStorage.getItem('token');
			const res = await axios.patch(
				'/user/update-profile',
				{
					phone,
				},
				{ headers: { Authorization: token } }
			);
			console.log('phone number updated');
			setLoading(false);
			changeState(false);
			onClose();
			if (nextModal) {
				nextModal(true);
			}
			if (anotherModal) {
				anotherModal();
			}
		} catch (error) {
			console.log('something went wrong');
			setLoading(false);
		}
	};

	return (
		<AlertDialog isOpen={isOpen} onClose={onClose}>
			<AlertDialogOverlay>
				<AlertDialogContent>
					<AlertDialogHeader fontSize='lg' fontWeight={'bold'}>
						Enter your phone number to continue
					</AlertDialogHeader>
					<AlertDialogBody>
						<Input
							type='number'
							placeholder='0000000000'
							value={phone}
							onChange={(e) => {
								set_phone(e.target.value);
							}}
						/>
					</AlertDialogBody>

					<AlertDialogFooter>
						<Button
							ref={cancelRef}
							onClick={() => {
								changeState(false);
								onClose();
							}}
						>
							Cancel
						</Button>
						<Button
							colorScheme='green'
							onClick={handleMobileNumberUpdate}
							ml={3}
							isDisabled={proceed}
							isLoading={loading}
						>
							Proceed
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	);
};

export default PhoneNumberModal;
