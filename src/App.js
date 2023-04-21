/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.css';
import { Nav, Navbar, Container, Carousel, Button,Card, Form } from 'react-bootstrap';
import logo from "./favicon.ico"

function App() {
  return (
    <div className="App">
      <header>
        {/* NavBar */}  
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <div className='iconnav'>
            <img src={logo} height={50} width={50}/>  
            <h3> Club Picasso</h3>
            </div>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#inscri"><a href='#inscri'>Inscription</a></Nav.Link>
            <Nav.Link href="#contact" ><a href='#contcat-us'>Contact</a></Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
   </header>
   <main>
   {/* Caroussel */}
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 flower"
          src="https://images.unsplash.com/photo-1594897030264-ab7d87efc473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNwbGFzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='tr'>Acrylique</h3>
          <p className='des'>Peintures acryliques : le top pour de belles œuvres d'art!!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 flower"
          src="https://images.unsplash.com/photo-1504060765228-f97d1772ff9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3BsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='tr'>Aquarelle</h3>
          <p className='des'>Aquarelle idéal pour les petits et les grand, surtout les petits!!!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 flower"
          src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='tr'> Peinture à huile </h3>
          <p className='des'>
        La peinture des grands maîtres et artistes professionnels
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
     {/* Cards  */} 
     <h2 id='inscri'>Inscription:</h2>
     <div className='cards' >     
     <Card style={{ width: '20rem' }}>
      <Card.Img className='miniat' variant="top" src="https://jean-racine.tn/wp-content/uploads/2019/03/art-plastique-1.jpg" />
      <div className='cb'>
      <Card.Body className='cbody'>  
        <Card.Title className='ctxt'><a href='#ctxt'> Club Enfant</a></Card.Title>
        <Card.Text>
        Ce club est un espace pour s'exercer au dessin et à la peinture et donner libre cours à sa créativité. A travers les lignes, les courbes et les couleurs, ...
        </Card.Text>
        </Card.Body>
        </div> 
        </Card>

    <Card style={{ width: '20rem' }}>
      <Card.Img  className='miniat'variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body className='cb'>     
        <Card.Title className='ctxt'><a href='#ctxt'> Club peinture à huile</a></Card.Title>
        <Card.Text>
        Un apprentissage qui va vous guider pas à pas pour découvrir, réaliser et maîtriser les bases de la peinture à l’huile,...
        </Card.Text>        
      </Card.Body>
      </Card> 
    
    <Card style={{ width: '20rem' }}>
      <Card.Img className='miniat' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_tW8rvb0C9EMQHS5qXYgSgAbpeWi-BnIWw&usqp=CAU" />
      <Card.Body className='cb'>     
        <Card.Title className='ctxt'><a href='#ctxt'> Club Dessin</a></Card.Title>
        <Card.Text >
        L’apprentissage des techniques de dessin ou encore l’illustration, le manga, ou le comics, on vous guidera pas à pas dans chacune de ces techniques : anatomie, composition d’image, couleur, peinture, création de personnages etc…
        </Card.Text>
        </Card.Body>
        </Card>
    </div>
    <h2>Pour toute information n'hesitez pas à nous contacter:</h2>
   
    {/* form */}
    <div id="contcat-us">
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='flabelm'>Addresse Email </Form.Label>
        <Form.Control className='finput-mail' type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='flabelph'>Numero de téléphone </Form.Label>
        <Form.Control className='finput-mail' type="" placeholder="+216 000 000" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='flabelctact'>On vous répondra dans les plus brefs délais!</Form.Label>
        <Form.Control  className='finput'as="textarea" rows={3} />
      </Form.Group>
      <div className="mb-2 btsubmit btsubmit">
      <Button variant="warning">Envoyez</Button>{' '}       
      </div>
    </Form>
    </div>
    </main> 

    {/* pied de page une carte de localisation */}
    <footer> 
    <Card className="bg-dark text-white">
      <Card.Img height={150} src="https://images.unsplash.com/photo-1652523229133-0ff568cd3a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696&q=80" />
      <Card.ImgOverlay>
        <Card.Title>
          <div className='ifofooter'>
          <img src={logo} height={50} width={50}/>
          Club Picasso 
          </div>
        </Card.Title>
        <Card.Text>        
          Adresse: Menzah5, Ariana 
          tel : 90 000 111
          email: Picasso@gmail.com
          </Card.Text>
          </Card.ImgOverlay>
    </Card>
    </footer> 
    </div>
    
  );
}
  export default App;
  