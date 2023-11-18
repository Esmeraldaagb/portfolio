import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FaSignInAlt } from 'react-icons/fa';
import { FaUserPlus } from 'react-icons/fa';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';


function AcceuilPatient() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
       <header>
         <Navbar bg="light" expand="lg" className="navbar-expand-lg">
            <Navbar.Brand href="#home">
               <h2>HEALTH TRACK</h2>
            </Navbar.Brand> 
       
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="collapseOnSelect">
                    <Nav className="ml-auto" variant="underline" >
                        <Nav.Item>
                            <Link to="/inscription_patient" className="nav-link">
                            <FaUserPlus /><h4>portfolio</h4>
                            </Link>
                        </Nav.Item>
                  
                    <Nav.Item className="ml-auto">
                            <Link to="/connexion_patient" className="nav-link">
                            <FaSignInAlt /><h4>Connexion</h4>
                            </Link>

                    </Nav.Item>
                   
                    <Nav.Item>
                            <Link to="/inscription_patient" className="nav-link">
                            <FaUserPlus /><h4>Inscription</h4>
                            </Link>
                    </Nav.Item>

                        <Nav.Item>
                            <Link to="/inscription_patient" className="nav-link">
                            <FaUserPlus /><h4>Inscription</h4>
                            </Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link to="/inscription_patient" className="nav-link">
                            <FaUserPlus /><h4>Inscription</h4>
                            </Link>
                        </Nav.Item>
                        
                     </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header> <br/>

    </div>

  )
}

export default AcceuilPatient;





