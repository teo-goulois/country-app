import React, {useState, useContext} from 'react'
import Countries from './countries'
import ThemeContext from "../themeContext";


const Body = ({filter, setFilter, countries, setSearchInput, setCurrentCountry}) => {

    const { theme } = useContext(ThemeContext);
    const [dropdown, setDropdown ] = useState(false)

    const handleselect = () => {
        if(dropdown) {
            setDropdown(false)
        } else {
            setDropdown(true)

        }
    }
    const handleChange = e => {
        setSearchInput(e.target.value)
    }

    

    return(
        <div className={`${theme + '-bg'} body-container `  }  >

        <div className="input-select-container">
            <div className='input-container'>
                <input onChange={handleChange} className={`${theme + '-el'} ${theme === 'light' ? "color-light": "color-dark"}`}  placeholder="Search for a country..." />
                <span className={`search-logo ${theme === 'light' ? "color-light": "color-dark"}`}></span> 
            </div>

            <div className="select-container" onClick={handleselect}>
                <div className={`select ${theme + '-el'} ${theme === 'light' ? "color-light": "color-dark"}`}>
                    <p>{filter}</p>
                    <span></span>
                </div>

                <div className={`select-options 
                ${theme + '-el'}
                ${theme === 'light' ? "color-light": "color-dark"}
                ${dropdown ? "" : "hidden"}
                `}>
                    <span onClick={() => {setFilter('Africa')}}>Africa</span>
                    <span onClick={() => {setFilter('Americas')}}>Americas</span>
                    <span onClick={() => {setFilter('Asia')}}>Asia</span>
                    <span onClick={() => {setFilter('Europe')}}>Europe</span>
                    <span onClick={() => {setFilter('Oceania')}}>Oceania</span>
                    
                </div>  
            </div>
        </div>

            

        
        <div className="countries-container">
            <Countries countries={countries} setCurrentCountry={setCurrentCountry}/>
        </div>
        


        </div>
    )
}

export default Body;