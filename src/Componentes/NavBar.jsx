import React from "react";
// Importando Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
// Hoja de estilo propio
import '../Estilos/NavBarStyle.css';
//Importando CartWidget
import IconoCarrito from "./CartWidget";


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
                    <Link to={"/"} style={{margin: '1rem',textDecoration:'none', color:'gray'}}>Home</Link>
                    <Link to={"/category/aceites"} style={{margin: '1rem',textDecoration:'none', color:'gray'}}>Aceites</Link>
                    <Link to={"/category/cremas"} style={{margin: '1rem',textDecoration:'none', color:'gray'}}>Cremas</Link>         
                    </Nav>
                </Navbar.Collapse>
                <IconoCarrito/>
            </Container>
        </Navbar>
        
</>
    )
}