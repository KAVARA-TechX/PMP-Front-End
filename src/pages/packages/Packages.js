import Nav from '../../nav/Nav';
import { Box, Text, Icon } from '@chakra-ui/react';
import Footer from '../../footer/Footer';
import img from '../../assets/footer.jpg';
import { CalendarIcon } from '@chakra-ui/icons';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import PackageCardd from './PackageCard';
import getPackageApi from '../../apis/getPackageApi';

const PackagesPage = () => {
	const [packageList, setPackageList] = useState([]);

	useEffect(() => {
		window.scrollTo(0, 0);

		const getPackageList = async () => {
			const response = await getPackageApi();

			setPackageList(response.data.packages);
		};

		getPackageList();
	}, []);

	return (
		<>
			<Box
				bgImg={img}
				bgSize='cover'
				height='600px'
				position={'relative'}
			>
				<Nav />
				<Box
					position='absolute'
					left='50%'
					top={{ base: '50%', lg: '50%' }}
					transform='translate(-50%,-50%)'
					display={'flex'}
					flexDir='column'
					justifyContent={'center'}
					alignItems='center'
				>
					<Text
						fontSize={{ base: 40, lg: 50 }}
						fontWeight={700}
						textAlign={{ base: 'center' }}
					>
						Maldives Tour Packages
					</Text>
					<Text></Text>
				</Box>
				{/* black box with details */}
				<Box
					position={'absolute'}
					bottom='0'
					w='100%'
					h='fit-content'
					bg='black'
					display={{ base: 'none', lg: 'flex' }}
					justifyContent='space-between'
					px='5vw'
					py='20px'
					boxShadow={'-10px -70px 1000px  black'}
				>
					<Box>
						<Text fontSize={15} color='gray.500'>
							IDEAL DURATION
						</Text>
						<Text fontSize={20}>4 - 5 days</Text>
					</Box>
					<Box>
						<Text fontSize={15} color='gray.500'>
							BEST TIME
						</Text>
						<Text
							fontSize={20}
							display='flex'
							alignItems='center'
							gap={2}
						>
							<CalendarIcon /> Feb - Apr
						</Text>
					</Box>
					<Box>
						<Text fontSize={15} color='gray.500'>
							PRICES STARTS AT
						</Text>
						<Text fontSize={20}>₹27,118/person</Text>
					</Box>
					<Box>
						<Text fontSize={15} color='gray.500'>
							VISA PROCESSING
						</Text>
						<Text fontSize={20}>10 days</Text>
					</Box>
					<Box>
						<Text fontSize={15} color='gray.500' textAlign={'end'}>
							OUR PLANNING EXPERTISE
						</Text>
						<Text
							fontSize={20}
							display='flex'
							gap={2}
							alignItems='center'
						>
							<Box>
								<Icon as={BsStarFill} fill='gold' />
								<Icon as={BsStarFill} fill='gold' />
								<Icon as={BsStarFill} fill='gold' />
								<Icon as={BsStarFill} fill='gold' />
								<Icon as={BsStarHalf} fill='gold' />
							</Box>
							from 290 travellers
						</Text>
					</Box>
				</Box>
			</Box>
			<Box
				w='100vw'
				px={{ base: '10px', lg: '7.5vw' }}
				pt='50px'
				overflow={'hidden'}
			>
				<Text fontSize={30} mb={4}>
					Maldives Tour Package
				</Text>
				<Text lineHeight={7}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras vulputate, sapien id eleifend tincidunt, massa risus
					vehicula diam, ac ornare sapien est at elit. Interdum et
					malesuada fames ac ante ipsum primis in faucibus. Nunc at
					nunc sem. Quisque consequat ligula in odio maximus molestie.
					Aliquam placerat ex nulla, eget pretium magna accumsan a.
					Vestibulum diam libero, vulputate et aliquet pulvinar,
					pulvinar vel lorem. Vestibulum finibus ex sit amet ligula
					dapibus pretium. Proin consectetur est et porttitor lacinia.
					Curabitur bibendum, orci ut mollis luctus, ligula nisi
					aliquet quam, a fringilla lorem magna et eros. Sed sed
					turpis ac erat commodo porta. Integer consequat efficitur
					mauris, sed suscipit ante mattis eget. Fusce vehicula nec
					lacus in lobortis. Duis mattis lacus vel tortor semper
					porttitor. Quisque commodo magna sit amet erat vulputate
					consequat.
				</Text>
				{/* package cards */}
				<Box pt={'40px'} pb='40px'>
					{/* card  */}
					{packageList.map((data, index) => {
						return <PackageCardd data={data} key={index} />;
					})}
				</Box>
			</Box>
			<Footer />
		</>
	);
};

export default PackagesPage;
