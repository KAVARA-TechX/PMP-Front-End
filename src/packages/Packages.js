import { Box, Icon, Text } from '@chakra-ui/react';
import '../../node_modules/react-day-picker/dist/style.css';
import './day-picker.css';
import { useNavigate } from 'react-router-dom';
import './Packages.css';
import React, { useEffect, useRef, useState } from 'react';
import getPackageApi from '../apis/getPackageApi';
import { BiChevronRight } from 'react-icons/bi';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const Packages = () => {
	const navigate = useNavigate();
	const [pkg, setPkg] = useState([]);
	let cardsParentRef = useRef(null);
	const pkg_heading_container = useRef(null);
	const mainContainer = useRef(null);
	const [hide_or_show, set_hide_or_show] = useState(true);

	useEffect(() => {
		const getData = async () => {
			if (sessionStorage.getItem('home_package_list')) {
				console.log('yeeee list is present');
				setPkg(JSON.parse(sessionStorage.getItem('home_package_list')));
				set_hide_or_show(
					pkg.length * 255 + (pkg.length - 1) * 15 <
						cardsParentRef.current.offsetWidth
						? false
						: true
				);
			} else {
				console.log('nooooo it is not here');
				try {
					const res = await getPackageApi(8, 1);
					setPkg(res.data.packages);
					sessionStorage.setItem(
						'home_package_list',
						JSON.stringify(res.data.packages)
					);
					// animateCards();
					set_hide_or_show(
						pkg.length * 255 + (pkg.length - 1) * 15 <
							cardsParentRef.current.offsetWidth
							? false
							: true
					);
				} catch (error) {}
			}
		};
		getData();
	}, []);

	const rightButton = () => {
		document
			.getElementById('pkg_cards_parent')
			.scrollBy({ left: 255, top: 0, behavior: 'smooth' });
	};

	const leftButton = () => {
		document
			.getElementById('pkg_cards_parent')
			.scrollBy({ left: -255, top: 0, behavior: 'smooth' });
	};

	return (
		<>
			<Box
				w='100vw'
				className='packages'
				px={{ base: '20px', lg: '9vw' }}
				position='relative'
				mb='50px'
				ref={mainContainer}
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
							color='#141177'
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
						bg='rgba(20, 17, 119,.7)'
						color='#fff'
						px='15px'
						py={'10px'}
						borderRadius='10px'
						display={'flex'}
						alignItems={'center'}
						gap='5px'
						transition={'.5s'}
						_hover={{
							background: 'rgba(20, 17, 119,.9)',
							svg: { transform: 'translate(5px)' },
						}}
						cursor='pointer'
						onClick={() => {
							navigate('/packages');
						}}
						className='pkg_heading_from_right'
					>
						<Text>
							{window.innerWidth < 992
								? 'See all'
								: 'See all packages'}
						</Text>
						<Icon
							as={BiChevronRight}
							transform='translateX(0)'
							transition={'.5s'}
						/>
					</Box>
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
					bottom='185px'
					zIndex={2}
					cursor='pointer'
					onClick={leftButton}
					_hover={{ background: 'rgba(20, 17, 119,1)' }}
					display={hide_or_show ? 'flex' : 'none'}
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
					bottom='185px'
					zIndex={2}
					cursor='pointer'
					onClick={rightButton}
					_hover={{ background: 'rgba(20, 17, 119,1)' }}
					display={hide_or_show ? 'flex' : 'none'}
					justifyContent={'center'}
					alignItems='center'
					color='white'
				>
					<ArrowForwardIcon fontSize={'20px'} />
				</Box>

				<Box
					as='div'
					display={'block'}
					whiteSpace='nowrap'
					mt='20px'
					overflowX={{ base: 'scroll', lg: 'scroll' }}
					className='hide-scroll-bar'
					ref={cardsParentRef}
					id='pkg_cards_parent'
					color='#fff'
				>
					{pkg.map((data, index) => {
						return (
							<Box
								className='pkg_card'
								key={index}
								display={'inline-block'}
								h='370px'
								w='255px'
								bgImg={
									data.image[0] === undefined
										? 'https://source.unsplash.com/random'
										: data.image[0].secure_url
								}
								bgSize='cover'
								bgPos={'50%'}
								borderRadius={'xl'}
								mr={index === pkg.length - 1 ? 0 : '15px'}
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

export default React.memo(Packages);
