import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
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
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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

const ImageSlider = () => {
	gsap.registerPlugin(ScrollTrigger);
	let f_and_e_heading_container = useRef(null);
	let fun_and_explore_card_container = useRef(null);
	const f_and_e_cards = gsap.utils.selector(fun_and_explore_card_container);
	const f_and_e_heading = gsap.utils.selector(f_and_e_heading_container);

	const animate = () => {
		gsap.from(f_and_e_heading('.f_and_e_heading'), {
			scrollTrigger: {
				trigger: f_and_e_heading_container.current,
				start: 'Top 65%',
			},
			x: -100,
			opacity: 0,
			duration: 0.8,
			delay: 0.1,
		});

		gsap.from(f_and_e_cards('.f_and_e_card'), {
			scrollTrigger: {
				trigger: fun_and_explore_card_container.current,
				start: 'Top 65%',
			},
			y: '+=100',
			stagger: 0.2,
			opacity: 0,
			ease: 'smooth_ease',
			duration: 1.5,
			delay: 0.9,
		});
	};

	useEffect(() => {
		if (window.innerWidth >= 992) {
			animate();
		}
	}, []);

	return (
		<Box
			w={{ base: '100vw', lg: '100vw' }}
			// className='show-scroll-when-scrolling'
			className='hide-scroll-bar ImageSlider'
			mb={7}
			px={{ base: '0px', lg: '9vw' }}
			ref={f_and_e_heading_container}
		>
			{/* slider heading */}
			<Box className='hide-scroll-bar f_and_e_heading'>
				<Text
					fontSize={{ base: 25, lg: 32 }}
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
				ref={fun_and_explore_card_container}
			>
				{/* card */}
				{cardsData.map((data, index) => (
					<Box
						key={index}
						bgImage={data.img}
						display='inline-block'
						bgSize='cover'
						height='450px'
						mx={5}
						w='300px'
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
							bg='linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.8) 100%)'
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
								{data.title}
							</Text>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default ImageSlider;
