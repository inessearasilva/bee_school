import React, { Component } from "react";
import UtenteDataService from "C:/Users/ines_/fisiosys/frontend/src/services/tutorial.service.js"
import { Link } from "react-router-dom";
import CIcon from '@coreui/icons-react'
import {cilPencil, cilUserX, cilUser, ciley} from '@coreui/icons'
export default class Avini extends Component {
  constructor(props) {
    super(props);
    this.retrieveForm = this.retrieveForm.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveForm = this.setActiveForm.bind(this);

    this.state = {
      ClinicalCompositions: [],
      currentClinicalCompositions: null,
      currentIndex: -1
    };
  }

  componentDidMount() {
    this.retrieveForm();
  }

  retrieveForm() {
    UtenteDataService.getAllAvini()
      .then(response => {
        this.setState({
          ClinicalCompositions: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveForm();
    this.setState({
      currentClinicalCompositions: null,
      currentIndex: -1
    });
  }

  setActiveForm(ClinicalCompositions, index) {
    this.setState({
      currentClinicalCompositions: ClinicalCompositions,
      currentIndex: index
    });
  }

  render() {
    const { ClinicalCompositions } = this.state;
    return (
      <div className="list row d-flex justify-content-center">
        <table className="table" style={{ tableLayout: 'fixed', width: '170%' }}>
          <thead style={{ backgroundColor: '#57a9d9', color: 'white' }}>
            <tr>
              <th scope="col" style={{ width: '20%', textAlign: 'center' }}>Filtrar por:</th>
            </tr>
          </thead>
        </table>
        
          <table className="table" style={{tableLayout: 'fixed', width: '170%'}}>
          <thead style={{backgroundColor: '#57a9d9', color: 'white'}}>
        <tr>
          <th scope="col" style={{width: '20%', textAlign: 'center'}}>ID Form</th>
          <th scope="col" style={{width: '20%', textAlign: 'center'}}>Número Sequencial</th>
          <th scope="col" style={{width: '20%', textAlign: 'center'}}>Estado</th>
          <th scope="col" style={{width: '20%', textAlign: 'center'}}> </th>
        </tr>
      </thead>
      <tbody>
        {ClinicalCompositions &&
          ClinicalCompositions.map((ClinicalCompositions, index) => (
            <tr key={index}>
              <td style={{backgroundColor: 'white', textAlign: 'center'}}>{ClinicalCompositions.idcomposition}</td>
              <td style={{backgroundColor: 'white', textAlign: 'center'}}>{ClinicalCompositions.num_sequencial}</td>
              <td style={{backgroundColor: 'white', textAlign: 'center'}}>{ClinicalCompositions.isCompleted}</td>
              <td style={{ backgroundColor: 'white', textAlign: 'center' }}>
              <Link to={`/submitted/${ClinicalCompositions.idcomposition}/${ClinicalCompositions.num_sequencial}`}>
                  <button className="blue-button">
                    <CIcon icon={cilPencil} />
                  </button>
                </Link>
                <Link to={`/viz/${ClinicalCompositions.idcomposition}/${ClinicalCompositions.num_sequencial}`}>
                  <button className="blue-button">
                    <CIcon icon={cilUserX} />
                  </button>
                </Link>
                {/*
                <Link to={`/edit/${Utente.num_sequencial}`}>
                  <button className="blue-button">
                    <CIcon icon={cilUser} />
                  </button>
                </Link>
                */}
            </td>
            </tr>
          ))}
      </tbody>
    </table>
          <button onClick={this.removeAllUtente} type="button" className="btn btn-danger" style={{color: "white", width: '10%', textAlign: 'center'}}>    
            Eliminar tudo
          </button>
        </div>
    );
  }
}