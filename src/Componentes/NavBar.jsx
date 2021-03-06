import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import '../Estilos/NavBarStyle.css';
import IconoCarrito from "./CartWidget";


 export default function BarraNavegacion () {
     
    return (
        <>
        <Navbar className="navBar-contenedor" expand="md">
            <Container >
                <Navbar fixed="top" />
                <Navbar.Brand>Mainhdra Cosmética</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Link to={"/"} style={{margin: '1rem',textDecoration:'none', color:'gray'}}>Home</Link>
                    <Link to={"/category/aceites"} style={{margin: '1rem',textDecoration:'none', color:'gray'}}>Aceites</Link>
                    <Link to={"/category/cremas"} style={{margin: '1rem',textDecoration:'none', color:'gray'}}>Cremas</Link>         
                    <Link to={"/category/jabones"} style={{margin: '1rem',textDecoration:'none', color:'gray'}}>Jabones</Link>         
                    </Nav>
                </Navbar.Collapse>
                <IconoCarrito/>
            </Container>
        </Navbar>
        
</>
    )
}