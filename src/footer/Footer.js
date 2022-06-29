import {
	Box,
	Icon,
	Text,
	Image,
	InputGroup,
	Input,
	InputRightElement,
	Button,
} from '@chakra-ui/react';
import {
	FaFacebookF,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
	FaInstagram,
} from 'react-icons/fa';
import instagram from './instagram.png';
import cftlogo from '../assets/logo.png';
import footer from '../assets/footer4.jpg';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import TravelAgentModal from './TravelAgentModal';
import { useState } from 'react';
import BrandsModal from './BrandsModal';
import logo from '../assets/logo/logo.png';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
	const navigate = useNavigate();
	const [travelagent, setTravelAgent] = useState(false);
	const [brands, setBrands] = useState(false);

	const handleEmailSubmit = () => {};

	return (
		<>
			<TravelAgentModal state={travelagent} setState={setTravelAgent} />
			<BrandsModal state={brands} setState={setBrands} />
			<Box
				h={{ base: 'fit-content', lg: '440px' }}
				w='100vw'
				overflow={'hidden'}
				className='hide-scroll-bar'
				bg='#082032'
				display={'grid'}
				gridTemplateColumns={{ base: '1fr', lg: '.7fr 1.3fr .7fr' }}
				gap={{ base: '20px', lg: '0' }}
				py='30px'
				px='5vw'
				//
			>
				<Box pl='20px' display={'flex'} flexDir='column'>
					<Box h='100px'>
						<Image src={logo} h='100%' />
					</Box>
					<Text mb='10px'>Leisure away with Plan My Leisure</Text>
					<Box
						display={'flex'}
						alignItems='flex-start'
						gap='5px'
						mt='10px'
					>
						<Icon as={HiLocationMarker} />
						<Box position='relative' bottom='5px'>
							<Text fontSize={'14px'}>
								B-5, 1st Floor, Sayba Shopping Center,
								<br />
								Newmill Road, Kurla West, Mumbai,
								<br /> 400070, India
							</Text>
						</Box>
					</Box>
					<Box
						display={'flex'}
						alignItems='flex-start'
						gap='5px'
						mt='10px'
					>
						<Icon as={HiLocationMarker} />
						<Box position='relative' bottom='5px'>
							<Text fontSize={'14px'}>
								4th Floor, Plaza Mall, MG Road, Gurgaon,
								Haryana, 122002, India
							</Text>
						</Box>
					</Box>
					<Box
						display={'flex'}
						alignItems='flex-start'
						gap='5px'
						mt='10px'
					>
						<Icon as={MdEmail} />
						<Text
							position='relative'
							bottom='5px'
							fontSize={'14px'}
						>
							<a href='mailto:info@planmyleisure.com'>
								info@planmyleisure.com
							</a>
							<br />
							<a href='mailto:planmyleisure@gmail.com'>
								planmyleisure@gmail.com
							</a>
						</Text>
					</Box>
					<Box flexGrow={1}></Box>
					<Text pt='20px'>© Plan My Leisure 2020</Text>
				</Box>
				<Box display={'flex'} justifyContent='space-around' pt='30px'>
					<Box>
						<Text fontSize='24px' fontWeight={600}>
							About
						</Text>
						<Box
							display={'flex'}
							flexDir='column'
							gap='5px'
							mt='8px'
						>
							<Text
								cursor={'pointer'}
								onClick={() => {
									navigate('/about-us');
								}}
							>
								About us
							</Text>
							<Text
								onClick={() => {
									setTravelAgent(true);
								}}
								cursor={'pointer'}
							>
								For Travel Agents
							</Text>
							<Text
								onClick={() => {
									setBrands(true);
								}}
								cursor={'pointer'}
							>
								For Brands
							</Text>
							<Text>Blog</Text>
							<Text>Careers</Text>
						</Box>
					</Box>
					<Box>
						<Text fontSize='24px' fontWeight={600}>
							Support
						</Text>
						<Box
							display={'flex'}
							flexDir='column'
							gap='5px'
							mt='8px'
						>
							<Text
								onClick={() => {
									navigate('/faq');
								}}
								cursor='pointer'
							>
								FAQs
							</Text>
							<Text
								onClick={() => {
									navigate('/privacy-policy');
								}}
								cursor='pointer'
							>
								Privacy Policy
							</Text>
							<Text
								cursor='pointer'
								onClick={() => {
									navigate('/cancellation');
								}}
							>
								Cancellation & Refund Policy
							</Text>
							<Text
								onClick={() => {
									navigate('/terms-and-conditions');
								}}
								cursor='pointer'
							>
								Terms & Conditions
							</Text>
							<Text>Contact Us</Text>
						</Box>
					</Box>
				</Box>
				<Box pl='20px' pr='20px'>
					{/* <Text fontWeight={700} fontSize='28px' mb='10px'>
						Subscribe to hear news
					</Text>
					<InputGroup w={{ base: '90%', lg: '70%' }} size={'lg'}>
						<Input
							bg='white'
							pr='50px'
							h='60px'
							type='email'
							placeholder='Email address'
							borderRadius={'18px'}
							color='#000'
						/>
						<InputRightElement width='100px' h='50px'>
							<Button
								mt='10px'
								h='100%'
								w='100%'
								px={'10px'}
								onClick={handleEmailSubmit}
								bg='#0E87F6'
								position={'relative'}
								right='5px'
								borderRadius={'18px'}
								_hover={{
									background: '#0E87F6',
								}}
							>
								Send
							</Button>
						</InputRightElement>
					</InputGroup> */}
					<Box display={'flex'} mt='30px' gap='30px'>
						<Box
							as='a'
							href='https://www.facebook.com/Plan-My-Leisure-101398345900413'
							w='20px'
							h='20px'
							borderRadius={'5px'}
							display={'flex'}
							justifyContent='center'
							alignItems={'center'}
							p={5}
							className='hide-scroll-bar facebook'
							border='1px solid rgba(255,255,255,.2)'
						>
							<Icon as={FaFacebookF} color='rgb(255,255,255)' />
						</Box>
						<Box
							as='a'
							h='fit-content'
							href='https://www.instagram.com/planmyleisure/'
							borderRadius={'5px'}
							display={'flex'}
							justifyContent='center'
							alignItems={'center'}
							className='hide-scroll-bar instagram'
							p={'11px'}
							border='1px solid rgba(255,255,255,.2)'
						>
							<Icon as={FaInstagram} color='rgb(255,255,255)' />
							{/* <Image
								h='20px'
								w='20px'
								src={instagram}
								className='ilogo'
							/> */}
						</Box>
						<Box
							as='a'
							href='https://www.linkedin.com/company/planmyleisure/'
							w='20px'
							h='20px'
							borderRadius={'5px'}
							display={'flex'}
							justifyContent='center'
							alignItems={'center'}
							className='hide-scroll-bar linkedin'
							p={5}
							border='1px solid rgba(255,255,255,.2)'
						>
							<Icon as={FaLinkedinIn} color='rgb(255,255,255)' />
						</Box>
						<Box
							as='a'
							href='https://twitter.com/PlanMyLeisure'
							w='20px'
							h='20px'
							borderRadius={'5px'}
							display={'flex'}
							justifyContent='center'
							alignItems={'center'}
							p={5}
							className='hide-scroll-bar twitter'
							border='1px solid rgba(255,255,255,.2)'
						>
							<Icon as={FaTwitter} color='rgb(255,255,255)' />
						</Box>
						<Box
							as='a'
							href='https://www.youtube.com/channel/UCNrQbWSzaU5qAUxOqYEHf6A'
							w='20px'
							h='20px'
							borderRadius={'5px'}
							display={'flex'}
							justifyContent='center'
							alignItems={'center'}
							p={5}
							className='hide-scroll-bar youtube'
							border='1px solid rgba(255,255,255,.2)'
						>
							<Icon as={FaYoutube} color='rgb(255,255,255)' />
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);

	// return (
	// 	<>
	// 		<TravelAgentModal state={travelagent} setState={setTravelAgent} />
	// 		<BrandsModal state={brands} setState={setBrands} />
	// 		<Box
	// 			bgImage={footer}
	// 			bgSize='cover'
	// 			bgPos={'0 25%'}
	// 			h='fit-content'
	// 			w='100vw'
	// 			position='relative'
	// 			mt={40}
	// 			className='hide-scroll-bar'
	// 		>
	// 			<Box
	// 				w={'90vw'}
	// 				position='relative'
	// 				left={'50%'}
	// 				transform='translateX(-50%)'
	// 				top='-100px'
	// 				className='hide-scroll-bar'
	// 			>
	// 				<Box
	// 					w='100%'
	// 					bg='#222222'
	// 					py={5}
	// 					borderRadius={'2xl'}
	// 					boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px;'
	// 					display={'grid'}
	// 					gap={5}
	// 					gridTemplateColumns={{
	// 						base: '1fr',
	// 						lg: 'repeat(3,1fr)',
	// 					}}
	// 					overflowY='scroll'
	// 					className='hide-scroll-bar'
	// 				>
	// 					<Box
	// 						h='100%'
	// 						display={'flex'}
	// 						justifyContent='center'
	// 						textAlign={{ base: 'center', lg: 'start' }}
	// 						className='hide-scroll-bar'
	// 					>
	// 						<Box
	// 							mt={5}
	// 							w='100%'
	// 							h='100%'
	// 							p={3}
	// 							px={{ lg: 20 }}
	// 							className='hide-scroll-bar'
	// 						>
	// 							<Text
	// 								fontSize={17}
	// 								fontWeight={400}
	// 								mb='5px'
	// 								cursor={'pointer'}
	// 								onClick={() => {
	// 									navigate('/about-us');
	// 								}}
	// 							>
	// 								About Us
	// 							</Text>
	// 							<Text fontSize={17} fontWeight={400} mb='5px'>
	// 								Blogs
	// 							</Text>
	// 							<Text fontSize={17} fontWeight={400} mb='5px'>
	// 								Testimonials
	// 							</Text>
	// 							<Text
	// 								fontSize={17}
	// 								fontWeight={400}
	// 								mb='5px'
	// 								onClick={() => {
	// 									navigate('/cancellation');
	// 								}}
	// 								cursor='pointer'
	// 							>
	// 								Cancellation Policy
	// 							</Text>
	// 							<Text
	// 								fontSize={17}
	// 								fontWeight={400}
	// 								mb='5px'
	// 								onClick={() => {
	// 									navigate('/privacy-policy');
	// 								}}
	// 								cursor='pointer'
	// 							>
	// 								Privacy Policy
	// 							</Text>
	// 							<Text
	// 								fontSize={17}
	// 								fontWeight={400}
	// 								mb='5px'
	// 								onClick={() => {
	// 									navigate('/faq');
	// 								}}
	// 								cursor='pointer'
	// 							>
	// 								FAQ
	// 							</Text>
	// 							<Text
	// 								fontSize={17}
	// 								fontWeight={400}
	// 								onClick={() => {
	// 									navigate('/terms-and-conditions');
	// 								}}
	// 								cursor='pointer'
	// 							>
	// 								T&C
	// 							</Text>
	// 						</Box>
	// 					</Box>
	// 					<Box
	// 						h='100%'
	// 						display={'flex'}
	// 						justifyContent='center'
	// 						textAlign={{ base: 'center', lg: 'start' }}
	// 						className='hide-scroll-bar'
	// 					>
	// 						<Box
	// 							mt={5}
	// 							w='100%'
	// 							h='100%'
	// 							p={3}
	// 							px={{ lg: 20 }}
	// 							className='hide-scroll-bar'
	// 						>
	// 							<Text fontSize={17} fontWeight={400} mb='5px'>
	// 								Contact Us
	// 							</Text>
	// 							<Text
	// 								fontSize={17}
	// 								fontWeight={400}
	// 								mb='5px'
	// 								onClick={() => {
	// 									setTravelAgent(true);
	// 								}}
	// 								cursor={'pointer'}
	// 							>
	// 								For Travel Agents
	// 							</Text>
	// 							<Text
	// 								fontSize={17}
	// 								fontWeight={400}
	// 								mb='5px'
	// 								onClick={() => {
	// 									setBrands(true);
	// 								}}
	// 								cursor={'pointer'}
	// 							>
	// 								For Brands
	// 							</Text>
	// 						</Box>
	// 					</Box>
	// 					<Box
	// 						h='100%'
	// 						display={'flex'}
	// 						flexDir='column'
	// 						justifyContent='center'
	// 						textAlign={{ base: 'center', lg: 'start' }}
	// 						className='hide-scroll-bar'
	// 						alignItems={'center'}
	// 					>
	// 						<Box
	// 							mt={5}
	// 							w='100%'
	// 							h='100%'
	// 							p={3}
	// 							mx={{ base: 'auto', lg: 'none' }}
	// 							display={'grid'}
	// 							gridTemplateColumns={{
	// 								base: 'repeat(5, 1fr)',
	// 								lg: 'repeat( 3, 1fr)',
	// 							}}
	// 							className='hide-scroll-bar'
	// 							gap={{ base: 1, lg: 1 }}
	// 						>
	// 							<Box
	// 								as='a'
	// 								href='https://www.facebook.com/Plan-My-Leisure-101398345900413'
	// 								w='20px'
	// 								h='20px'
	// 								borderRadius={'full'}
	// 								bg='#32BAC9'
	// 								display={'flex'}
	// 								justifyContent='center'
	// 								alignItems={'center'}
	// 								p={5}
	// 								className='hide-scroll-bar facebook'
	// 								mx='auto'
	// 							>
	// 								<Icon
	// 									as={FaFacebookF}
	// 									color='rgb(51,55,64)'
	// 								/>
	// 							</Box>
	// 							<Box
	// 								as='a'
	// 								h='fit-content'
	// 								href='https://www.instagram.com/planmyleisure/'
	// 								borderRadius={'full'}
	// 								bg='#32BAC9'
	// 								display={'flex'}
	// 								justifyContent='center'
	// 								alignItems={'center'}
	// 								className='hide-scroll-bar instagram'
	// 								mx='auto'
	// 								p={'11px'}
	// 							>
	// 								{/* <Icon as={FaInstagram} color='rgb(51,55,64)' /> */}
	// 								<Image
	// 									h='20px'
	// 									w='20px'
	// 									src={instagram}
	// 									className='ilogo'
	// 								/>
	// 							</Box>
	// 							<Box
	// 								as='a'
	// 								href='https://www.linkedin.com/company/planmyleisure/'
	// 								w='20px'
	// 								h='20px'
	// 								borderRadius={'full'}
	// 								bg='#32BAC9'
	// 								display={'flex'}
	// 								justifyContent='center'
	// 								alignItems={'center'}
	// 								className='hide-scroll-bar linkedin'
	// 								p={5}
	// 								mx='auto'
	// 							>
	// 								<Icon
	// 									as={FaLinkedinIn}
	// 									color='rgb(51,55,64)'
	// 								/>
	// 							</Box>
	// 							<Box
	// 								as='a'
	// 								href='https://twitter.com/PlanMyLeisure'
	// 								w='20px'
	// 								h='20px'
	// 								borderRadius={'full'}
	// 								bg='#32BAC9'
	// 								display={'flex'}
	// 								justifyContent='center'
	// 								alignItems={'center'}
	// 								p={5}
	// 								mx='auto'
	// 								className='hide-scroll-bar twitter'
	// 							>
	// 								<Icon
	// 									as={FaTwitter}
	// 									color='rgb(51,55,64)'
	// 								/>
	// 							</Box>
	// 							<Box
	// 								as='a'
	// 								href='https://www.youtube.com/channel/UCNrQbWSzaU5qAUxOqYEHf6A'
	// 								w='20px'
	// 								h='20px'
	// 								borderRadius={'full'}
	// 								bg='#32BAC9'
	// 								display={'flex'}
	// 								justifyContent='center'
	// 								alignItems={'center'}
	// 								p={5}
	// 								className='hide-scroll-bar youtube'
	// 								mx='auto'
	// 							>
	// 								<Icon
	// 									as={FaYoutube}
	// 									color='rgb(51,55,64)'
	// 								/>
	// 							</Box>
	// 						</Box>
	// 					</Box>
	// 				</Box>
	// 			</Box>
	// 			<Text
	// 				display={'inline-block'}
	// 				position='absolute'
	// 				as='a'
	// 				color='white'
	// 				href='https://bit.ly/38wyHtX'
	// 				textAlign={'center'}
	// 				bottom='20px'
	// 				left='50%'
	// 				transform={'translateX(-50%)'}
	// 			>
	// 				© Plan My Leisure 2020
	// 			</Text>
	// 			<Box
	// 				as='a'
	// 				display={'inline-block'}
	// 				float='left'
	// 				position={'absolute'}
	// 				bottom='20px'
	// 				right={'5vw'}
	// 				href='https://bit.ly/38wyHtX'
	// 			>
	// 				<Image src={cftlogo} h={'40px'} />
	// 			</Box>
	// 		</Box>
	// 	</>
	// );
};

export default Footer;
