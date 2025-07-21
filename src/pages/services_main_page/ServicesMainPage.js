import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ServicesMainPage.css';
import CenteredLayout from '../../components/utilities/CenteredLayout';

const services = [
  {
    title: 'Апартаменти',
    img: 'flat.jpg',
    link: '/services/flats',
    points: ['Почистване на подове и повърхности', 'Пране на мека мебел', 'Дезинфекция и ароматизация']
  },
  {
    title: 'Къщи',
    img: 'house.webp',
    link: '/services/houses',
    points: ['Почистване след ремонт', 'Обработка на труднодостъпни зони', 'Грижа за различни повърхности']
  },
  {
    title: 'Офиси',
    img: 'office.jpg',
    link: '/services/offices',
    points: ['Редовно почистване', 'Поддръжка на санитарни помещения', 'Почистване на прозорци и бюра']
  },
  {
    title: 'Автомобили',
    img: 'car.jpg',
    link: '/services/cars',
    points: ['Пране на тапицерия', 'Почистване на детайли', 'Полиране и освежаване']
  },
  {
    title: 'Входове',
    img: 'entrance.jpg',
    link: '/services/entrances',
    points: ['Почистване на стълбища', 'Измиване на прозорци', 'Дезинфекция на общи части']
  },
  {
    title: 'Дворове',
    img: 'backyard.webp',
    link: '/services/backyards',
    points: ['Почистване на плочници', 'Събиране на отпадъци', 'Обработка срещу плевели']
  },
  {
  title: 'Заведения',
  img: 'restaurants.jpg',
  link: '/services/restaurants',
  points: [
    'Почистване на кухненски зони и оборудване',
    'Дезинфекция на работни повърхности',
    'Почистване на зали и санитарни помещения'
  ]
  },
  {
  title: 'Гаражи и паркоместа',
  img: 'garages.webp', // Увери се, че този файл е в public/images/homepage/
  link: '/services/garages',
  points: [
    'Обработка на замърсени подови настилки',
    'Премахване на масла, сажди и прах',
    'Почистване на врати, врати и технически инсталации'
  ]
  },
  {
  title: 'Специализирани обекти',
  img: 'specialized.jpg', // Сложи подходящо изображение, напр. икона на зъбно колело или сграда
  link: '/services/specialized',
  points: [
    'Салони за красота и фризьорски салони',
    'Фитнес зали и спортни центрове',
    'Игрални зали',
    'Фото и видео студиа',
    'Цехове и работилници',
  ]
}
];

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <CenteredLayout>
      <section className="services-page py-5">
        <Container>
          <h2 className="text-center services-title mb-5">Нашите услуги</h2>
          <Row className="justify-content-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-4 mb-5 d-flex justify-content-center"
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              >
                <Link to={service.link} className="text-decoration-none">
                  <div className="service-card">
                    <img
                      src={`/images/homepage/${service.img}`}
                      alt={service.title}
                      className="service-img"
                    />
                    <div className="service-body">
                      <h4 className="service-title mb-3">{service.title}</h4>
                      <ul className="service-points text-start">
                        {service.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Row>
        </Container>
      </section>
    </CenteredLayout>
  );
};

export default ServicesPage;
