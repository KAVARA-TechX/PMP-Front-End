import React from 'react';
import { Box, Text, Input, Button } from '@chakra-ui/react';
import searchHotel from '../assets/searchhotel.jpeg';
import searchHotel1 from '../assets/searchhotel1.jpeg';

const SearchHotel = () => {
	return (
		<Box w='100vw' h='500px' display='flex'>
			{/* for image */}
			<Box w='60%' h='100%' overflow='hidden' position='relative'>
				<Box
					position={'absolute'}
					m={5}
					w='70%'
					h='70%'
					bgImage={`url(${searchHotel})`}
					bgSize={'cover'}
					borderRadius='2xl'
					boxShadow={'2xl'}
					zIndex={100}
					transition='1s'
				/>
				<Box
					position={'absolute'}
					m={5}
					w='70%'
					h='70%'
					bgImage={`url(${searchHotel1})`}
					bgSize={'cover'}
					borderRadius='2xl'
					boxShadow={'sm'}
					bottom={0}
					right={0}
					zIndex={0}
					_hover={{ zIndex: 200, boxShadow: '2xl', scale: '10px' }}
				/>
			</Box>

			{/* for form */}
			<Box w='40%' h='100%' bg='transparent'>
				<Text
					mt={10}
					fontSize={50}
					fontWeight={700}
					color='rgba(0,0,0,.7)'
					pr={10}
					pt={10}
					textAlign='center'
				>
					Search Hotels
				</Text>

				<Box
					w='100%'
					mt={10}
					pl={10}
					ml='auto'
					display='flex'
					flexDir={'column'}
					alignItems='center'
				>
					<Input
						type='text'
						placeholder='hotel'
						display='block'
						w='70%'
					/>
					<Button bg='orange' color={'white'} mt={5} ml={1} w='150px'>
						Search
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default SearchHotel;
