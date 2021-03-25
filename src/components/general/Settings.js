import React, {useState} from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Globalstyles";
import  {useDarkMode} from "./useDarkMode"
import { lightTheme, darkTheme } from "./Themes";
import Toggle from "./Toggler";

const Settings = () => {
   const [theme, themeToggler, mountedComponent] = useDarkMode();
//const [isDarkMode, setIsDarkMode] = useState(() => false);
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

if(!mountedComponent) return (<div/>);
  return (
    <ThemeProvider theme={themeMode}>

	<>
      <GlobalStyles/>
        <div className="Settings">
          <Toggle theme={theme} toggleTheme={themeToggler} />
	
     	</div> 
      </>
    </ThemeProvider>
    
  );
};

export default Settings;