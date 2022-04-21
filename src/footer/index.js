import { Box, Grid, GridItem, Icon, Text } from '@chakra-ui/react';
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';
import React from 'react';
import bali from '../assets/footer/bali.jpeg';
import dubai from '../assets/footer/dubai.jpeg';
import singapore from '../assets/footer/singapore.jpeg';
import thailand from '../assets/footer/thailand.jpeg';
import andaman from '../assets/footer/andaman.jpeg';
import india from '../assets/footer/india.jpeg';
import ladakh from '../assets/footer/ladakh.jpg';
import hongkong from '../assets/footer/hongkong.jpg';
import sriLanka from '../assets/footer/sriLanka.jpg';

const Footer = () => {
	return (
		<Box
			bg='rgb(51,55,64)'
			h='500px'
			w='100vw'
			position={'relative'}
			mt={40}
		>
			<Box
				w='90vw'
				position={'absolute'}
				left='50%'
				transform={'translateX(-50%)'}
				top='-100px'
			>
				<Box
					w='100%'
					h='400px'
					bg='white'
					borderRadius={'2xl'}
					boxShadow='2xl'
					display={'flex'}
					overflow='hidden'
				>
					<Box
						h='100%'
						w='25%'
						display={'flex'}
						justifyContent='center'
					>
						<Box mt={5}>
							<Text fontSize={20}>About Us</Text>
							<Text fontSize={20}>About Us</Text>
							<Text fontSize={20}>About Us</Text>
						</Box>
					</Box>
					<Box
						h='100%'
						w='25%'
						display={'flex'}
						justifyContent='center'
					>
						<Box mt={5}>
							<Text fontSize={20} fontWeight={600}>
								For Supplies
							</Text>
							<Text fontSize={20} fontWeight={300} mb={3}>
								List Your Activites
							</Text>

							<Text fontSize={20} fontWeight={600}>
								For Brands
							</Text>
							<Text fontSize={20} fontWeight={300}>
								Partner With Us
							</Text>
							<Text fontSize={20} fontWeight={300} mb={3}>
								Destination Marketing
							</Text>
							<Text fontSize={20} fontWeight={600}>
								For Travel Agents
							</Text>
							<Text fontSize={20} fontWeight={300}>
								Hire us as a Agent
							</Text>
							<Text fontSize={20} fontWeight={300}>
								Agent Login
							</Text>
						</Box>
					</Box>
					<Box h='100%' w='20%'>
						<Box mt={5} ml={3}>
							<Text fontSize={20} fontWeight={600}>
								For Travellers
							</Text>
							<Text fontSize={20} fontWeight={300} mb={3}>
								Gift An Experience
							</Text>
						</Box>
					</Box>
					<Box h='100%' w='30%'>
						{/* <Box mt={5} w='100%'>
							<Text fontSize={20} fontWeight={600}>
								Travel Destinations
							</Text>
							<Box whiteSpace='pre-wrap'>
								<Box
									w='33%'
									h='100px'
									bg='orange'
									display={'inline-flex'}
									justifyContent='center'
									alignItems='center'
								>
									Bali
								</Box>
								<Box
									w='33%'
									h='100px'
									bg='orange'
									display={'inline-flex'}
									justifyContent='center'
									alignItems='center'
								>
									Dubai
								</Box>
								<Box
									w='33%'
									h='100px'
									bg='orange'
									display={'inline-flex'}
									justifyContent='center'
									alignItems='center'
								>
									Singapore
								</Box>
								<Box>Thailand</Box>
								<Box>Andaman</Box>
								<Box>India</Box>
								<Box>Ladakh</Box>
								<Box>Hongkong</Box>
								<Box>Sri Lanka</Box>
							</Box>
						</Box> */}
						<Box mt={5} w='100%'>
							<Text fontSize={20} fontWeight={600} mb={3}>
								Travel Destinations
							</Text>
							<Grid
								templateColumns={'repeat(3, 1fr)'}
								gap={1}
								color='white'
								fontWeight={800}
								mrf={3}
							>
								<GridItem
									w='100%'
									h={'100px'}
									bgImage={bali}
									bgPos='top'
									bgSize='cover'
									display={'flex'}
									justifyContent='center'
									alignItems={'center'}
								>
									BALI
								</GridItem>
								<GridItem
									w='100%'
									h={'100px'}
									display={'flex'}
									justifyContent='center'
									alignItems={'center'}
									bgImage={dubai}
									bgPos='top'
									bgSize='cover'
								>
									DUBAI
								</GridItem>
								<GridItem
									w='100%'
									h={'100px'}
									bg='green.500'
									display={'flex'}
									justifyContent='center'
									alignItems={'center'}
									bgImage={singapore}
									bgPos='top'
									bgSize='cover'
								>
									SINGAPORE
								</GridItem>
								<GridItem
									w='100%'
									h={'100px'}
									bg='green.400'
									display={'flex'}
									justifyContent='center'
									alignItems={'center'}
									bgImage={thailand}
									bgPos='top'
									bgSize='cover'
								>
									THAILAND
								</GridItem>
								<GridItem
									w='100%'
									h={'100px'}
									bg='green.400'
									display={'flex'}
									justifyContent='center'
									alignItems={'center'}
									bgImage={andaman}
									bgPos='top'
									bgSize='cover'
								>
									ANDAMAN
								</GridItem>
								<GridItem
									w='100%'
									h={'100px'}
									bg='green.500'
									display={'flex'}
									justifyContent='center'
									alignItems={'center'}
									bgImage={india}
									bgPos='top'
									bgSize='cover'
								>
									INDIA
								</GridItem>
								<GridItem
									w='100%'
									h={'100px'}
									bg='green.400'
									display={'flex'}
									justifyContent='center'
									alignItems={'center'}
									bgImage={ladakh}
									bgPos='top'
									bgSize='cover'
								>
									LADAKH
								</GridItem>
								<GridItem
									w='100%'
									h={'100px'}
									bg='green.400'
									display={'flex'}
									justifyContent='center'
									alignItems={'center'}
									bgImage={hongkong}
									bgPos='top'
									bgSize='cover'
								>
									HONGKONG
								</GridItem>
								<GridItem
									w='100%'
									h={'100px'}
									bg='green.500'
									display={'flex'}
									justifyContent='center'
									alignItems={'center'}
									bgImage={sriLanka}
									bgPos='top'
									bgSize='cover'
								>
									SRI LANKA
								</GridItem>
							</Grid>
						</Box>
					</Box>
				</Box>
				<Box
					// w='100%'
					h='100px'
					display={'flex'}
					justifyContent='space-around'
					w='600px'
					mx='auto'
					mt={10}
				>
					<Box
						w='20px'
						h='20px'
						borderRadius={'full'}
						bg='gray'
						display={'flex'}
						justifyContent='center'
						alignItems={'center'}
						p={5}
					>
						<Icon as={FaFacebookF} color='rgb(51,55,64)' />
					</Box>
					<Box
						w='20px'
						h='20px'
						borderRadius={'full'}
						bg='gray'
						display={'flex'}
						justifyContent='center'
						alignItems={'center'}
						p={5}
					>
						<Icon as={FaInstagram} color='rgb(51,55,64)' />
					</Box>
					<Box
						w='20px'
						h='20px'
						borderRadius={'full'}
						bg='gray'
						display={'flex'}
						justifyContent='center'
						alignItems={'center'}
						p={5}
					>
						<Icon as={FaLinkedinIn} color='rgb(51,55,64)' />
					</Box>
					<Box
						w='20px'
						h='20px'
						borderRadius={'full'}
						bg='gray'
						display={'flex'}
						justifyContent='center'
						alignItems={'center'}
						p={5}
					>
						<Icon as={FaTwitter} color='rgb(51,55,64)' />
					</Box>
					<Box
						w='20px'
						h='20px'
						borderRadius={'full'}
						bg='gray'
						display={'flex'}
						justifyContent='center'
						alignItems={'center'}
						p={5}
					>
						<Icon as={FaYoutube} color='rgb(51,55,64)' />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Footer;
