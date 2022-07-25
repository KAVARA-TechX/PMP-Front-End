import { Routes, Route, Navigate } from 'react-router-dom';
import { AccessLoginContext } from './context/LoginContext';
import { lazy, Suspense, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { Box, Spinner } from '@chakra-ui/react';

// import Homepage from './Homepage';
// import SearchResult from './pages/SearchResult/SearchResult';
// import BlogList from './pages/BlogsList/BlogList';
// import BlogDetails from './pages/BlogsList/BlogDetails';
// import PackagesPage from './pages/packages/Packages';
// import Hotels from './pages/hotels/Hotels';
// import ListingPage from './pages/listingPage/ListingPage';
// import AboutPackage from './pages/aboutPackage/AboutPackage';
// import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
// import TermsOfUse from './pages/TermsOfUse/TermsOfUse';
// import UserActivation from './pages/UserActivation/UserActivation';
// import Cancellation from './pages/cancellation/Cancellation';
// import RefundPage from './pages/RefundPage/RefundPage';
// import MyBookings from './pages/myBookings/MyBookings';
// import Upcoming from './pages/myBookings/Upcoming';
// import Completed from './pages/myBookings/Completed';
// import Cancelled from './pages/myBookings/Cancelled';
// import Profile from './pages/profile/Profile';
// import Faq from './Faq';
// import Tac from './Tac';
// import AboutUs from './AboutUs';
// import ContactUs from './pages/contactUs/ContactUs';

const Homepage = lazy(() => {
	return import('./Homepage');
});
const SearchResult = lazy(() => {
	return import('./pages/SearchResult/SearchResult');
});
const BlogList = lazy(() => {
	return import('./pages/BlogsList/BlogList');
});
const BlogDetails = lazy(() => {
	return import('./pages/BlogsList/BlogDetails');
});
const PackagesPage = lazy(() => {
	return import('./pages/packages/Packages');
});
const Hotels = lazy(() => {
	return import('./pages/hotels/Hotels');
});
const ListingPage = lazy(() => {
	return import('./pages/listingPage/ListingPage');
});
const AboutPackage = lazy(() => {
	return import('./pages/aboutPackage/AboutPackage');
});
const PrivacyPolicy = lazy(() => {
	return import('./pages/privacyPolicy/PrivacyPolicy');
});
const TermsOfUse = lazy(() => {
	return import('./pages/TermsOfUse/TermsOfUse');
});
const UserActivation = lazy(() => {
	return import('./pages/UserActivation/UserActivation');
});
const Cancellation = lazy(() => {
	return import('./pages/cancellation/Cancellation');
});
const RefundPage = lazy(() => {
	return import('./pages/RefundPage/RefundPage');
});
const MyBookings = lazy(() => {
	return import('./pages/myBookings/MyBookings');
});
const Upcoming = lazy(() => {
	return import('./pages/myBookings/Upcoming');
});
const Completed = lazy(() => {
	return import('./pages/myBookings/Completed');
});
const Cancelled = lazy(() => {
	return import('./pages/myBookings/Cancelled');
});
const Profile = lazy(() => {
	return import('./pages/profile/Profile');
});
const Faq = lazy(() => {
	return import('./Faq');
});
const Tac = lazy(() => {
	return import('./Tac');
});
const AboutUs = lazy(() => {
	return import('./AboutUs');
});
const ContactUs = lazy(() => {
	return import('./pages/contactUs/ContactUs');
});

const App = () => {
	const { loginState } = AccessLoginContext();

	const handleCallbackResponse = (response) => {
		console.log('response is : ', response);
		var userObj = jwt_decode(response.credential);
		console.log(userObj);
	};

	return (
		<Routes>
			<Route
				path='/'
				element={
					<Suspense fallback={''}>
						<Homepage />
					</Suspense>
				}
			/>
			<Route path='search'>
				<Route
					path=':location/:checkInDate/:checkOutDate/:guests'
					element={
						<Suspense fallback={''}>
							<SearchResult />
						</Suspense>
					}
				/>
			</Route>
			<Route path='blogs'>
				<Route
					index
					element={
						<Suspense fallback={''}>
							<BlogList />
						</Suspense>
					}
				/>
				<Route
					path=':id'
					element={
						<Suspense fallback={''}>
							<BlogDetails />
						</Suspense>
					}
				/>
			</Route>
			<Route
				path='/packages'
				element={
					<Suspense fallback={''}>
						<PackagesPage />
					</Suspense>
				}
			/>
			<Route
				path='/Hotels'
				element={
					<Suspense fallback={''}>
						<Hotels />
					</Suspense>
				}
			/>
			<Route
				path='/listing'
				element={
					<Suspense fallback={''}>
						<ListingPage />
					</Suspense>
				}
			/>
			<Route
				path='/about-package/:id'
				element={
					<Suspense fallback={''}>
						<AboutPackage />
					</Suspense>
				}
			/>
			<Route
				path='/privacy-policy'
				element={
					<Suspense fallback={''}>
						<PrivacyPolicy />
					</Suspense>
				}
			/>
			<Route
				path='/terms-of-use'
				element={
					<Suspense fallback={''}>
						<TermsOfUse />
					</Suspense>
				}
			/>
			<Route
				path='/user/activate/:token'
				element={
					<Suspense fallback={''}>
						<UserActivation />
					</Suspense>
				}
			/>
			<Route
				path='/cancellation'
				element={
					<Suspense fallback={''}>
						<Cancellation />
					</Suspense>
				}
			/>
			<Route
				path='/refund'
				element={
					<Suspense fallback={''}>
						<RefundPage />
					</Suspense>
				}
			/>
			<Route
				path='/mybookings'
				element={
					<Suspense fallback={''}>
						<MyBookings />
					</Suspense>
				}
			>
				<Route
					index
					element={
						<Suspense fallback={''}>
							<Upcoming />
						</Suspense>
					}
				/>
				<Route
					path='completed'
					element={
						<Suspense fallback={''}>
							<Completed />
						</Suspense>
					}
				/>
				<Route
					path='cancelled'
					element={
						<Suspense fallback={''}>
							<Cancelled />
						</Suspense>
					}
				/>
			</Route>
			<Route path='/profile'>
				<Route
					index
					element={
						loginState ? (
							<Suspense fallback={''}>
								{' '}
								<Profile />
							</Suspense>
						) : (
							<Navigate to='/' />
						)
					}
				/>
			</Route>
			<Route
				path='/faq'
				element={
					<Suspense fallback={''}>
						<Faq />
					</Suspense>
				}
			/>
			<Route path='/terms-and-conditions' element={<Tac />} />
			<Route
				path='/about-us'
				element={
					<Suspense fallback={''}>
						<AboutUs />
					</Suspense>
				}
			/>
			<Route
				path='/contactUs'
				element={
					<Suspense fallback={''}>
						<ContactUs />
					</Suspense>
				}
			/>
		</Routes>
	);
};

export default App;
