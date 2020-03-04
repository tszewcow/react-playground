import React from 'react';

import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

export const CityDetails = () => (
    <div>
        <Button as={Link} variant="primary" to='/cities'>Go back</Button>
    </div>
)