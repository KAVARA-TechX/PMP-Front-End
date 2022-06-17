import { Box, Text } from '@chakra-ui/react';
import sunset from '../assets/thingsToDo/sunset.png';
import surf from '../assets/thingsToDo/skiing.png';
import scuba from '../assets/thingsToDo/scuba.png';
// import { DayPicker } from 'react-day-picker';
import '../../node_modules/react-day-picker/dist/style.css';
import './day-picker.css';
// import { useState } from 'react';
// import sideImg from '../assets/thingsToDo/skiing.png';
import { useNavigate } from 'react-router-dom';
import './Packages.css';

const Packages = () => {
	const navigate = useNavigate();

	return (
		<>
			<Box
				w='100vw'
				display={'flex'}
				flexDir={{ base: 'column', lg: 'row' }}
				alignItems='center'
				className='packages'
			>
				<Box
					w={{ base: '100%', lg: '35%' }}
					h='100%'
					display='flex'
					justifyContent='center'
					alignItems='center'
				>
					<Box>
						<Text
							fontSize={{ base: 25, lg: 30 }}
							fontWeight={600}
							position='relative'
							_after={{
								base: {
									content: '""',
									position: 'absolute',
									left: 0,
									bottom: 0,
									height: '2px',
									width: '100%',
									background: '#32BAC9',
								},
								lg: {
									content: '""',
									position: 'absolute',
									left: 0,
									bottom: 0,
									height: '2px',
									width: '85%',
									background: '#32BAC9',
								},
							}}
							className='packages-heading'
						>
							Find The Perfect Escape
						</Text>
						<Text textAlign={{ base: 'center', lg: 'start' }}>
							Discover your ideal Experience
						</Text>
					</Box>
				</Box>
				<Box
					w={{ base: '100%', lg: '75%' }}
					h='100%'
					display={'flex'}
					alignItems='center'
					overflowX={{ base: 'scroll', lg: 'none' }}
					className='hide-scroll-bar'
				>
					<Box
						h='400px'
						minW={{ base: '250px' }}
						bgImg={sunset}
						bgSize='cover'
						bgPos={'50%'}
						borderRadius={'xl'}
						m={5}
						cursor='pointer'
						onClick={() => {
							navigate('/packages');
						}}
						transition='.2s'
						_hover={{
							boxShadow: '0 13px 15px rgb(0,0,0,0.2)',
						}}
					/>
					<Box
						h='400px'
						minW={{ base: '250px' }}
						bgImg={surf}
						bgSize='cover'
						bgPos={'50%'}
						borderRadius={'xl'}
						m={5}
						cursor='pointer'
						onClick={() => {
							navigate('/packages');
						}}
						transition='.2s'
						_hover={{
							boxShadow: '0 13px 15px rgb(0,0,0,0.2)',
						}}
					/>
					<Box
						h='400px'
						minW={{ base: '250px' }}
						bgImg={scuba}
						bgSize='cover'
						bgPos={'50%'}
						borderRadius={'xl'}
						m={5}
						cursor='pointer'
						onClick={() => {
							navigate('/packages');
						}}
						transition='.2s'
						_hover={{
							boxShadow: '0 13px 15px rgb(0,0,0,0.2)',
						}}
					/>
				</Box>
			</Box>
		</>
	);
};

export default Packages;
