import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" style={{ display: "flex" }}>
                <Container>
                    <Navbar.Brand as={Link} to="/home">Navbar</Navbar.Brand>
                    <div>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                            <Nav.Link as={Link} to="/dashBoard">DashBoard</Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;