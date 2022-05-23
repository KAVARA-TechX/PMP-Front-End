import { createContext, useContext, useEffect, useState } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
	const [loginState, setLoginState] = useState(false);
	const [token, setToken] = useState('');

	useEffect(() => {
		if (window.localStorage.getItem('loginStatus') === 'true') {
			setLoginState(window.localStorage.getItem('loginStatus'));
			setToken(window.localStorage.getItem('token'));
		}
	}, []);

	const value = {
		loginState: loginState,
		token: token,
		setLoginState: (value) => {
			setLoginState(value);
			window.localStorage.setItem('loginStatus', value);
		},
		setToken: (value) => {
			setToken(value);
			window.localStorage.setItem('token', value);
		},
	};

	return (
		<LoginContext.Provider value={value}>{children}</LoginContext.Provider>
	);
};

const AccessLoginContext = () => {
	return useContext(LoginContext);
};

export { LoginContext, LoginProvider, AccessLoginContext };
