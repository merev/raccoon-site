import React from 'react';
import { Container, Nav, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import { Link } from 'react-router-dom';
import CenteredLayout from '../../components/utilities/CenteredLayout';
// import HomeSectionCard from '../../components/cards/sections_card/HomeSectionCard.js';

const HomePage = () => {

    return (
        <CenteredLayout>
        <section className="homepage-main-section text-center">
          <h1 className="display-3 homepage-title">Raccoon Cleaning</h1>
          <h4>Професионално почистване с техника <b>Kärcher</b></h4>
  
          <div className="my-4">
            <Nav.Link as={Link} to="/search">
              <Button variant="light" size="lg" className="search-button">
                Услуги
              </Button>
            </Nav.Link>
          </div>
          <h6 className="header-subtitle">
          Ние от <b>Raccoon Cleaning</b> вярваме, че чистотата е повече от услуга – тя е доверие, качество и внимание към всеки детайл. Благодарение на модерната техника на световния лидер <b>Kärcher</b>, нашият професионален екип се грижи не само за безупречната чистота на вашия дом или офис, но и за перфектния вид на вашия автомобил. Изберете нашите решения и се насладете на свежестта, комфорта и уюта, които заслужавате!
          </h6>
        </section>
  
        <section className="image-container d-flex justify-content-center align-items-center">
          <img
            src="/images/header/raccoon-logo.svg"
            alt="Raccoon Cleaning Logo"
            style={{ width: '60%', maxWidth: '600px', height: 'auto' }}
          />
        </section>
      </CenteredLayout>
    );
};

export default HomePage;