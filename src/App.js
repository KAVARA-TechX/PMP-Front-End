import { Routes, Route, Navigate } from 'react-router-dom';
import { AccessLoginContext } from './context/LoginContext';
import Homepage from './Homepage';
import AboutPackage from './pages/aboutPackage/AboutPackage';
import BlogDetails from './pages/BlogsList/BlogDetails';
import BlogList from './pages/BlogsList/BlogList';
import Cancellation from './pages/Cancellation/Cancellation';
import FAQ from './pages/faq/FAQ';
import Hotels from './pages/hotels/Hotels';
import ListingPage from './pages/listingPage/ListingPage';
import Cancelled from './pages/myBookings/Cancelled';
import Completed from './pages/myBookings/Completed';
import MyBookings from './pages/myBookings/MyBookings';
import Upcoming from './pages/myBookings/Upcoming';
import PackagesPage from './pages/packages/Packages';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import Profile from './pages/profile/Profile';
import RefundPage from './pages/RefundPage/RefundPage';
import SearchResult from './pages/SearchResult/SearchResult';
import TAC from './pages/tac/TAC';
import TermsOfUse from './pages/TermsOfUse/TermsOfUse';
import UserActivation from './pages/UserActivation/UserActivation';
import AboutUs from './pages/aboutUs/AboutUs';

const App = () => {
	const { loginState } = AccessLoginContext();
	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='search'>
				<Route
					path=':location/:checkInDate/:checkOutDate/:guests'
					element={<SearchResult />}
				/>
			</Route>
			<Route path='blogs'>
				<Route index element={<BlogList />} />
				<Route path=':id' element={<BlogDetails />} />
			</Route>
			<Route path='/packages' element={<PackagesPage />} />
			<Route path='/Hotels' element={<Hotels />} />
			<Route path='/listing' element={<ListingPage />} />
			<Route path='/about-package/' element={<AboutPackage />} />
			<Route path='/privacy-policy' element={<PrivacyPolicy />} />
			<Route path='/terms-of-use' element={<TermsOfUse />} />
			<Route path='/user/activate/:token' element={<UserActivation />} />
			<Route path='/cancellation' element={<Cancellation />} />
			<Route path='/refund' element={<RefundPage />} />
			<Route
				path='/mybookings'
				element={loginState ? <MyBookings /> : <Navigate to='/' />}
			>
				<Route index element={<Upcoming />} />
				<Route path='completed' element={<Completed />} />
				<Route path='cancelled' element={<Cancelled />} />
			</Route>
			<Route path='/profile'>
				<Route
					index
					element={loginState ? <Profile /> : <Navigate to='/' />}
				/>
			</Route>
			<Route path='/faq' element={<FAQ />} />
			<Route path='/terms-and-conditions' element={<TAC />} />
			<Route path='/about-us' element={<AboutUs />} />
		</Routes>
	);
};

export default App;
