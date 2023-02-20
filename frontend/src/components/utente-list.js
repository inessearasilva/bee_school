import React, { Component } from "react";
import UtenteDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";
import CIcon from '@coreui/icons-react'
import {cilPencil, cilUserX} from '@coreui/icons'

export default class Utentes extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchnome_utente = this.onChangeSearchnome_utente.bind(this);
    this.retrieveUtente = this.retrieveUtente.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveUtente = this.setActiveUtente.bind(this);
    this.removeAllUtente = this.removeAllUtente.bind(this);
    this.searchnome_utente = this.searchnome_utente.bind(this);

    this.state = {
      Utente: [],
      currentUtente: null,
      currentIndex: -1,
      searchnome_utente: ""
    };
  }

  componentDidMount() {
    this.retrieveUtente();
  }

  onChangeSearchnome_utente(e) {
    const searchnome_utente = e.target.value;

    this.setState({
      searchnome_utente: searchnome_utente
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
    this.setState({
      currentUtente: null,
      currentIndex: -1
    });

    UtenteDataService.findBynome_utente(this.state.searchnome_utente)
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

  render() {
    const { searchnome_utente, Utente, currentUtente } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Procura por nome"
              value={searchnome_utente}
              onChange={this.onChangeSearchnome_utente}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchnome_utente}
              >
                Procura
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <br></br>
          <h4>Lista de Utentes</h4>
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
            </td>
            </tr>
          ))}
      </tbody>
    </table>
          <button onClick={this.removeAllUtente} type="button" className="btn btn-danger" style={{color: "white"}}>    
            Eliminar tudo
          </button>
        </div>
      </div>
    );
  }
}