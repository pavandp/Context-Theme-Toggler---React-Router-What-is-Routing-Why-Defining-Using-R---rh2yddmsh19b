import React, { useContext } from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';

const Page = () => {
    const { globalTheme, setGlobalTheme }=useContext(ThemeContext);

    function handleGlobalTheme(){
        globalTheme==='light' ? setGlobalTheme('dark') : setGlobalTheme('light');
    }
    return(
        <div className={`${ globalTheme==='light' ? 'container bg-light': 'container bg-dark'} `} id="themed-page">
            <p id="themed-text-container" className={`${ globalTheme==='light' ? 'txt-light': 'txt-dark'}`}>
                lorem ipsum dolor iterit n stuff
            </p>
            <button className={`btn ${ globalTheme==='light' ? 'btn-light txt-light': 'btn-dark txt-dark'}`} 
            id="themed-button" onClick={handleGlobalTheme}>
                Themed Button</button>
            <LocalThemedBox />
        </div>
    )
}

export { Page }