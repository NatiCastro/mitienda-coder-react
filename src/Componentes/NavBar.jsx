import React from "react";
// Importando Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// Hoja de estilo propio
import '../Estilos/NavBarStyle.css';


 export default function BarraNavegacion () {
     
    return (
        <>
        <Navbar className="navBar-contenedor" expand="lg">
            <Container >
                <Navbar fixed="top" />
                <Navbar.Brand href="#home">Mainhdra Cosmética</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Nosotros</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Aceites</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Cremas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Mi Carrito</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
</>
    )
}