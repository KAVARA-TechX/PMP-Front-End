import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AboutUs from './pages/aboutUs/AboutUs';
import Cancellation from './pages/cancellation/Cancellation';
import ContactUs from './pages/contactUs/ContactUs';
import FAQ from './pages/faq/FAQ';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import TAC from './pages/tac/TAC';

const AllRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />}></Route>
					<Route path='/about-us' element={<AboutUs />} />
					<Route path='/cancellation' element={<Cancellation />} />
					<Route path='/faq' element={<FAQ />} />
					<Route path='/privacy-policy' element={<PrivacyPolicy />} />
					<Route path='/tac' element={<TAC />} />
					<Route path='/contactUs' element={<ContactUs />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default AllRoutes;
