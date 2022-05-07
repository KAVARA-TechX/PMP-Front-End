import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import SearchResult from './pages/SearchResult/SearchResult';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='search'>
				<Route path=':id' element={<SearchResult />} />
			</Route>
		</Routes>
	);
};

export default App;
