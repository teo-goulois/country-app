import React, {useContext} from 'react'
import {Link} from 'react-router-dom'

import ThemeContext from "../themeContext";

const Countries = ({countries, i}) => {

    const { theme } = useContext(ThemeContext);

    return(

        <Link to={{ pathname: `/detail/${countries[i].name}`,
        state: {country: countries[i],
        countries: countries}
        }} className="deco">
        <div  className={`card ${theme + '-el'}`}  >

            
            <img alt="countries images" src={countries[i].flag}></img>
            

            <div className="info">
                <h1>{countries[i].name}</h1>
                <h2>Population: <span>{countries[i].population} </span> </h2>
                <h2>Region: <span>{countries[i].region} </span></h2>
                <h2>Capital: <span>{countries[i].capital} </span></h2>
            </div>
            
        </div>
        </Link>
    )
}

export default Countries;