import React from 'react';
import { Container, Nav, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import { Link } from 'react-router-dom';
// import HomeSectionCard from '../../components/cards/sections_card/HomeSectionCard.js';

const HomePage = () => {

    return (
        <main>
            <Container fluid className="header-section">
                <h1 className="display-3 header-title">Raccoon</h1>
                <h4 className="header-subtitle">Професионално почистване</h4>
                <div className="my-4">
                    <Nav.Link as={Link} to="/search">
                        <Button variant="light" size="lg" className="search-button">
                        Услуги
                        </Button>
                    </Nav.Link>
                </div>
                <h1 className="display-3 header-title">Coming Soon</h1>
            </Container>
            <Container fluid className="image-container d-flex justify-content-center align-items-center">
                <Row>
                    <img 
                        src="/images/header/raccoon-logo.svg" 
                        alt="Descriptive Alt Text" 
                        style={{ width: '600px', height: '600px' }}
                    />
                </Row>
            </Container>
        </main>
    );
};

export default HomePage;