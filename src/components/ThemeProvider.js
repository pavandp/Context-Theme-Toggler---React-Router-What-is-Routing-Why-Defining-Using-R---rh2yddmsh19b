import React, { useState } from 'react';

const ThemeContext = React.createContext()
const ThemeProvider = (props) =>{
    const [globalTheme,setGlobalTheme]=useState('light');

    return (
        <React.Fragment>
            <ThemeContext.Provider value={{globalTheme,setGlobalTheme}}>
                {props.children}
            </ThemeContext.Provider>
        </React.Fragment>
        
    )
}

export {ThemeProvider,ThemeContext}