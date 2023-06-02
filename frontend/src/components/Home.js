import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Table } from '@nextui-org/react';


function BrandExample() {
  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-white bg-white">
        <Container>
        <div class="container text">
        <div class="row align-items-start">
          <div class="col-4">
          </div>
          <div class="col-8">
            One column of 2/3. Despite the size being here. it is fixed
          </div>
        </div>
        </div>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
