import { Box } from '@mui/system';
import { Button } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar bg="primary" variant="dark" style={{ display: "flex" }}>
                <Container>
                    <Navbar.Brand as={Link} to="/home">Carrpi</Navbar.Brand>
                    <div>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/explore">Explore</Nav.Link>

                            {
                                user?.email ?
                                    <div style={{ display: "flex" }}>
                                        <Nav.Link as={Link} to="/dashboard">
                                            DashBoard
                                        </Nav.Link>
                                        <Nav.Link onClick={logout} as={Link} to="/home">Logout</Nav.Link>
                                    </div>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        {/* <Button color="inherit">Login</Button> */}
                                        Login
                                    </Nav.Link>
                            }
                            <Navbar.Text>
                                {
                                    user.email && <div>
                                        <div>
                                            <small className="login-photo">{user.displayName}</small>
                                            {/* <img className="login-photo" src={user.displayName} alt="" /> */}
                                        </div>
                                    </div>
                                }
                            </Navbar.Text>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;