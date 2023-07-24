import React, { useState, useEffect } from 'react';
import './extraservices.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import BlankComponent from '../../componentsv2/BlankComponent';

const ExtraServices = () => {

  const services = {
    addon: [
      {
        name: 'Stuffed Kongs',
        description: 'Our Stuffed Kongs are filled with dog friendly recipes that could include peanut butter, yogurt, pumpkin, and fruit. A good variety of ingredients keeps the activity challenging and enriching.',
        price: '$10.00',
      },
      {
        name: '15min Walk',
        description: 'You can reserve a 15 minute walk where your pup gets personalized time with one dog per handler. Please provide a well fitted harness, and leash. (Boarding only)',
        price: '$15.00',
      },
      {
        name: 'Story Time and Belly Rubs (15 Min)',
        description: 'Your pup will have 1 on 1 time with our expert “cuddlers” in our Doggy suite to hang out and cuddle. The Doggy suite is lovingly decorated like a living room that will make them feel like they are home. Recommended for boarding dogs who will be away from their pet parents for an extended period of time. (Boarding only)',
        price: '$15.00',
      },
    ],
    spa_packages: [
      {
        name: 'Barktastic Blissful Bath',
        description: [
          'Bath with standard or hypoallergenic shampoo and conditioner', 'Blow dry'
        ],
        size: [
          {
            name: 'small',
            price: '$25.00'
          },
          {
            name: 'medium',
            price: '$35.00'
          },
          {
            name: 'large',
            price: '$45.00'
          }
        ]
      },
      {
        name: 'Pawfect Pooch',
        description: [
          'Bath with upgraded Shampoo and Conditioner',
          'Blow dry',
          'Spritz',
          'Pick 2: Nail-trim, Ears Cleaned, Paw Pad trim and Balm'
        ],
        size: [
          {
            name: 'small',
            price: '$40.00'
          },
          {
            name: 'medium',
            price: '$50.00'
          },
          {
            name: 'large',
            price: '$60.00'
          }
        ]
      }
    ],
    spa_addons: [
      {
        name: 'Nail Trim',
        price: '$15.00'
      },
      {
        name: 'Paw Pad Fur Trim',
        price: '$15.00'
      },
      {
        name: 'Paw Pad Balm and Massage',
        price: '$15.00'
      },
      {
        name: 'Non-toxic Nail Polish',
        price: '$10.00'
      }
    ]
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);


  if (loading) {
    return <BlankComponent />
  } else {
    return (
      <>
      {/* <h1>Extra Services Page</h1> */}
      <Container>
        
        {/* This container contains all the addons we offer for daycare and boarding */}
        <Container className='es-page-container'>
          <h1>Extra Services</h1>
          <h4>
            To enhance your pet's experience during their boarding or daycare stays, Wags 'n' Wings offers the following services. 
            We are looking to expand our offerings to include more advanced grooming and behavioral training by appointment.
          </h4>
          <br />
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: services.addon.length }).map((_, idx) => (
              <Col key={idx}>
                <Card border='success'>
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                  <Card.Body>
                    <Card.Title><h4>{services.addon[idx].name}</h4></Card.Title>
                    <Card.Text>
                        {services.addon[idx].description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer><p>{services.addon[idx].price}</p></Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        {/* This container contains the two spa packages we offer  */}
        <Container className='es-page-container'>
          <h1>Spa Packages</h1>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: services.spa_packages.length }).map((_, idx) => (
              <Col key={idx}>
                <Card border='success'>
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                  <Card.Body>
                    <Card.Title><h4>{services.spa_packages[idx].name}</h4></Card.Title>
                    <Card.Text as='div'>
                      {services.spa_packages[idx].description.map((_, i) => (
                        <ul key={i}>
                          <li>{services.spa_packages[idx].description[i]}</li>
                        </ul>
                        // <Row key={i}>
                        //   {services.spa_packages[idx].description[i]}
                        // </Row>
                      ))}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Row>
                      {services.spa_packages[idx].size.map((_, j) => (
                        <Col key={j} className='center'>
                        <p>
                        {services.spa_packages[idx].size[j].name}:  {services.spa_packages[idx].size[j].price}
                        </p>
                        </Col>
                      ))}
                    </Row>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Spa addons */}
        <Container className='es-page-container'>
          <h1>Additional Spa Services</h1>
          <br />
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: services.spa_addons.length }).map((_, idx) => (
              <Col key={idx}>
                <Card border='success'>
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                  <Card.Body>
                    <Card.Title><h4>{services.spa_addons[idx].name}</h4></Card.Title>
                    <Card.Text>
                        {/* {services.addon[idx].description} */}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer><p>{services.spa_addons[idx].price}</p></Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

      </Container>
    </>
    );
  }
}

export default ExtraServices;
