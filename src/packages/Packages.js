import { Box, Icon, Text } from '@chakra-ui/react';
import sunset from '../assets/thingsToDo/sunset.png';
import surf from '../assets/thingsToDo/skiing.png';
import scuba from '../assets/thingsToDo/scuba.png';
import '../../node_modules/react-day-picker/dist/style.css';
import './day-picker.css';
import { useNavigate } from 'react-router-dom';
import './Packages.css';
import { useEffect, useRef, useState } from 'react';
import getPackageApi from '../apis/getPackageApi';
import { BiChevronRight } from 'react-icons/bi';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Packages = () => {
	const navigate = useNavigate();
	const [pkg, setPkg] = useState([]);
	let cardsParentRef = useRef(null);
	const pkg_heading_container = useRef(null);
	const ref_cards = gsap.utils.selector(cardsParentRef);
	const ref_pkd_heading = gsap.utils.selector(pkg_heading_container);
	gsap.registerPlugin(ScrollTrigger);

	const animateCards = () => {
		gsap.from(ref_pkd_heading('.pkg_heading_from_left'), {
			scrollTrigger: {
				trigger: pkg_heading_container.current,
				start: 'Top 65%',
			},

			x: -100,
			opacity: 0,
			duration: 0.5,
		});

		gsap.from(ref_pkd_heading('.pkg_heading_from_right'), {
			scrollTrigger: {
				trigger: pkg_heading_container.current,
				start: 'Top 65%',
			},
			x: 100,
			opacity: 0,
			duration: 0.5,
		});

		gsap.from(ref_cards('.pkg_card'), {
			scrollTrigger: {
				trigger: cardsParentRef.current,
				start: 'Top 65%',
			},
			y: 100,
			stagger: 0.3,
			opacity: 0,
			delay: 0.5,
		});
	};

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await getPackageApi();
				setPkg(res.data.packages);
				if (window.innerWidth >= 992) {
					animateCards();
				}
			} catch (error) {}
		};
		getData();
	}, []);

	return (
		<>
			<Box
				w='100vw'
				className='packages'
				px={{ base: '10px', lg: '9vw' }}
			>
				<Box
					display={'flex'}
					justifyContent='space-between'
					alignItems={'center'}
					ref={pkg_heading_container}
				>
					<Box className='pkg_heading_from_left'>
						<Text
							fontSize={{ base: 25, lg: 32 }}
							fontWeight={700}
							position='relative'
							className='packages-heading'
							cursor={'pointer'}
							onClick={() => {
								navigate('/packages');
							}}
						>
							Packages
						</Text>
						<Text
							textAlign={{ base: 'start', lg: 'start' }}
							fontSize='18px'
						>
							Discover your ideal Experience
						</Text>
					</Box>
					<Box
						bg='rgba(14, 135, 246,.7)'
						color='#fff'
						px='15px'
						py={'10px'}
						borderRadius='10px'
						display={'flex'}
						alignItems={'center'}
						gap='5px'
						transition={'.5s'}
						_hover={{
							background: 'rgba(14, 135, 246,.9)',
							svg: { transform: 'translate(5px)' },
						}}
						cursor='pointer'
						onClick={() => {
							navigate('/packages');
						}}
						className='pkg_heading_from_right'
					>
						<Text>See all packages</Text>
						<Icon
							as={BiChevronRight}
							transform='translateX(0)'
							transition={'.5s'}
						/>
					</Box>
				</Box>

				<Box
					// w={{ base: '100%', lg: '75%' }}
					as='div'
					display={'block'}
					whiteSpace='nowrap'
					// alignItems='center'
					pb='50px'
					mt='20px'
					overflowX={{ base: 'scroll', lg: 'scroll' }}
					className='hide-scroll-bar'
					ref={cardsParentRef}
					id='pkg_cards_parent'
				>
					{pkg.map((data, index) => {
						return (
							<Box
								className='pkg_card'
								key={index}
								display={'inline-block'}
								h='350px'
								w='230px'
								bgImg={
									data.image[0] === undefined
										? 'https://source.unsplash.com/random'
										: data.image[0].url
								}
								bgSize='cover'
								bgPos={'50%'}
								borderRadius={'xl'}
								mx={5}
								cursor='pointer'
								onClick={() => {
									navigate(
										`/about-package/${data.packageId}`
									);
								}}
								transition='.2s'
								_hover={{
									boxShadow: '0 13px 15px rgb(0,0,0,0.2)',
								}}
								overflow='hidden'
							>
								<Box
									w='100%'
									h='100%'
									background='none'
									_hover={{
										background:
											'linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.8) 100%)',
										p: {
											display: 'inline-block',
										},
									}}
									position='relative'
								>
									<Text
										as='p'
										display={'none'}
										w='80%'
										whiteSpace={'pre-wrap'}
										position='absolute'
										bottom={'20px'}
										left='20px'
										transform='translateX(0px)'
										transition={'.5s'}
										fontWeight={600}
									>
										{data.packageTitle}
									</Text>
								</Box>
							</Box>
						);
					})}
				</Box>
			</Box>
		</>
	);
};

export default Packages;
