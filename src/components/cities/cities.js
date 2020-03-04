import React, { useState, useEffect } from 'react';

import { CitiesTable } from '../cities-table/cities-table';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';
import styles from './cities.module.scss';

export const Cities = () => {

    const [cities, setCities] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        import('../../data/cities.json').then(data => {
            setTimeout(() => {
                setCities(data.default);
                setDataLoaded(true);
            }, 2000);
        });
    }, [])

    const onDetailsClick = (event) => {
        const cityId = event.target.getAttribute('city');
        console.log(cities.find(city => city.id === cityId));
    }

    const onDeleteClick = (event) => {
        const cityId = event.target.getAttribute('city');
        const index = cities.findIndex(city => city.id === cityId);
        setCities(cities.slice(0, index).concat(cities.slice(index + 1)));
    }

    const citiesProps = {cities, onDetailsClick, onDeleteClick};

    return (
        <div className={styles.cities_container}>
            {cities.length ?
                <CitiesTable {...citiesProps} /> :
                (dataLoaded ? <p>Sorry, no data found.</p> : <LoadingSpinner />)
            }
        </div>
    )
}