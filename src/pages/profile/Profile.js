import {
	Box,
	Text,
	Input,
	RadioGroup,
	Radio,
	Button,
	Stack,
	Skeleton,
	AlertDialog,
	AlertDialogOverlay,
	AlertDialogFooter,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogHeader,
	useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import getUserinfoApi from '../../apis/getUserInfoApi';
import Footer from '../../footer/Footer';
import Nav from '../../nav/Nav';

const Profile = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [loading, setLoading] = useState(true);
	const [isEditing, setIsEditing] = useState(false);
	const [value, setValue] = useState();
	const [name, setName] = useState('');
	// const [gender, setGender] = useState('');
	// const [dob, setDob] = useState('');
	const [email, setEmail] = useState('');
	// const [phone, setPhone] = useState('');
	// const [address, setAddress] = useState('');
	const cancleRef = useRef();

	useEffect(() => {
		window.scrollTo(0, 0);

		const userDetails = async () => {
			const response = await getUserinfoApi();
			setName(response.data.name);
			setEmail(response.data.email);
			setLoading(false);
		};

		userDetails();
	}, []);

	return (
		<>
			<AlertDialog
				isOpen={isOpen}
				onClose={onClose}
				leastDestructiveRef={cancleRef}
			>
				<AlertDialogOverlay>
					<AlertDialogContent bg='#222'>
						<AlertDialogHeader fontSize={'lg'} fontWeight={'bold'}>
							Change Password
						</AlertDialogHeader>
						<AlertDialogBody>
							<Text mb='10px'>
								Enter a new password below to change your
								password.
							</Text>
							<Text>Password</Text>
							<Input type='password' mb='20px' />
							<Text>Re-enter new password</Text>
							<Input type='password' />
						</AlertDialogBody>
						<AlertDialogFooter>
							<Button
								ref={cancleRef}
								onClick={onClose}
								bg='#444'
								_hover={{ background: '#444' }}
							>
								Cancel
							</Button>
							<Button
								colorScheme='orange'
								onClick={onClose}
								ml={3}
							>
								Reset Password
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
			<Nav />

			{loading ? (
				<Box px='5vw' pt={5}>
					<Text fontSize={30} fontWeight={700} display='inline'>
						Account
					</Text>
					<Stack>
						<Skeleton height={'90px'} />
						<Skeleton height={'90px'} />
						<Skeleton height={'90px'} />
						<Skeleton height={'90px'} />
						<Skeleton height={'90px'} />
					</Stack>
				</Box>
			) : (
				<>
					<Box px='5vw'>
						<Box
							display={'flex'}
							alignItems='end'
							justifyContent={'space-between'}
							pt={5}
						>
							<Text
								fontSize={30}
								fontWeight={700}
								display='inline'
							>
								Account
							</Text>
							<Text
								fontSize={20}
								textDecoration='underline'
								cursor='pointer'
								onClick={() => {
									setIsEditing(true);
								}}
								display={isEditing ? 'none' : 'inline-block'}
							>
								Edit
							</Text>
						</Box>
						<Box>
							{/* legal name */}
							<Box
								display={'flex'}
								justifyContent='space-between'
								py='30px'
								borderBottom={'1px solid gray'}
							>
								<Box>
									<Text fontSize={20} fontWeight={600}>
										Legal name
									</Text>
									{isEditing ? (
										<Input type='text' value={name} />
									) : (
										<Text fontWeight={300}>{name}</Text>
									)}
								</Box>
							</Box>
							{/* Gender */}
							<Box
								display={'flex'}
								justifyContent='space-between'
								py='30px'
								borderBottom={'1px solid gray'}
							>
								<Box>
									<Text fontSize={20} fontWeight={600}>
										Gender
									</Text>
									{isEditing ? (
										<RadioGroup
											onChange={setValue}
											value={value}
											display='flex'
											flexDir={'column'}
										>
											<Radio value='1'>Male</Radio>
											<Radio value='2'>Female</Radio>
											<Radio value='3'>Genderqueer</Radio>
											<Radio value='4'>
												i'd prefer not to say
											</Radio>
										</RadioGroup>
									) : (
										<Text fontWeight={300}>Male</Text>
									)}
								</Box>
							</Box>
							{/* Dob */}
							<Box
								display={'flex'}
								justifyContent='space-between'
								py='30px'
								borderBottom={'1px solid gray'}
							>
								<Box>
									<Text fontSize={20} fontWeight={600}>
										Date of birth
									</Text>
									{isEditing ? (
										<Input type='date' />
									) : (
										<Text fontWeight={300}>00-00-0000</Text>
									)}
								</Box>
							</Box>
							{/* email */}
							<Box
								display={'flex'}
								justifyContent='space-between'
								py='30px'
								borderBottom={'1px solid gray'}
							>
								<Box>
									<Text fontSize={20} fontWeight={600}>
										Email
									</Text>

									{isEditing ? (
										<Input type='email' value={email} />
									) : (
										<Text fontWeight={300}>{email}</Text>
									)}
								</Box>
							</Box>
							{/* phone no. */}
							<Box
								display={'flex'}
								justifyContent='space-between'
								py='30px'
								borderBottom={'1px solid gray'}
							>
								<Box>
									<Text fontSize={20} fontWeight={600}>
										Phone no.
									</Text>
									{isEditing ? (
										<Input type='number' />
									) : (
										<Text fontWeight={300}>0000000000</Text>
									)}
								</Box>
							</Box>
							{/* Address */}
							<Box
								display={'flex'}
								justifyContent='space-between'
								py='30px'
								borderBottom={'1px solid gray'}
							>
								<Box>
									<Text fontSize={20} fontWeight={600}>
										Address
									</Text>
									{isEditing ? (
										<Input type='text' />
									) : (
										<Text fontWeight={300}>
											user address
										</Text>
									)}
								</Box>
							</Box>
							<Box
								display={isEditing ? 'none' : 'inline-block'}
								mt='50px'
								bg='rgba(255,255,255,.2)'
								px='15px'
								py='10px'
								borderRadius={'10px'}
								cursor='pointer'
								onClick={() => {
									onOpen();
								}}
							>
								Change Password
							</Box>
							<Box
								display={isEditing ? 'flex' : 'none'}
								justifyContent='center'
								gap='50px'
								pt='50px'
							>
								<Button
									colorScheme={'red'}
									onClick={() => {
										setIsEditing(false);
									}}
								>
									Cancel
								</Button>
								<Button colorScheme={'green'}>Save</Button>
							</Box>
						</Box>
					</Box>
				</>
			)}
			<Footer />
		</>
	);
};

export default Profile;
