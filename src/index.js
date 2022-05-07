import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { FromStateProvider } from './context/formStateContext';
import './index.css';

const root_tag = document.getElementById('root');

ReactDOM.render(
	<ChakraProvider>
		<BrowserRouter>
			<FromStateProvider>
				<App />
			</FromStateProvider>
		</BrowserRouter>
	</ChakraProvider>,
	root_tag
);
