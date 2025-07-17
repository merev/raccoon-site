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
        });
    }, []);

    return (
        <CenteredLayout>
        <div className="homepage-header-section">
        <section className="homepage-main-section text-center">
          <h1 className="display-3 homepage-title">Raccoon Cleaning</h1>
          <h4>Професионално почистване с техника <b>Kärcher</b></h4>
        </section>
        
        <section className="homepage-subtitle text-center">
          <h6 className="header-subtitle">
          Ние от <b>Raccoon Cleaning</b> вярваме, че чистотата е повече от услуга – тя е доверие, качество и внимание към всеки детайл. Благодарение на модерната техника на световния лидер <b>Kärcher</b>, нашият професионален екип се грижи не само за безупречната чистота на вашия дом или офис, но и за перфектния вид на вашия автомобил. Изберете нашите решения и се насладете на свежестта, комфорта и уюта, които заслужавате!
          </h6>
          <div className="my-4">
            <Nav.Link as={Link} to="/search">
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
                { title: 'Домове', img: 'linux-icon.png' },
                { title: 'Офиси', img: 'linux-icon.png' },
                { title: 'Автомобили', img: 'linux-icon.png' },
                { title: 'Входове', img: 'linux-icon.png' },
                { title: 'Дворове', img: 'linux-icon.png' }
              ].map((service, index) => (
                <div
                  key={index}
                  className="col-12 col-md-4 mb-4 d-flex justify-content-center"
                  data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                >
                  <Nav.Link as={Link} to="/search">
                    <div className="card" style={{ width: '18rem' }}>
                      <img
                        src={`/images/placeholder/${service.img}`}
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
            {/* <Row className="justify-content-center">
              <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
                <Nav.Link as={Link} to="/search">
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    src="/images/placeholder/linux-icon.png"
                    className="card-img-top"
                    alt="Домове"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Домове</h5>
                  </div>
                </div>
                </Nav.Link>
              </div>
              <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
                <Nav.Link as={Link} to="/search">
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    src="/images/placeholder/linux-icon.png"
                    className="card-img-top"
                    alt="Офиси"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Офиси</h5>
                  </div>
                </div>
                </Nav.Link>
              </div>
              <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
                <Nav.Link as={Link} to="/search">
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    src="/images/placeholder/linux-icon.png"
                    className="card-img-top"
                    alt="Автомобили"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Автомобили</h5>
                  </div>
                </div>
                </Nav.Link>
              </div>
              <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
                <Nav.Link as={Link} to="/search">
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    src="/images/placeholder/linux-icon.png"
                    className="card-img-top"
                    alt="Входове"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Входове</h5>
                  </div>
                </div>
                </Nav.Link>
              </div>
              <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
                <Nav.Link as={Link} to="/search">
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    src="/images/placeholder/linux-icon.png"
                    className="card-img-top"
                    alt="Дворове"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Дворове</h5>
                  </div>
                </div>
                </Nav.Link>
              </div>
            </Row> */}
          </Container>
        </section>
      </CenteredLayout>
    );
};

export default HomePage;