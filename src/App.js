import React from 'react';
import './App.css';
import { Nav, Navbar, Container} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    <div className="App">
      <header>
        {/* NavBar */}    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Club de Dessin</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Inscription</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   
    
   {/* Caroussel */}
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 flower"
          src="https://images.unsplash.com/photo-1594897030264-ab7d87efc473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNwbGFzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 flower"
          src="https://images.unsplash.com/photo-1504060765228-f97d1772ff9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3BsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 flower"
          src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
     {/* Cards  */}
     <div className='cards'>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1598112152680-0c39a2928c64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNwbGFzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1592492152545-9695d3f473f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNwbGFzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1370678625/fr/photo/fond-de-banni%C3%A8re-aquarelle-neon-rainbow-sur-fond-noir-couleurs-aquarelles-au-n%C3%A9on-pur.jpg?b=1&s=170667a&w=0&k=20&c=hBPsD46Arn7Z6FqtFcnOG7qwNPoybxnBHiZk31nEw7A=" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    
    
      </header>
    </div>
  );
}
  export default App;
  