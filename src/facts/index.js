import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';

const Facts = () => {
	return (
		<Box
			w='100vw'
			h='600px'
			overflow='hidden'
			display='flex'
			mt='150px'
			mb={10}
		>
			<Box w='50%' bg='green.200'></Box>
			<Box w='50%'>
				<Box ml={5}>
					<Text color='orange' fontSize={20} fontWeight={500} mb={1}>
						Traveler Point
					</Text>
					<Text
						color='rgba(0,0,0,.7)'
						fontSize={40}
						fontWeight={800}
						lineHeight={1}
						mb={5}
					>
						We helping you find your dream vacation
					</Text>
					<Text lineHeight={1.4}>
						Lorem ipsum dolor sit amet, consectertr adipisciing elit
						ut aliquanm, purus sit amet luctus venenatis, lectus
						magna fringilla urna, porttitor rhoncus dolor purus non
						enim praesent elementum facilisis leo, vel
					</Text>
				</Box>
				<Box ml={5} display='flex' flexDir={'column'}>
					<Box w='500px' h='400px' mx='auto'>
						<Box
							h='50%'
							w='100%'
							borderBottom='2px solid rgba(0,0,0,.2)'
							display={'flex'}
						>
							<Box
								w='50%'
								h='100%'
								borderRight='2px solid rgba(0,0,0,.2)'
								textAlign={'center'}
								display='flex'
								justifyContent={'center'}
								alignItems='center'
							>
								<Box>
									<Text
										fontSize={40}
										fontWeight={600}
										color='orange'
									>
										100+
									</Text>

									<Text>Holiday Package</Text>
								</Box>
							</Box>
							<Box
								w='50%'
								h='100%'
								display={'flex'}
								justifyContent='center'
								alignItems={'center'}
								textAlign='center'
							>
								<Box>
									<Text
										fontSize={40}
										fontWeight={600}
										color='orange'
									>
										201
									</Text>
									<Text>Luxury Hotel</Text>
								</Box>
							</Box>
						</Box>
						<Box h='50%' w='100%' display={'flex'}>
							<Box
								w='50%'
								h='100%'
								borderRight='2px solid rgba(0,0,0,.2)'
								display={'flex'}
								justifyContent='center'
								alignItems='center'
								textAlign={'center'}
							>
								<Box>
									<Text
										fontSize={40}
										fontWeight={600}
										color='orange'
									>
										15
									</Text>
									<Text>Elite Airlines</Text>
								</Box>
							</Box>
							<Box
								w='50%'
								h='100%'
								display={'flex'}
								justifyContent='center'
								alignItems='center'
								textAlign={'center'}
							>
								<Box>
									<Text
										fontSize={40}
										fontWeight={600}
										color='orange'
									>
										120M+
									</Text>
									<Text>Satisfied Traveler</Text>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Facts;
