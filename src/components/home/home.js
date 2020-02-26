import React from 'react';

import { Link } from 'react-router-dom';
import {Jumbotron, Button} from 'react-bootstrap';

export const Home = () => (
    <Jumbotron>
        <h1>Sample react app</h1>
        <p>
            This is a simple react app build on top of react-bootstrap library.
        </p>
        <p>
            <Button as={Link} to="/about" variant="primary">Learn more</Button>
        </p>
    </Jumbotron>
)