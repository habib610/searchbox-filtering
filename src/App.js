import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Countries from './Countries';
import Details from './Details';




function App() {
    const [countries, setCountries] = useState([]);
  
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>{
      setCountries(data)})
  }, [])

  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
        <div className="App">
      <h1>Rest Countries</h1>
      <input type="text" onChange={handleSearch} placeholder="Search countries"/>
      {
        countries.filter(val => {
          if(search === '')
          return val;
          else if (val.name.toLowerCase().includes(search.toLowerCase())){
            return val;
          }
        } ).map(country => <Countries key={country.name} country={country}></Countries>)
      }
   </div>
        </Route>
        <Route path="/details/:alpha3Code">
          <Details/>
        </Route>
      </Switch>
    </Router>
  
   </>
  );
}

export default (App);
