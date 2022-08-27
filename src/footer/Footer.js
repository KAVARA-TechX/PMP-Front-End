import { Box, Icon, Text, Image } from '@chakra-ui/react';
import {
	FaFacebookF,
	FaLinkedinIn,
	FaTwitter,
	FaInstagram,
} from 'react-icons/fa';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import TravelAgentModal from './TravelAgentModal';
import React, { useState } from 'react';
import BrandsModal from './BrandsModal';
import logo from '../assets/logo/c__2_-removebg.webp';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';

const Footer = () => {
	const navigate = useNavigate();
	const [travelagent, setTravelAgent] = useState(false);
	const [brands, setBrands] = useState(false);

	return (
		<>
			<TravelAgentModal state={travelagent} setState={setTravelAgent} />
			<BrandsModal state={brands} setState={setBrands} />
			<Box
				bg='#082032'
				color='#fff'
			>
				<Box
					// h={{ base: 'fit-content', lg: '480px' }}
					w='100vw'
					overflow='hidden'
					className='hide-scroll-bar'
					display='grid'
					gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}
					gap='20px'
					py='30px'
					px={{ base: '40px', lg: '9vw' }}

				//
				>
					<Box display={'flex'} flexDir='column'>
						<Box h='100px'>
							<Image src={logo} h='100%' w='fit-content' />
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

						<Box flexGrow={1}></Box>
						<Text
							pt='40px'
							display={{ base: 'none', lg: 'inline-block' }}
						>
							© Plan My Leisure 2019
						</Text>
					</Box>

					<Box pt='30px'>
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
							<Text
								cursor={'pointer'}
								onClick={() => {
									navigate('/blogs');
								}}
							>
								Blog
							</Text>
							{/* <Text>Careers</Text> */}
						</Box>
					</Box>
					<Box pt='30px'>
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
								{window.innerWidth < 992
									? 'FAQ'
									: 'Frequently Asked Questions (FAQs)'}
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
							<Text
								cursor={'pointer'}
								onClick={() => {
									navigate('/contactUs');
								}}
							>
								Contact Us
							</Text>
						</Box>
					</Box>

					<Box pt='30px'>
						<Text fontSize='24px' fontWeight={600}>
							Contact Us
						</Text>

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
								<a href='mailto:sales@planmyleisure.com'>
									sales@planmyleisure.com
								</a>
							</Text>
						</Box>
						<Box
							display={'flex'}
							alignItems='flex-start'
							gap='5px'
							mt='15px'
						>
							<Icon as={BsTelephoneFill} />
							<Text
								position='relative'
								bottom='5px'
								fontSize={'14px'}
							>
								<a href='tel:+918800869909'>
									+918800869909
								</a>
								<br />
							</Text>
						</Box>


						<Box display={'flex'} mt='30px' gap='30px'>
							<Box
								as='a'
								href='https://www.facebook.com/planmyleisuretravels'
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
						</Box>
					</Box>

				</Box>


				<Box px={{ base: '40px', lg: '9vw' }}>
					<Text
						py='20px'
						textAlign={'center'}
						display={{ lg: 'none' }}
					>
						© Plan My Leisure 2019
					</Text>
				</Box>
			</Box>
		</>
	);
};

export default React.memo(Footer);
