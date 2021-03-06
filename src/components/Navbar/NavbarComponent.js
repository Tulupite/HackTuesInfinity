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
            <PlanetsModal show={SunModalShow}  planetName = "Sun" planetInfo = "The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma,[18][19] heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light, ultraviolet light, and infrared radiation. It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometers (864,000 miles), or 109 times that of Earth. Its mass is about 330,000 times that of Earth, and it accounts for about 99.86% of the total mass of the Solar System." onHide={() => setSunModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setMercuryModalShow(true)}>Mercury</NavDropdown.Item>
            <PlanetsModal show={MercuryModalShow} planetName = "Mercury" planetInfo = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes (????????????). Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, and its apparent distance from the Sun as viewed from Earth never exceeds 28??. This proximity to the Sun means the planet can only be seen near the western horizon after sunset or the eastern horizon before sunrise, usually in twilight. At this time, it may appear as a bright star-like object, but is more difficult to observe than Venus. From Earth, the planet telescopically displays the complete range of phases, similar to Venus and the Moon, which recurs over its synodic period of approximately 116 days." onHide={() => setMercuryModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setVenusModalShow(true)}>Venus</NavDropdown.Item>
            <PlanetsModal show={VenusModalShow} planetName = "Venus" planetInfo = "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be visible to the naked eye in broad daylight.[18][19] Venus's orbit is smaller than that of Earth, and thus can be seen near the Sun in the morning or evening. Venus orbits the Sun every 224.7 Earth days.[20] It has a synodic day length of 117 Earth days and a sidereal rotation period of 243 Earth days. As a consequence, it takes longer to rotate about its axis than any other planet in the Solar System, and does so in the opposite direction to all but Uranus. This means that the Sun rises from its western horizon and sets in its east.[21] Venus does not have any moons, a distinction it shares only with Mercury among the planets in the Solar System." onHide={() => setVenusModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setEarthModalShow(true)}>Earth</NavDropdown.Item>
            <PlanetsModal show={EarthModalShow} planetName = "Earth" planetInfo = "Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large amounts of water can be found throughout the Solar System, only Earth sustains liquid surface water. About 71% of Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes and rivers. The remaining 29% of Earth's surface is land, consisting of continents and islands. Earth's surface layer is formed of several slowly moving tectonic plates, interacting to produce mountain ranges, volcanoes and earthquakes. Earth's liquid outer core generates the magnetic field that shapes Earth's magnetosphere, deflecting destructive solar winds." onHide={() => setEarthModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setMarsModalShow(true)}>Mars</NavDropdown.Item>
            <PlanetsModal show={MarsModalShow} planetName = "Mars" planetInfo = "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet.[17][18] The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a striking reddish appearance in the sky.[19] Mars is a terrestrial planet with a thin atmosphere, with surface features such as impact craters, valleys, dunes, and polar ice caps." onHide={() => setMarsModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setJupiterModalShow(true)}>Jupiter</NavDropdown.Item>
            <PlanetsModal show={JupiterModalShow} planetName = "Jupiter" planetInfo = "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun. Jupiter is the third brightest natural object in the Earth's night sky after the Moon and Venus. People have been observing it since prehistoric times; it was named after the Roman god Jupiter, the king of the gods, because of its observed size." onHide={() => setJupiterModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setSaturnModalShow(true)}>Saturn</NavDropdown.Item>
            <PlanetsModal show={SaturnModalShow} planetName = "Saturn" planetInfo = "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun. Jupiter is the third brightest natural object in the Earth's night sky after the Moon and Venus. People have been observing it since prehistoric times; it was named after the Roman god Jupiter, the king of the gods, because of its observed size." onHide={() => setSaturnModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setUranusModalShow(true)}>Uranus</NavDropdown.Item>
            <PlanetsModal show={UranusModalShow} planetName = "Uranus" planetInfo = "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as ice giants to distinguish them from the other giant planets." onHide={() => setUranusModalShow(false)} />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setNeptuneModalShow(true)}>Neptune</NavDropdown.Item>
            <PlanetsModal show={NeptuneModalShow} planetName = "Neptune" planetInfo = "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun. Jupiter is the third brightest natural object in the Earth's night sky after the Moon and Venus. People have been observing it since prehistoric times; it was named after the Roman god Jupiter, the king of the gods, because of its observed size." onHide={() => setNeptuneModalShow(false)} />
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavbarComponent