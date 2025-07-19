import React, { useEffect } from 'react';
import { Container, Nav, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import { Link } from 'react-router-dom';
import CenteredLayout from '../../components/utilities/CenteredLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import HomeSectionCard from '../../components/cards/sections_card/HomeSectionCard.js';



const HomePage = () => {
    
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
    }, []);

    return (
        <CenteredLayout>
        <div className="homepage-header-section">
        <section className="homepage-main-section text-center">
          <h1 className="display-3 homepage-title">Raccoon Cleaning</h1>
          <h4 className="homepage-subtitle">Професионално почистване с техника <b>Kärcher</b> в Пловдив</h4>
        </section>
        
        <section className="text-center">
          <h6 className="header-subtitle">
          Ние от <b>Raccoon Cleaning</b> вярваме, че чистотата е повече от услуга – тя е доверие, качество и внимание към всеки детайл. Благодарение на модерната техника на световния лидер <b>Kärcher</b>, нашият професионален екип се грижи не само за безупречната чистота на вашия дом или офис, но и за перфектния вид на вашия автомобил.
          </h6>
          <div className="my-4">
            <Nav.Link as={Link} to="/services">
              <Button variant="light" size="lg" className="search-button">
                Услуги
              </Button>
            </Nav.Link>
          </div>
        </section>
        </div>
  
        <section className="image-container d-flex justify-content-center align-items-center">
          <img
            src="/images/header/raccoon-logo.svg"
            alt="Raccoon Cleaning Logo"
            style={{ width: '60%', maxWidth: '600px', height: 'auto' }}
          />
        </section>

        <section className="services-section">
          <Container>
            <h2 className="mb-4 text-center services-title">Нашите услуги</h2>
            <Row className="justify-content-center">
              {[
                { title: 'Апартаменти', img: 'flat.jpg', link: '/services/flats' },
                { title: 'Къщи', img: 'house.webp', link: '/services/houses' },
                { title: 'Офиси', img: 'office.jpg', link: '/services/offices' },
                { title: 'Автомобили', img: 'car.jpg', link: '/services/cars' },
                { title: 'Входове', img: 'entrance.jpg', link: '/services/entrances' },
                { title: 'Дворове', img: 'backyard.webp', link: '/services/backyards' },
              ].map((service, index) => (
                <div
                  key={index}
                  className="col-12 col-md-4 mb-4 d-flex justify-content-center"
                  data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                >
                  <Nav.Link as={Link} to={service.link}>
                    <div className="card" style={{ width: '18rem' }}>
                      <img
                        src={`/images/homepage/${service.img}`}
                        className="card-img-top"
                        alt={service.title}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{service.title}</h5>
                      </div>
                    </div>
                  </Nav.Link>
                </div>
              ))}
            </Row>
          </Container>
        </section>
        <section className="partners-section text-center py-5">
          <Container>
            <h2 className="mb-4 partners-title">Нашите партньори</h2>
            <Row className="justify-content-center align-items-center">
              <div
                className="col-6 col-md-4 mb-4 d-flex justify-content-center"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="1000"
              >
                <a href="https://www.kaercher.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/partners/karcher-logo.png"
                    alt="Kärcher Logo"
                    className="partner-logo"
                  />
                </a>
              </div>
              <div
                className="col-6 col-md-4 mb-4 d-flex justify-content-center"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="1000"
              >
                <a href="https://www.koch-chemie.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/partners/koch-chemie-logo.webp"
                    alt="Koch Chemie Logo"
                    className="partner-logo"
                  />
                </a>
              </div>
            </Row>
          </Container>
        </section>
      </CenteredLayout>
    );
};

export default HomePage;