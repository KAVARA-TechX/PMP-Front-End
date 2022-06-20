import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import banner from '../assets/VisitMaldives.png';
import UserForm from '../modal/UserForm';

const Banner = () => {
	const [modalState, setModalState] = useState(false);
	return (
		<>
			<UserForm state={modalState} setState={setModalState} />
			<Box
				w={{ base: '100vw', lg: '95vw' }}
				mx='auto'
				h={{ base: '350px', lg: '250px' }}
				display={'flex'}
				borderRadius={{ base: 'none', lg: 'xl' }}
				overflow={'hidden'}
				mb={'50px'}
				flexDir={{ base: 'column', lg: 'row' }}
				bg='green'
			>
				<Box
					w={{ base: '100%', lg: '100%' }}
					h='100%'
					bgImage={banner}
					bgSize={'cover'}
					bgPosition='left'
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
								fontSize={35}
								fontWeight={700}
								whiteSpace='nowrap'
							>
								Visit Maldives <br /> A Fantasy Fulfilled
							</Text>
							<Box
								bg='rgba(255, 255, 255, 0.7)'
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
								color='#082032'
								fontWeight={600}
							>
								Get quote for <br /> customised package
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
		</>
	);
};

export default Banner;
