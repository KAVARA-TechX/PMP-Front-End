import { CloseIcon } from '@chakra-ui/icons';
import {
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	Button,
	Box,
	Text,
	Icon,
	Input,
	useToast,
} from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from 'react-google-login';
import { AccessLoginContext } from '../context/LoginContext';
import SignupApi from '../apis/SignupApi';
import googleLoginApi from '../apis/googleLoginApi';

const SignupModal = ({ open, setOpen }) => {
	const { isOpen, onOpen, onClose } = useDisclosure(open);
	const { setLoginState, setToken, setUsed, setProfileurl } =
		AccessLoginContext();
	const [name, setName] = useState('');
	const [checkName, setCheckName] = useState(false);
	const [email, setEmail] = useState('');
	const [checkEmail, setCheckEmail] = useState(false);
	const [password, setPassword] = useState('');
	const [checkPassword, setCheckPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [mailsend, setMailsend] = useState(false);
	const toast = useToast();

	const handleCallbackResponse = async (response) => {
		console.log('response is : ', response);

		// this is what we do when user login
		try {
			const res = await googleLoginApi(response.credential);
			console.log('server se ye aaya : ', res);
			setLoginState(true);
			setToken(res.data.token);
			setUsed('google');
			setOpen(false);
			onClose();
			setProfileurl(res.data.msg.avatar);
		} catch (error) {
			console.log('some error occured', error);
		}
	};

	const gSigupButton = useCallback((node) => {
		if (node !== null) {
			/* global google */
			google.accounts.id.initialize({
				client_id:
					'578238801386-kf4dnau6t00190pd4pkten5ke97r5jet.apps.googleusercontent.com',
				callback: handleCallbackResponse,
			});

			google.accounts.id.renderButton(node, {
				theme: 'outline',
				size: 'large',
			});
		}
	}, []);

	useEffect(() => {
		if (open) {
			onOpen();
		}
	}, [open]);

	// const success = async (response) => {
	// 	let tokenId = response.tokenId;
	// 	try {
	// 		const res = await googleLoginApi(tokenId);
	// 		setLoginState(true);
	// 		setToken(res.data.token);
	// 		setUsed('google');
	// 		setOpen(false);
	// 		onClose();
	// 		setProfileurl(res.data.msg.avatar);
	// 	} catch (error) {
	// 		console.log('some error occured', error);
	// 	}

	// 	onClose();
	// };

	// const failure = (response) => {
	// 	toast({
	// 		title: 'Error',
	// 		description: 'Something went wrong, Please try again later.',
	// 		status: 'error',
	// 		duration: 6000,
	// 		isClosable: true,
	// 	});
	// };

	const handleSignupRequest = async () => {
		setLoading(true);
		if (name !== '' && (email !== '') & (password !== '')) {
			try {
				const response = await SignupApi(name, password, email);

				if (
					response.data.message ===
					'Register Success!Please activate your email to start.'
				) {
					setMailsend(true);
				}
				setLoading(false);
			} catch (error) {
				console.log('error is : ', error);
				setLoading(false);
			}
		} else {
			if (name === '') {
				setCheckName(true);
			}
			if (email === '') {
				setCheckEmail(true);
			}
			if (password === '') {
				setCheckPassword(true);
			}
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} size='full'>
			<ModalOverlay />
			<ModalContent bg='transparent' position={'relative'}>
				<Box
					w='500px'
					h='fit-content'
					bg='#222222'
					position={'absolute'}
					top='50%'
					left='50%'
					transform={'translate(-50%,-50%)'}
					borderRadius='lg'
					display={'flex'}
					flexDir='column'
					alignItems={'center'}
					pb='30px'
					pt='20px'
				>
					<>
						<Box
							position={'absolute'}
							right='20px'
							top='10px'
							display={'inline-block'}
						>
							<CloseIcon
								cursor={'pointer'}
								onClick={() => {
									onClose();
									setOpen(false);
								}}
							/>
						</Box>
						<Text fontSize={30} textAlign='center'>
							Signup
						</Text>
						<Box
							display={'flex'}
							flexDirection='column'
							w='80%'
							pb='30px'
							gap={3}
							pt='20px'
						>
							{mailsend ? (
								<Text
									bg='rgba(255,255,0,0.2)'
									borderRadius={'10px'}
									color='rgba(255,255,255,.8)'
									px='10px'
									py='5px'
								>
									You need to confirm your account. We have
									sent you an activation link. please check
									you email.
								</Text>
							) : (
								<></>
							)}
							<Input
								isInvalid={checkName}
								type={'text'}
								placeholder='Name'
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
							<Input
								isInvalid={checkEmail}
								type={'email'}
								placeholder='Email'
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
							<Input
								isInvalid={checkPassword}
								type={'password'}
								placeholder='Password'
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
							<Button
								bg='#32BAC9'
								_hover={{ backgroundColor: '#32BAC9' }}
								onClick={handleSignupRequest}
								isLoading={loading}
							>
								Signup
							</Button>
						</Box>
						<Box
							w='70%'
							h='2px'
							bg='rgba(255,255,255,.2)'
							mb='30px'
							position={'relative'}
							_after={{
								content: '"or"',
								display: 'inline-block',
								position: 'absolute',
								top: '0',
								left: '50%',
								transform: 'translateY(-50%) translateX(-50%)',
								background: '#222',
								paddingLeft: '5px',
								paddingRight: '5px',
								textAlign: 'center',
							}}
						></Box>
						<Box ref={gSigupButton}></Box>
					</>
				</Box>
			</ModalContent>
		</Modal>
	);
};
export default SignupModal;
