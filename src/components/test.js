import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'


import ThemeContext from "../themeContext";

class Test extends React.Component{

        state = {
            borderCountry: [],
            finalBorder: []
        }

        componentDidMount() {
            console.log(this.props);
            let floor = []
            this.props.location.state.country.borders.map((border)  =>  {    
              return this.state.borderCountry.push(border)
                 
            })
            for(let i =0; i < this.state.borderCountry.length; i++ ){
                axios.get(`https://restcountries.com/v2/alpha/${this.state.borderCountry[i]}`)
                    .then((res) => {
                        floor.push(res.data.name)
                        this.setState({finalBorder: floor})
                        
                    })    
            }  
        }
        static contextType = ThemeContext

    render() {

        const country = this.props.location.state.country
        return(
            <div className={`detail ${this.context.theme + '-bg'}`}>
                <div className="back-container">
                    <Link to='/' style={{textDecoration: "none"}}>
                    <div className={`back ${this.context.theme + '-el'}`}>
                        <p>Back</p>
                    </div>
                    </Link>
                </div>

                <div className="detail-container">
                    <div className="detail-flag">
                        <img alt="country flag" src={country.flag} />
                    </div>

                    <div className="detail-info-container">
                        <div className="top-info">
                            <div className="left">
                                <h1>{country.name}</h1>
                                <p className="p">Native Name: <span>{country.nativeName} </span> </p>
                               <p className="p">Population: <span>{country.population} </span> </p>
                                <p className="p">Region: <span>{country.region} </span> </p>
                                <p className="p">Sub Region: <span>{country.subregion} </span> </p>
                              <p className="p">Capital: <span>{country.capital} </span> </p> 
                            </div>
                            <div className="right">
                            
                                <p>Top Level Domain: <span>{country.topLevelDomain} </span> </p>
                                <p>Currencies: <span>{country.currencies[0].name} </span> </p>
                                <p>Languages: {country.languages.map((language, index) => {
                                   
                                   return <span key={index}> {language.name}, </span>
                                    })}  </p> 
                                

                                
                                
                            </div>
                        </div>
                        

                        <div className="bot-info">
                        {
                            country.borders.length > 0 ? (
                                <> 

                            <h3>Border Countries:</h3> 
                            <div className="borders-container">
                            {this.state.finalBorder.map((border, index) => <span key={index} className={`borders ${this.context.theme + '-el'}`}>{border} </span>)} 
                            </div>
</>
                        ) : <h3>Border Countries: <span className={`none ${this.context.theme + '-el'}`}> None</span></h3>
                        }
                            
                            <div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Test;