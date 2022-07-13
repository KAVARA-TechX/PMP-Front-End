import { Routes, Route, Navigate } from 'react-router-dom';
import { AccessLoginContext } from './context/LoginContext';

<<<<<<< HEAD
const Facts = lazy(() => {
	return import('./facts/Facts');
});
const Packages = lazy(() => {
	return import('./packages/Packages');
});
const SpaceBetween = lazy(() => {
	return import('./spaceBetween/SpaceBetween');
});
const ImageSlider = lazy(() => {
	return import('./imageSlider/ImageSlider');
});
const IconSection = lazy(() => {
	return import('./iconSection/IconSection');
});

const Footer = lazy(() => {
	return import('./footer/Footer');
});
=======
import Homepage from './Homepage';
import SearchResult from './pages/SearchResult/SearchResult';
import BlogList from './pages/BlogsList/BlogList';
import BlogDetails from './pages/BlogsList/BlogDetails';
import PackagesPage from './pages/packages/Packages';
import Hotels from './pages/hotels/Hotels';
import ListingPage from './pages/listingPage/ListingPage';
import AboutPackage from './pages/aboutPackage/AboutPackage';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse/TermsOfUse';
import UserActivation from './pages/UserActivation/UserActivation';
import Cancellation from './pages/Cancellation/Cancellation';
import RefundPage from './pages/RefundPage/RefundPage';
import MyBookings from './pages/myBookings/MyBookings';
import Upcoming from './pages/myBookings/Upcoming';
import Completed from './pages/myBookings/Completed';
import Cancelled from './pages/myBookings/Cancelled';
import Profile from './pages/profile/Profile';
import Faq from './Faq';
import Tac from './Tac';
import AboutUs from './AboutUs';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
>>>>>>> development

const App = () => {
	const { loginState } = AccessLoginContext();

	const handleCallbackResponse = (response) => {
		console.log('response is : ', response);
		var userObj = jwt_decode(response.credential);
		console.log(userObj);
	};

	// useEffect(() => {
	// 	/* global google */
	// 	google.accounts.id.initialize({
	// 		client_id:
	// 			'427138300277-14ld1qfqaqqqmaoegpbsgvkd9l7haa02.apps.googleusercontent.com',
	// 		callback: handleCallbackResponse,
	// 	});

	// 	google.accounts.id.renderButton(
	// 		document.getElementById('google_login_button'),
	// 		{
	// 			theme: 'outline',
	// 			size: 'large',
	// 		}
	// 	);
	// }, []);

	return (
<<<<<<< HEAD
		<Box overflow='hidden'>
			<Hero /> {/* Responsive Done */}
			{load ? (
				<>
					<Suspense fallback={<div>Loading...</div>}>
						<Facts /> {/* Responsive Done */}
					</Suspense>
					<Suspense fallback={<div>Loading...</div>}>
						<Packages /> {/* Responsive Done*/}
					</Suspense>
					<Suspense fallback={<div>Loading...</div>}>
						<SpaceBetween space='50px' />
					</Suspense>
					<Suspense>
						<Banner />
					</Suspense>
					<Suspense fallback={<div>Loading...</div>}>
						<ImageSlider /> {/* Responsive Done */}
					</Suspense>
					<Suspense fallback={<div>Loading...</div>}>
						{/*<Partners /> {/* Responsive Done */}
					</Suspense>
					<Suspense fallback={<div>Loading...</div>}>
						<IconSection />
					</Suspense>
					<Suspense fallback={<div>Loading...</div>}>
						<Footer /> {/* Responsive Done */}
					</Suspense>
				</>
			) : (
				<></>
			)}
		</Box>
=======
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
			<Route path='/about-package/:id' element={<AboutPackage />} />
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
			<Route path='/faq' element={<Faq />} />
			<Route path='/terms-and-conditions' element={<Tac />} />
			<Route path='/about-us' element={<AboutUs />} />
		</Routes>
>>>>>>> development
	);
};

export default App;
