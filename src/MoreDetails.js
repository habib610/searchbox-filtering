import React from 'react';

const MoreDetails = ({more}) => {
    const {name, flag} = more;
    return (
        <div>
            <div>
            <h4>{name}</h4>
            <div>
            <img src={flag} style={{width: "100px", margin:"10px 0px"}} alt=""/>
            </div>

        </div>
        </div>
    );
};

export default MoreDetails;