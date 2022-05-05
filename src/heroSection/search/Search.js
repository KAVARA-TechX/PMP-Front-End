import { Box, Text, Input, Button } from '@chakra-ui/react';

const Search = () => {
	return (
		<Box
			position='absolute'
			zIndex={100}
			w={{ base: '100vw', lg: '90vw' }}
			h='100px'
			bg='white'
			borderRadius={'xl'}
			left='50%'
			bottom={'0%'}
			transform='translateX(-50%) translateY(50%)'
			boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
			display='flex'
			pl={5}
			pr={5}
			alignItems='center'
		>
			{/* location */}
			<Box flexGrow={1} pl={5} pr={5}>
				<Text fontWeight={500}>Location</Text>
				<Input
					type='text'
					placeholder='location'
					outline={'none'}
					border='none'
				/>
			</Box>
			{/* check in */}
			<Box flexGrow={1} pl={5} pr={5}>
				<Text fontWeight={500}>Check In</Text>
				<Input type='date' border='none' />
			</Box>
			{/* check out */}
			<Box flexGrow={1} pl={5} pr={5}>
				<Text fontWeight={500}>Check Out</Text>
				<Input type='date' border='none' />
			</Box>
			{/* Guests */}
			<Box pl={5} pr={5}>
				<Text fontWeight={500}>Guests</Text>
				<Input type='number' border='none' placeholder='1' />
			</Box>
			{/* search Button */}
			<Box flexGrow={0.7} pl={5} pr={5}>
				<Button h='50px' bg='orange'>
					Search
				</Button>
			</Box>
		</Box>
	);
};

export default Search;
