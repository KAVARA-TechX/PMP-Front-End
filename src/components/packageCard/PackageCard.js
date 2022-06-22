import { CheckIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';
// import { da } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/footer.jpg';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const PackageCard = (data) => {
	const navigate = useNavigate();

	return (
		<Box
			w={'100%'}
			h={{ base: 'fit-content', lg: '400px' }}
			bg='gray.600'
			border={'1px solid rgba(255,255,255,0.1)'}
			borderRadius={'2xl'}
			mt='20px'
			display={'flex'}
			flexDir={{ base: 'column', lg: 'row' }}
			overflow='hidden'
			transition={'.5s'}
			_hover={{
				boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
			}}
		>
			{data.data.image.length === 1 ? (
				<Box
					h={{ base: '200px', lg: '100%' }}
					w={{ base: '100%', lg: '30%' }}
					bgImg={data.data.image[0].url}
					bgSize='cover'
					bgPos={'50% 50%'}
				></Box>
			) : (
				<Box
					h={{ base: '200px', lg: '100%' }}
					w={{ base: '100%', lg: '30%' }}
					// bgImg={
					// 	data.data.image.length > 0 ? data.data.image[0].url : img
					// }
					// bgSize='cover'
					// bgPos={'50% 50%'}
				>
					<Box
						position={'absolute'}
						zIndex='100000'
						fontSize={'30px '}
					>
						hiiiiii
					</Box>
					<Splide aria-label='images' className='splide-slide'>
						{data.data.image.map((data, index) => {
							return (
								<SplideSlide key={index}>
									<Box
										w='100%'
										h='400px'
										bgImage={data.url}
										bgSize={'cover'}
										bgPos='50% 50%'
									></Box>
								</SplideSlide>
							);
						})}
					</Splide>
				</Box>
			)}
			<Box
				bg='#222'
				pl='30px'
				mr={{ base: '30px', lg: '0px' }}
				pt='30px'
				display={'flex'}
				flexDir='column'
				w={{ base: '100%', lg: '40%' }}
			>
				<Text fontSize={20} fontWeight={700}>
					{data.data.packageTitle}
				</Text>
				<Text display={'flex'} alignItems='center' gap={1}></Text>
				<Box
					as='ul'
					mt={3}
					display='flex'
					flexDir={'column'}
					gap='10px'
					flexWrap={'wrap'}
					pl={5}
					pr={5}
				>
					<Text as='li' color='whiteAlpha.700'>
						{data.data.packageDetail1}
					</Text>
					{data.data.packageDetail2 === '' ? (
						<></>
					) : (
						<Text as='li' color='whiteAlpha.700'>
							{data.data.packageDetail2}
						</Text>
					)}

					{data.data.packageDetail3 === '' ? (
						<></>
					) : (
						<Text as='li' color='whiteAlpha.700'>
							{data.data.packageDetail3}
						</Text>
					)}
					{data.data.packageDetail4 === '' ||
					data.data.packageDetail4 === undefined ? (
						<></>
					) : (
						<Text as='li' color='whiteAlpha.700'>
							{data.data.packageDetail4}
						</Text>
					)}
				</Box>
				<Box flexGrow={2} mt={5} />
			</Box>
			<Box
				h='100%'
				w={{ base: '100%', lg: '30%' }}
				bg='gray.700'
				pt='30px'
				pl='30px'
				display={'flex'}
				flexDir='column'
			>
				<Text textAlign={'start'}>PACKAGE INCLUDES</Text>
				{String(data.data.inclusion)
					.split(',')
					.map((item, index) => {
						return (
							<>
								{item === '' ? (
									''
								) : (
									<Text
										textAlign={'start'}
										ml='10px'
										mt='10px'
										fontWeight={300}
										key={index}
									>
										<CheckIcon color={'green.200'} /> {item}
									</Text>
								)}
							</>
						);
					})}
				<Box flexGrow={2}></Box>
				<Box mr='30px' mb='20px' mt='30px'>
					<Text>
						<Text display={'inline-block'} color='whiteAlpha.800'>
							Starts From
						</Text>
					</Text>
					<Text
						fontSize={20}
						fontWeight={600}
						mb='15px'
						display={'flex'}
						alignItems='end'
					>
						<Text>₹{data.data.startingPrice}</Text>
						<Text fontSize={15} color='whiteAlpha.700'>
							/person
						</Text>
					</Text>
					<Box
						bg='transparent'
						border={'1px solid rgba(255,255,255,.3)'}
						// display={'inline-block'}
						fontSize={20}
						fontWeight={600}
						py={'15px'}
						textAlign='center'
						borderRadius={'xl'}
						cursor='pointer'
						_hover={{
							background: '#fff',
							color: 'rgba(0,0,0,.8)',
						}}
						onClick={() => {
							navigate(`/about-package/${data.data._id}`);
						}}
					>
						View Package
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default PackageCard;
