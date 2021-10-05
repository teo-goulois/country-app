import React from 'react';

import Card from './card';


const Countries = ({countries}) => {


    const test = []
        
    for(let i =0; i < countries.length; i++){
        test.push(<Card key={i} countries={countries} i={i} />)
    }

    return(
        
        <div className="card-container"  >
            {test}
        </div>
    )
}

export default Countries;