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
			className='hide-scroll-bar'
		>
			<Box
				w={'90vw'}
				position='relative'
				left={'50%'}
				transform='translateX(-50%)'
				top='-100px'
				className='hide-scroll-bar'
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
					className='hide-scroll-bar'
				>
					<Box
						h='100%'
						display={'flex'}
						justifyContent='center'
						textAlign={{ base: 'center', lg: 'start' }}
						className='hide-scroll-bar'
					>
						<Box
							mt={5}
							w='100%'
							h='100%'
							p={3}
							px={{ lg: 20 }}
							className='hide-scroll-bar'
						>
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
						className='hide-scroll-bar'
					>
						<Box
							mt={5}
							w='100%'
							h='100%'
							p={3}
							px={{ lg: 20 }}
							className='hide-scroll-bar'
						>
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
						className='hide-scroll-bar'
					>
						<Box
							mt={5}
							w='100%'
							h='100%'
							p={3}
							px={{ lg: 20 }}
							display={'grid'}
							gridTemplateColumns={'repeat( 3, 1fr)'}
							className='hide-scroll-bar'
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
								className='hide-scroll-bar'
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
								className='hide-scroll-bar'
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
								className='hide-scroll-bar'
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
								className='hide-scroll-bar'
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
								className='hide-scroll-bar'
							>
								<Icon as={FaYoutube} color='rgb(51,55,64)' />
							</Box>
						</Box>
					</Box>
				</Box>
				<Text
					pt={7}
					display={'block'}
					as='a'
					color='white'
					href='https://bit.ly/38wyHtX'
					textAlign={'center'}
				>
					© Plan My Leisure 2020 | Developed by CFT Labs
				</Text>
			</Box>
		</Box>
	);
};

export default Footer;
