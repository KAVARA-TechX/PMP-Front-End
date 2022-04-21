import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const root_tag = document.getElementById('root');

ReactDOM.render(
	<ChakraProvider>
		<App />
	</ChakraProvider>,
	root_tag
);
