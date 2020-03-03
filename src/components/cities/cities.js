import React, { Component } from 'react';

import { Spinner } from 'react-bootstrap';

import { CitiesTable } from '../cities-table/cities-table';
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

    render() {
        const spinner = (
            <div style={{ padding: '40px', textAlign: 'center' }}>
                <Spinner animation="border" variant="primary" className={styles.spinner} />
            </div>
        )
        return (
            <>
                {this.state.cities.length ? <CitiesTable cities={this.state.cities} onDetailsClick={this.onDetailsClick} /> : spinner}
            </>
        )
    }
}