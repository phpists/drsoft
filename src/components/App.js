import React from 'react';
import Navbar from './Navbar';
import Routes from '../routes';
import Skan from '../pages/skan/Skan';
import OverHeadTable from '../pages/overhead/OverHeadTable';

const App = () => {

	return (
		<>
			{/**/}<Navbar />
			<Routes />
			{/* <OverHeadTable/> 
			<Skan />*/}
		</>
	);
};


export default App;
