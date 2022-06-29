import React, {useEffect, useState} from 'react';
import Spacex from "../spacex/Spacex";

const Spacexs = () => {
    const [spacex, setSpacex] = useState([]);

    useEffect(()=> {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setSpacex(value.filter(racet => racet.launch_year != 2020)))
    },[])
    return (
        <div>
            {spacex.map((spacex, index) => <Spacex key={index} spacex={spacex}/>)}
        </div>
    );
};

export default Spacexs;