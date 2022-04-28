import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import './style.css';
import beach from '../assets/thingsToDo/beach.webp';
import glow from '../assets/thingsToDo/glow.webp';
import house from '../assets/thingsToDo/house.webp';
import scuba from '../assets/thingsToDo/scuba.webp';
import spa from '../assets/thingsToDo/spa.webp';
import sunset from '../assets/thingsToDo/sunset.webp';
import surf from '../assets/thingsToDo/surf.webp';
import surfing from '../assets/thingsToDo/surfing.webp';

const ImageSlider = () => {
	return (
		<Box
			w={{ base: '100vw', lg: '80vw' }}
			mx='auto'
			className='show-scroll-when-scrolling'
		>
			{/* slider heading */}
			<Box>
				<Text
					fontSize={30}
					fontWeight={600}
					color='rgba(0,0,0,.6)'
					mb={5}
					textAlign={{ base: 'center', lg: 'start' }}
				>
					Visit Maldives
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
				// className='show-scroll-when-scrolling'
			>
				{/* card */}
				<Box
					bgImage={beach}
					display='inline-block'
					bgSize='cover'
					height='500px'
					mx={5}
					w='300px'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2)'
					position={'relative'}
				>
					<Text
						w='100%'
						bg='rgba(0,0,0,.1)'
						left='50%'
						top='50%'
						position={'absolute'}
						transform='translate(-50%,-50%)'
						textAlign={'center'}
						fontSize={30}
						fontWeight={800}
						whiteSpace='pre-wrap'
						textTransform={'uppercase'}
						px={'5px'}
					>
						Stroll at Hulhumale Beach
					</Text>
				</Box>
				<Box
					bgImage={glow}
					display='inline-block'
					bgSize='cover'
					height='500px'
					mx={5}
					w='300px'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2)'
					position={'relative'}
				>
					<Text
						w='100%'
						bg='rgba(0,0,0,.1)'
						left='50%'
						top='50%'
						position={'absolute'}
						transform='translate(-50%,-50%)'
						textAlign={'center'}
						fontSize={30}
						fontWeight={800}
						whiteSpace='pre-wrap'
						textTransform={'uppercase'}
						px={'5px'}
					>
						Glowing Beach on Vaadhoo Island
					</Text>
				</Box>
				<Box
					bgImage={house}
					display='inline-block'
					bgSize='cover'
					height='500px'
					mx={5}
					w='300px'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2)'
					position={'relative'}
				>
					<Text
						w='100%'
						bg='rgba(0,0,0,.1)'
						left='50%'
						top='50%'
						position={'absolute'}
						transform='translate(-50%,-50%)'
						textAlign={'center'}
						fontSize={30}
						fontWeight={800}
						whiteSpace='pre-wrap'
						textTransform={'uppercase'}
						px={'5px'}
					>
						Stay in a Overwater Bungalow like Six Senses Laamu
					</Text>
				</Box>
				<Box
					bgImage={scuba}
					display='inline-block'
					bgSize='cover'
					height='500px'
					mx={5}
					w='300px'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2)'
					position={'relative'}
				>
					<Text
						w='100%'
						bg='rgba(0,0,0,.1)'
						left='50%'
						top='50%'
						position={'absolute'}
						transform='translate(-50%,-50%)'
						textAlign={'center'}
						fontSize={30}
						fontWeight={800}
						whiteSpace='pre-wrap'
						textTransform={'uppercase'}
						px={'5px'}
					>
						Scuba Diving at Maaya Thila
					</Text>
				</Box>
				<Box
					bgImage={spa}
					display='inline-block'
					bgSize='cover'
					height='500px'
					mx={5}
					w='300px'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2)'
					position={'relative'}
				>
					<Text
						w='100%'
						bg='rgba(0,0,0,.1)'
						left='50%'
						top='50%'
						position={'absolute'}
						transform='translate(-50%,-50%)'
						textAlign={'center'}
						fontSize={30}
						fontWeight={800}
						whiteSpace='pre-wrap'
						textTransform={'uppercase'}
						px={'5px'}
					>
						Indulge in Spa Treatment at Adaaran Prestige Vadoo
					</Text>
				</Box>
				<Box
					bgImage={sunset}
					display='inline-block'
					bgSize='cover'
					bgPos={'50% 50%'}
					height='500px'
					mx={5}
					w='300px'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2)'
					position={'relative'}
				>
					<Text
						w='100%'
						bg='rgba(0,0,0,.1)'
						left='50%'
						top='50%'
						position={'absolute'}
						transform='translate(-50%,-50%)'
						textAlign={'center'}
						fontSize={30}
						fontWeight={800}
						whiteSpace='pre-wrap'
						textTransform={'uppercase'}
						px={'5px'}
					>
						Enjoy Sunset Cruise
					</Text>
				</Box>
				<Box
					bgImage={surf}
					display='inline-block'
					bgSize='cover'
					height='500px'
					mx={5}
					w='300px'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2)'
					position={'relative'}
				>
					<Text
						w='100%'
						bg='rgba(0,0,0,.1)'
						left='50%'
						top='50%'
						position={'absolute'}
						transform='translate(-50%,-50%)'
						textAlign={'center'}
						fontSize={30}
						fontWeight={800}
						whiteSpace='pre-wrap'
						textTransform={'uppercase'}
						px={'5px'}
					>
						Water Skiing
					</Text>
				</Box>
				<Box
					bgImage={surfing}
					bgSize='cover'
					height='500px'
					display='inline-block'
					mx={5}
					w='300px'
					borderRadius={'xl'}
					boxShadow='0 3px 10px rgb(0,0,0,0.2)'
					position={'relative'}
				>
					<Text
						w='100%'
						bg='rgba(0,0,0,.1)'
						left='50%'
						top='50%'
						position={'absolute'}
						transform='translate(-50%,-50%)'
						textAlign={'center'}
						fontSize={30}
						fontWeight={800}
						whiteSpace='pre-wrap'
						textTransform={'uppercase'}
						px={'5px'}
					>
						Surfing
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default ImageSlider;
