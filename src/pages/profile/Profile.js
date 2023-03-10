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
	Spinner,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import changePasswordApi from '../../apis/changePasswordApi';
import getUserinfoApi from '../../apis/getUserInfoApi';
import updateProfile from '../../apis/updateProfile';
import Footer from '../../footer/Footer';
import Nav from '../../nav/Nav';

const Profile = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [loading, setLoading] = useState(true);
	const [isEditing, setIsEditing] = useState(false);
	const [value, setValue] = useState();
	const [name, setName] = useState('');
	const [gender, setGender] = useState('');
	const [dob, setDob] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [hnumber, setHnumber] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [pincode, setPincode] = useState('');
	const cancleRef = useRef();
	const [avatar, setAvatar] = useState('');
	const [uLoading, setULoading] = useState(false);
	const [password, set_password] = useState('');
	const [check_p1, set_check_p1] = useState(false);
	const [reenter_password, set_reenter_password] = useState('');
	const [check_p2, set_check_p2] = useState(false);
	const [activate_reset, set_activate_reset] = useState(true);
	const [reset_loading, set_reset_Loading] = useState(false);
	const [main_loading, set_main_loading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);

		if (localStorage.getItem('token')) {
			set_main_loading(false);
		} else {
			navigate('/');
		}

		const userDetails = async () => {
			const response = await getUserinfoApi();
			console.log('response for profile : ', response);
			setName(response.data.name);
			setEmail(response.data.email);
			setGender(response.data.gender);
			setDob(response.data.dob);
			setPhone(response.data.phone);
			setHnumber(
				response.data.address === undefined
					? ''
					: response.data.address.houseNumber
			);
			setCity(
				response.data.address === undefined
					? ''
					: response.data.address.city
			);
			setState(
				response.data.address === undefined
					? ''
					: response.data.address.state
			);
			setPincode(
				response.data.address === undefined
					? ''
					: response.data.address.pincode
			);
			setAvatar(response.data.avatar);
			setLoading(false);
		};

		userDetails();
	}, []);

	const handleUpdate = async () => {
		setULoading(true);
		try {
			const res = await updateProfile(
				name,
				email,
				gender,
				dob,
				phone,
				{
					houseNumber: hnumber,
					city: city,
					state: state,
					pincode: pincode,
				},
				avatar
			);
			console.log(res);
			setULoading(false);
			setIsEditing(false);
		} catch (error) {
			console.log('error is : ', error);
			setULoading(false);
		}
	};

	const handlePasswordReset = async () => {
		if (password === reenter_password) {
			// send the password reset request
			try {
				const res = await changePasswordApi(password);
				console.log('response from the change password is : ', res);
			} catch (error) {}
		} else {
			// show the error
			set_check_p1(true);
			set_check_p2(true);
		}
	};

	useEffect(() => {
		if (password !== '' && reenter_password !== '') {
			set_activate_reset(false);
		} else {
			set_activate_reset(true);
		}
	}, [password, reenter_password]);

	return (
		<>
			{main_loading ? (
				<Box
					h='calc(100vh - 80px)'
					w='100vw'
					display={'flex'}
					justifyContent='center'
					alignItems={'center'}
				>
					<Spinner />
				</Box>
			) : (
				<>
					<AlertDialog
						isOpen={isOpen}
						onClose={onClose}
						leastDestructiveRef={cancleRef}
					>
						<AlertDialogOverlay>
							<AlertDialogContent bg='#fffdf7'>
								<AlertDialogHeader
									fontSize={'lg'}
									fontWeight={'bold'}
								>
									Change Password
								</AlertDialogHeader>
								<AlertDialogBody>
									<Text mb='10px'>
										Enter a new password below to change
										your password.
									</Text>
									<Text>Password</Text>
									<Input
										isInvalid={check_p1}
										type='password'
										mb='20px'
										value={password}
										onChange={(e) => {
											set_password(e.target.value);
										}}
									/>
									<Text>Re-enter new password</Text>
									<Input
										isInvalid={check_p2}
										type='password'
										value={reenter_password}
										onChange={(e) => {
											set_reenter_password(
												e.target.value
											);
										}}
									/>
								</AlertDialogBody>
								<AlertDialogFooter>
									<Button ref={cancleRef} onClick={onClose}>
										Cancel
									</Button>
									<Button
										colorScheme='orange'
										onClick={handlePasswordReset}
										ml={3}
										isDisabled={activate_reset}
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
							<Text
								fontSize={30}
								fontWeight={700}
								display='inline'
							>
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
							<Box px='5vw' pb='50px'>
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
										display={
											isEditing ? 'none' : 'inline-block'
										}
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
											<Text
												fontSize={20}
												fontWeight={600}
											>
												Legal name
											</Text>
											{isEditing ? (
												<Input
													type='text'
													value={name}
													onChange={(e) => {
														setName(e.target.value);
													}}
												/>
											) : (
												<Text fontWeight={300}>
													{name}
												</Text>
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
											<Text
												fontSize={20}
												fontWeight={600}
											>
												Gender
											</Text>
											{isEditing ? (
												<RadioGroup
													// onChange={setValue}
													value={value}
													display='flex'
													flexDir={'column'}
													onChange={(e) => {
														setGender(e);
													}}
												>
													<Radio value='Male'>
														Male
													</Radio>
													<Radio value='Female'>
														Female
													</Radio>
													<Radio value='Other'>
														Other
													</Radio>
													<Radio value="i'd prefer not to say">
														i'd prefer not to say
													</Radio>
												</RadioGroup>
											) : (
												<Text fontWeight={300}>
													{gender === ''
														? 'undefined'
														: gender}
												</Text>
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
											<Text
												fontSize={20}
												fontWeight={600}
											>
												Date of birth
											</Text>
											{isEditing ? (
												<Input
													value={dob}
													type='date'
													onChange={(e) => {
														setDob(e.target.value);
													}}
												/>
											) : (
												<Text fontWeight={300}>
													{dob === ''
														? 'undefined'
														: dob}
												</Text>
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
											<Text
												fontSize={20}
												fontWeight={600}
											>
												Email
											</Text>

											{isEditing ? (
												<Input
													type='email'
													value={email}
													onChange={(e) => {
														setEmail(
															e.target.value
														);
													}}
												/>
											) : (
												<Text fontWeight={300}>
													{email}
												</Text>
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
											<Text
												fontSize={20}
												fontWeight={600}
											>
												Phone no.
											</Text>
											{isEditing ? (
												<Input
													type='number'
													value={phone}
													onChange={(e) => {
														setPhone(
															e.target.value
														);
													}}
												/>
											) : (
												<Text fontWeight={300}>
													{phone === ''
														? 'undefined'
														: phone}
												</Text>
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
											<Text
												fontSize={20}
												fontWeight={600}
											>
												Address
											</Text>
											{isEditing ? (
												<Box
													pl='20px'
													display={'flex'}
													gap='20px'
												>
													<Box>
														<Text>House no.</Text>
														<Input
															type='text'
															value={hnumber}
															onChange={(e) => {
																setHnumber(
																	e.target
																		.value
																);
															}}
														/>
													</Box>
													<Box>
														<Text>City</Text>
														<Input
															type='text'
															value={city}
															onChange={(e) => {
																setCity(
																	e.target
																		.value
																);
															}}
														/>
													</Box>
													<Box>
														<Text>State</Text>
														<Input
															type='text'
															value={state}
															onChange={(e) => {
																setState(
																	e.target
																		.value
																);
															}}
														/>
													</Box>
													<Box>
														<Text>Pincode</Text>
														<Input
															type='number'
															value={pincode}
															onChange={(e) => {
																setPincode(
																	e.target
																		.value
																);
															}}
														/>
													</Box>
												</Box>
											) : (
												<Text fontWeight={300}>
													{hnumber}, {city}, {state},{' '}
													{pincode}
												</Text>
											)}
										</Box>
									</Box>
									<Box
										display={
											isEditing ? 'none' : 'inline-block'
										}
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
										<Button
											colorScheme={'green'}
											onClick={handleUpdate}
											isLoading={uLoading}
										>
											Save
										</Button>
									</Box>
								</Box>
							</Box>
						</>
					)}
					<Footer />
				</>
			)}
		</>
	);
};

export default React.memo(Profile);
