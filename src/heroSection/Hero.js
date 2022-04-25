import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import hero from '../assets/main2.jpeg';
import UserForm from '../modal/UserForm';
import { useState } from 'react';

const Hero = () => {
	const [modalState, setModalState] = useState(false);

	return (
		<Box h='500px' w='100vw' bg='red' mb='100px'>
			<UserForm state={modalState} setState={setModalState} />
			<Box
				h='100%'
				backgroundImage={`url(${hero})`}
				backgroundPosition={'right'}
				backgroundRepeat='no-repeat'
				bgSize={'cover'}
				position='relative'
				display={'flex'}
				flexDir='column'
				alignItems={{ base: 'center', lg: 'start' }}
				pl={{ lg: 10 }}
			>
				<Box
					pt={{ base: 100, lg: 150 }}
					// pl={{ base: 0, lg: 100 }}
					lineHeight={1}
					textAlign='center'
				>
					<Text
						fontSize={60}
						fontWeight={500}
						color='rgba(0,0,0,.5)'
						lineHeight={0.9}
						textAlign={{ base: 'center' }}
					>
						It's time for a new
					</Text>
					<Text
						fontSize={{ base: 50, lg: 70 }}
						fontWeight={800}
						color={{ base: 'rgba(0,0,0,.8)', lg: 'rgba(0,0,0,.7)' }}
						textAlign={{ base: 'center', lg: 'start' }}
					>
						EXPERIENCE
					</Text>
				</Box>
				<Box
					mt={{ base: 10, lg: 5 }}
					w={{ base: '100%', lg: '70%' }}
					h='100px'
					borderRadius={{ base: '0', lg: 'xl' }}
					display='flex'
					justifyContent={{ base: 'center', lg: 'start' }}
					alignItems={{ base: 'center' }}
					position={{ base: 'fixed', lg: 'relative' }}
					bottom={1}
					right={0}
					zIndex={{ base: 10000000, lg: 1 }}
				>
					<Button
						fontSize={20}
						color='white'
						bg='orange'
						w={{ base: '90%', lg: '150px' }}
						h='50px'
						_hover={{
							background: 'orange',
						}}
						onClick={() => {
							setModalState(true);
						}}
					>
						Get Quote
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Hero;
