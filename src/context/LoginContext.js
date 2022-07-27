import { createContext, useContext, useEffect, useState } from 'react';
import getUserinfoApi from '../apis/getUserInfoApi';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
	const [loginState, setLoginState] = useState(null);
	const [token, setToken] = useState('');
	const [used, setUsed] = useState('');
	const [loginclick, setLoginclick] = useState(null);
	const [profileurl, setProfileurl] = useState('');

	// const refresh = async () => {
	// 	try {
	// 		const res = await getRefereshToken(
	// 			window.localStorage.getItem('token')
	// 		);
	// 		console.log('refresh res : ', res);
	// 	} catch (error) {
	// 		console.log('error');
	// 	}
	// };

	useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setLoginState(
				window.localStorage.getItem('loginStatus')
					? window.localStorage.getItem('loginStatus')
					: false
			);
			setToken(
				window.localStorage.getItem('token')
					? window.localStorage.getItem('token')
					: 'empty'
			);
			setUsed(
				window.localStorage.getItem('used')
					? window.localStorage.getItem('used')
					: 'empty'
			);

			console.log(
				'in localStorage profileImg is ',
				window.localStorage.getItem('profileImg')
			);

			if (window.localStorage.getItem('profileImg') === null) {
				const res = getUserinfoApi().then((res) => {
					setProfileurl(res.data.avatar);
				});
			} else {
				setProfileurl(window.localStorage.getItem('profileImg'));
			}
			// refresh();
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
			setProfileurl(
				val === ''
					? 'http://res.cloudinary.com/dqxu3gkbd/image/upload/v1654083257/avatar/tmp-1-1654083257369_dtrdd4.jpg'
					: val
			);
			localStorage.setItem(
				'profileImg',
				val === ''
					? 'http://res.cloudinary.com/dqxu3gkbd/image/upload/v1654083257/avatar/tmp-1-1654083257369_dtrdd4.jpg'
					: val
			);
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
