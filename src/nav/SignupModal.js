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
	Image,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { AccessLoginContext } from '../context/LoginContext';
import SignupApi from '../apis/SignupApi';
import googleLoginApi from '../apis/googleLoginApi';
import googleIcon from '../assets/logo/icons8-google.svg';

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
			setLoading(false);
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
									bg='rgba(14, 135, 246,.25)'
									borderRadius={'10px'}
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
								bg='#141177'
								_hover={{ backgroundColor: '#141177' }}
								onClick={handleSignupRequest}
								isLoading={loading}
								color='white'
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
											.getElementById(
												'google_signup_button'
											)
											.childNodes[0].childNodes[0].childNodes[0].click()
									);
								}}
							>
								<Image h='20px' src={googleIcon} />{' '}
								<Text>Sign in with Google</Text>
							</Button>
						</Box>
						<Box
							id='google_signup_button'
							display={'none'}
							ref={gSigupButton}
						></Box>
					</>
				</Box>
			</ModalContent>
		</Modal>
	);
};
export default React.memo(SignupModal);
