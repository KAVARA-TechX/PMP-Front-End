import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const FromStateProvider = ({ children }) => {
	const [isSubmitted, SetIsSubmitted] = useState(false);
	const value = {
		isSubmitted,
		SetIsSubmitted: (val) => {
			SetIsSubmitted(val);
		},
	};

	return (
		<StateContext.Provider value={value}>{children}</StateContext.Provider>
	);
};

const AccessFormState = () => {
	return useContext(StateContext);
};

export { StateContext, FromStateProvider, AccessFormState };
