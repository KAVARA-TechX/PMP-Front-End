import { Box, Text, Icon } from '@chakra-ui/react';
import { BiChevronRight } from 'react-icons/bi';
import React, { useEffect, useRef, useState } from 'react';
import banner from '../assets/VisitMaldives.png';
import UserForm from '../modal/UserForm';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Banner = () => {
	gsap.registerPlugin(ScrollTrigger);
	const [modalState, setModalState] = useState(false);
	const banner_container = useRef(null);
	const banner_pls = gsap.utils.selector(banner_container);

	const animate = () => {
		gsap.from(banner_pls('.banner'), {
			scrollTrigger: {
				trigger: banner_container.current,
				start: '0% 65%',
			},
			y: 100,
			opacity: 0,
			duration: 1,
			delay: 0.5,
		});
	};

	useEffect(() => {
		animate();
	}, []);
	return (
		<>
			<UserForm state={modalState} setState={setModalState} />
			<Box px={{ base: '0px', lg: '9vw' }}>
				<Box
					w={{ base: '100vw', lg: '100%' }}
					h={{ base: '350px', lg: '250px' }}
					display={'flex'}
					borderRadius={{ base: 'none', lg: 'xl' }}
					overflow={'hidden'}
					mb={'50px'}
					flexDir={{ base: 'column', lg: 'row' }}
					ref={banner_container}
				>
					<Box
						w={{ base: '100%', lg: '100%' }}
						h='100%'
						bgImage={banner}
						bgSize={'cover'}
						bgPosition='left'
						className='banner'
					>
						<Box
							w='100%'
							h='100%'
							bg='linear-gradient(270deg, #263646 0.85%, rgba(196, 196, 196, 0) 68.47%)'
							position='relative'
						>
							<Box
								position={'absolute'}
								top='50%'
								transform={{
									base: 'translateX(50%) translateY(-50%)',
									lg: 'translateY(-50%)',
								}}
								right={{ base: '50%', lg: '10%' }}
								display={'flex'}
								flexDir='column'
								alignItems={'center'}
							>
								<Text
									textAlign='center'
									fontSize={32}
									fontWeight={700}
									whiteSpace='nowrap'
								>
									Visit Maldives <br /> A Fantasy Fulfilled
								</Text>
								<Box
									bg='rgba(14, 135, 246, 0.5);'
									py={3}
									px={5}
									w='fit-content'
									borderRadius={'xl'}
									cursor='pointer'
									mt={5}
									onClick={() => {
										setModalState(true);
									}}
									textAlign='center'
									color='#fff'
									fontWeight={600}
									display='flex'
									alignItems={'center'}
								>
									<Text>Customize your trip</Text>
									<Icon as={BiChevronRight} fontSize='20px' />
								</Box>
							</Box>
						</Box>
					</Box>
					<Box
						w={{ base: '100%', lg: '0%' }}
						h={{ base: '30%', lg: '100%' }}
						bg='rgb(40,56,75)'
						// boxShadow='-50px 0 100px 100px rgb(40,56,75)'
						position={'relative'}
						display='none'
					>
						<Box
							position={'absolute'}
							top={{ base: '-30%', lg: '50%' }}
							left={{ base: '50%', lg: '0%' }}
							transform={'translateY(-50%) translateX(-50%)'}
							display='flex'
							flexDir={'column'}
							alignItems='centers'
							color='white'
						>
							<Text
								textAlign={'center'}
								fontSize={20}
								fontWeight={500}
							></Text>
							<Text
								textAlign='center'
								fontSize={35}
								fontWeight={500}
								whiteSpace='nowrap'
							>
								A Fantasy Fulfilled
							</Text>
							<Box
								bg='#32BAC9'
								mx='auto'
								py={3}
								px={5}
								borderRadius={'xl'}
								cursor='pointer'
								mt={5}
								onClick={() => {
									setModalState(true);
								}}
							>
								Packages From ₹19,524
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Banner;
