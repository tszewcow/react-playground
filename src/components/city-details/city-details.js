import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { LoadingSpinner } from '../loading-spinner/loading-spinner';

export const CityDetails = props => {

    const [city, setCity] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        import('../../data/cities.json').then(data => {
            setTimeout(() => {
                setCity(data.default.find(city => city.id === props.match.params.id));
                setDataLoaded(true);
            }, 2000);
        });
    }, [])

    return (
        <div>
            {dataLoaded ? <><Button as={Link} variant="primary" to='/cities'>Go back</Button><h2>{city.name}</h2></> : <LoadingSpinner />}
        </div>
    )
}