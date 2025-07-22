import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './FlatsPage.css';
import { CenteredLayout, PartnersSection } from '../../components';

const activities = [
  { name: 'Почистване на подове и повърхности', price: 20 },
  { name: 'Пране на мека мебел', price: 35 },
  { name: 'Пране на килими', price: 35 },
  { name: 'Почистване на тераса', price: 35 },
  { name: 'Почистване на кухня и уреди', price: 30 },
  { name: 'Почистване на баня и тоалетна', price: 25 },
  { name: 'Измиване на прозорци', price: 20 },
  { name: 'Дезинфекция и ароматизация', price: 15 },
];

const flatTypes = ['1 стая', '2 стаи', '3 стаи', '4+ стаи'];

const plans = [
  {
    name: 'Базов',
    prices: {
      '1 стая': 59,
      '2 стаи': 69,
      '3 стаи': 79,
      '4+ стаи': 89
    },
    features: ['Подове и повърхности', 'Измиване на прозорци', 'Почистване на тераса']
  },
  {
    name: 'Стандартен',
    prices: {
      '1 стая': 89,
      '2 стаи': 99,
      '3 стаи': 109,
      '4+ стаи': 119
    },
    features: ['Всички повърхности', 'Измиване на прозорци', 'Почистване на тераса', 'Баня и кухня']
  },
  {
    name: 'Премиум',
    prices: {
      '1 стая': 119,
      '2 стаи': 129,
      '3 стаи': 139,
      '4+ стаи': 149
    },
    features: ['Пълно почистване + дезинфекция', 'Пране на мека мебел', 'Пране на килими', 'Почистване на тераса', 'Баня и кухня']
  }
];

const FlatsPage = () => {
  const [selected, setSelected] = useState([]);
  const [selectedFlatType, setSelectedFlatType] = useState(flatTypes[0]);

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
    selected.reduce((total, activity) => {
      const found = activities.find((a) => a.name === activity);
      return total + (found ? found.price : 0);
    }, 0);

  return (
    <CenteredLayout>
      <section className="service-detail-section py-5">
        <Container>
          <h2 className="text-center mb-4 service-title">Почистване на апартаменти</h2>

          <Row className="mb-4 justify-content-center" data-aos="fade-up">
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

          <Row className="mb-5" data-aos="fade-up">
            <h4 className="mb-4 text-center">Нашите планове</h4>
            {plans.map((plan, i) => (
              <Col key={i} md={4} className="mb-4">
                <Card className="plan-card text-center">
                  <Card.Body>
                    <Card.Title>{plan.name}</Card.Title>
                    <h3 className="my-3">
                      {plan.prices[selectedFlatType]} лв
                    </h3>
                    <small className="text-muted">за {selectedFlatType}</small>
                    <ul className="list-unstyled mt-3">
                      {plan.features.map((f, idx) => (
                        <li key={idx}>• {f}</li>
                      ))}
                    </ul>
                    <Button variant="dark" className="mt-3">Избери</Button>
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
                    label={`${activity.name} - ${activity.price} лв`}
                    onChange={() => toggleActivity(activity.name)}
                    checked={selected.includes(activity.name)}
                  />
                ))}
                <hr />
                <h5>Обща цена: {getTotalPrice()} лв</h5>
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
