import React from 'react';
import {Container, Row, Col } from 'react-bootstrap'
function Footer() {
  return <footer className="footer" data-background-color="black">
  <Container className="footer">
    <Row>
      <Col>
      <a href="#/home" >HOME</a>
      </Col>
      <Col>
      <a href="#/privacypolicy" >privacypolicy</a>
      </Col>
      <Col>
      ©2021
      </Col>
    </Row>
  </Container>
</footer>;
}

export default Footer;
