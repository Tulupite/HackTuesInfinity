import React from 'react'
import { Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import PlanetsModal from './PlanetsModal';
import GoToBottom from './GoToBottom';
import FormSignUp from '../FormSignUp';
import FormSignIn from '../FormLoginIn';

const NavbarComponent = () => {
  const [SunModalShow, setSunModalShow] = React.useState(false);
  const [MercuryModalShow, setMercuryModalShow] = React.useState(false);
  const [VenusModalShow, setVenusModalShow] = React.useState(false);
  const [EarthModalShow, setEarthModalShow] = React.useState(false);
  const [MarsModalShow, setMarsModalShow] = React.useState(false);
  const [JupiterModalShow, setJupiterModalShow] = React.useState(false);
  const [SaturnModalShow, setSaturnModalShow] = React.useState(false);
  const [UranusModalShow, setUranusModalShow] = React.useState(false);
  const [NeptuneModalShow, setNeptuneModalShow] = React.useState(false);
  const [SignUpShow, setSignUpShow] = React.useState(false);
  const [LogInShow, setLogInShow] = React.useState(false);

  return (
    <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand className="company-name" href="#home">
      <img
        alt=""
        className="brand-logo"
      />{' '} Space Plazza</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-end" style={{ width: "100%" }}>
        <Nav.Link onClick={() => setLogInShow(true)}>Login</Nav.Link>
          <FormSignIn show = {LogInShow} onHide={() => setLogInShow(false)}/>
        <Nav.Link onClick={() => setSignUpShow(true)}>Register</Nav.Link>
          <FormSignUp show={SignUpShow} onHide={() => setSignUpShow(false)}/>
        <Nav.Link onClick = {GoToBottom}>News</Nav.Link>
        <NavDropdown title="Planets" id="nav-dropdown">
          <NavDropdown.Item onClick={() => setSunModalShow(true)}>Sun</NavDropdown.Item>
            <PlanetsModal show={SunModalShow} planetName = "Sun" onHide={() => setSunModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setMercuryModalShow(true)}>Mercury</NavDropdown.Item>
            <PlanetsModal show={MercuryModalShow} planetName = "Mercury" onHide={() => setMercuryModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setVenusModalShow(true)}>Venus</NavDropdown.Item>
            <PlanetsModal show={VenusModalShow} planetName = "Venus" onHide={() => setVenusModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setEarthModalShow(true)}>Earth</NavDropdown.Item>
            <PlanetsModal show={EarthModalShow} planetName = "Earth" onHide={() => setEarthModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setMarsModalShow(true)}>Mars</NavDropdown.Item>
            <PlanetsModal show={MarsModalShow} planetName = "Mars" onHide={() => setMarsModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setJupiterModalShow(true)}>Jupiter</NavDropdown.Item>
            <PlanetsModal show={JupiterModalShow} planetName = "Jupiter" onHide={() => setJupiterModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setSaturnModalShow(true)}>Saturn</NavDropdown.Item>
            <PlanetsModal show={SaturnModalShow} planetName = "Saturn" onHide={() => setSaturnModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setUranusModalShow(true)}>Uranus</NavDropdown.Item>
            <PlanetsModal show={UranusModalShow} planetName = "Uranus" onHide={() => setUranusModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setNeptuneModalShow(true)}>Neptune</NavDropdown.Item>
            <PlanetsModal show={NeptuneModalShow} planetName = "Neptune" onHide={() => setNeptuneModalShow(false)} />
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavbarComponent