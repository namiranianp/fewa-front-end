import React from 'react';
import './App.css';
import TopBar from './components/general/TopBar.js';

function App() {
	return (
		<div>
			<TopBar />
			<p id='testText'>Submit a Github username to test the fetch feature.</p>
		</div>
	);
}

export default App;