import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';


const ThemeToggleButton = () =>{
    const { globalTheme,setGlobalTheme }=useContext(ThemeContext);
    
    function handleGlobalTheme(){
        globalTheme==='light' ? setGlobalTheme('dark') : setGlobalTheme('light');
    }
    return (
       <>
        <button className={`btn ${ globalTheme==='light' ? 'btn-light txt-light': 'btn-dark txt-dark'}`} 
        id="global-theme-toggler" onClick={handleGlobalTheme}>
                Themed Button</button>
       </>
    )

}
export {ThemeToggleButton}