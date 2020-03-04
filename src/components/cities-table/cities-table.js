import React from 'react';

import { Table, Button } from 'react-bootstrap';

import styles from './cities-table.module.scss';

export const CitiesTable = ({ cities, onDetailsClick, onDeleteClick }) => (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Country</th>
                <th>Overall Rating</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {cities.map((city, index) => (
                <tr key={city.id}>
                    <td>{index + 1}</td>
                    <td>{city.name}</td>
                    <td>{city.country}</td>
                    <td>{city.ratings.overall}</td>
                    <td className={styles.actions}>
                        <Button variant="primary" size="sm" onClick={onDetailsClick} city={city.id}>Details</Button>
                        <Button variant="danger" size="sm" onClick={onDeleteClick} city={city.id}>Delete</Button>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
)