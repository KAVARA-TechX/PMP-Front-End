import { Routes, Route } from 'react-router-dom';
import DefaultBlogPage from './DefaultBlogPage';
import Homepage from './Homepage';
import AboutPackage from './pages/aboutPackage/AboutPackage';
import BlogDetails from './pages/BlogsList/BlogDetails';
import BlogList from './pages/BlogsList/BlogList';
import Hotels from './pages/hotels/Hotels';
import ListingPage from './pages/listingPage/ListingPage';
import PackagesPage from './pages/packages/Packages';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import SearchResult from './pages/SearchResult/SearchResult';

const App = () => {
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
		</Routes>
	);
};

export default App;
