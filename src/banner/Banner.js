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
				w={{ base: '100vw', lg: '80vw' }}
				mx='auto'
				h={{ base: '350px', lg: '250px' }}
				display={'flex'}
				borderRadius={{ base: 'none', lg: 'xl' }}
				overflow={'hidden'}
				mb={10}
				flexDir={{ base: 'column', lg: 'row' }}
			>
				<Box w={{ base: '100%', lg: '70%' }} h='100%'>
					<Box
						w='100%'
						h='100%'
						bgSize={'cover'}
						bgPosition='left'
						bgImage={banner}
					/>
				</Box>
				<Box
					w={{ base: '100%', lg: '30%' }}
					h={{ base: '30%', lg: '100%' }}
					bg='rgb(40,56,75)'
					boxShadow='-50px 0 100px 100px rgb(40,56,75)'
					position={'relative'}
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
							<Text fontWeight={500}>Visit Maldives</Text>A
							fantasy fulfilled
						</Text>
						<Box
							bg='orange'
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
