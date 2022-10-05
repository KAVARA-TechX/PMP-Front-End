import Nav from '../../nav/Nav';
import { Box, Text, Icon, Button } from '@chakra-ui/react';
import Footer from '../../footer/Footer';
import img from '../../assets/footer.jpg';
import { ArrowForwardIcon, CalendarIcon } from '@chakra-ui/icons';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import PackageCard from './PackageCard';
import getPackageApi from '../../apis/getPackageApi';
import '../../style.css'

const PackagesPage = () => {
	const [packageList, setPackageList] = useState([]);

	const [packageLength, setPackageLength] = useState(0);
	const [currentShow, setCurrentShow] = useState(15);

	useEffect(() => {
		window.scrollTo(0, 0);

		const getPackageList = async () => {
			const response = await getPackageApi();
			setPackageList(response.data.packages);
			setPackageLength(response.data.packages.length);
		};

		getPackageList();
	}, []);

	const handleShowMore = () => {
		setCurrentShow(currentShow + 15);
	}


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
						color='#fff'
					>
						Tour Packages
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
					color='#fff'
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
				px={{ base: '10px', lg: '9vw' }}
				pt='50px'
				overflow={'hidden'}
			>
				<Text fontSize={30} mb={4}>
					Tour Package
				</Text>
				<Text lineHeight={7}>
					Travel to the beautiful sites and witness the most surreal and
					stunning white-sand beaches and magnificent underwater
					world. Get exclusive  Tour Packages to experience a
					true holiday of a lifetime in the tropical paradise.
				</Text>
				{/* package cards */}
				<Box pt={'40px'} pb='40px'>
					{
						packageList.slice(0, currentShow).map((data, index) => {
							return <PackageCard data={data} key={index} />;
						})
					}
				</Box>

				<Box textAlign='center' py='20px' display={`${packageLength <= currentShow ? 'none' : ''}`}>
					<Button
						colorScheme='teal'
						rightIcon={<ArrowForwardIcon />}
						variant='outline'
						onClick={handleShowMore}
					>
						Load more
					</Button>

				</Box>
			</Box>
			<Footer />
		</>
	);
};

export default PackagesPage;
