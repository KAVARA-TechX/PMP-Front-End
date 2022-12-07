import { ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { FromStateProvider } from './context/formStateContext';
import { LoginProvider } from './context/LoginContext';
import './index.css';

const root_tag = document.getElementById('root');

axios.defaults.baseURL = 'https://backend.planmyleisure.com/'

ReactDOM.render(
	<LoginProvider>
		<ChakraProvider>
			<BrowserRouter>
				<FromStateProvider>
					<App />
				</FromStateProvider>
			</BrowserRouter>
		</ChakraProvider>
	</LoginProvider>,
	root_tag
);
