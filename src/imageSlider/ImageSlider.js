import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import '../style.css';
import '../index.css';
import beach from '../assets/thingsToDo/beach.png';
import glow from '../assets/thingsToDo/glow.png';
import house from '../assets/thingsToDo/house.png';
import scuba from '../assets/thingsToDo/scuba.png';
import spa from '../assets/thingsToDo/spa.png';
import sunset from '../assets/thingsToDo/sunset.webp';
import surf from '../assets/thingsToDo/surf.webp';
import surfing from '../assets/thingsToDo/surfing.webp';

const ImageSlider = () => {
	return (
		<Box
			w={{ base: '100vw', lg: '80vw' }}
			mx='auto'
			// className='show-scroll-when-scrolling'
			className='hide-scroll-bar'
		>
			{/* slider heading */}
			<Box className='hide-scroll-bar'>
				<Text
					fontSize={30}
					fontWeight={600}
					mb={5}
					textAlign={{ base: 'center', lg: 'start' }}
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
					bgImage={beach}
					display='inline-block'
					bgSize='cover'
					height='400px'
					mx={5}
					w='250px'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2), rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
					position={'relative'}
					overflow='hidden'
					className='hide-scroll-bar'
				>
					<Text
						w='100%'
						h='100%'
						display={'flex'}
						alignItems='end'
						fontSize={27}
						justifyContent='center'
						whiteSpace={'pre-wrap'}
						textAlign='center'
						mx={'5px'}
					>
						Stroll at Hulhumale Beach
					</Text>
				</Box>
				<Box
					bgImage={glow}
					display='inline-block'
					bgSize='cover'
					height='400px'
					mx={5}
					w='250px'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2), rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
					position={'relative'}
					overflow='hidden'
					className='hide-scroll-bar'
				>
					<Text
						w='100%'
						h='100%'
						display={'flex'}
						alignItems='end'
						fontSize={27}
						justifyContent='center'
						whiteSpace={'pre-wrap'}
						textAlign='center'
						mx={'5px'}
					>
						Glowing Beach on Vaadhoo Island
					</Text>
				</Box>
				<Box
					bgImage={house}
					display='inline-block'
					bgSize='cover'
					height='400px'
					mx={5}
					w='250px'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2), rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
					position={'relative'}
					overflow='hidden'
					className='hide-scroll-bar'
				>
					<Text
						w='100%'
						h='100%'
						display={'flex'}
						alignItems='end'
						fontSize={27}
						justifyContent='center'
						whiteSpace={'pre-wrap'}
						textAlign='center'
						mx={'5px'}
					>
						Overwater Bungalow
					</Text>
				</Box>
				<Box
					bgImage={scuba}
					display='inline-block'
					bgSize='cover'
					height='400px'
					mx={5}
					w='250px'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2), rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
					position={'relative'}
					overflow='hidden'
					className='hide-scroll-bar'
				>
					<Text
						w='100%'
						h='100%'
						display={'flex'}
						alignItems='end'
						fontSize={27}
						justifyContent='center'
						whiteSpace={'pre-wrap'}
						textAlign='center'
						mx={'5px'}
					>
						Scuba Diving
					</Text>
				</Box>
				<Box
					bgImage={spa}
					display='inline-block'
					bgSize='cover'
					height='400px'
					mx={5}
					w='250px'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2), rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
					position={'relative'}
					overflow='hidden'
					className='hide-scroll-bar'
				>
					<Text
						w='100%'
						h='100%'
						display={'flex'}
						alignItems='end'
						fontSize={27}
						justifyContent='center'
						whiteSpace={'pre-wrap'}
						textAlign='center'
						mx={'5px'}
					>
						Indulge in Spa Treatment
					</Text>
				</Box>
				<Box
					bgImage={sunset}
					display='inline-block'
					bgSize='cover'
					bgPos={'50% 50%'}
					height='400px'
					mx={5}
					w='250px'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2), rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
					position={'relative'}
					overflow='hidden'
					className='hide-scroll-bar'
				>
					<Text
						w='100%'
						h='100%'
						display={'flex'}
						alignItems='end'
						fontSize={27}
						justifyContent='center'
						whiteSpace={'pre-wrap'}
						textAlign='center'
						mx={'5px'}
					>
						Enjoy Sunset Cruise
					</Text>
				</Box>
				<Box
					bgImage={surf}
					display='inline-block'
					bgSize='cover'
					height='400px'
					mx={5}
					w='250px'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2), rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
					position={'relative'}
					overflow='hidden'
					className='hide-scroll-bar'
				>
					<Text
						w='100%'
						h='100%'
						display={'flex'}
						alignItems='end'
						fontSize={27}
						justifyContent='center'
						mx={'5px'}
					>
						Water Skiing
					</Text>
				</Box>
				<Box
					bgImage={surfing}
					bgSize='cover'
					height='400px'
					display='inline-block'
					mx={5}
					w='250px'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2), rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
					position={'relative'}
					overflow='hidden'
					className='hide-scroll-bar'
				>
					<Text
						w='100%'
						h='100%'
						display={'flex'}
						alignItems='end'
						fontSize={27}
						justifyContent='center'
						mx={'5px'}
					>
						Surfing
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default ImageSlider;
