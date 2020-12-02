import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import MoreDetails from './MoreDetails';

const Details = () => {
    const {alpha3Code} = useParams();
    const [details,setDetails] = useState({})
    let history = useHistory()
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data))
    }, [])
    console.log(details)
    const {name, capital, population, flag, area} = details;
    return (
        <div style={{textAlign: 'center', marginTop: '100px'}}>
            <img style={{width: '400px'}} src={flag} alt=""/>
            <div className="details">
            <h1>Country: {name}</h1>
             <h4>Capital: {capital}</h4>
             <h4>Population: {population}</h4>
             <h4>Area: {area}</h4>
             <button onClick={()=> history.push("/")} >Homepage</button>
            </div>
        </div>
    );
};

export default Details;