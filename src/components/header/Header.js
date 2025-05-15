import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'; // Import the icon
import './Header.css';

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <Navbar variant='dark' expand="lg" fixed="top" className="p-2 justify-content-center header-component">
            <Container className="w-100 w-md-75 w-lg-50 mx-auto d-flex align-items-center">
                {/* Logo */}
                <Navbar.Brand as={Link} to="/" className="header-logo">
                    <img src="/images/header/raccoon-logo.svg" alt="Logo" className="me-2" style={{ width: '40px', height: '40px' }}/> Raccoon
                </Navbar.Brand>

                {/* Toggle for Mobile View */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav">

                    <Nav className="me-auto d-flex align-items-center header-nav">
                        <Nav.Link as={Link} to="/docs/intro" className={/^\/docs\/.*/.test(currentPath) ? 'text-primary' : 'header-element'}>
                            Начало
                        </Nav.Link>
                        <Nav.Link as={Link} to="/search" className={currentPath === '/search' ? 'text-primary' : 'header-element'}>
                            Услуги
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className={currentPath === '/about' ? 'text-primary' : 'header-element'}>
                            За нас
                        </Nav.Link>
                    </Nav>


                    {/* <Nav>
                        <Nav.Link
                            href="https://github.com/merev" // Replace with your GitHub URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className='header-element'>
                            GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;