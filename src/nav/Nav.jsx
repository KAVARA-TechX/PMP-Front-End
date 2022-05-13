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
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import logo from '../assets/logo/logo.png';
const Nav = () => {
	const path = useLocation().pathname.split('/')[1];
	const { isOpen, onOpen, onClose } = useDisclosure();

	const navigate = useNavigate();
	return (
		<>
			<Box
				w='100vw'
				h='80px'
				display={'flex'}
				justifyContent={{ base: 'center', lg: 'none' }}
				alignItems='center'
				pl={10}
				pr={10}
				bg={path === '' ? 'transperant' : '#222222'}
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
						Home
					</Text>
					{/* <Text
						cursor={'pointer'}
						color={path === 'packages' ? '#32BAC9' : 'black'}
						borderBottom={
							path === 'packages' ? '1px solid #32bac9' : 'none'
						}
						onClick={() => {
							navigate('/packages');
						}}
					>
						Packages
					</Text> */}
					{/* <Text
						cursor={'pointer'}
						color={path === 'hotels' ? '#32BAC9' : 'black'}
						borderBottom={
							path === 'hotels' ? '1px solid #32bac9' : 'none'
						}
						onClick={() => {
							navigate('/hotels');
						}}
					>
						Hotels
					</Text> */}
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
						Blogs
					</Text>
					<Button
						bg='#32BAC9'
						_hover={{ backgroundColor: '#32bac9' }}
						color='white'
					>
						Login
					</Button>
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