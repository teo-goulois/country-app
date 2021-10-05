import './App.scss';
import React, {useCallback, useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import Header from './components/header'
import Body from './components/body'
import Test from './components/test'

import ThemeContext from "./themeContext";

import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(far)



function App() {

  const [currentCountry, setCurrentCountry] = useState([]);
  const [theme, setTheme] = useState('light');
  const [countries, setCountries] = useState([])
  const [filter, setFilter ] = useState('Filter by Region')
  const [searchInput, setSearchInput] = useState('')
  const [name, setName] = useState('')

  const contextValue = {
    theme,
    updateTheme: setTheme
  };

  useCallback(() => {
    axios.get(`https://restcountries.com/v2/name/${name}`)
    .then((res) => {
        setCurrentCountry(res)
    })
  }, [name])


  const home = (e) => {
    axios.get(`https://restcountries.com/v2/all`)
        .then((res) => {
          console.log(res)
          const searchCountries = []


          for(let i = 0; i < res.data.length; i++) {
            if(
              res.data[i].name === 'Albania' 
              || res.data[i].name ===  "United States of America"
            || res.data[i].name ===  "Brazil"
            || res.data[i].name ===  "Afghanistan"
            || res.data[i].name ===  "Åland Islands"
            || res.data[i].name ===  "Algeria"
            || res.data[i].name ===  "Germany"
            || res.data[i].name ===  "Iceland"
            ) {
              searchCountries.push(res.data[i])
            }
            
          }        
          setCountries(searchCountries)
        })
  }


  useEffect(() => {
    if(filter !== 'Filter by Region') {
      axios.get(`https://restcountries.com/v2/continent/${filter}`)
        .then((res) => {
          const searchCountries = []
          for(let i = 0; i < res.data.length; i++) {
            searchCountries.push(res.data[i])
          }
          setCountries(searchCountries)
        })
    } else {
      home()
    }

      
  }, [filter])

  useEffect(() => {
    if(searchInput) {
      axios.get(`https://restcountries.com/v2/name/${searchInput}`).then((res) => {
        const searchCountries = []
        for(let i = 0; i < res.data.length; i++) {
          searchCountries.push(res.data[i])
        }
        setCountries(searchCountries)
      }).catch((err) => {
        setCountries([])
      })
    } else {

      home()
    }
      
  }, [searchInput])


  return (
    <Router>
    <ThemeContext.Provider value={contextValue}>
    <Header />
    <Switch>
      
    <Route path='/' exact >
    
      <div className="App">
        
        <Body countries={countries} filter={filter} setFilter={setFilter} setSearchInput={setSearchInput} setCurrentCountry={setCurrentCountry} />
      </div>
    </Route>
      <Route path="/detail/:name" exact render={props => <Test {...props}  currentCountry={currentCountry} setName={setName} name={name} />} />
        
      </Switch>
    </ThemeContext.Provider>
    </Router>
  );
}

export default App;
