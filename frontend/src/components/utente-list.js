import React, { Component } from "react";
import UtenteDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";
import CIcon from '@coreui/icons-react'
import {cilPencil, cilUserX, cilUser, cilClipboard, cilNotes} from '@coreui/icons'
import {BsXLg, BsChevronLeft, BsChevronRight} from 'react-icons/bs';
import shoulder from '../assets/images/shoulder.png'

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
      searchnum_sequencial: "",
      currentPage: 1,
      itemsPerPage: 6
    };
  }

  componentDidMount() {
    this.retrieveUtente();
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  onChangeSearchnum_sequencial(e) {
    const searchnum_sequencial = e.target.value;
    this.setState({ searchnum_sequencial }, () => {
      this.searchnum_sequencial();
    });
  }

  onChangeSearchdata_nascimento(e) {
    const searchdata_nascimento = e.target.value;
    this.setState({ searchdata_nascimento }, () => {
      this.searchdata_nascimento();
    });
  }

  onChangeSearchnome_utente(e) {
    const searchnome_utente = e.target.value;
    this.setState({ searchnome_utente }, () => {
      this.searchnome_utente();
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
  

  render() {
    const { searchnome_utente, searchdata_nascimento, searchnum_sequencial, Utente, currentUtente, currentPage, itemsPerPage} = this.state;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Utente && Utente.length > 0 ? Utente.slice(indexOfFirstItem, indexOfLastItem) : [];

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(Utente.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick.bind(this)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </li>
      );
    });
  
    const totalPages = Math.ceil(Utente.length / itemsPerPage);
    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage =
      currentPage < Math.ceil(Utente.length / itemsPerPage) ? currentPage + 1 : null;
  
    const handlePrevClick = () => {
      if (prevPage) {
        this.setState({ currentPage: prevPage });
      }
    };
  
    const handleNextClick = () => {
      if (nextPage) {
        this.setState({ currentPage: nextPage });
      }
    };

    return (
      <div className="list row d-flex justify-content-center">
        <span className="my-heading">Utentes</span>
        <br></br><br></br><br></br>
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
          {searchnum_sequencial && (
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    this.onChangeSearchnum_sequencial({ target: { value: "" } });
                    this.searchnum_sequencial();
                  }}
                >
                  <div><BsXLg color="red"/></div>
                </button>
              </div>
            )}
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
            {searchnome_utente && (
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    this.onChangeSearchnome_utente({ target: { value: "" } });
                    this.searchnome_utente();
                  }}
                >
                  <div><BsXLg color="red"/></div>
                </button>
              </div>
            )}
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
            {searchdata_nascimento && (
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    this.onChangeSearchdata_nascimento({ target: { value: "" } });
                    this.searchdata_nascimento();
                  }}
                >
                  <div><BsXLg color="red"/></div>
                </button>
              </div>
            )}
          </div>
        </div>
          <br></br>
          
          <table className="table" style={{tableLayout: 'fixed', width: '170%'}}>
          <thead style={{backgroundColor: '#57a9d9', color: 'white'}}>
        <tr>
          <th scope="col" style={{width: '17%', textAlign: 'center'}}>Número Sequencial</th>
          <th scope="col" style={{width: '25%', textAlign: 'center'}}>Nome</th>
          <th scope="col" style={{width: '16%', textAlign: 'center'}}>Sexo</th>
          <th scope="col" style={{width: '17%', textAlign: 'center'}}>Data de nascimento</th>
          <th scope="col" style={{width: '25%', textAlign: 'center'}}> </th>
        </tr>
      </thead>
      <tbody>
        {currentItems.length > 0 ? (
              currentItems
                .sort((a, b) => a.num_sequencial - b.num_sequencial)
                .map((Utente, index) => (
                  <tr key={index}>
              <td style={{backgroundColor: 'white', textAlign: 'center'}}>{Utente.num_sequencial}</td>
              <td style={{backgroundColor: 'white', textAlign: 'center'}}>{Utente.nome_utente}</td>
              <td style={{backgroundColor: 'white', textAlign: 'center'}}>{Utente.sexo}</td>
              <td style={{backgroundColor: 'white', textAlign: 'center'}}>
                {new Date(Utente.data_nascimento).toLocaleDateString('pt-PT')}
              </td>
              <td style={{ backgroundColor: 'white', textAlign: 'center' }}>
              <Link to={`/edit/${Utente.num_sequencial}`} style={{ textDecoration: 'none' }}>
                  <button className="blue-button-small">
                    <CIcon icon={cilPencil} />
                  </button>
                </Link>
                <Link to={`/avini/${Utente.num_sequencial}`} style={{ textDecoration: 'none' }}>
                  <button className="blue-button-small">
                    <CIcon icon={cilClipboard}/>
                  </button>
                </Link>
                <Link to={`/avombro/${Utente.num_sequencial}`} style={{ textDecoration: 'none' }}>
                  <button className="blue-button-small">
                  <img src={shoulder} alt="image" style={{ width: '36%', color:'white' }} />
                  </button>
                </Link>
                
              </td>
            </tr> 
          ))
        ) : (
          <tr>
            <td colSpan="5" style={{ backgroundColor: 'white', textAlign: 'center' }}>
              Não existem utentes registados
            </td>
          </tr>
        )} </tbody>
        </table>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button onClick={handlePrevClick} type="button" className="btn btn-outline-primary button-no-focus"
          style={{
            borderColor: "#60b1e0",
            borderRadius: "0.15rem",
            width: "4rem",
            height: "2.2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "0.8rem"
          }}>
            <div><BsChevronLeft color="black"/></div>
          </button> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{currentPage} de {totalPages}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
          onClick={handleNextClick}
          type="button"
          className="btn btn-outline-primary button-no-focus"
          style={{
            borderColor: "#60b1e0",
            borderRadius: "0.15rem",
            width: "4rem",
            height: "2.2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "0.8rem"
          }}>
            <div><BsChevronRight color="black"/></div>
          </button>
        </div>      
      

  </div>
);
  }
}