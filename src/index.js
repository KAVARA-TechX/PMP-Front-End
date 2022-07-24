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

window.addEventListener('load', async () => {
	try {
		const res = await axios.get(
			'https://planmyleisure.herokuapp.com/package/destination-list'
		);
		localStorage.setItem('destination_list', res.data.destinationArray);
	} catch (error) {
		console.log('while loading destination something went wrong');
	}
});

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
