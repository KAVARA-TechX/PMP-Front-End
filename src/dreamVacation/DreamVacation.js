import { Box, Text, Image } from '@chakra-ui/react';
import clipboard from '../assets/icons/clipboard-text.png';
import message from '../assets/icons/messages.png';
import cardtick from '../assets/icons/card-tick.png';

const DreamVacation = () => {
	return (
		<Box
			w='100vw'
			h={{ base: 'fit-content', lg: '360px' }}
			bg='rgba(14, 135, 246,.25)'
			px={{ base: '10px', lg: '9vw' }}
			mb={10}
			py='30px'
		>
			<Text
				fontWeight={700}
				textAlign='center'
				fontSize={{ base: '30px', lg: '32px' }}
			>
				Let’s find you your dream vacation
			</Text>
			<Box
				display={'grid'}
				gridTemplateColumns={{ base: '1fr', lg: 'repeat(3,1fr)' }}
				mt='50px'
				gap={{ base: '30px', lg: '0' }}
			>
				<Box w='300px' mx='auto' overflow={'hidden'}>
					<Box
						w={{ base: '60px', lg: '70px' }}
						h={{ base: '60px', lg: '70px' }}
						mx='auto'
						display={'flex'}
						justifyContent='center'
						alignItems={'center'}
						borderRadius={'full'}
						overflow='hidden'
						border='3px solid #0e87f6'
						mb='20px'
					>
						<Image
							src={clipboard}
							h={{ base: '30px', lg: '30px' }}
						/>
					</Box>
					<Text
						fontWeight={700}
						fontSize={{ base: '22px', lg: '20px' }}
						textAlign={'center'}
					>
						Select a Package
					</Text>
					<Text
						textAlign={'center'}
						fontSize={'16px'}
						lineHeight='24px'
						fontWeight={500}
					>
						Select a destination of your choice and fill in the
						basic information.
					</Text>
				</Box>
				<Box w='300px' mx='auto'>
					<Box
						w={{ base: '60px', lg: '70px' }}
						h={{ base: '60px', lg: '70px' }}
						mx='auto'
						display={'flex'}
						justifyContent='center'
						alignItems={'center'}
						borderRadius={'full'}
						overflow='hidden'
						border='3px solid #0e87f6'
						mb='20px'
					>
						<Image src={message} h={{ base: '30px', lg: '30px' }} />
					</Box>
					<Text
						fontWeight={700}
						fontSize={{ base: '22px', lg: '20px' }}
						textAlign={'center'}
					>
						Get it Customised
					</Text>
					<Text
						textAlign={'center'}
						px='10px'
						fontSize={'16px'}
						lineHeight='24px'
						fontWeight={500}
					>
						You can personalize your trip as per your wish. Click
						and explore options to complete your customisation.
					</Text>
				</Box>
				<Box w='300px' mx='auto'>
					<Box
						w={{ base: '60px', lg: '70px' }}
						h={{ base: '60px', lg: '70px' }}
						mx='auto'
						display={'flex'}
						justifyContent='center'
						alignItems={'center'}
						borderRadius={'full'}
						overflow='hidden'
						border='3px solid #0e87f6'
						mb='20px'
					>
						<Image
							src={cardtick}
							h={{ base: '30px', lg: '30px' }}
						/>
					</Box>
					<Text
						fontWeight={700}
						fontSize={{ base: '22px', lg: '20px' }}
						textAlign={'center'}
					>
						Pay Securely
					</Text>
					<Text
						textAlign={'center'}
						fontSize={'16px'}
						lineHeight='24px'
						fontWeight={500}
					>
						Pay easily with a safe and secure gateway.
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default DreamVacation;
