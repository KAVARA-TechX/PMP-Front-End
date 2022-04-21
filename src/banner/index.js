import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import banner from '../assets/banner.jpeg';

const Banner = () => {
	return (
		<Box
			w='80vw'
			mx='auto'
			h='250px'
			display={'flex'}
			borderRadius='xl'
			overflow={'hidden'}
			mb={10}
		>
			<Box w='70%' h='100%'>
				<Box
					w='100%'
					h='100%'
					bgSize={'cover'}
					bgPosition='left'
					bgImage={`url(${banner})`}
				/>
			</Box>
			<Box
				w='30%'
				h='100%'
				bg='rgb(40,56,75)'
				boxShadow='-50px 0 100px 100px rgb(40,56,75)'
				position={'relative'}
			>
				<Box
					position={'relative'}
					top='50%'
					left='0%'
					transform={'translateY(-50%) translateX(-50%)'}
					display='flex'
					flexDir={'column'}
					alignItems='centers'
					color='white'
				>
					<Text textAlign={'center'} fontSize={20} fontWeight={500}>
						VISIT MALDIVES
					</Text>
					<Text
						textAlign='center'
						fontSize={35}
						fontWeight={700}
						whiteSpace='nowrap'
					>
						The Sunny Side of Life
					</Text>
					<Box
						bg='orange'
						mx='auto'
						py={3}
						px={5}
						borderRadius={'xl'}
						cursor='pointer'
						mt={5}
					>
						Packages From ₹19,524
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Banner;
