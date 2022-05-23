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
	Badge,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from 'react-google-login';
import { AccessLoginContext } from '../context/LoginContext';
import SignupApi from '../apis/SignupApi';

const SignupModal = ({ open, setOpen }) => {
	const { isOpen, onOpen, onClose } = useDisclosure(open);
	const { setLoginState, setToken, setUsed } = AccessLoginContext();
	const [name, setName] = useState('');
	const [checkName, setCheckName] = useState(false);
	const [email, setEmail] = useState('');
	const [checkEmail, setCheckEmail] = useState(false);
	const [password, setPassword] = useState('');
	const [checkPassword, setCheckPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [mailsend, setMailsend] = useState(false);
	const toast = useToast();

	useEffect(() => {
		if (open) {
			onOpen();
		}
	});

	const success = (response) => {
		console.log(response);
		setLoginState(true);
		setToken(response.accessToken);
		setUsed('google');
		setOpen(false);
		onClose();
	};

	const failure = (response) => {
		console.log(response);
		toast({
			title: 'Error',
			description: 'Something went wrong, Please try again later.',
			status: 'error',
			duration: 6000,
			isClosable: true,
		});
	};

	const handleSignupRequest = async () => {
		setLoading(true);
		if (name !== '' && (email !== '') & (password !== '')) {
			try {
				const response = await SignupApi(name, password, email);
				console.log(response);
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
						<GoogleLogin
							clientId='578238801386-o3n24ar3oogm9bknj2lo9vpmj4c77heb.apps.googleusercontent.com'
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
							buttonText='Login'
							onSuccess={success}
							onFailure={failure}
							cookiePolicy={'single_host_origin'}
						/>
					</>
				</Box>
			</ModalContent>
		</Modal>
	);
};
export default SignupModal;
