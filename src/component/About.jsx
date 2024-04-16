// Import necessary dependencies
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Define the About component
const About = () => {
  return (
    <div className="about-section py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h2 className="about-heading">About Us</h2>
            <p className="about-content">
              Welcome to our social media platform! We aim to connect people from all over the world, providing a space for sharing thoughts, ideas, and experiences. Our mission is to foster meaningful connections and empower individuals to express themselves freely.
            </p>
            <p className="about-content">
              At our core, we value inclusivity, diversity, and user privacy. We strive to create a safe and respectful environment where everyone feels welcome and respected.
            </p>
            <p className="about-content">
              Join us on this journey as we build a vibrant community where people can connect, engage, and inspire one another. Together, let's make social media a force for good.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
