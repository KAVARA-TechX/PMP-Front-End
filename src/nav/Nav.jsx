import { Box, Text, Button, Image } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo/logo.png';
const Nav = () => {
	const path = useLocation().pathname.split('/')[1];

	const navigate = useNavigate();
	return (
		<>
			<Box
				w='100vw'
				h='80px'
				display={'flex'}
				alignItems='center'
				pl={10}
				pr={10}
				bg={path === '' ? 'transperant' : '#DBDBDB'}
			>
				{/* logo */}
				<Box flexGrow={2}>
					<Image src={logo} h='100px' />
				</Box>
				{/* options */}
				<Box
					display={'flex'}
					justifyContent='space-between'
					w={'11vw'}
					textTransform='uppercase'
					mr={'50px'}
					fontWeight={700}
				>
					<Text
						cursor={'pointer'}
						color={path === '' ? '#32BAC9' : 'black'}
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
						color={path === 'blogs' ? '#32BAC9' : 'black'}
						borderBottom={
							path === 'blogs' ? '1px solid #32bac9' : 'none'
						}
						onClick={() => {
							navigate('/blogs');
						}}
					>
						Blogs
					</Text>
				</Box>
				<Button
					bg='#32BAC9'
					_hover={{ backgroundColor: '#32bac9' }}
					color='white'
				>
					Login
				</Button>
			</Box>
		</>
	);
};
export default Nav;
