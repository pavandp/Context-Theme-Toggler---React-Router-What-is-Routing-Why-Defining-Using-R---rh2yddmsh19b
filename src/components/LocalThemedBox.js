import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeProvider';


const LocalThemedBox = () => {
    const [localTheme,setLocalTheme]=useState('light')
    const { globalTheme, setGlobalTheme }=useContext(ThemeContext);

    useEffect(()=>{
        setLocalTheme(globalTheme);
    },[globalTheme])
    function handleLocalTheme(){
        localTheme==='light' ? setLocalTheme('dark') : setLocalTheme('light');
    }
return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} 
        className={`${ localTheme==='light' ? 'bg-light': 'bg-dark'}`} 
        id="local-themed-box">

        <p className={`${ localTheme==='light' ? 'txt-light': 'txt-dark'}`} id='local-themed-text-container'>
            Hiii
        </p>
        <button className={`btn ${ localTheme==='light' ? 'btn-light': 'btn-dark'}`} 
        id="local-theme-toggler" onClick={handleLocalTheme}>
                { localTheme==='light' ? 'Toggle local theme to dark': 'Toggle local theme to light'}</button>
    </div>
)
}

export { LocalThemedBox }