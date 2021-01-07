import React from 'react';
import Navbar from './Navbar';
import Routes from '../routes';
import Skan from '../pages/skan/Skan';
import OverHeadTable from '../pages/overhead/OverHeadTable';

import store from '../store/store.js';
import { Provider } from 'react-redux';


const App = () => {

	return (
		<Provider store={store}>

			<Navbar />
			<Routes />
			
		</Provider>
	);
};


export default App;
