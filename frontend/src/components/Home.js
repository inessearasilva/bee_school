import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/fisiminho/fisiminho.png'

function BrandExample() {
  return (
    <>
      <Navbar class="navbar navbar-expand-lg navbar-light bg-light">
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;