import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { FromStateProvider } from './context/formStateContext';
<<<<<<< HEAD

=======
import { LoginProvider } from './context/LoginContext';
>>>>>>> development
import './index.css';
import AllRoutes from './routes';

const root_tag = document.getElementById('root');

ReactDOM.render(
<<<<<<< HEAD
	<ChakraProvider>
		<FromStateProvider>
			<AllRoutes />
		</FromStateProvider>
	</ChakraProvider>,
=======
	<LoginProvider>
		<ChakraProvider>
			<BrowserRouter>
				<FromStateProvider>
					<App />
				</FromStateProvider>
			</BrowserRouter>
		</ChakraProvider>
	</LoginProvider>,
>>>>>>> development
	root_tag
);
