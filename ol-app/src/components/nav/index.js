import React from 'react';
import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Dropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react';

class Navbarf extends React.Component {
render(){
    return (
    
        <Navbar id="navbarfy">
        <Navbar.Brand id="home" href="#home">Overnight Legends</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav classNameName="mr-auto">
            <Nav.Link id="home" href="#home">Home</Nav.Link>
            {/* <Nav.Link id="home" href="#link">Packages</Nav.Link> */}

            <NavDropdown id="home" title="Shop">
              <ul classNameName="dropdown-menu multi-column columns-2">             
                <div classNameName="row">
                      <div classNameName="col-sm-6">
                        <ul className="multi-column-dropdown">
                          <NavDropdown.Item id="dropdown" href="#action/3.1">Non-Affiliate</NavDropdown.Item>
                          <NavDropdown.Item id="dropdown" href="#action/3.1">Alerts</NavDropdown.Item>
                          <NavDropdown.Item id="dropdown" href="#action/3.3">Overlays</NavDropdown.Item>
                          <NavDropdown.Item id="dropdown" href="#action/3.3">Panels</NavDropdown.Item>
                          <NavDropdown.Item id="dropdown" href="#action/3.3">Scenes</NavDropdown.Item>
                          <NavDropdown.Item id="dropdown" href="#action/3.3">Transitions</NavDropdown.Item>
                        </ul>
                      </div>

                      <div className="col-md-6">
                        <ul className="multi-column-dropdown">
                            <NavDropdown.Item id="dropdown" href="#action/3.1">Affiliate</NavDropdown.Item>
                            <NavDropdown.Item id="dropdown" href="#action/3.1">Alerts</NavDropdown.Item>
                            <NavDropdown.Item id="dropdown" href="#action/3.3">Badges</NavDropdown.Item>
                            <NavDropdown.Item id="dropdown" href="#action/3.2">Emotes</NavDropdown.Item>
                            <NavDropdown.Item id="dropdown" href="#action/3.3">Overlays</NavDropdown.Item>
                            <NavDropdown.Item id="dropdown" href="#action/3.3">Panels</NavDropdown.Item>
                            <NavDropdown.Item id="dropdown" href="#action/3.3">Scenes</NavDropdown.Item>
                            <NavDropdown.Item id="dropdown" href="#action/3.3">Transitions</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Packages</NavDropdown.Item>
                        </ul>
                      </div>
                </div> 
              </ul>

            </NavDropdown>
            
            <Nav.Link id="home" href="#link">Contact</Nav.Link>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" classNameName="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    )
}
}


export default Navbarf;
