import React, { Component } from "react";
import UtenteDataService from "C:/Users/ines_/fisiosys/frontend/src/services/tutorial.service.js"
import { Link } from "react-router-dom";
import CIcon from '@coreui/icons-react'
import {cilPencil, cilUserX, cilUser, ciley} from '@coreui/icons'
import { BsFillCheckCircleFill, BsFillPauseCircleFill, BsEye} from "react-icons/bs";
export default class Avombro extends Component {
  constructor(props) {
    super(props);
    this.retrieveForm = this.retrieveForm.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveForm = this.setActiveForm.bind(this);
    this.onChangeSearchidcomposition = this.onChangeSearchidcomposition.bind(this);
    this.onChangeSearchnum_sequencial = this.onChangeSearchnum_sequencial.bind(this);
    this.onChangeSearchestado = this.onChangeSearchestado.bind(this);
    this.searchidcomposition = this.searchidcomposition.bind(this);
    this.searchnum_sequencial = this.searchnum_sequencial.bind(this);
    this.searchestado = this.searchestado.bind(this);

    this.state = {
      ClinicalCompositions: [],
      currentClinicalCompositions: null,
      currentIndex: -1,
      searchestado: "",
      searchidcomposition: "",
      searchnum_sequencial: ""
    };
  }

  componentDidMount() {
    this.retrieveForm();
  }

  onChangeSearchnum_sequencial(e) {
    const searchnum_sequencial = e.target.value;
    this.setState({ searchnum_sequencial }, () => {
      this.searchnum_sequencial();
    });
  }

  onChangeSearchidcomposition(e) {
    const searchidcomposition = e.target.value;
    this.setState({ searchidcomposition }, () => {
      this.searchidcomposition();
    });
  }

  onChangeSearchestado(e) {
    const searchestado = e.target.value;
    this.setState({ searchestado }, () => {
      this.searchestado();
    });
  }  

  retrieveForm() {
    UtenteDataService.getAllformAvombro()
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

  searchnum_sequencial() {
    UtenteDataService.findAvombroBynum_sequencial(this.state.searchnum_sequencial)
      .then(response => {
        this.setState({
          ClinicalCompositions: response.data,
          currentClinicalCompositions: null,
          currentIndex: -1
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchidcomposition() {
    UtenteDataService.findAvombroByidcomposition(this.state.searchidcomposition)
      .then(response => {
        this.setState({
          ClinicalCompositions: response.data,
          currentClinicalCompositions: null,
          currentIndex: -1
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchestado() {
    const { searchestado } = this.state;
    UtenteDataService.findAvombroByestado(searchestado)
      .then(response => {
        this.setState({
          ClinicalCompositions: response.data,
          currentClinicalCompositions: null,
          currentIndex: -1
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  
  

  render() {
    const { ClinicalCompositions, searchestado, searchidcomposition, searchnum_sequencial } = this.state;
    return (
      <div className="list row d-flex justify-content-center">
        <table className="table" style={{ tableLayout: 'fixed', width: '170%' }}>
          <thead style={{ backgroundColor: '#57a9d9', color: 'white' }}>
            <tr>
              <th scope="col" style={{ width: '20%', textAlign: 'center' }}>Filtrar por:</th>
            </tr>
          </thead>
        </table>
        <div className="col-md-2">
          <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Número Sequencial"
            value={searchnum_sequencial}
            onChange={(e) => {
              this.onChangeSearchnum_sequencial(e);
              this.searchnum_sequencial();
            }}
          />
          </div>
        </div>
        <div className="col-md-2">
          <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="ID Form"
            value={searchidcomposition}
            onChange={(e) => {
              this.onChangeSearchidcomposition(e);
              this.searchidcomposition();
            }}
          />
          </div>
        </div>
        <div className="col-md-2">
        <div className="input-group mb-3">
          <select
            className="form-control"
            value={searchestado}
            onChange={(e) => {
              this.onChangeSearchestado(e);
              this.searchestado();
            }}
          >
            <option value="">Estado</option>
            <option value={0}>Rascunho</option>
            <option value={1}>Terminado</option>
          </select>
        </div>
        </div>
          <br></br>
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
              <td style={{backgroundColor: 'white', textAlign: 'center'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  {ClinicalCompositions.isCompleted === 0 ? (
                    <div><BsFillPauseCircleFill color="#FFC82E" style={{marginLeft: '90px'}}/></div>
                  ) : (
                    <div><BsFillCheckCircleFill color="#03CD45" style={{marginLeft: '90px'}}/></div>
                  )}
                  <span style={{marginLeft: '10px'}}>
                    {ClinicalCompositions.isCompleted === 0 ? 'Rascunho' : 'Terminado'}
                  </span>
                </div>
              </td>
              <td style={{ backgroundColor: 'white', textAlign: 'center' }}>
              <Link to={`/avombro/${ClinicalCompositions.num_sequencial}`}>
                  <button className="blue-button">
                    <CIcon icon={cilPencil} />
                  </button>
                </Link>
                <Link to={`/vizAvombro/${ClinicalCompositions.idcomposition}/${ClinicalCompositions.num_sequencial}`}>
                  <button className="blue-button">
                  <div><BsEye style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '110%', height: '110%' }}/></div>
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
        </div>
    );
  }
}