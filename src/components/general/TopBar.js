import React from 'react';
import './css/TopBar.css';
import './css/Button.css';
import * as Buttons from './Button.js';
import Form from './Form.js';

function TopBar() {
	return (
		<div id = 'topBar'>
			<Form />
			<Buttons.DirectoryButton />
			<Buttons.MenuButton />
		</div>
	);
}

export default TopBar;