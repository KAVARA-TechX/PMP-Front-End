import { Box, Text } from '@chakra-ui/react';
import sunset from '../assets/thingsToDo/sunset.png';
import surf from '../assets/thingsToDo/skiing.png';
import scuba from '../assets/thingsToDo/scuba.png';
// import { DayPicker } from 'react-day-picker';
import '../../node_modules/react-day-picker/dist/style.css';
import './day-picker.css';
// import { useState } from 'react';
// import sideImg from '../assets/thingsToDo/skiing.png';
import { useNavigate } from 'react-router-dom';
import './Packages.css';
import { useEffect, useState } from 'react';
import getPackageApi from '../apis/getPackageApi';

const Packages = () => {
	const navigate = useNavigate();
	const [pkg, setPkg] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await getPackageApi();
				setPkg(res.data.packages);
			} catch (error) {}
		};
		getData();
	}, []);

	return (
		<>
			<Box w='100vw' className='packages' px='5vw'>
				<Box>
					<Text
						fontSize={{ base: 25, lg: 40 }}
						fontWeight={700}
						position='relative'
						// _after={{
						// 	base: {
						// 		content: '""',
						// 		position: 'absolute',
						// 		left: 0,
						// 		bottom: 0,
						// 		height: '2px',
						// 		width: '100%',
						// 		background: '#32BAC9',
						// 	},
						// 	lg: {
						// 		content: '""',
						// 		position: 'absolute',
						// 		left: 0,
						// 		bottom: 0,
						// 		height: '2px',
						// 		width: '85%',
						// 		background: '#32BAC9',
						// 	},
						// }}
						className='packages-heading'
					>
						Packages
					</Text>
					<Text
						textAlign={{ base: 'start', lg: 'start' }}
						fontSize='20px'
					>
						Discover your ideal Experience
					</Text>
				</Box>

				<Box
					// w={{ base: '100%', lg: '75%' }}
					as='div'
					display={'block'}
					whiteSpace='nowrap'
					// alignItems='center'
					mt='20px'
					overflowX={{ base: 'scroll', lg: 'scroll' }}
					className='hide-scroll-bar'
				>
					{pkg.map((data, index) => {
						return (
							<Box
								key={index}
								display={'inline-block'}
								h='350px'
								w='230px'
								bgImg={data.image[0].url}
								bgSize='cover'
								bgPos={'50%'}
								borderRadius={'xl'}
								mx={5}
								cursor='pointer'
								onClick={() => {
									navigate('/about-package');
								}}
								transition='.2s'
								_hover={{
									boxShadow: '0 13px 15px rgb(0,0,0,0.2)',
								}}
							/>
						);
					})}
				</Box>
			</Box>
		</>
	);
};

export default Packages;
