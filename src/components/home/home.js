import React from 'react';

import { Link } from 'react-router-dom';
import { Jumbotron, Button, Carousel } from 'react-bootstrap';

export const Home = () => (
    <>
        <Jumbotron>
            <h1>World Travel Guide</h1>
            <p>
                This guide provides some basic info about cities across the world. You can read use this as an inspiration before your next journey.<br />
                Explore interesting places, rate them, add a review after visiting a city to help other users to decide what should be their next stop.
        </p>
            <p>
                <Button as={Link} to="/about" variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://live.staticflickr.com/1945/43569188370_716115bab1_b.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Warsaw</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://live.staticflickr.com/419/32602025025_8fb05ef860_h.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Sydney</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://live.staticflickr.com/8762/28230278202_b0c0828192_b.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Los Angeles</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
)