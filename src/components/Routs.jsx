import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



import AboutUs from './AboutUs';
import Home from './Home';
import { Routes, Route, Link } from "react-router-dom";
const Routs = () => {
    return (
        <>

           
            <Navbar collapseOnSelect expand="lg"  fixed="bottom"  bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" >Features</Nav.Link>


                      
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<AboutUs />} />
            </Routes>





        </>


    )
}

export default Routs