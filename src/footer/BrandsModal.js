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
} from '@chakra-ui/react';
import { useEffect } from 'react';

const BrandsModal = ({ state, setState }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		if (state) {
			onOpen();
		}
		// eslint-disable-next-line
	}, [state]);

	return (
		<Modal isOpen={isOpen} size='full' onClose={onClose}>
			<ModalOverlay />
			<ModalContent bg='transperant' position={'relative'}>
				<Box
					position={'absolute'}
					w='600px'
					h='fit-content'
					bg='#222'
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
							<Input type='text' />
						</Box>
						<Box pt='20px'>
							<Text>Last Name</Text>
							<Input type='text' />
						</Box>
						<Box pt='20px'>
							<Text>Email</Text>
							<Input type='text' />
						</Box>
						<Box pt='20px'>
							<Text>Mobile Number</Text>
							<Input type='text' />
						</Box>
						<Box pt='20px'>
							<Text>Company Name</Text>
							<Input type='text' />
						</Box>
						<Box pt='20px'>
							<Text>Company Website</Text>
							<Input type='text' />
						</Box>
						<Box pt='20px'>
							<Text>Business Type</Text>
							<Input type='text' />
						</Box>
					</Box>
					<Box display={'flex'} justifyContent='center' pt='30px'>
						<Button bg='#32BAC9' _hover={{ background: '#32BAC9' }}>
							Submit
						</Button>
					</Box>
				</Box>
			</ModalContent>
		</Modal>
	);
};

export default BrandsModal;
