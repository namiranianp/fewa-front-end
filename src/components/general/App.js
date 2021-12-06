
import React from 'react';
import '../../css/App.css';
import '../../css/MainNavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavBar from './MainNavBar.js';
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./useDarkMode";
import { GlobalStyles } from "./Globalstyles";
import { lightTheme, darkTheme } from "./Themes";
import Toggle from "./Toggler";

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
		
        <div className="App">
			<MainNavBar />
            <Toggle style={{
				position: "absolute",
				top: 60,
				right: 10}} theme={theme} toggleTheme={themeToggler} /> 
		</div>
      </>
    </ThemeProvider>
    
  );
};
export default App;