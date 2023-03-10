import { Box, Text } from '@chakra-ui/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import './Facts.css';
import getFactsImageApi from '../apis/getFactsImageApi';

const Facts = () => {
	const container_ref = useRef(null);
	const container = gsap.utils.selector(container_ref);
	const [media, set_media] = useState(null);
	const [type, set_type] = useState(null);

	const animate = () => {
		gsap.from(container('.facts_img'), {
			x: -100,
			opacity: 0,
			duration: 1,
			delay: 0.5,
		});

		gsap.from(container('.facts_data'), {
			x: +100,
			opacity: 0,
			duration: 1,
			delay: 0.5,
		});

		gsap.from(
			[
				container('#fact-n1'),
				container('#fact-n2'),
				container('#fact-n3'),
				container('#fact-n4'),
			],
			{
				textContent: 0,
				duration: 4,
				ease: 'Power1.easeIn',
				snap: { textContent: 1 },
				// stagger: 1,
				delay: 1.5,
			}
		);
	};

	useEffect(() => {
		const getData = async () => {
			if (sessionStorage.getItem('fd')) {
				set_media(JSON.parse(sessionStorage.getItem('fd')));
				set_type(
					JSON.parse(sessionStorage.getItem('fd')).resource_type
				);
			} else {
				try {
					const res = await getFactsImageApi();
					set_media(
						res.data.factImages.length === 0
							? null
							: res.data.factImages[0].imageUrl
					);

					if (res.data.factImages.length !== 0) {
						sessionStorage.setItem(
							'fd',
							JSON.stringify(res.data.factImages[0].imageUrl)
						);
					}
					set_type(
						res.data.factImages.length === 0
							? null
							: res.data.factImages[0].imageUrl.resource_type
					);
				} catch (error) {}
			}
		};

		if (window.innerWidth <= 991) {
		} else {
			getData();
		}

		animate();
	}, []);

	return (
		<Box
			w='100vw'
			h='fit-content'
			display='flex'
			mt={{ base: '100px', lg: '100px' }}
			mb={10}
			className='facts'
			px={{ base: '20px', lg: '9vw' }}
			gap={{ base: 0, lg: '20px' }}
			ref={container_ref}
		>
			{window.innerWidth <= 991 ? (
				<></>
			) : type === 'video' ? (
				<Box
					className='facts_img'
					w={{ base: '0%', lg: '45%' }}
					mb={10}
					borderRadius='20px'
					overflow='hidden'
					dangerouslySetInnerHTML={{
						__html: `<video class='facts_video' loop autoPlay playsinline muted="true" id='facts_video'>
						<source
							src=${media === null ? '' : media.secure_url}
						></source>
					</video>`,
					}}
				></Box>
			) : (
				<>
					<Box
						className='facts_img'
						w={{ base: '0%', lg: '45%' }}
						mb={10}
						borderRadius='20px'
						bgImage={media === null ? '' : media.url}
						bgSize='cover'
						bgPosition={'50% 50%'}
						overflow='hidden'
					></Box>
				</>
			)}
			<Box
				w={{ base: '100%', lg: '35.57%' }}
				h='fit-content'
				flexGrow={1}
				className='facts_data'
			>
				<Box ml={{ lg: 5 }}>
					<Text fontSize={18} fontWeight={500} mb={1}>
						Plan My Leisure
					</Text>
					<Text
						fontSize={32}
						fontWeight={800}
						lineHeight={1}
						mb={5}
						className='facts-heading'
						color='#090841'
					>
						We help you find your dream vacation
					</Text>
					<Text
						lineHeight={1.4}
						textAlign='start'
						fontSize={16}
						// pr={{ base: '', lg: '10px' }}
					>
						We make sure you enjoy your leisure to the fullest .
						Over the years, we have helped more than 10000
						travellers find the perfect holiday package to their
						favourite holiday destinations.
					</Text>
				</Box>
				<Box
					mx={10}
					display={'grid'}
					gridTemplateColumns='repeat(2,1fr)'
					gap={0}
				>
					<Box
						height={{ base: '100px', lg: '150px' }}
						display='flex'
						flexDir={'column'}
						justifyContent={'center'}
						alignItems='center'
						position={'relative'}
					>
						<Text
							fontSize={38}
							fontWeight={600}
							color='#090841'
							display={'flex'}
							gap='2px'
						>
							<Text id='fact-n1'>100</Text>+
						</Text>
						<Text>Holiday Packages</Text>
					</Box>
					<Box
						height={{ base: '100px', lg: '150px' }}
						display='flex'
						flexDir={'column'}
						justifyContent={'center'}
						alignItems='center'
						position={'relative'}
					>
						<Text
							fontSize={38}
							fontWeight={600}
							color='#090841'
							display={'flex'}
							gap='2px'
						>
							<Text id='fact-n2'>2000</Text>+
						</Text>
						<Text>Travellers</Text>
					</Box>
					<Box
						height={{ base: '150px', lg: '200px' }}
						display='flex'
						flexDir={'column'}
						justifyContent={'center'}
						alignItems='center'
						position={'relative'}
					>
						<Text
							fontSize={38}
							fontWeight={600}
							color='#090841'
							display={'flex'}
							gap='2px'
						>
							<Text id='fact-n3'>15</Text>+
						</Text>
						<Text>Destinations</Text>
					</Box>
					<Box
						height={{ base: '150px', lg: '200px' }}
						display='flex'
						flexDir={'column'}
						justifyContent={'center'}
						alignItems='center'
						position={'relative'}
					>
						<Text
							fontSize={38}
							fontWeight={600}
							color='#090841'
							display={'flex'}
							gap='2px'
						>
							<Text id='fact-n4'>1500</Text>+
						</Text>
						<Text>Satisfied Clients</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default React.memo(Facts);
