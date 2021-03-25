import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components";
import DarkModeToggle from "react-dark-mode-toggle";

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }
`;
const Toggle = ({theme,  toggleTheme }) => {
    return (
        //<Button onClick={toggleTheme} >
       //   Switch Theme
      //  </Button>
	
		<DarkModeToggle 
		      onChange={toggleTheme}
		      checked={theme === 'dark'}
		      size={40}
		    />
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
