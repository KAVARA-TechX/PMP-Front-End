import { SearchIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import MobileModal from './MobileModal';

const MobileSearch = () => {
	const [state, setState] = useState(false);
	return (
		<>
			<MobileModal state={state} changeState={setState} />
			<Box
				position='absolute'
				zIndex={9}
				minW='90vw'
				h='fit-content'
				bg='#fffdf7'
				borderRadius={{ base: 'full', lg: 'full' }}
				left='50%'
				bottom='-5px'
				transform='translateX(-50%) translateY(50%)'
				boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
				display='flex'
				py='5px'
				alignItems='center'
				flexWrap={'wrap'}
				px='8px'
				onClick={() => {
					setState(true);
				}}
			>
				<Box
					h='40px'
					w='40px'
					display={'flex'}
					justifyContent='center'
					alignItems={'center'}
					borderRadius='full'
					boxShadow={'md'}
					bg='rgba(0, 0, 0, .05)'
				>
					<SearchIcon />
				</Box>
				<Box display={'flex'} flexDir='column' ml='8px'>
					<Text fontWeight={600} fontSize='16px'>
						Where To ?
					</Text>
					<Box
						display={'flex'}
						justifyContent='space-between'
						gap='8px'
						fontSize='14px'
					>
						<Text display='inline-block'>Anywhere</Text>
						<Text fontWeight={900}>.</Text>
						<Text display='inline-block'>Any week</Text>
						<Text fontWeight={900}>.</Text>
						<Text display='inline-block'>Add guests</Text>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default MobileSearch;
