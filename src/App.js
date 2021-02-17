import React from 'react';
import './App.css';
import './components/general/css/Button.css';
import * as Buttons from './components/general/Button.js';

function App() {
	return (
		<div class="topBar">
			<Buttons.SearchButton/>
			<Buttons.DirectoryButton/>
			<Buttons.MenuButton/>
		</div>
	);
}

export default App;