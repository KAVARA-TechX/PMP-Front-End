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
import { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from 'react-google-login';
import { AccessLoginContext } from '../context/LoginContext';
import LoginApi from '../apis/LoginApi';
import googleLoginApi from '../apis/googleLoginApi';

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

	useEffect(() => {
		if (open) {
			onOpen();
		}
	});

	const success = async (response) => {
		let tokenId = response.tokenId;
		try {
			const res = await googleLoginApi(tokenId);
			setLoginState(true);
			setToken(res.data.token);
			setUsed('google');
			setOpen(false);
			setProfileurl(res.data.msg.avatar);
		} catch (error) {
			console.log('some error occured', error);
		}

		onClose();
	};

	const failure = (response) => {
		toast({
			title: 'Error',
			description:
				'Please allow third party cookies to login through google.',
			status: 'warning',
			duration: 6000,
			isClosable: true,
		});
	};

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
							bg='#32BAC9'
							_hover={{ backgroundColor: '#32BAC9' }}
							onClick={handleLogin}
							isLoading={loading}
						>
							Login
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
					<GoogleLogin
						// demo
						clientId='578238801386-kf4dnau6t00190pd4pkten5ke97r5jet.apps.googleusercontent.com'
						buttonText=''
						autoLoad={false}
						cookiePolicy={'single_host_origin'}
						onSuccess={success}
						onFailure={failure}
						render={(renderProps) => (
							<Box
								width='80%'
								fontSize={20}
								fontWeight={600}
								bg='#fff'
								color='black'
								px='auto'
								display={'flex'}
								justifyContent='center'
								py='5px'
								borderRadius={'lg'}
								cursor='pointer'
							>
								<Text
									display={'inline-flex'}
									gap={5}
									alignItems='center'
									onClick={renderProps.onClick}
								>
									<Icon as={FcGoogle} />
									Continue with Google
								</Text>
							</Box>
						)}
					/>
				</Box>
			</ModalContent>
		</Modal>
	);
};

export default LoginModal;
