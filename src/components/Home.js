import React from 'react';
import Card from 'react-bootstrap/Card'

import { Col, Row, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import * as Constants from '../constants/Constants'
function Home() {

  return <Container>
    <Row>
      {Constants.comics.map((comic, key) =>
        <Col md="4" key={key}>
          <Card className="comicCard" >
            <Card.Img variant="top" className="comicCardImg" src={comic.photo.default} />
            <Card.Body>
              <Card.Title>{comic.name}</Card.Title>
              <Card.Text>{comic.description}</Card.Text>
              <Button variant="primary" href={comic.url}>Latest Chapter</Button>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  </Container>

}

export default Home;
