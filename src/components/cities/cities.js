import React, { Component } from 'react';

import { Table, Spinner, Button } from 'react-bootstrap';

import styles from './cities.module.scss';


export class Cities extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cities: [],
            placeholder: 'data loading'
        }
    }

    componentDidMount() {
        import('../../data/cities.json').then(data => {
            setTimeout(() => this.setState({ cities: data.default }), 2000);
        });
    }

    render() {
        const citiesTable = (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.cities.map((city, index) => (
                        <tr key={city.id}>
                            <td>{index + 1}</td>
                            <td>{city.name}</td>
                            <td>{city.country}</td>
                            <td><Button variant="primary" size="sm">Details</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
        const spinner = (
            <div style={{padding: '40px', textAlign: 'center'}}>
                <Spinner animation="border" variant="primary" className={styles.spinner}/>
            </div>
        )
        return (
            <div>{this.state.cities.length ? citiesTable : spinner}</div>
        )
    }
}