import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../header/Header'; // Adjust path as needed
import Footer from '../footer/Footer'; // Adjust path as needed

const CenteredLayout = ({ children }) => {
  return (
    <>
      <Header />

      <Container fluid className="d-flex justify-content-center" style={{ minHeight: '100vh'}}>
        <div className="w-100 w-md-75 w-lg-50">
          {children}
        </div>
      </Container>
    </>
  );
};

export default CenteredLayout;
