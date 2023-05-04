import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IMAGES from '../IMAGES/images';

export default function Dogs() {
  return (
    <div>
      
      <div class="d-flex justify-content-between flex-wrap d-inline-flex  " id='dogs-card-cell'>

              <div className="d-flex justify-content-around " class="d-inline-block">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={IMAGES.frenchFunny} />
                  <Card.Body>
                    <Card.Title>French Bulldog</Card.Title>
                    <Card.Text>
                      I am the French bull dog, you cant take me anywhere since im not as big!
                    </Card.Text>
                    <Button variant="primary" href="/french">See Me</Button>
                  </Card.Body>
                </Card>
              </div>

              <div className="d-flex justify-content-around " class="d-inline-block">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={IMAGES.germanFunny} />
                <Card.Body>
                  <Card.Title>German Shepherd </Card.Title>
                  <Card.Text>
                    I am the German Shepherd i will protect anyone!
                  </Card.Text>
                  <Button variant="primary" href="german">See Me</Button>
                </Card.Body>
              </Card>
              </div>

              <div className="d-flex justify-content-around" class="d-inline-block">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={IMAGES.goldenFunny} />
                <Card.Body>
                  <Card.Title>Golden Retreverd</Card.Title>
                  <Card.Text>
                    I am the Golden Retreverd top 10 of smartest dogs.
                  </Card.Text>
                  <Button variant="primary" href="Golden">See Me</Button>
                </Card.Body>
                </Card>
              </div>

                <div className="d-flex justify-content-around " class="d-inline-block">
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={IMAGES.labradorfunny} />
                  <Card.Body>
                    <Card.Title>Labrador</Card.Title>
                    <Card.Text>
                      I am the Labrador a sweet heart also good with kids!
                    </Card.Text>
                    <Button variant="primary" href="labrador">See Me</Button>
                  </Card.Body>
                  </Card>
                </div>

              <div className="d-flex justify-content-around " class="d-inline-block">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={IMAGES.poodleFunny} />
                  <Card.Body>
                    <Card.Title>Poodle</Card.Title>
                    <Card.Text>
                      I am the poodle im a really loving dog and dont sheed at all.
                    </Card.Text>
                    <Button variant="primary" href="poodle">See Me</Button>
                  </Card.Body>
                </Card>
              </div>
      </div>

    </div>
      
  )
}
