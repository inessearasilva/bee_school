import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/bee/bee.png'

function BrandExample() {
  return (
    <>
      <Navbar class="navbar navbar-expand-lg navbar-light bg-light">
        <Container>
          {/*
          <Navbar.Brand>
            <img
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
  */}
          <div>
      <h1>Objetivo</h1>
      <br></br>
      <h5>Aqui vais encontrar estatísticas sobre doenças crónicas não transmissíveis.</h5>
      </div>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;