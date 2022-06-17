import {
	Box,
	Text,
	Button,
	Image,
	Icon,
	Drawer,
	useDisclosure,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import logo from '../assets/logo/logo.png';
import { BsPersonCircle } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import LoginModal from './LoginModal';
import { useEffect, useRef, useState } from 'react';
import SignupModal from './SignupModal';
import { AccessLoginContext } from '../context/LoginContext';
import { GoogleLogout } from 'react-google-login';
import LogoutApi from '../apis/LogoutApi';

const Nav = () => {
	const path = useLocation().pathname.split('/')[1];
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [open, setOpen] = useState(false);
	const [signupOpen, setSignupOpen] = useState(false);
	const { used, setLoginclick, profileurl } = AccessLoginContext();
	const lgclick = useRef();

	const navigate = useNavigate();

	useEffect(() => {
		setLoginclick(lgclick.current);
	});

	const handleLoignClick = () => {
		setOpen(true);
	};

	const handleSignupClick = () => {
		setSignupOpen(true);
	};

	const { loginState } = AccessLoginContext();

	// this will logout the use
	const timeToLogout = () => {
		window.localStorage.clear();
		document.location.reload();
	};

	const handleEmailLogout = async () => {
		try {
			const response = await LogoutApi();
			if (response.status === 200) {
				timeToLogout();
			}
		} catch (error) {
			console.log(error);
			timeToLogout();
		}
	};

	return (
		<>
			<LoginModal open={open} setOpen={setOpen} />
			<SignupModal open={signupOpen} setOpen={setSignupOpen} />
			<Box
				w='100vw'
				h='80px'
				display={'flex'}
				justifyContent={{ base: 'center', lg: 'none' }}
				alignItems='center'
				pl={10}
				pr={10}
				bg={
					path === '' ||
					path === 'about-package' ||
					path === 'packages'
						? 'transperant'
						: '#222222'
				}
				overflow={'hidden'}
			>
				{/* logo */}
				<Box flexGrow={{ base: 'none', lg: 2 }}>
					<Image
						src={logo}
						h='100px'
						cursor={'pointer'}
						onClick={() => {
							navigate('/');
						}}
					/>
				</Box>
				{/* options */}
				<Box
					display={{ base: 'none', lg: 'flex' }}
					justifyContent='space-between'
					w={'20vw'}
					textTransform='uppercase'
					alignItems={'end'}
					mr={'50px'}
					fontWeight={700}
				>
					<Text
						cursor={'pointer'}
						color={path === '' ? '#32BAC9' : '#f5f5f5'}
						borderBottom={
							path === '' ? '1px solid #32bac9' : 'none'
						}
						onClick={() => {
							navigate('/');
						}}
					>
						{/* Home */}
					</Text>
					<Text
						cursor={'pointer'}
						color={path === 'blogs' ? '#32BAC9' : '#f5f5f5'}
						borderBottom={
							path === 'blogs' ? '1px solid #32bac9' : 'none'
						}
						onClick={() => {
							navigate('/blogs');
						}}
					>
						{/* Blogs */}
					</Text>
					<Box>
						<Menu>
							<MenuButton>
								<Box
									bg='rgba(0,0,0,.5)'
									// bg='#222222'
									_hover={{
										backgroundColor: 'rgba(0,0,0,.5)',
									}}
									color='white'
									borderRadius={'full'}
									display='flex'
									boxShadow='xl'
									alignItems={'center'}
									gap={3}
									px={'10px'}
									py={'7px'}
								>
									<Icon
										as={GiHamburgerMenu}
										fontSize={20}
										color='gray.400'
									/>
									{!loginState ? (
										<Icon
											as={BsPersonCircle}
											fontSize={30}
											color='whiteAlpha.900'
										/>
									) : (
										<Box
											bgImg={profileurl}
											bgSize='cover'
											borderRadius={'full'}
											overflow='hidden'
											height='30px'
											width={'30px'}
										/>
									)}
								</Box>
							</MenuButton>
							<MenuList bg='#222222' border='none'>
								{loginState ? (
									<>
										<MenuItem
											_focus={{ bg: 'rgba(0,0,0,.3)' }}
											onClick={() => {
												navigate('/mybookings');
											}}
										>
											My Bookings
										</MenuItem>
										<MenuItem
											_focus={{ bg: 'rgba(0,0,0,.3)' }}
											onClick={() => {
												navigate('/profile');
											}}
										>
											Account
										</MenuItem>
										{used === 'google' ? (
											<GoogleLogout
												clientId='578238801386-o3n24ar3oogm9bknj2lo9vpmj4c77heb.apps.googleusercontent.com'
												render={(renderProps) => (
													<MenuItem
														_focus={{
															bg: 'rgba(0,0,0,.3)',
														}}
														onClick={
															renderProps.onClick
														}
													>
														Logout
													</MenuItem>
												)}
												buttonText='Logout'
												onLogoutSuccess={timeToLogout}
											></GoogleLogout>
										) : (
											<MenuItem
												_focus={{
													bg: 'rgba(0,0,0,.3)',
												}}
												onClick={() => {
													handleEmailLogout();
												}}
											>
												Logout
											</MenuItem>
										)}
										{/* <MenuItem
											_focus={{ bg: 'rgba(0,0,0,.3)' }}
										>
											Logout
										</MenuItem> */}
									</>
								) : (
									<>
										<MenuItem
											_focus={{ bg: 'rgba(0,0,0,.3)' }}
											onClick={handleLoignClick}
											ref={lgclick}
										>
											Login
										</MenuItem>

										<MenuItem
											_focus={{ bg: 'rgba(0,0,0,.3)' }}
											onClick={handleSignupClick}
										>
											SignUp
										</MenuItem>
									</>
								)}
							</MenuList>
						</Menu>
					</Box>
				</Box>
				<Box
					position={'absolute'}
					display={{ base: 'inline-block', lg: 'none' }}
					top={'20px'}
					right={'10px'}
				>
					<Button
						bg='transperant'
						_active={{ backgroundColor: 'transparent' }}
						_hover={{ backgroundColor: 'transparent' }}
						onClick={() => {
							onOpen();
						}}
					>
						<Icon as={FiMenu} color='white' fontSize={35} />
					</Button>
					<Drawer onClose={onClose} isOpen={isOpen} size={'full'}>
						<DrawerOverlay zIndex={100000000}>
							<DrawerContent bg='black'>
								<DrawerCloseButton />
								<DrawerHeader>
									<Image src={logo} h={'100px'} />
								</DrawerHeader>
								<DrawerBody
									display={'flex'}
									flexDir={'column'}
									alignItems='center'
									gap={5}
								>
									<Text
										display={'inline-block'}
										cursor={'pointer'}
										color={
											path === '' ? '#32BAC9' : '#f5f5f5'
										}
										borderBottom={
											path === ''
												? '1px solid #32bac9'
												: 'none'
										}
										onClick={() => {
											navigate('/');
										}}
										fontSize={40}
									>
										Home
									</Text>
									<Box>
										<Text
											cursor={'pointer'}
											color={
												path === 'blogs'
													? '#32BAC9'
													: '#f5f5f5'
											}
											borderBottom={
												path === 'blogs'
													? '1px solid #32bac9'
													: 'none'
											}
											onClick={() => {
												navigate('/blogs');
											}}
											fontSize={40}
											flexGrow={2}
										>
											Blogs
										</Text>
									</Box>
									<Button
										bg='#32BAC9'
										_hover={{ backgroundColor: '#32bac9' }}
										color='white'
										mt={'100px'}
										fontSize={20}
										onClick={handleLoignClick}
									>
										Login
									</Button>
								</DrawerBody>
							</DrawerContent>
						</DrawerOverlay>
					</Drawer>
				</Box>
			</Box>
		</>
	);
};
export default Nav;
