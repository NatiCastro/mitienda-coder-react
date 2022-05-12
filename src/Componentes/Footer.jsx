import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import '../Estilos/NavBarStyle.css';

export default function Footer () {

    return (
        <>
        <Nav sticky="bottom" className="justify-content-center" activeKey="/home">
    <Nav.Item>
          <Link className='link-footer' to={'/'}> Home </Link>
    </Nav.Item>
      <Nav.Item>
      Copyright TIENDA MAINHDRA 2022 | Todos los derechos reservados 
      </Nav.Item>
  </Nav>
        </>
    )
}