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
            {dataLoaded ? <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <h4>{city.name}</h4>
                    <p><label>Country: <span>{city.country}</span></label></p>
                    <p><label>Overall Rating: <span>{city.ratings.overall}</span></label></p>
                </div>
                <Button as={Link} variant="primary" to='/cities' style={{maxHeight: '40px'}}>Go back</Button>
            </div> : <LoadingSpinner />}
        </div>
    )
}