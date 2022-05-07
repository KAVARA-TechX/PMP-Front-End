import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BlogList from './pages/BlogsList/BlogList';
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
			<Route path='/blogs' element={<BlogList />} />
		</Routes>
	);
};

export default App;
