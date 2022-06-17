import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import '../style.css';
import '../index.css';
import beach from '../assets/thingsToDo/beach.png';
import glow from '../assets/thingsToDo/glow.png';
import house from '../assets/thingsToDo/house.png';
import scuba from '../assets/thingsToDo/scuba.png';
import spa from '../assets/thingsToDo/spa.png';
import sunset from '../assets/thingsToDo/sunset.png';
import surf from '../assets/thingsToDo/skiing.png';
import surfing from '../assets/thingsToDo/Surfing.png';
import './ImageSlider.css';

const ImageSlider = () => {
	return (
		<Box
			w={{ base: '100vw', lg: '100vw' }}
			// className='show-scroll-when-scrolling'
			className='hide-scroll-bar ImageSlider'
			mb={7}
			px='5.7%'
		>
			{/* slider heading */}
			<Box className='hide-scroll-bar'>
				<Text
					fontSize={{ base: 25, lg: 40 }}
					fontWeight={700}
					mb={5}
					textAlign={{ base: 'center', lg: 'start' }}
					className='ImageSlider-heading'
				>
					Fun and Explore
				</Text>
			</Box>
			{/* slider cards */}
			<Box
				as='div'
				id='scrollbar'
				// overflowX={'scroll'}
				// overflowY='hidden'
				display='block'
				whiteSpace='nowrap'
				pb={10}
				color='white'
				className='show-scroll-when-scrolling'
			>
				{/* card */}
				<Box
					bgImage={spa}
					display='inline-block'
					bgSize='cover'
					height='450px'
					mx={5}
					w='300px'
					borderRadius={'xl'}
					position={'relative'}
					overflow='hidden'
					className='hide-scroll-bar'
					transition='.2s'
					_hover={{
						boxShadow:
							'0 13px 15px rgb(0,0,0,0.4), rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset',
					}}
				>
					<Box
						w={'100%'}
						h='100%'
						bg='linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.8) 100%)'
					>
						<Text
							w='100%'
							h='100%'
							display={'flex'}
							alignItems='end'
							fontSize={27}
							whiteSpace={'pre-wrap'}
							textAlign='start'
							mx={'5px'}
							fontWeight={700}
							pb={10}
							pl='10px'
						>
							Indulge in Spa
						</Text>
					</Box>
				</Box>

				<Box
					bgImage={house}
					display='inline-block'
					bgSize='cover'
					height='450px'
					mx={5}
					w='300px'
					borderRadius={'xl'}
					position={'relative'}
					overflow='hidden'
					className='hide-scroll-bar'
					transition='0.5s'
					_hover={{
						boxShadow:
							'0 13px 15px rgb(0,0,0,0.4), rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset',
					}}
				>
					<Box
						w={'100%'}
						h='100%'
						bg='linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.8) 100%)'
					>
						<Text
							w='100%'
							h='100%'
							display={'flex'}
							alignItems='end'
							fontSize={27}
							whiteSpace={'pre-wrap'}
							textAlign='center'
							mx={'5px'}
							fontWeight={700}
							pb={10}
							pl='10px'
						>
							Water Bungalow
						</Text>
					</Box>
				</Box>

				<Box
					bgImage={surfing}
					bgSize='cover'
					height='450px'
					display='inline-block'
					mx={5}
					w='300px'
					borderRadius={'xl'}
					position={'relative'}
					overflow='hidden'
					className='hide-scroll-bar'
					transition='.2s'
					_hover={{
						boxShadow:
							'0 13px 15px rgb(0,0,0,0.4), rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset',
					}}
				>
					<Box
						w={'100%'}
						h='100%'
						bg='linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.8) 100%)'
					>
						<Text
							w='100%'
							h='100%'
							display={'flex'}
							alignItems='end'
							fontSize={27}
							mx={'5px'}
							fontWeight={700}
							pb={10}
							pl='10px'
						>
							Surfing
						</Text>
					</Box>
				</Box>

				<Box
					bgImage={scuba}
					display='inline-block'
					bgSize='cover'
					height='450px'
					mx={5}
					w='300px'
					borderRadius={'xl'}
					position={'relative'}
					overflow='hidden'
					className='hide-scroll-bar'
					transition='0.5s'
					_hover={{
						boxShadow:
							'0 13px 15px rgb(0,0,0,0.4), rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset',
					}}
				>
					<Box
						w={'100%'}
						h='100%'
						bg='linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.8) 100%)'
					>
						<Text
							w='100%'
							h='100%'
							display={'flex'}
							alignItems='end'
							fontSize={27}
							whiteSpace={'pre-wrap'}
							textAlign='center'
							mx={'5px'}
							fontWeight={700}
							pb={10}
							pl='10px'
						>
							Scuba Diving
						</Text>
					</Box>
				</Box>

				<Box
					bgImage={beach}
					display='inline-block'
					bgSize='cover'
					height='450px'
					mx={5}
					w='300px'
					borderRadius={'xl'}
					position={'relative'}
					overflow='hidden'
					className='hide-scroll-bar'
					transition='0.5s'
					_hover={{
						boxShadow:
							'0 13px 15px rgb(0,0,0,0.4), rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset',
					}}
				>
					<Box
						w={'100%'}
						h='100%'
						bg='linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.8) 100%)'
					>
						<Text
							w='100%'
							h='100%'
							display={'flex'}
							alignItems='end'
							fontSize={27}
							whiteSpace={'pre-wrap'}
							textAlign='center'
							mx={'5px'}
							fontWeight={700}
							pb={10}
							pl='10px'
						>
							Stroll at a Beach
						</Text>
					</Box>
				</Box>

				<Box
					bgImage={glow}
					display='inline-block'
					bgSize='cover'
					height='450px'
					mx={5}
					w='300px'
					borderRadius={'xl'}
					position={'relative'}
					overflow='hidden'
					className='hide-scroll-bar'
					transition='0.5s'
					_hover={{
						boxShadow:
							'0 13px 15px rgb(0,0,0,0.4), rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset',
					}}
				>
					<Box
						w={'100%'}
						h='100%'
						bg='linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.8) 100%)'
					>
						<Text
							w='100%'
							h='100%'
							display={'flex'}
							alignItems='end'
							fontSize={27}
							whiteSpace={'pre-wrap'}
							textAlign='center'
							mx={'5px'}
							fontWeight={700}
							pb={10}
							pl='10px'
						>
							Glowing Beach
						</Text>
					</Box>
				</Box>

				<Box
					bgImage={sunset}
					display='inline-block'
					bgSize='cover'
					bgPos={'50% 50%'}
					height='450px'
					mx={5}
					w='300px'
					borderRadius={'xl'}
					position={'relative'}
					overflow='hidden'
					className='hide-scroll-bar'
					transition='.2s'
					_hover={{
						boxShadow:
							'0 13px 15px rgb(0,0,0,0.4), rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset',
					}}
				>
					<Box
						w={'100%'}
						h='100%'
						bg='linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.8) 100%)'
					>
						<Text
							w='100%'
							h='100%'
							display={'flex'}
							alignItems='end'
							fontSize={27}
							whiteSpace={'pre-wrap'}
							textAlign='center'
							mx={'5px'}
							fontWeight={700}
							pb={10}
							pl='10px'
						>
							Enjoy Sunset Cruise
						</Text>
					</Box>
				</Box>
				<Box
					bgImage={surf}
					display='inline-block'
					bgSize='cover'
					height='450px'
					mx={5}
					w='300px'
					borderRadius={'xl'}
					position={'relative'}
					overflow='hidden'
					className='hide-scroll-bar'
					transition='.2s'
					_hover={{
						boxShadow:
							'0 13px 15px rgb(0,0,0,0.4), rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset',
					}}
				>
					<Box
						w={'100%'}
						h='100%'
						bg='linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.8) 100%)'
					>
						<Text
							w='100%'
							h='100%'
							display={'flex'}
							alignItems='end'
							fontSize={27}
							mx={'5px'}
							fontWeight={700}
							pb={10}
							pl='10px'
						>
							Water Skiing
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default ImageSlider;
