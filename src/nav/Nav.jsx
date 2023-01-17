import {
	Box,
	Image,
	Icon,
	useDisclosure,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo/mainlogo.svg';
import { BsPersonCircle } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import LoginModal from './LoginModal';
import React, { useEffect, useRef, useState } from 'react';
import SignupModal from './SignupModal';
import { AccessLoginContext } from '../context/LoginContext';
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
	}, []);

	const handleLoignClick = () => {
		setOpen((prev) => true);
		onClose();
	};

	const handleSignupClick = () => {
		setSignupOpen(true);
	};

	const { loginState } = AccessLoginContext();

	// this will logout the user
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
				justifyContent={{ base: 'center', lg: 'space-between' }}
				alignItems='center'
				pl={{ base: 0, lg: 10 }}
				pr={{ base: 5, lg: 10 }}
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
				<Box flexGrow={{ base: '1', lg: 1 }}>
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
					display={{ base: 'flex', lg: 'flex' }}
					justifyContent='space-between'
					// w={'20vw'}
					textTransform='uppercase'
					alignItems={'end'}
					// mr={'50px'}
					fontWeight={700}
				>
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
							<MenuList
								bg='#FFFDF7'
								border='none'
								color='#696969'
							>
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
											<MenuItem onClick={timeToLogout}>
												Logout
											</MenuItem>
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
			</Box>
		</>
	);
};
export default React.memo(Nav);
