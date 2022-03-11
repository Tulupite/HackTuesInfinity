import React from 'react'
import { Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import PlanetsModal from './PlanetsModal';
import GoToBottom from './GoToBottom';
import FormSignUp from '../FormSignUp';

const NavbarComponent = () => {
  const [MercuryModalShow, setMercuryModalShow] = React.useState(false);
  const [VenusModalShow, setVenusModalShow] = React.useState(false);
  const [EarthModalShow, setEarthModalShow] = React.useState(false);
  const [MarsModalShow, setMarsModalShow] = React.useState(false);
  const [JupiterModalShow, setJupiterModalShow] = React.useState(false);
  const [SaturnModalShow, setSaturnModalShow] = React.useState(false);
  const [UranusModalShow, setUranusModalShow] = React.useState(false);
  const [NeptuneModalShow, setNeptuneModalShow] = React.useState(false);
  const [SignUpShow, setSignUpShow] = React.useState(false);

  return (
    <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#home"> Solar System Review</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-end" style={{ width: "100%" }}>
        <Nav.Link>Влез</Nav.Link>
        <Nav.Link onClick={() => setSignUpShow(true)}>Регистрация</Nav.Link>
          <FormSignUp show={SignUpShow} onHide={() => setSignUpShow(false)}/>
        <Nav.Link onClick = {GoToBottom}>Новини</Nav.Link>
        <NavDropdown title="Планети" id="nav-dropdown">
          <NavDropdown.Item onClick={() => setMercuryModalShow(true)}>Меркурий</NavDropdown.Item>
            <PlanetsModal show={MercuryModalShow} planetName = "Меркурий" onHide={() => setMercuryModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setVenusModalShow(true)}>Венера</NavDropdown.Item>
            <PlanetsModal show={VenusModalShow} planetName = "Венера" onHide={() => setVenusModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setEarthModalShow(true)}>Земя</NavDropdown.Item>
            <PlanetsModal show={EarthModalShow} planetName = "Земя" onHide={() => setEarthModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setMarsModalShow(true)}>Марс</NavDropdown.Item>
            <PlanetsModal show={MarsModalShow} planetName = "Марс" onHide={() => setMarsModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setJupiterModalShow(true)}>Юпитер</NavDropdown.Item>
            <PlanetsModal show={JupiterModalShow} planetName = "Юпитер" onHide={() => setJupiterModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setSaturnModalShow(true)}>Сатурн</NavDropdown.Item>
            <PlanetsModal show={SaturnModalShow} planetName = "Сатурн" onHide={() => setSaturnModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setUranusModalShow(true)}>Уран</NavDropdown.Item>
            <PlanetsModal show={UranusModalShow} planetName = "Уран" onHide={() => setUranusModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setNeptuneModalShow(true)}>Нептун</NavDropdown.Item>
            <PlanetsModal show={NeptuneModalShow} planetName = "Нептун" onHide={() => setNeptuneModalShow(false)} />
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavbarComponent