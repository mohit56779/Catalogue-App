import React from 'react';
import Navigation from './Navigation.js';


function Header() {
	return(
		// flex and justify between css classes puts our nav icon and appname in left and right corners
		<header className = "border-b p-3 flex justify-between items-center ">
			
			<span className = "font-bold">
			<h1>AppName</h1>
			</span>

			<Navigation/>
		</header>
		)
}

export default Header;