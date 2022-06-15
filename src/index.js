import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FromStateProvider } from './context/formStateContext';

import './index.css';
import AllRoutes from './routes';

const root_tag = document.getElementById('root');

ReactDOM.render(
	<ChakraProvider>
		<FromStateProvider>
			<AllRoutes />
		</FromStateProvider>
	</ChakraProvider>,
	root_tag
);
