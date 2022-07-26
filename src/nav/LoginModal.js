import { CloseIcon } from '@chakra-ui/icons';
import {
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	Button,
	Box,
	Text,
	Input,
	useToast,
	Image,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { AccessLoginContext } from '../context/LoginContext';
import LoginApi from '../apis/LoginApi';
import googleLoginApi from '../apis/googleLoginApi';
import jwt_decode from 'jwt-decode';
import googleIcon from '../assets/logo/icons8-google.svg';

const LoginModal = ({ open, setOpen }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { setLoginState, setToken, setUsed, setProfileurl } =
		AccessLoginContext();
	const [email, setEmail] = useState('');
	const [checkEmail, setCheckEmail] = useState(false);
	const [password, setPassword] = useState('');
	const [checkPassword, setCheckPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const toast = useToast();

	const gLoginButton = useCallback((node) => {
		if (node !== null) {
			/* global google */
			google.accounts.id.initialize({
				client_id: process.env.REACT_APP_CLIENT_ID,
				callback: handleCallbackResponse,
			});

			google.accounts.id.renderButton(node, {
				theme: 'outline',
				size: 'large',
			});
		}
	}, []);

	const handleCallbackResponse = async (response) => {
		console.log('google response is : ', response);
		var userObj = jwt_decode(response.credential);
		console.log(userObj);

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
			toast({
				title: 'Error',
				description: error.response.data.msg,
				status: 'error',
				isClosable: true,
				duration: 3000,
			});
		}
	};

	if (open) {
	}

	useEffect(() => {
		if (open) {
			onOpen();
			console.log('this is running');
		}
	}, [open]);

	const handleLogin = async () => {
		if (email !== '' && password !== '') {
			setLoading(true);
			try {
				const response = await LoginApi(email, password);
				setLoginState(true);
				setToken(response.data.token);
				setUsed('email');
				setProfileurl(response.data.user.avatar);
				setOpen(false);
				onClose();
				setLoading(false);
			} catch (error) {
				setLoading(false);
				setCheckEmail(true);
				setCheckPassword(true);
			}
		} else {
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
					w={{ base: '95vw', lg: '500px' }}
					h='fit-content'
					bg='#fffdf7'
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
					px='20px'
				>
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
						Login
					</Text>
					<Box
						display={'flex'}
						flexDirection='column'
						w='80%'
						pb='30px'
						gap={3}
						pt='20px'
					>
						<Input
							type={'email'}
							placeholder='Email'
							isInvalid={checkEmail}
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<Input
							type={'password'}
							placeholder='Password'
							isInvalid={checkPassword}
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
						<Button
							bg='#141177'
							_hover={{ backgroundColor: '#141177' }}
							onClick={handleLogin}
							isLoading={loading}
							color='white'
						>
							Login
						</Button>
					</Box>
					<Box
						w='70%'
						h='2px'
						bg='#fffdf7'
						mb='30px'
						position={'relative'}
						_after={{
							content: '"or"',
							display: 'inline-block',
							position: 'absolute',
							top: '0',
							left: '50%',
							transform: 'translateY(-50%) translateX(-50%)',
							background: '#fffdf7',
							paddingLeft: '5px',
							paddingRight: '5px',
							textAlign: 'center',
						}}
					></Box>

					<Box w='100%' display={'flex'} justifyContent='center'>
						<Button
							w='80%'
							bg='white'
							p='5px'
							color='black'
							fontWeight={400}
							border='1px solid rgba(0,0,0,.1)'
							display={'flex'}
							gap='10px'
							alignItems={'center'}
							onClick={() => {
								console.log(
									document
										.getElementById('google_login_button')
										.childNodes[0].childNodes[0].childNodes[0].click()
								);
							}}
						>
							<Image h='20px' src={googleIcon} />{' '}
							<Text>Sign in with Google</Text>
						</Button>
					</Box>

					<div
						id='google_login_button'
						ref={gLoginButton}
						bg='#fffdf7'
						dataWidth='328'
					></div>
				</Box>
			</ModalContent>
		</Modal>
	);
};

export default React.memo(LoginModal);
