import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './page-not-found.module.scss';

export const PageNotFound = () => (
    <Container fluid>
        <Row>
            <Col className={styles.container}>
                <div>
                    <h3>Page not found.</h3>
                    <p>Go back to the <Link to="/home">Home</Link> page.</p>
                </div>
            </Col>
        </Row>
    </Container>
)