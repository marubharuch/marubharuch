import React from 'react'

import{ Container,Nav,Navbar} from 'react-bootstrap';




import AboutUs from './AboutUs';
import Home from './Home';
import { Routes, Route, Link } from "react-router-dom";
const Routs = () => {
    return (
        <>

         

            <Navbar collapseOnSelect expand="lg" fixed="bottom"  bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/' >React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/'  >Home</Nav.Link>
                            <Nav.Link as={Link} to='/about'  >About Us</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="/about">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
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