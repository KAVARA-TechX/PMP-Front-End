import { Box, Image, Text } from '@chakra-ui/react';
import clipboard from '../assets/icons/clipboard-text.png';
import message from '../assets/icons/messages.png';
import cardtick from '../assets/icons/card-tick.png';
import { ReactComponent as EasyPricing } from '../assets/icons/hand-holding-dollar-solid.svg';
// import x7 from '../assets/icons/24x7.svg';
// import allRounder from '../assets/icons/allRound.svg';
// import easyPrice from '../assets/icons/easyPrice.svg';
// import oneStopShop from '../assets/icons/oneStopShop.svg';

const IconSection = () => {
	return (
		<Box
			w='100vw'
			h={{ base: 'fit-content', lg: '360px' }}
			bg='rgba(14, 135, 246,.25)'
			px={{ base: '10px', lg: '9vw' }}
			mb={10}
			display={'flex'}
			alignItems='center'
			justifyContent={'center'}
			py={{ base: '30px', lg: 'none' }}
		>
			<Box>
				<Text
					fontWeight={700}
					textAlign='center'
					fontSize={{ base: '30px', lg: '32px' }}
					color='#141177'
				>
					Our Guarantee
				</Text>
				<Box
					display={'grid'}
					gridTemplateColumns={{ base: '1fr', lg: 'repeat(4,1fr)' }}
					mt='50px'
					gap={{ base: '30px', lg: '0' }}
				>
					<Box w='300px' mx='auto'>
						<Box
							w={{ base: '60px', lg: '70px' }}
							h={{ base: '60px', lg: '70px' }}
							mx='auto'
							display={'flex'}
							justifyContent='center'
							alignItems={'center'}
							borderRadius={'full'}
							overflow='hidden'
							border='3px solid #141177'
							mb='20px'
						>
							{/* <Image
								src={clipboard}
								h={{ base: '30px', lg: '30px' }}
							/> */}
							<svg
								height={'30px'}
								viewBox='0 0 48 48'
								xmlns='http://www.w3.org/2000/svg'
								style={{ fill: '#141177' }}
							>
								<path
									d='M28.7 4H19.3C17.22 4 15.52 5.68 15.52 7.76V9.64C15.52 11.72 17.2 13.4 19.28 13.4H28.7C30.78 13.4 32.46 11.72 32.46 9.64V7.76C32.48 5.68 30.78 4 28.7 4Z'
									fill='#141177'
								/>
								<path
									d='M34.48 9.63996C34.48 12.82 31.88 15.42 28.7 15.42H19.3C16.12 15.42 13.52 12.82 13.52 9.63996C13.52 8.51996 12.32 7.81996 11.32 8.33996C8.50002 9.83996 6.58002 12.82 6.58002 16.24V35.06C6.58002 39.98 10.6 44 15.52 44H32.48C37.4 44 41.42 39.98 41.42 35.06V16.24C41.42 12.82 39.5 9.83996 36.68 8.33996C35.68 7.81996 34.48 8.51996 34.48 9.63996ZM24.76 33.9H16C15.18 33.9 14.5 33.22 14.5 32.4C14.5 31.58 15.18 30.9 16 30.9H24.76C25.58 30.9 26.26 31.58 26.26 32.4C26.26 33.22 25.58 33.9 24.76 33.9ZM30 25.9H16C15.18 25.9 14.5 25.22 14.5 24.4C14.5 23.58 15.18 22.9 16 22.9H30C30.82 22.9 31.5 23.58 31.5 24.4C31.5 25.22 30.82 25.9 30 25.9Z'
									fill='#141177'
								/>
							</svg>
						</Box>
						<Text
							fontWeight={700}
							fontSize={{ base: '22px', lg: '20px' }}
							textAlign={'center'}
						>
							24/7 Assistance
						</Text>
					</Box>
					<Box w='300px' mx='auto'>
						<Box
							w={{ base: '60px', lg: '70px' }}
							h={{ base: '60px', lg: '70px' }}
							mx='auto'
							display={'flex'}
							justifyContent='center'
							alignItems={'center'}
							borderRadius={'full'}
							overflow='hidden'
							border='3px solid #141177'
							mb='20px'
						>
							{/* <Image
								src={message}
								h={{ base: '30px', lg: '30px' }}
							/> */}
							<svg
								height={'30px'}
								viewBox='0 0 48 48'
								xmlns='http://www.w3.org/2000/svg'
								style={{ fill: '#141177' }}
							>
								<path
									d='M44 25.72C44 30.3 41.64 34.36 38 36.92L35.32 42.82C34.7 44.16 32.9 44.42 31.96 43.28L29 39.72C25.28 39.72 21.86 38.46 19.26 36.36L20.46 34.94C29.7 34.24 37 26.92 37 18C37 16.48 36.78 14.98 36.38 13.54C40.92 15.94 44 20.5 44 25.72Z'
									fill='#141177'
								/>
								<path
									d='M32.6 12.14C30.26 7.34 25.04 4 19 4C10.72 4 4 10.26 4 18C4 22.58 6.36 26.64 10 29.2L12.68 35.1C13.3 36.44 15.1 36.68 16.04 35.56L17.14 34.24L19 32C27.28 32 34 25.74 34 18C34 15.9 33.5 13.92 32.6 12.14ZM24 19.5H14C13.18 19.5 12.5 18.82 12.5 18C12.5 17.18 13.18 16.5 14 16.5H24C24.82 16.5 25.5 17.18 25.5 18C25.5 18.82 24.82 19.5 24 19.5Z'
									fill='#141177'
								/>
							</svg>
						</Box>
						<Text
							fontWeight={700}
							fontSize={{ base: '22px', lg: '20px' }}
							textAlign={'center'}
						>
							One-Stop Shop
						</Text>
					</Box>
					<Box w='300px' mx='auto'>
						<Box
							w={{ base: '60px', lg: '70px' }}
							h={{ base: '60px', lg: '70px' }}
							mx='auto'
							display={'flex'}
							justifyContent='center'
							alignItems={'center'}
							borderRadius={'full'}
							overflow='hidden'
							border='3px solid #141177'
							mb='20px'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 640 512'
								fill='#141177'
								height={'30px'}
							>
								<path d='M406.1 61.65C415.4 63.09 419.4 74.59 412.6 81.41L374.6 118.1L383.6 170.1C384.1 179.5 375.3 186.7 366.7 182.4L320.2 157.9L273.3 182.7C264.7 187 255 179.8 256.4 170.5L265.4 118.4L227.4 81.41C220.6 74.59 224.6 63.09 233.9 61.65L286.2 54.11L309.8 6.332C314.1-2.289 326.3-1.93 330.2 6.332L353.8 54.11L406.1 61.65zM384 256C401.7 256 416 270.3 416 288V480C416 497.7 401.7 512 384 512H256C238.3 512 224 497.7 224 480V288C224 270.3 238.3 256 256 256H384zM160 320C177.7 320 192 334.3 192 352V480C192 497.7 177.7 512 160 512H32C14.33 512 0 497.7 0 480V352C0 334.3 14.33 320 32 320H160zM448 416C448 398.3 462.3 384 480 384H608C625.7 384 640 398.3 640 416V480C640 497.7 625.7 512 608 512H480C462.3 512 448 497.7 448 480V416z' />
							</svg>
						</Box>
						<Text
							fontWeight={700}
							fontSize={{ base: '22px', lg: '20px' }}
							textAlign={'center'}
						>
							All Round Expertise
						</Text>
					</Box>
					<Box w='300px' mx='auto'>
						<Box
							w={{ base: '60px', lg: '70px' }}
							h={{ base: '60px', lg: '70px' }}
							mx='auto'
							display={'flex'}
							justifyContent='center'
							alignItems={'center'}
							borderRadius={'full'}
							overflow='hidden'
							border='3px solid #141177'
							mb='20px'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 576 512'
								fill='#141177'
								height={'30px'}
							>
								<path d='M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1C7.251 383.1 0 391.3 0 400v95.98C0 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3zM279.3 175C271.7 173.9 261.7 170.3 252.9 167.1L248 165.4C235.5 160.1 221.8 167.5 217.4 179.1s2.121 26.2 14.59 30.64l4.655 1.656c8.486 3.061 17.88 6.095 27.39 8.312V232c0 13.25 10.73 24 23.98 24s24-10.75 24-24V221.6c25.27-5.723 42.88-21.85 46.1-45.72c8.688-50.05-38.89-63.66-64.42-70.95L288.4 103.1C262.1 95.64 263.6 92.42 264.3 88.31c1.156-6.766 15.3-10.06 32.21-7.391c4.938 .7813 11.37 2.547 19.65 5.422c12.53 4.281 26.21-2.312 30.52-14.84s-2.309-26.19-14.84-30.53c-7.602-2.627-13.92-4.358-19.82-5.721V24c0-13.25-10.75-24-24-24s-23.98 10.75-23.98 24v10.52C238.8 40.23 221.1 56.25 216.1 80.13C208.4 129.6 256.7 143.8 274.9 149.2l6.498 1.875c31.66 9.062 31.15 11.89 30.34 16.64C310.6 174.5 296.5 177.8 279.3 175z' />
							</svg>

							{/* <Image
								src={easyPricing}
								h={{ base: '30px', lg: '30px' }}
							/> */}
						</Box>
						<Text
							fontWeight={700}
							fontSize={{ base: '22px', lg: '20px' }}
							textAlign={'center'}
						>
							Easy Pricing
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
	// return (
	// 	<Box
	// 		w='100vw'
	// 		h='fit-content'
	// 		bg='#32BAC9'
	// 		display={'grid'}
	// 		gridTemplateColumns={{
	// 			base: 'repeat(2,1fr)',
	// 			lg: 'repeat(4, 1fr)',
	// 		}}
	// 		alignItems='center'
	// 		textAlign={'center'}
	// 		color='white'
	// 		pt={'40px'}
	// 		pb={'40px'}
	// 		rowGap='50px'
	// 		mb={10}
	// 	>
	// 		<Box display={'flex'} flexDir='column' fontWeight={500}>
	// 			<Image src={x7} h='50px' />
	// 			24X7 Assistance
	// 		</Box>
	// 		<Box display={'flex'} flexDir='column' fontWeight={500}>
	// 			<Image src={allRounder} h='50px' />
	// 			All Rounder Expertise
	// 		</Box>
	// 		<Box display={'flex'} flexDir='column' fontWeight={500}>
	// 			<Image src={easyPrice} h='50px' />
	// 			Easy Pricing
	// 		</Box>
	// 		<Box display={'flex'} flexDir='column' fontWeight={500}>
	// 			<Image src={oneStopShop} h='50px' />
	// 			One-Stop Shop
	// 		</Box>
	// 	</Box>
	// );
};

export default IconSection;
