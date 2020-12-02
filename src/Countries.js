import React from 'react';
import { Link } from 'react-router-dom';


const Countries = ({country}) => {
    const {name, flag, alpha3Code} = country;
    console.log(country)
    return (
        <div>
            <h4>{name}</h4>
            <div>
            <img src={flag} style={{width: "100px", margin:"10px 0px"}} alt=""/>
            </div>
         <Link to={`/details/${alpha3Code}`}><button>View More</button></Link>   
        </div>
    );
};

export default Countries;