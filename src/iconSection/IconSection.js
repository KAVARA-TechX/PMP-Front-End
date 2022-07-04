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
			h='360px'
			bg='rgba(14, 135, 246,.25)'
			px={{ base: '10px', lg: '9vw' }}
			mb={10}
			display={'flex'}
			alignItems='center'
		>
			<Box>
				<Text
					fontWeight={700}
					textAlign='center'
					fontSize={{ base: '30px', lg: '32px' }}
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
							border='3px solid #0e87f6'
							mb='20px'
						>
							<Image
								src={clipboard}
								h={{ base: '30px', lg: '30px' }}
							/>
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
							border='3px solid #0e87f6'
							mb='20px'
						>
							<Image
								src={message}
								h={{ base: '30px', lg: '30px' }}
							/>
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
							border='3px solid #0e87f6'
							mb='20px'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 640 512'
								fill='rgba(14, 135, 246, 1)'
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
							border='3px solid #0e87f6'
							mb='20px'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 576 512'
								fill='rgba(14, 135, 246, 1)'
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
