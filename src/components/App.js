import React, { useState } from 'react';
import Navbar from './Navbar';
import Routes from '../routes';
import { getToken, getInfo } from "../helpers/authorization";
import OverHead from '../pages/overhead/OverHead';


const App = () => {

	return (
		<>
			{/*
			<Navbar />

			 <button
				onClick={getToken}
				className="btn">token</button>

			<button
				onClick={getInfo}
				className="btn">info</button> 
			<Routes />*/}
			<OverHead />
		</>
	);
};


export default App;
