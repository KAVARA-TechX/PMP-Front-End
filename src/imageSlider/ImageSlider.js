import { Box, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import '../style.css';
import '../index.css';
import beach from '../assets/thingsToDo/beach.webp';
import glow from '../assets/thingsToDo/glow.webp';
import house from '../assets/thingsToDo/house.webp';
import scuba from '../assets/thingsToDo/scuba-card.webp';
import spa from '../assets/thingsToDo/spa.webp';
import sunset from '../assets/thingsToDo/sunset.webp';
import surf from '../assets/thingsToDo/skiing.webp';
import surfing from '../assets/thingsToDo/Surfing.webp';
import './ImageSlider.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

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

const ImageSlider = ({ onLoad }) => {
	gsap.registerPlugin(ScrollTrigger);
	let f_and_e_heading_container = useRef(null);
	let fun_and_explore_card_container = useRef(null);
	const f_and_e_cards = gsap.utils.selector(fun_and_explore_card_container);
	const f_and_e_heading = gsap.utils.selector(f_and_e_heading_container);
	const [hide_or_show, set_hide_or_show] = useState(true);
	ScrollTrigger.refresh();

	// const animate = () => {
	// 	const windowWidth = window.innerWidth;
	// 	const padding = (windowWidth * 9) / 100;
	// 	const portion_we_can_see = windowWidth - padding * 2;
	// 	const widht_of_cards_container = 2320;
	// 	const scroll_amount = widht_of_cards_container - portion_we_can_see;
	// 	const height_of_container =
	// 		fun_and_explore_card_container.current.offsetHeight;

	// 	const stop_at = (window.innerHeight - height_of_container) / 2;

	// 	console.log(
	// 		windowWidth,
	// 		padding,
	// 		portion_we_can_see,
	// 		widht_of_cards_container,
	// 		scroll_amount,
	// 		height_of_container
	// 	);

	// 	gsap.from(f_and_e_heading('.f_and_e_heading'), {
	// 		scrollTrigger: {
	// 			trigger: f_and_e_heading_container.current,
	// 			start: 'top 85%',
	// 			end: 'top top',
	// 		},
	// 		x: -100,
	// 		opacity: 0,
	// 		duration: 0.8,
	// 		onComplete: function () {
	// 			ScrollTrigger.refresh();
	// 		},
	// 	});

	// 	gsap.from(f_and_e_heading('#scrollbar'), {
	// 		scrollTrigger: {
	// 			trigger: f_and_e_heading_container.current,
	// 			start: 'top 85%',
	// 			end: 'top top',
	// 		},
	// 		y: 100,
	// 		opacity: 0,
	// 		duration: 0.8,
	// 		delay: 0.6,
	// 		onComplete: function () {
	// 			ScrollTrigger.refresh();
	// 		},
	// 	});

	// 	gsap.to(f_and_e_cards('.f_and_e_card'), {
	// 		scrollTrigger: {
	// 			trigger: fun_and_explore_card_container.current,
	// 			start: `end ${stop_at}px`,
	// 			scrub: 0.05,
	// 			pin: '.ImageSlider',
	// 		},
	// 		x: `-=${scroll_amount}`,
	// 	});
	// };

	useEffect(() => {
		// animate();
		onLoad(true);
		set_hide_or_show(
			8 * 260 + (8 - 1) * 15 <
				fun_and_explore_card_container.current.offsetWidth
				? false
				: true
		);
	}, []);

	const rightButton = () => {
		document
			.getElementById('fun_cards_parent')
			.scrollBy({ left: 255, top: 0, behavior: 'smooth' });
	};

	const leftButton = () => {
		document
			.getElementById('fun_cards_parent')
			.scrollBy({ left: -255, top: 0, behavior: 'smooth' });
	};

	return (
		<Box
			w={{ base: '100vw', lg: '100vw' }}
			// className='show-scroll-when-scrolling'
			className='hide-scroll-bar ImageSlider'
			mb={7}
			px={{ base: '0px', lg: '9vw' }}
			ref={f_and_e_heading_container}
			// bg='green'
			position='relative'
		>
			{/* slider heading */}
			<Box className='hide-scroll-bar f_and_e_heading'>
				<Text
					fontSize={{ base: 25, lg: 32 }}
					fontWeight={700}
					mb={5}
					textAlign={{ base: 'center', lg: 'start' }}
					className='ImageSlider-heading'
					color='#141177'
				>
					Fun and Explore
				</Text>
			</Box>

			{/* icon left */}
			<Box
				id='pkg_left_icon'
				h='50px'
				w={'50px'}
				position='absolute'
				borderRadius={'full'}
				bg='rgba(20, 17, 119,.5)'
				left={{ base: '20px', lg: 'calc(9vw - 25px)' }}
				bottom='250px'
				zIndex={2}
				cursor='pointer'
				onClick={leftButton}
				_hover={{ background: 'rgba(20, 17, 119,1)' }}
				display={hide_or_show ? { lg: 'flex', base: 'none' } : 'none'}
				justifyContent={'center'}
				alignItems='center'
				color='white'
			>
				<ArrowBackIcon fontSize={'20px'} />
			</Box>
			{/* icon right */}
			<Box
				id='pkg_right_icon'
				h='50px'
				w={'50px'}
				position='absolute'
				borderRadius={'full'}
				bg='rgba(20, 17, 119,.5)'
				right={{ base: '20px', lg: 'calc(9vw - 25px)' }}
				bottom='250px'
				zIndex={2}
				cursor='pointer'
				onClick={rightButton}
				_hover={{ background: 'rgba(20, 17, 119,1)' }}
				display={hide_or_show ? { lg: 'flex', base: 'none' } : 'none'}
				justifyContent={'center'}
				alignItems='center'
				color='white'
			>
				<ArrowForwardIcon fontSize={'20px'} />
			</Box>

			{/* slider cards */}
			<Box
				as='div'
				// id='scrollbar'
				display='block'
				whiteSpace='nowrap'
				pb={10}
				color='white'
				overflowX={'scroll'}
				ref={fun_and_explore_card_container}
				id='fun_cards_parent'
				className='hide-scroll-bar'
			>
				{/* card */}
				{cardsData.map((data, index) => (
					<Box
						key={index}
						// bgImage={data.img}
						display='inline-block'
						// bgSize='cover'
						height='450px'
						mx={{ base: '15px', lg: '0px' }}
						mr={{ base: '0px', lg: '20px' }}
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
						<Image
							src={data.img}
							zIndex={1}
							objectFit='cover'
							objectPosition={'50% 50%'}
							loading='lazy'
						/>
						<Box
							position={'absolute'}
							top={0}
							bottom={0}
							left={0}
							right={0}
							bg='linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.2) 100%)'
							zIndex={5}
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
