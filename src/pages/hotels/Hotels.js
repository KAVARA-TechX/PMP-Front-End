import Nav from '../../nav/Nav';
import { Text } from '@chakra-ui/react';
import { useEffect } from 'react';

const Hotels = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Nav />
			<Text>Hotels</Text>
		</>
	);
};

export default Hotels;
