import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'; // Import the icon
import './Header.css';

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="p-2">
            <Container fluid className="px-0">
                {/* Logo and Title */}
                <Nav.Link
                    as={Link}
                    to="/"
                >
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center ms-3 justify-content-center header-merev">
                    <img
                        src="/images/header/raccoon-logo.svg" // Replace with the actual path to your logo
                        alt="Logo"
                        className="me-2"
                        style={{ width: '30px', height: '30px' }}
                    />
                    {/* <h7 className='header-merev'>Kristian Merev</h7> */}
                        
                    Raccoon
                        
                </Navbar.Brand>
                </Nav.Link>

                {/* Toggle for Mobile View */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav">

                    <Nav className="me-auto">
                        <Nav.Link
                            as={Link}
                            to="/docs/intro"
                            className={/^\/docs\/.*/.test(currentPath) ? 'text-primary' : 'header-element'}>
                            Начало
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/search"
                            className={currentPath === '/search' ? 'text-primary' : 'header-element'}>
                            Услуги
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/about"
                            className={currentPath === '/about' ? 'text-primary' : 'header-element'}>
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