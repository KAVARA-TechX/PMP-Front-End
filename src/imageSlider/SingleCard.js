import { Box, Text } from '@chakra-ui/react';
import beach from '../assets/thingsToDo/beach.webp';
import glow from '../assets/thingsToDo/glow.webp';
import house from '../assets/thingsToDo/house.webp';
import scuba from '../assets/thingsToDo/scuba-card.webp';
import spa from '../assets/thingsToDo/spa.webp';
import sunset from '../assets/thingsToDo/sunset.webp';
import surf from '../assets/thingsToDo/skiing.webp';
import surfing from '../assets/thingsToDo/Surfing.webp';

const cardsData = [
	{ title: 'Indulge in Spa', img: spa },
	{ title: 'Water Bungalow', img: house },
	{ title: 'Surfing', img: surfing },
	{ title: 'Scuba Diving', img: scuba },
	{ title: 'Stroll at a Beach', img: beach },
	{ title: 'Glowing Beach', img: glow },
	{ title: 'Enjoy Sunset Cruise', img: sunset },
	{ title: 'Water Skiing', img: surf },
];

const SingleCard = ({ currentIndex }) => {
	return (
		<Box
			bgImage={cardsData[currentIndex].img}
			display='inline-block'
			bgSize='cover'
			height='450px'
			mx={'15px'}
			w='260px'
			borderRadius={'xl'}
			position={'relative'}
			overflow='hidden'
			className='hide-scroll-bar f_and_e_card'
			transition='.2s'
			_hover={{
				boxShadow:
					'0 13px 15px rgb(0,0,0,0.4), rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset',
			}}
		>
			<Box
				w={'100%'}
				h='100%'
				bg='linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.2) 100%)'
			>
				<Text
					w='100%'
					h='100%'
					display={'flex'}
					alignItems='end'
					fontFamily={'Mansalva'}
					fontSize={'24px'}
					whiteSpace={'pre-wrap'}
					fontWeight={400}
					textAlign='center'
					pb={10}
					justifyContent={'center'}
				>
					{cardsData[currentIndex].title}
				</Text>
			</Box>
		</Box>
	);
};

export default SingleCard;
