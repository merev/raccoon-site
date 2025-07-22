import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './FlatsPage.css';
import { CenteredLayout, PartnersSection } from '../../components';
import { flatTypes, subscriptionTypes, plans, activities } from '../../data';

const FlatsPage = () => {
  const [selected, setSelected] = useState([]);
  const [selectedFlatType, setSelectedFlatType] = useState(flatTypes[0]);
  const [subscriptionType, setSubscriptionType] = useState(subscriptionTypes[0]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const toggleActivity = (activity) => {
    setSelected((prev) =>
      prev.includes(activity)
        ? prev.filter((item) => item !== activity)
        : [...prev, activity]
    );
  };

  const getTotalPrice = () =>
    selected.reduce((total, name) => {
      const found = activities.find((a) => a.name === name);
      return total + (found ? found.prices[selectedFlatType][subscriptionType] : 0);
    }, 0);

  return (
    <CenteredLayout>
      <section className="service-detail-section py-5">
        <Container>
          <h2 className="text-center mb-4 service-title">Почистване на апартаменти</h2>

          <Row className="mb-3 justify-content-center" data-aos="fade-up">
            <Col md={6}>
              <Form.Group controlId="flatTypeSelect">
                <Form.Label><strong>Тип на апартамента:</strong></Form.Label>
                <Form.Select
                  value={selectedFlatType}
                  onChange={(e) => setSelectedFlatType(e.target.value)}
                >
                  {flatTypes.map((type, i) => (
                    <option key={i} value={type}>{type}</option>
                  ))}
                </Form.Select>
            </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4 justify-content-center" data-aos="fade-up">
            <Col md={6}>
              <Form.Group controlId="subscriptionSelect">
                <Form.Label><strong>Тип на обслужване:</strong></Form.Label>
                <Form.Select
                  value={subscriptionType}
                  onChange={(e) => setSubscriptionType(e.target.value)}
                >
                  {subscriptionTypes.map((type, i) => (
                    <option key={i} value={type}>{type}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-5" data-aos="fade-up">
            <h4 className="mb-4 text-center">Нашите планове</h4>
            {plans.map((plan, i) => (
              <Col key={i} md={4} className="mb-4 d-flex">
                <Card className="plan-card text-center w-100 d-flex flex-column">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{plan.name}</Card.Title>
                    <h3 className="my-3">
                      {plan.prices[selectedFlatType][subscriptionType]} лв
                    </h3>
                    <small className="text-muted mb-3">
                      за {selectedFlatType}, {subscriptionType.toLowerCase()}
                    </small>
                    <ul className="list-unstyled flex-grow-1">
                      {plan.features.map((f, idx) => (
                        <li key={idx}>• {f}</li>
                      ))}
                    </ul>
                    <Button variant="dark" className="mt-auto">Избери</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Row data-aos="fade-up">
            <h4 className="mb-4 text-center">Или създайте своя собствен пакет</h4>
            <Col md={8} className="mx-auto">
              <Form className="calculator-box p-4">
                {activities.map((activity, i) => (
                  <Form.Check
                    key={i}
                    label={`${activity.name} - ${activity.prices[selectedFlatType][subscriptionType]} лв`}
                    onChange={() => toggleActivity(activity.name)}
                    checked={selected.includes(activity.name)}
                  />
                ))}
                <hr />
                <div className="summary-box mt-3">
                <h5>Обща цена: {getTotalPrice()} лв</h5>
                <p className="text-muted mb-0">
                    за {selectedFlatType}, {subscriptionType.toLowerCase()}
                </p>
                </div>
                <Button variant="success" className="mt-3">Резервирай</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      <PartnersSection />
    </CenteredLayout>
  );
};

export default FlatsPage;
