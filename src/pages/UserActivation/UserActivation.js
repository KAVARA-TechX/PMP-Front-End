import { Box, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserActivationApi from '../../apis/UserActivationApi';
import Nav from '../../nav/Nav';

const UserActivation = () => {
	const { token } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const activateUser = async () => {
			try {
				const response = await UserActivationApi(token);
				if (response.status == 200) {
					navigate('/', { state: { account: true } });
				}
			} catch (error) {
				console.log(error);
			}
		};

		activateUser();
	});

	return (
		<Box
			w='100vw'
			h='100vh'
			display={'flex'}
			justifyContent='center'
			alignItems={'center'}
		>
			<Spinner size='xl' />
		</Box>
	);
};

export default UserActivation;
