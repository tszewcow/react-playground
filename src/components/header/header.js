import React from 'react';

import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export const Header = ({handleSearchClick}) => (
    <header>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/home">Sample app</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success" onClick={handleSearchClick}>Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </header>
)