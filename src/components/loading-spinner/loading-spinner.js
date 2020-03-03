import React from 'react';

import { Spinner } from 'react-bootstrap';

import styles from './loading-spinner.module.scss';

export const LoadingSpinner = () => (
    <div className={styles.spinner_container}>
        <Spinner animation="border" variant="primary" className={styles.spinner} />
    </div>
)