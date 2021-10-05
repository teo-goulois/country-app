import React, {useContext} from 'react'

import ThemeContext from "../themeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'


const Header = () => {

    const { theme, updateTheme } = useContext(ThemeContext);

   
    const handleDarkMode = () => {
        if(theme === 'light'){
            updateTheme('dark')
        } else {
            updateTheme('light')
        }
    }

    return(
        <div className={`header-container ${theme + '-el'}`}  >
            <h1>Where in the world?</h1>
            <div onClick={handleDarkMode} className="toggler-dark-mode">
                {theme === 'light' ? <FontAwesomeIcon icon={['far', 'moon']}  /> :   <FontAwesomeIcon icon={faMoon}  />}
                <h2>{theme + ' Mode'}</h2>
            </div>
        </div>
    )
}

export default Header;