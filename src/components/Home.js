import React from 'react';
import Card from 'react-bootstrap/Card'

import { Col, Row, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import * as Constants from '../constants/Constants'
function Home() {

  return <>
    <Container class="comicCardRow">
      <Row>
        {Constants.comics.map((comic, key) =>
          <Col md="4" key={key}>
            <Card className="comicCard" >
              <Card.Img variant="top" className="comicCardImg" src={comic.photo.default} />
              <Card.Body >
                <Card.Title className="comicCardTitle">{comic.name}</Card.Title>
                <Card.Text className="comicCardText">{comic.description}</Card.Text>
                <Button variant="primary" className="comicCardButton" href={comic.url}>Go To Comic</Button>
              </Card.Body>
            </Card>
          </Col>
        )}

      </Row>
    </Container>
  </>

}

export default Home;
