import React, { useState } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import './MenuBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

export const NavBar = ({setModals, openModal}) => {

  const [activeLink, setActiveLink] = useState('home');

  
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
  
      <Navbar expand="md" className={"scrolled bg-#121212 "}>
        <Container>
         <Navbar.Brand href="#home"><i class="bi bi-fire"></i>Sample</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <Form inline style={{marginLeft: '-15%', marginRight: '10%',}}>
                <div className='form-div'>
                <FormControl type="text" placeholder="Enter Search here" className="mr-sm-2" style={{border: 'none', outline: 'none'}} />
                <Button variant="outline-success"><i class="bi bi-search"></i></Button>
                </div>
            </Form>
                
            <Button variant="primary" className="ml-2" onClick={() => {
                if (openModal){
                    setModals(false)
                } else {
                    setModals(true)
                }
                }
                }>Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  )
}