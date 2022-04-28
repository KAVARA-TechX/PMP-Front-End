import { Box, Grid, GridItem, Icon, Text } from '@chakra-ui/react';
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';
import React from 'react';

const Footer = () => {
	return (
		<Box
			bg='rgb(51,55,64)'
			h='fit-content'
			w='100vw'
			position='relative'
			mt={40}
		>
			<Box
				w={'90vw'}
				position='relative'
				left={'50%'}
				transform='translateX(-50%)'
				top='-100px'
			>
				<Box
					w='100%'
					bg='#FCFCFC'
					py={5}
					borderRadius={'2xl'}
					boxShadow='2xl'
					display={'grid'}
					gap={5}
					gridTemplateColumns={{
						base: '1fr',
						lg: 'repeat(3,1fr)',
					}}
					overflowY='scroll'
				>
					<Box
						h='100%'
						display={'flex'}
						justifyContent='center'
						textAlign={{ base: 'center', lg: 'start' }}
					>
						<Box mt={5} w='100%' h='100%' p={3} px={{ lg: 20 }}>
							<Text fontSize={20} fontWeight={400}>
								About Us
							</Text>
							<Text fontSize={20} fontWeight={400}>
								Careers
							</Text>
							<Text fontSize={20} fontWeight={400}>
								Blogs
							</Text>
							<Text fontSize={20} fontWeight={400}>
								Testimonials
							</Text>
							<Text fontSize={20} fontWeight={400}>
								FAQ
							</Text>
							<Text fontSize={20} fontWeight={400}>
								T&C
							</Text>
						</Box>
					</Box>
					<Box
						h='100%'
						display={'flex'}
						justifyContent='center'
						textAlign={{ base: 'center', lg: 'start' }}
					>
						<Box mt={5} w='100%' h='100%' p={3} px={{ lg: 20 }}>
							<Text fontSize={20} fontWeight={400}>
								Contact Us
							</Text>
							<Text fontSize={20} fontWeight={400}>
								For Travel Agents
							</Text>
							<Text fontSize={20} fontWeight={400}>
								For Travellers
							</Text>
							<Text fontSize={20} fontWeight={400}>
								For Brands
							</Text>
						</Box>
					</Box>
					<Box
						h='100%'
						display={'flex'}
						flexDir='column'
						justifyContent='center'
						textAlign={{ base: 'center', lg: 'start' }}
					>
						<Box
							mt={5}
							w='100%'
							h='100%'
							p={3}
							px={{ lg: 20 }}
							display={'grid'}
							gridTemplateColumns={'repeat( 3, 1fr)'}
						>
							<Box
								as='a'
								href='https://www.facebook.com/Plan-My-Leisure-101398345900413'
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
								as='a'
								href='https://www.instagram.com/planmyleisure/'
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
								as='a'
								href='https://www.linkedin.com/company/planmyleisure/'
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
								as='a'
								href='https://twitter.com/PlanMyLeisure'
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
								as='a'
								href='https://www.youtube.com/channel/UCNrQbWSzaU5qAUxOqYEHf6A'
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
			</Box>
		</Box>
	);
	// return (
	// 	// main container
	// 	<Box
	// 		bg='rgb(51,55,64)'
	// 		h='fit-content'
	// 		w='100vw'
	// 		position={'relative'}
	// 		mt={40}
	// 	>
	// 		{/* floating card */}
	// 		<Box
	// 			w='90vw'
	// 			position={'relative'}
	// 			left='50%'
	// 			transform={'translateX(-50%)'}
	// 			top='-100px'
	// 		>
	// 			{/* section inside floating card */}
	// 			<Box
	// 				w='100%'
	// 				bg='#FCFCFC'
	// 				py={5}
	// 				borderRadius={'2xl'}
	// 				boxShadow='2xl'
	// 				display={'grid'}
	// 				gap={5}
	// 				gridTemplateColumns={{
	// 					base: '1fr',
	// 					lg: 'repeat(8,1fr)',
	// 				}}
	// 				overflowY='scroll'
	// 			>
	// 				{/* about section */}
	// 				<Box
	// 					h='100%'
	// 					display={'flex'}
	// 					justifyContent='center'
	// 					textAlign={{ base: 'center', lg: 'center' }}
	// 				>
	// 					<Box mt={5} w='100%' h='100%' p={3}>
	// 						<Text fontSize={20} fontWeight={600}>
	// 							About Us
	// 						</Text>
	// 						<Text fontSize={20}>About Us</Text>
	// 						<Text fontSize={20}>About Us</Text>
	// 					</Box>
	// 				</Box>
	// 				{/* for supplies,brands and travel agents section */}
	// 				<Box
	// 					h='100%'
	// 					display={'flex'}
	// 					justifyContent='center'
	// 					gridColumnStart={{ lg: 2 }}
	// 					gridColumnEnd={{ lg: 4 }}
	// 				>
	// 					<Box
	// 						mt={5}
	// 						w='100%'
	// 						p={3}
	// 						textAlign={{ base: 'center' }}
	// 					>
	// 						<Text fontSize={20} fontWeight={600}>
	// 							For Supplies
	// 						</Text>
	// 						<Text fontSize={20} fontWeight={300} mb={3}>
	// 							List Your Activites
	// 						</Text>
	// 						<Text fontSize={20} fontWeight={600}>
	// 							For Brands
	// 						</Text>
	// 						<Text fontSize={20} fontWeight={300}>
	// 							Partner With Us
	// 						</Text>
	// 						<Text fontSize={20} fontWeight={300} mb={3}>
	// 							Destination Marketing
	// 						</Text>
	// 						<Text fontSize={20} fontWeight={600}>
	// 							For Travel Agents
	// 						</Text>
	// 						<Text fontSize={20} fontWeight={300}>
	// 							Hire us as a Agent
	// 						</Text>
	// 						<Text fontSize={20} fontWeight={300}>
	// 							Agent Login
	// 						</Text>
	// 					</Box>
	// 				</Box>
	// 				{/* for travellers section */}
	// 				<Box h='100%'>
	// 					<Box
	// 						mt={5}
	// 						w='100%'
	// 						p={3}
	// 						textAlign={{ base: 'center' }}
	// 					>
	// 						<Text fontSize={20} fontWeight={600}>
	// 							For Travellers
	// 						</Text>
	// 						<Text fontSize={20} fontWeight={300}>
	// 							Gift An Experience
	// 						</Text>
	// 					</Box>
	// 				</Box>
	// 				{/* for travel destination section */}
	// 				<Box
	// 					h='100%'
	// 					gridColumnStart={{ lg: 6 }}
	// 					gridColumnEnd={{ lg: 9 }}
	// 				>
	// 					<Box
	// 						mt={5}
	// 						px={2}
	// 						w='100%'
	// 						textAlign={{ base: 'center' }}
	// 					>
	// 						<Text fontSize={20} fontWeight={600} mb={3}>
	// 							Travel Destinations
	// 						</Text>
	// 						<Grid
	// 							templateColumns={'repeat(3, 1fr)'}
	// 							gap={1}
	// 							color='white'
	// 							fontWeight={800}
	// 							mrf={3}
	// 						>
	// 							<GridItem
	// 								w='100%'
	// 								h={'100px'}
	// 								bgImage={bali}
	// 								bgPos='top'
	// 								bgSize='cover'
	// 								display={'flex'}
	// 								justifyContent='center'
	// 								alignItems={'center'}
	// 							>
	// 								BALI
	// 							</GridItem>
	// 							<GridItem
	// 								w='100%'
	// 								h={'100px'}
	// 								display={'flex'}
	// 								justifyContent='center'
	// 								alignItems={'center'}
	// 								bgImage={dubai}
	// 								bgPos='top'
	// 								bgSize='cover'
	// 							>
	// 								DUBAI
	// 							</GridItem>
	// 							<GridItem
	// 								w='100%'
	// 								h={'100px'}
	// 								bg='green.500'
	// 								display={'flex'}
	// 								justifyContent='center'
	// 								alignItems={'center'}
	// 								bgImage={singapore}
	// 								bgPos='top'
	// 								bgSize='cover'
	// 							>
	// 								SINGAPORE
	// 							</GridItem>
	// 							<GridItem
	// 								w='100%'
	// 								h={'100px'}
	// 								bg='green.400'
	// 								display={'flex'}
	// 								justifyContent='center'
	// 								alignItems={'center'}
	// 								bgImage={thailand}
	// 								bgPos='top'
	// 								bgSize='cover'
	// 							>
	// 								THAILAND
	// 							</GridItem>
	// 							<GridItem
	// 								w='100%'
	// 								h={'100px'}
	// 								bg='green.400'
	// 								display={'flex'}
	// 								justifyContent='center'
	// 								alignItems={'center'}
	// 								bgImage={andaman}
	// 								bgPos='top'
	// 								bgSize='cover'
	// 							>
	// 								ANDAMAN
	// 							</GridItem>
	// 							<GridItem
	// 								w='100%'
	// 								h={'100px'}
	// 								bg='green.500'
	// 								display={'flex'}
	// 								justifyContent='center'
	// 								alignItems={'center'}
	// 								bgImage={india}
	// 								bgPos='top'
	// 								bgSize='cover'
	// 							>
	// 								INDIA
	// 							</GridItem>
	// 							<GridItem
	// 								w='100%'
	// 								h={'100px'}
	// 								bg='green.400'
	// 								display={'flex'}
	// 								justifyContent='center'
	// 								alignItems={'center'}
	// 								bgImage={ladakh}
	// 								bgPos='top'
	// 								bgSize='cover'
	// 							>
	// 								LADAKH
	// 							</GridItem>
	// 							<GridItem
	// 								w='100%'
	// 								h={'100px'}
	// 								bg='green.400'
	// 								display={'flex'}
	// 								justifyContent='center'
	// 								alignItems={'center'}
	// 								bgImage={hongkong}
	// 								bgPos='top'
	// 								bgSize='cover'
	// 							>
	// 								HONGKONG
	// 							</GridItem>
	// 							<GridItem
	// 								w='100%'
	// 								h={'100px'}
	// 								bg='green.500'
	// 								display={'flex'}
	// 								justifyContent='center'
	// 								alignItems={'center'}
	// 								bgImage={sriLanka}
	// 								bgPos='top'
	// 								bgSize='cover'
	// 							>
	// 								SRI LANKA
	// 							</GridItem>
	// 						</Grid>
	// 					</Box>
	// 				</Box>
	// 			</Box>
	// 			{/* section outside floating card */}
	// 			<Box
	// 				w={{ base: '100%', lg: '60%' }}
	// 				h='10px'
	// 				display={'flex'}
	// 				justifyContent='space-around'
	// 				mx='auto'
	// 				mt={10}
	// 			>
	// 				<Box
	// 					w='20px'
	// 					h='20px'
	// 					borderRadius={'full'}
	// 					bg='gray'
	// 					display={'flex'}
	// 					justifyContent='center'
	// 					alignItems={'center'}
	// 					p={5}
	// 				>
	// 					<Icon as={FaFacebookF} color='rgb(51,55,64)' />
	// 				</Box>
	// 				<Box
	// 					w='20px'
	// 					h='20px'
	// 					borderRadius={'full'}
	// 					bg='gray'
	// 					display={'flex'}
	// 					justifyContent='center'
	// 					alignItems={'center'}
	// 					p={5}
	// 				>
	// 					<Icon as={FaInstagram} color='rgb(51,55,64)' />
	// 				</Box>
	// 				<Box
	// 					w='20px'
	// 					h='20px'
	// 					borderRadius={'full'}
	// 					bg='gray'
	// 					display={'flex'}
	// 					justifyContent='center'
	// 					alignItems={'center'}
	// 					p={5}
	// 				>
	// 					<Icon as={FaLinkedinIn} color='rgb(51,55,64)' />
	// 				</Box>
	// 				<Box
	// 					w='20px'
	// 					h='20px'
	// 					borderRadius={'full'}
	// 					bg='gray'
	// 					display={'flex'}
	// 					justifyContent='center'
	// 					alignItems={'center'}
	// 					p={5}
	// 				>
	// 					<Icon as={FaTwitter} color='rgb(51,55,64)' />
	// 				</Box>
	// 				<Box
	// 					w='20px'
	// 					h='20px'
	// 					borderRadius={'full'}
	// 					bg='gray'
	// 					display={'flex'}
	// 					justifyContent='center'
	// 					alignItems={'center'}
	// 					p={5}
	// 				>
	// 					<Icon as={FaYoutube} color='rgb(51,55,64)' />
	// 				</Box>
	// 			</Box>
	// 		</Box>
	// 	</Box>
	// );
};

export default Footer;
