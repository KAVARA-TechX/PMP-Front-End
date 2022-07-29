import { Box, Text, Icon, Image } from '@chakra-ui/react';
import { BiChevronRight } from 'react-icons/bi';
import React, { useEffect, useRef, useState } from 'react';
import UserForm from '../modal/UserForm';
import getBannerApi from '../apis/getBannerApi';
import bannerImg from '../assets/Visit Maldives.webp';

const Banner = () => {
	const [modalState, setModalState] = useState(false);
	const banner_container = useRef(null);
	const [media, set_media] = useState(null);
	const [quote, set_quote] = useState(null);
	const [type, set_type] = useState(null);

	useEffect(() => {
		// get banner image data
		const getData = async () => {
			try {
				const res = await getBannerApi();
				set_media(res.data.bannerImages[0].imageUrl);
				console.log('media is : ', res.data.bannerImages[0].imageUrl);
				set_quote(res.data.bannerImages[0].quote);
				set_type(res.data.bannerImages[0].imageUrl.resource_type);
			} catch (error) {}
		};
		if (window.innerWidth <= 991) {
			set_quote('Visit Maldives: A Fantasy Fulfilled');
		} else {
			getData();
		}
	}, []);
	return (
		<>
			<UserForm state={modalState} setState={setModalState} />
			<Box px={{ base: '0px', lg: '9vw' }} ref={banner_container}>
				<Box
					w={{ base: '100vw', lg: '100%' }}
					h={{ base: '350px', lg: '250px' }}
					display={'flex'}
					borderRadius={{ base: 'none', lg: 'xl' }}
					overflow={'hidden'}
					mb={'50px'}
					flexDir={{ base: 'column', lg: 'row' }}
					position='relative'
					className='banner'
				>
					{window.innerWidth <= 991 ? (
						<Image
							src={bannerImg}
							h='100%'
							w='100%'
							objectFit='cover'
							objectPosition={'50% 50%'}
						></Image>
					) : type === 'video' ? (
						<Box
							w={{ base: '100%', lg: '100%' }}
							borderRadius={{ base: 'none', lg: 'xl' }}
							overflow='hidden'
							h='100%'
							// className='banner'
							dangerouslySetInnerHTML={{
								__html: `<video
								autoplay
								muted
								loop
								playsinline
								style="
									height: 100%;
									width: 100%;
									object-fit: cover;
									object-position: center;
								"
							>
								<source src=${media ? media.secure_url : ''} />
							</video>`,
							}}
						></Box>
					) : (
						<Box
							w={{ base: '100%', lg: '100%' }}
							h='100%'
							bgImage={media ? media.secure_url : ''}
							bgSize={'cover'}
							bgPosition='left'
							className='banner'
						></Box>
					)}
					<Box
						w='100%'
						h='100%'
						bg={{
							base: 'linear-gradient(0deg, #263646 0.85%, rgba(196, 196, 196, 0) 68.47%)',
							lg: 'linear-gradient(270deg, #263646 0.85%, rgba(196, 196, 196, 0) 68.47%)',
						}}
						position='absolute'
						borderRadius={{ base: 'none', lg: 'xl' }}
					>
						<Box
							position={'absolute'}
							top='50%'
							transform={{
								base: 'translateX(50%) translateY(-50%)',
								lg: 'translateY(-50%)',
							}}
							right={{ base: '50%', lg: '10%' }}
							display={'flex'}
							flexDir='column'
							alignItems={'center'}
							width={{ base: '90%', lg: '30%' }}
						>
							<Box display={'flex'} justifyContent='center'>
								<Text
									fontFamily={'Mansalva'}
									textAlign='center'
									fontSize={35}
									fontWeight={700}
									whiteSpace='wrap'
									color='#fff'
									// w={{ base: '', lg: '55%' }}
								>
									{quote}
									{/* Visit Maldives <br /> A Fantasy Fulfilled */}
								</Text>
							</Box>
							<Box
								bg='rgba(20, 17, 119,.7)'
								py={3}
								px={5}
								w='fit-content'
								borderRadius={'xl'}
								cursor='pointer'
								mt={5}
								onClick={() => {
									setModalState(true);
								}}
								textAlign='center'
								color='#fff'
								fontWeight={600}
								transition={'.5s'}
								transform='translate(0)'
								display='flex'
								alignItems={'center'}
								_hover={{
									background: 'rgba(20, 17, 119,.9)',
									svg: { transform: 'translate(5px)' },
								}}
							>
								<Text>Customize your trip</Text>
								<Icon as={BiChevronRight} fontSize='20px' />
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default React.memo(Banner);
