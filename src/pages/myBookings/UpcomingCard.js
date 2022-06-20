import {
	Box,
	Text,
	Icon,
	UnorderedList,
	ListItem,
	Select,
	Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IoAirplaneSharp } from 'react-icons/io5';
import { MdDateRange } from 'react-icons/md';
import { MdPeopleAlt } from 'react-icons/md';
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';

const UpcomingCard = ({ data }) => {
	const [payOption, setPayOption] = useState('pay now');

	return (
		<>
			<Box
				w='100%'
				h='300px'
				bg='transparent'
				border='1px solid #2d3748'
				borderRadius={'20px'}
				overflow='hidden'
				display={'flex'}
			>
				<Box w='30%' h='100%' bg='darkolivegreen'></Box>
				<Box
					pl='10px'
					w='35%'
					display={'flex'}
					flexDir='column'
					pb='20px'
				>
					<Box h='fit-content'>
						<Text fontSize={'24px'} fontWeight={700}>
							Package Name
						</Text>
						<Box display={'flex'} mt='5px' pl='5px'>
							<Box
								display={'flex'}
								alignItems='center'
								pr='10px'
								borderRight={'1px solid gray'}
							>
								<Icon
									as={IoAirplaneSharp}
									fontSize={'20px'}
									color='rgba(255,255,255,.5)'
								/>

								<Text pl='10px'>{data.location}</Text>
							</Box>
							<Box
								display={'flex'}
								alignItems='center'
								pl='10px'
								pr='10px'
								borderRight={'1px solid gray'}
							>
								<Icon
									as={MdDateRange}
									fontSize={'20px'}
									color='rgba(255,255,255,.5)'
								/>
								<Text pl='10px'>
									{data.startDate} - {data.endDate}
								</Text>
							</Box>
							<Box display={'flex'} alignItems='center' pl='10px'>
								<Icon
									as={MdPeopleAlt}
									fontSize={'20px'}
									color='rgba(255,255,255,.5)'
								/>
								<Text pl='10px'>{data.numberOfPeople}</Text>
							</Box>
						</Box>
					</Box>
					<Box
						flexGrow={1}
						mt='20px'
						ml='20px'
						display={'grid'}
						gridTemplateColumns='repeat(3,1fr)'
					>
						<Box>
							<Text>Resorts :</Text>
							<UnorderedList>
								<ListItem>Item one</ListItem>
								<ListItem>Second</ListItem>
								<ListItem>Third</ListItem>
							</UnorderedList>
						</Box>
						<Box>
							<Text>Inclusions : </Text>
							<UnorderedList>
								<ListItem>Item one</ListItem>
								<ListItem>Second</ListItem>
								<ListItem>Third</ListItem>
							</UnorderedList>
						</Box>
						<Text>Room Type : </Text>
						<Text>Meal Plan</Text>
					</Box>
					<Box display={'flex'} alignItems='center' gap='10px'>
						<Text>See complete package : </Text>
						<Icon
							as={BsFillFileEarmarkPdfFill}
							color='red.500'
							cursor={'pointer'}
						/>
					</Box>
				</Box>
				<Box
					h='100%'
					w='35%'
					bg='gray.700'
					pr='20px'
					display={'flex'}
					flexDir='column'
				>
					<Box
						pr='20px'
						pl='20px'
						pt='10px'
						display={'flex'}
						justifyContent='space-between'
					>
						<Box
							display='inline-flex'
							flexDir={'column'}
							alignItems={'flex-start '}
						>
							<Text fontSize={'16px'}>Total Amount</Text>
							<Text fontSize={'20px'} fontWeight={700}>
								{payOption === 'pay now'
									? 'Rs 30,000/-'
									: 'Rs 9,000/month'}
							</Text>
						</Box>
						<Box
							display={'flex'}
							flexDir='column'
							alignItems={'flex-end'}
							gap='10px'
						>
							<Text fontSize={'16px'}>Payment Plan</Text>
							<Select
								w='130px'
								value={payOption}
								onChange={(e) => {
									setPayOption(e.target.value);
								}}
							>
								<option value={'pay now'}>pay now</option>
								<option value='pay in parts'>
									pay in parts
								</option>
							</Select>
						</Box>
					</Box>
					{payOption === 'pay now' ? (
						<Box
							pb='20px'
							display={'flex'}
							flexGrow={1}
							flexDir='column'
							justifyContent='flex-end'
							mt='20px'
							alignItems={'center'}
						>
							<Button bg='#32BAC9' w='80%'>
								Pay Now
							</Button>
							<Text
								textDecor={'underline'}
								color='rgba(255,255,255,.5)'
							>
								Cancel Booking
							</Text>
						</Box>
					) : (
						<Box
							flexGrow={1}
							display='flex'
							flexDir={'column'}
							justifyContent='center'
							alignItems={'center'}
							pb='20px'
						>
							<Box
								w='100%'
								pb='20px'
								display={'grid'}
								flexGrow={1}
								gridTemplateColumns='repeat(3,1fr)'
								mt='20px'
								alignItems={'center'}
								gap='10px 10px'
								pl='20px'
							>
								<Box
									border={'1px solid rgba(0,0,0,.6)'}
									borderRadius={'10px'}
									overflow='hidden'
								>
									<Text
										bg='rgba(0,0,0,.6)'
										textAlign={'center'}
									>
										Month-1
									</Text>
									<Box
										display={'flex'}
										justifyContent='center'
										py='5px'
									>
										<Button bg='#32BAC9' w='80%'>
											Pay
										</Button>
									</Box>
								</Box>
								<Box
									border={'1px solid rgba(0,0,0,.6)'}
									borderRadius={'10px'}
									overflow='hidden'
								>
									<Text
										bg='rgba(0,0,0,.6)'
										textAlign={'center'}
									>
										Month-2
									</Text>
									<Box
										display={'flex'}
										justifyContent='center'
										py='5px'
									>
										<Button bg='#32BAC9' w='80%'>
											Pay
										</Button>
									</Box>
								</Box>
								<Box
									borderRadius={'10px'}
									overflow='hidden'
									border={'1px solid rgba(0,0,0,.6)'}
								>
									<Text
										bg='rgba(0,0,0,.6)'
										textAlign={'center'}
									>
										Month-3
									</Text>
									<Box
										display={'flex'}
										justifyContent='center'
										py='5px'
										bg='transparent'
									>
										<Button bg='#32BAC9' w='80%'>
											Pay
										</Button>
									</Box>
								</Box>
							</Box>
							<Box>
								<Text
									textDecor={'underline'}
									textAlign='center'
									color='rgba(255,255,255,.5)'
								>
									Cancel Booking
								</Text>
							</Box>
						</Box>
					)}
				</Box>
			</Box>
		</>
	);
};

export default UpcomingCard;
