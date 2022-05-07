import { Box, Text, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';

const Search = () => {
	let today = new Date();
	let tommorrow = new Date();
	today.setDate(today.getDate());
	const [startDate, setStartDate] = useState(
		today.toISOString().substr(0, 10)
	);
	today.setDate(today.getDate() + 1);
	const [endDate, setEndDate] = useState(today.toISOString().substr(0, 10));
	return (
		<Box
			position='absolute'
			zIndex={100}
			w={{ base: '100vw', lg: '80vw' }}
			h='fit-content'
			bg='white'
			borderRadius={{ base: 'none', lg: 'xl' }}
			left='50%'
			bottom={{ base: '-10%', lg: '0%' }}
			transform='translateX(-50%) translateY(50%)'
			boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
			display='grid'
			gridTemplateColumns={{
				base: 'repeat(2,1fr)',
				lg: '25% 20% 20% 20% 15%',
			}}
			pl={5}
			pr={5}
			pt={5}
			pb={5}
			alignItems='center'
		>
			{/* location */}
			<Box pl={5} pr={5} gridColumn={{ base: '1 / 3', lg: '1 / 2' }}>
				<Text fontWeight={500} textAlign='start'>
					Location
				</Text>
				<Input
					textAlign='start'
					type='text'
					placeholder='location'
					outline={'none'}
					border='none'
					pl={0}
					pr={0}
					_focus={{ outline: 'none' }}
					pb={{ base: 3, lg: 0 }}
				/>
			</Box>
			{/* check in */}
			<Box flexGrow={1} pl={5} pr={5}>
				<Text fontWeight={500} textAlign='start'>
					Check In
				</Text>
				<Input
					textAlign={{ base: 'center', lg: 'start' }}
					type='date'
					border='none'
					w={'fit-content'}
					pl={0}
					pr={0}
					_focus={{ outline: 'none' }}
					defaultValue={startDate}
					onChange={(e) => {
						console.log(e.target.value);
						setStartDate(e.target.value);
					}}
				/>
			</Box>
			{/* check out */}
			<Box flexGrow={1} pl={5} pr={5}>
				<Text fontWeight={500} textAlign='start'>
					Check Out
				</Text>
				<Input
					textAlign='start'
					type='date'
					border='none'
					pl={0}
					pr={0}
					w={'fit-content'}
					_focus={{ outline: 'none' }}
					_selected={new Date()}
					defaultValue={endDate}
					onChange={(e) => {
						console.log(e.target.value);
						setEndDate(e.target.value);
					}}
				/>
			</Box>
			{/* Guests */}
			<Box pl={5} pr={5} gridColumn={{ base: '1 / 3', lg: '4 / 5' }}>
				<Text
					pt={{ base: 3, lg: 0 }}
					fontWeight={500}
					textAlign='start'
				>
					Guests
				</Text>
				<Input
					type='number'
					border='none'
					placeholder='1'
					pl={0}
					pr={0}
					_focus={{ outline: 'none' }}
					textAlign='start'
				/>
			</Box>
			{/* search Button */}
			<Box
				flexGrow={0.7}
				pl={5}
				pr={5}
				gridColumn={{ base: '1 / 3', lg: '5 / 6' }}
				display='flex'
				justifyContent={'center'}
				mt={{ base: 3, lg: 0 }}
			>
				<Button h='50px' w='100%' bg='#32BAC9' color='white'>
					Search
				</Button>
			</Box>
		</Box>
	);
};

export default Search;
