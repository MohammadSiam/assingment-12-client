import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import './Banner.css'



const Banner = () => {
    return (
        <div className='image'>
            <Container >
                <div className="heading">
                    <h1 >Buy The Best Quality <br /> Car's With Us</h1>
                    <Button>Book Now</Button>
                </div>
            </Container>
        </div>

    );
};

export default Banner;