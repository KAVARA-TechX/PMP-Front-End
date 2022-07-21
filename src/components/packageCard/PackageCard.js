import { CheckIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';
// import { da } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/footer.jpg';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const PackageCard = ({
	data,
	fromSearchPage,
	checkInDate,
	checkOutDate,
	guests,
}) => {
	const navigate = useNavigate();

	return (
		<Box
			w={'100%'}
			h={{ base: 'fit-content', lg: '400px' }}
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
			{data.image.length === 1 ? (
				<Box
					h={{ base: '200px', lg: '100%' }}
					w={{ base: '100%', lg: '30%' }}
					bgImg={data.image[0].secure_url}
					bgSize='cover'
					bgPos={'50% 50%'}
				></Box>
			) : (
				<Box
					h={{ base: '200px', lg: '100%' }}
					w={{ base: '100%', lg: '30%' }}
				>
					<Splide aria-label='images' className='splide-slide'>
						{data.image.map((data, index) => {
							return (
								<SplideSlide key={index}>
									{data.resource_type === 'video' ? (
										<Box
											w='100%'
											h={{ base: '200px', lg: '400px' }}
											dangerouslySetInnerHTML={{
												__html: `<video
												autoplay
												muted
												loop
												style="
													height: 100%;
													width: 100%;
													object-fit: cover;
												"
											>
												<source src=${data.secure_url} />
											</video>`,
											}}
										></Box>
									) : (
										<Box
											w='100%'
											h={{ base: '200px', lg: '400px' }}
											bgImage={data.secure_url}
											bgSize={'cover'}
											bgPos='50% 50%'
										></Box>
									)}
								</SplideSlide>
							);
						})}
					</Splide>
				</Box>
			)}
			<Box
				bg='transparent'
				pl='30px'
				mr={{ base: '30px', lg: '0px' }}
				pt='30px'
				display={{ base: 'none', lg: 'flex' }}
				flexDir='column'
				w={{ base: '100%', lg: '40%' }}
			>
				<Text fontSize={20} fontWeight={700}>
					{data.packageTitle}
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
					<Text as='li'>{data.packageDetail1}</Text>
					{data.packageDetail2 === '' ? (
						<></>
					) : (
						<Text as='li'>{data.packageDetail2}</Text>
					)}

					{data.packageDetail3 === '' ? (
						<></>
					) : (
						<Text as='li'>{data.packageDetail3}</Text>
					)}
					{data.packageDetail4 === '' ||
					data.packageDetail4 === undefined ? (
						<></>
					) : (
						<Text as='li'>{data.packageDetail4}</Text>
					)}
				</Box>
				<Box flexGrow={2} mt={5} />
			</Box>
			<Box
				h={{ base: 'fit-content', lg: '400px' }}
				w={{ base: '100%', lg: '30%' }}
				bg='gray.700'
				pt='30px'
				pl='30px'
				pr='30px'
				display={'flex'}
				flexDir='column'
				color='#fff'
			>
				<Box display={{ base: 'none', lg: 'inline-block' }}>
					<Text textAlign={'start'}>PACKAGE INCLUDES</Text>
				</Box>
				<Box display={{ base: 'inline-block', lg: 'none' }}>
					<Text textAlign={'start'} fontWeight={600}>
						{data.packageTitle}
					</Text>
				</Box>
				<Box display={'flex'} flexWrap='wrap'>
					{String(data.inclusion)
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
											<CheckIcon color={'green.200'} />{' '}
											{item}
										</Text>
									)}
								</>
							);
						})}
				</Box>
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
						<Text>₹{data.startingPrice}</Text>
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
							if (fromSearchPage) {
								navigate(`/about-package/${data.packageId}`, {
									state: {
										checkInDate: checkInDate,
										checkOutDate: checkOutDate,
										guests: guests,
									},
								});
							} else {
								navigate(`/about-package/${data.packageId}`);
							}
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
