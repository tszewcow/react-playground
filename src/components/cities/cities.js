import React, { Component } from 'react';

import { CitiesTable } from '../cities-table/cities-table';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';
import styles from './cities.module.scss';

export class Cities extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cities: []
        }
    }

    componentDidMount() {
        import('../../data/cities.json').then(data => {
            setTimeout(() => this.setState({ cities: data.default }), 2000);
        });
    }

    onDetailsClick = (event) => {
        const cityId = event.target.getAttribute('city');
        console.log(this.state.cities.find(city => city.id === cityId));
    }

    onDeleteClick = (event) => {
        const cityId = event.target.getAttribute('city');
        console.log(this.state.cities.find(city => city.id === cityId));
    }

    render() {
        return (
            <div className={styles.cities_container}>
                {this.state.cities.length ?
                    <CitiesTable cities={this.state.cities} onDetailsClick={this.onDetailsClick} onDeleteClick={this.onDeleteClick} /> :
                    <LoadingSpinner />}
            </div>
        )
    }
}