import { useState } from 'react';

import img01 from '../img/home/img01.jpg'
import img02 from '../img/home/img02.jpg'
import img03 from '../img/home/img03.jpg'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Pagina() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (<>
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Ejemplo React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                        <Nav.Link href="#servicios">Servicios</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>

                <img style={{ maxHeight: "100vh" }} className="d-block w-100" src={img01} alt="First Slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img style={{ maxHeight: "100vh" }} className="d-block w-100" src={img02} alt="img02" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img style={{ maxHeight: "100vh" }} className="d-block w-100" src={img03} alt="img03" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <Container>
      <Row>
        <Col>Ejemplo 1</Col>
        
      </Row>
      <Row>
        <Col>Ejemplo 2</Col>
        <Col>Ejemplo 3</Col>
        <Col>Ejemplo 4</Col>
      </Row>
    </Container>
    </>
    );
}

export default Pagina;