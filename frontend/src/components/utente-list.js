import React, { Component } from "react";
import UtenteDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";
import CIcon from '@coreui/icons-react'
import {cilPencil, cilUserX, cilUser} from '@coreui/icons'

export default class Utentes extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchnome_utente = this.onChangeSearchnome_utente.bind(this);
    this.onChangeSearchdata_nascimento = this.onChangeSearchdata_nascimento.bind(this);
    this.onChangeSearchnum_sequencial = this.onChangeSearchnum_sequencial.bind(this);
    this.retrieveUtente = this.retrieveUtente.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveUtente = this.setActiveUtente.bind(this);
    this.removeAllUtente = this.removeAllUtente.bind(this);
    this.searchnome_utente = this.searchnome_utente.bind(this);
    this.searchdata_nascimento = this.searchdata_nascimento.bind(this);
    this.searchnum_sequencial = this.searchnum_sequencial.bind(this);

    this.state = {
      Utente: [],
      currentUtente: null,
      currentIndex: -1,
      searchnome_utente: "",
      searchdata_nascimento: "",
      searchnum_sequencial: ""
    };
  }

  componentDidMount() {
    this.retrieveUtente();
  }

  onChangeSearchnome_utente(e) {
    const searchnome_utente = e.target.value;
    this.setState({ searchnome_utente }, () => {
      this.searchnome_utente();
    });
  }

  onChangeSearchdata_nascimento(e) {
    const searchdata_nascimento = e.target.value;
    this.setState({ searchdata_nascimento }, () => {
      this.searchdata_nascimento();
    });
  }

  onChangeSearchnum_sequencial(e) {
    const searchnum_sequencial = e.target.value;
    this.setState({ searchnum_sequencial }, () => {
      this.searchnum_sequencial();
    });
  }

  retrieveUtente() {
    UtenteDataService.getAll()
      .then(response => {
        this.setState({
          Utente: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveUtente();
    this.setState({
      currentUtente: null,
      currentIndex: -1
    });
  }

  setActiveUtente(Utente, index) {
    this.setState({
      currentUtente: Utente,
      currentIndex: index
    });
  }

  removeAllUtente() {
    UtenteDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchnome_utente() {
    const normalizedSearch = this.state.searchnome_utente.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    UtenteDataService.findBynome_utente(normalizedSearch)
      .then(response => {
        this.setState({
          Utente: response.data,
          currentUtente: null,
          currentIndex: -1
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  

  searchdata_nascimento() {
    UtenteDataService.findBydata_nascimento(this.state.searchdata_nascimento)
      .then(response => {
        this.setState({
          Utente: response.data,
          currentUtente: null,
          currentIndex: -1
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchnum_sequencial() {
    UtenteDataService.findBynum_sequencial(this.state.searchnum_sequencial)
      .then(response => {
        this.setState({
          Utente: response.data,
          currentUtente: null,
          currentIndex: -1
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchnome_utente, searchdata_nascimento, searchnum_sequencial, Utente, currentUtente} = this.state;

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
            type="date"
            className="form-control"
            placeholder="Data Nascimento"
            value={searchdata_nascimento}
            onChange={(e) => {
              this.onChangeSearchdata_nascimento(e);
              this.searchdata_nascimento();
            }}
          />
          </div>
        </div>
        <div className="col-md-4">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nome"
              value={searchnome_utente}
              onChange={(e) => {
                this.onChangeSearchnome_utente(e);
                this.searchnome_utente();
              }}
            />
          </div>
        </div>
          <br></br>
          
          <table className="table" style={{tableLayout: 'fixed', width: '170%'}}>
          <thead style={{backgroundColor: '#57a9d9', color: 'white'}}>
        <tr>
          <th scope="col" style={{width: '20%', textAlign: 'center'}}>Número Sequencial</th>
          <th scope="col" style={{width: '20%', textAlign: 'center'}}>Nome</th>
          <th scope="col" style={{width: '20%', textAlign: 'center'}}>Sexo</th>
          <th scope="col" style={{width: '20%', textAlign: 'center'}}>Data de nascimento</th>
          <th scope="col" style={{width: '20%', textAlign: 'center'}}> </th>
        </tr>
      </thead>
      <tbody>
        {Utente &&
          Utente.map((Utente, index) => (
            <tr key={index}>
              <td style={{backgroundColor: 'white', textAlign: 'center'}}>{Utente.num_sequencial}</td>
              <td style={{backgroundColor: 'white', textAlign: 'center'}}>{Utente.nome_utente}</td>
              <td style={{backgroundColor: 'white', textAlign: 'center'}}>{Utente.sexo}</td>
              <td style={{backgroundColor: 'white', textAlign: 'center'}}>
                {new Date(Utente.data_nascimento).toLocaleDateString('pt-PT')}
              </td>
              <td style={{ backgroundColor: 'white', textAlign: 'center' }}>
              <Link to={`/avini/${Utente.num_sequencial}`}>
                  <button className="blue-button">
                    <CIcon icon={cilPencil} />
                  </button>
              </Link>
              <Link to={`/avombro/${Utente.num_sequencial}`}>
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