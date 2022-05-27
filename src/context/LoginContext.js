import { createContext, useContext, useEffect, useState } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
	const [loginState, setLoginState] = useState(false);
	const [token, setToken] = useState('');
	const [used, setUsed] = useState('');
	const [loginclick, setLoginclick] = useState(null);
	const [profileurl, setProfileurl] = useState('');

	useEffect(() => {
		if (window.localStorage.getItem('loginStatus') === 'true') {
			setLoginState(window.localStorage.getItem('loginStatus'));
			setToken(window.localStorage.getItem('token'));
			setUsed(window.localStorage.getItem('used'));
		}
	}, []);

	const value = {
		loginState: loginState,
		token: token,
		used: used,
		loginclick: loginclick,
		profileurl: profileurl,
		setProfileurl: (val) => {
			console.log('profile url set to ', val);
			setProfileurl(val);
		},
		setUsed: (value) => {
			setUsed(value);
			window.localStorage.setItem('used', value);
		},
		setLoginState: (value) => {
			setLoginState(value);
			window.localStorage.setItem('loginStatus', value);
		},
		setToken: (value) => {
			setToken(value);
			window.localStorage.setItem('token', value);
		},
		setLoginclick: (val) => {
			setLoginclick(val);
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
