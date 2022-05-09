import { Routes, Route } from 'react-router-dom';
import DefaultBlogPage from './DefaultBlogPage';
import Homepage from './Homepage';
import BlogList from './pages/BlogsList/BlogList';
import Hotels from './pages/hotels/Hotels';
import PackagesPage from './pages/packages/Packages';
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
				<Route path=':id' element={<DefaultBlogPage />} />
			</Route>
			<Route path='/packages' element={<PackagesPage />} />
			<Route path='/Hotels' element={<Hotels />} />
		</Routes>
	);
};

export default App;
