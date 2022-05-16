import { EmailIcon, StarIcon } from '@chakra-ui/icons';
import { Box, Text, Icon } from '@chakra-ui/react';
import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineStar } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoWhatsapp } from 'react-icons/io';
import img from '../../assets/thingsToDo/dream-vacation.png';
import Nav from '../../nav/Nav';
import './AboutPackage.css';
import Footer from '../../footer/Footer';

const AboutPackage = () => {
	return (
		<>
			<Box
				h='500px'
				bgImage={img}
				bgSize='cover'
				position={'relative'}
				boxShadow='rgba(0, 0, 0, .9) 0px -50px 36px -28px inset'
			>
				<Nav />
				<Box position={'absolute'} bottom={0} left='5vw'>
					<Text fontSize={30} fontWeight={700}>
						Package One
					</Text>
					<Text display='flex' mb='10px' gap={3}>
						<Box display={'inline-flex'} alignItems='center'>
							<StarIcon color='gold' />
							<StarIcon color='gold' />
							<StarIcon color='gold' />
							<Icon
								as={AiOutlineStar}
								color='gold'
								fontSize={20}
							/>
							<Icon
								as={AiOutlineStar}
								color='gold'
								fontSize={20}
							/>
						</Box>
						<Box display={'inline-flex'} alignItems='start'>
							<Icon
								as={MdLocationOn}
								color='white'
								fontSize={20}
								p={0}
							/>
							<Text display={'inline-block'}>
								Somewhere . 40m from airport
							</Text>
						</Box>
					</Text>
				</Box>
				<Box
					position={'absolute'}
					bg='black'
					bottom={0}
					right={{ lg: '10vw' }}
					display={{ base: 'none', lg: 'flex' }}
					borderRadius='5px 5px 0 0'
				>
					<Box
						px={{ base: '10px', lg: '20px' }}
						py='25px'
						fontSize={{ base: 10, lg: 20 }}
						display='flex'
						alignItems={'center'}
						gap={3}
					>
						<Icon as={FcGoogle} fontSize={20} /> 4.5/5
					</Box>
					<Box
						px='20px'
						py='25px'
						fontSize={10}
						display='flex'
						alignItems={'center'}
						gap={3}
					>
						<Icon as={FaTripadvisor} fontSize={20} /> on Tripadvisor
					</Box>
				</Box>
			</Box>
			<Box w='100vw' minH='100vh' position={'relative'}>
				<Box
					position={{ base: 'none', lg: 'absolute' }}
					w={{ base: '90vw', lg: '400px' }}
					mx='auto'
					h='fit-content'
					bg='white'
					right={'100px'}
					top={'0px'}
					borderRadius='xl'
					pt='20px'
					px='15px'
					pb='30px'
					mt={'30px'}
				>
					<Box
						display={'flex'}
						justifyContent='space-between'
						alignItems='center'
					>
						<Text color='black' fontSize={30}>
							<Text fontSize={20} textDecor='line-through'>
								₹74,000
							</Text>
							₹64,000
							<Text fontSize={15} color='green' fontWeight={600}>
								Total Savings: ₹10,000
							</Text>
						</Text>
						<Box color='white'>
							<Box
								bg='#32BAC9'
								px='35px'
								py='20px'
								fontSize={20}
								borderRadius='xl'
								textAlign={'center'}
								mx={'30px'}
							>
								Book Now
							</Box>
						</Box>
					</Box>
					<Box
						mt='50px'
						display={'flex'}
						justifyContent='space-between'
						alignItems={'center'}
						px='30px'
					>
						<Box color={'black'}>
							<Text>Check-in :</Text>
							<Text fontSize={20} fontWeight={700}>
								Tue, 17 May
							</Text>
						</Box>
						<Box color='black'>
							<Text>Check-out :</Text>
							<Text fontSize={20} fontWeight={700}>
								Tue, 17 May
							</Text>
						</Box>
					</Box>
					<Box display={'flex'} justifyContent='center' mt='50px'>
						<Box
							w='90%'
							bg='green.300'
							textAlign={'center'}
							display='flex'
							alignItems={'center'}
							gap={3}
							px='10px'
							py='15px'
							borderRadius={'md'}
							justifyContent='center'
						>
							<Icon as={IoLogoWhatsapp} color='green' />{' '}
							<Text color='green'>Contact us on Whatsapp</Text>
						</Box>
					</Box>
					<Box display={'flex'} mt='50px' color={'black'}>
						<Box
							display={'flex'}
							alignItems='center'
							gap='10px'
							flexGrow={1}
							justifyContent='center'
						>
							<EmailIcon />
							<Text>Mail this Quote</Text>
						</Box>
						<Box
							display={'flex'}
							alignItems='center'
							gap='10px'
							flexGrow={1}
							justifyContent='center'
						>
							<Icon as={GiCancel} />
							<Text>cancelation policy</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Footer />
		</>
	);
};

export default AboutPackage;
