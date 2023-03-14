import React, { Component } from "react";
import UtenteDataService from "C:/Users/ines_/fisiosys/frontend/src/services/tutorial.service.js"
import { Link } from "react-router-dom";
import CIcon from '@coreui/icons-react'
import {cilPencil, cilUserX, cilUser, ciley} from '@coreui/icons'
import { BsFillCheckCircleFill, BsFillPauseCircleFill, BsEye, BsXLg} from "react-icons/bs";
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';

export default class Avini extends Component {
  constructor(props) {
    super(props);
    this.retrieveForm = this.retrieveForm.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveForm = this.setActiveForm.bind(this);
    this.onChangeSearchidcomposition = this.onChangeSearchidcomposition.bind(this);
    this.onChangeSearchnum_sequencial = this.onChangeSearchnum_sequencial.bind(this);
    this.onChangeSearchestado = this.onChangeSearchestado.bind(this);
    this.onChangeSearchdata = this.onChangeSearchdata.bind(this);
    this.searchidcomposition = this.searchidcomposition.bind(this);
    this.searchnum_sequencial = this.searchnum_sequencial.bind(this);
    this.searchestado = this.searchestado.bind(this);
    this.searchdata = this.searchdata.bind(this);

    this.state = {
      ClinicalCompositions: [],
      currentClinicalCompositions: null,
      currentIndex: -1,
      searchestado: "",
      searchidcomposition: "",
      searchnum_sequencial: "",
      currentPage: 1,
      itemsPerPage: 6
    };
  }

  componentDidMount() {
    this.retrieveForm();
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  onChangeSearchidcomposition(e) {
    const searchidcomposition = e.target.value;
    this.setState({ searchidcomposition }, () => {
      this.searchidcomposition();
    });
  }

  onChangeSearchnum_sequencial(e) {
    const searchnum_sequencial = e.target.value;
    this.setState({ searchnum_sequencial }, () => {
      this.searchnum_sequencial();
    });
  }

  onChangeSearchestado(e) {
    const searchestado = e.target.value;
    this.setState({ searchestado }, () => {
      this.searchestado();
    });
  }  

  onChangeSearchdata(e) {
    const searchdata = e.target.value;
    this.setState({ searchdata }, () => {
      this.searchdata();
    });
  }  

  retrieveForm() {
    UtenteDataService.getAllformAvini()
      .then(response => {
        const sortedData = response.data.sort((a, b) => a.idcomposition - b.idcomposition);
        const clinicalCompositions = sortedData.map((item) => {
          const utente = item.utente || {};
          return {
            ...item,
            nome_utente: utente.nome_utente
          };
        });
        this.setState({
          ClinicalCompositions: clinicalCompositions
        });
        console.log(clinicalCompositions);
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
    UtenteDataService.findAviniBynum_sequencial(this.state.searchnum_sequencial)
    .then(response => {
      const clinicalCompositions = response.data.map((item) => {
        const utente = item.utente || {};
        return {
          ...item,
          nome_utente: utente.nome_utente
        };
      });
        this.setState({
          ClinicalCompositions: clinicalCompositions,
          currentClinicalCompositions: null,
          currentIndex: -1
        });
        console.log(clinicalCompositions);
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchidcomposition() {
    UtenteDataService.findAviniByidcomposition(this.state.searchidcomposition)
    .then(response => {
      const clinicalCompositions = response.data.map((item) => {
        const utente = item.utente || {};
        return {
          ...item,
          nome_utente: utente.nome_utente
        };
      });
        this.setState({
          ClinicalCompositions: clinicalCompositions,
          currentClinicalCompositions: null,
          currentIndex: -1
        });
        console.log(clinicalCompositions);
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchestado() {
    const { searchestado } = this.state;
    UtenteDataService.findAviniByestado(searchestado)
    .then(response => {
      const clinicalCompositions = response.data.map((item) => {
        const utente = item.utente || {};
        return {
          ...item,
          nome_utente: utente.nome_utente
        };
      });
        this.setState({
          ClinicalCompositions: clinicalCompositions,
          currentClinicalCompositions: null,
          currentIndex: -1
        });
        console.log(clinicalCompositions);
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchdata() {
    const { searchdata } = this.state;
    UtenteDataService.findAviniBydata(searchdata)
    .then(response => {
      const clinicalCompositions = response.data.map((item) => {
        const utente = item.utente || {};
        return {
          ...item,
          nome_utente: utente.nome_utente
        };
      });
        this.setState({
          ClinicalCompositions: clinicalCompositions,
          currentClinicalCompositions: null,
          currentIndex: -1
        });
        console.log(clinicalCompositions);
      })
      .catch(e => {
        console.log(e);
      });
  }
  
  

  render() {
    const { ClinicalCompositions, searchestado, searchidcomposition, searchnum_sequencial, searchdata, currentPage, itemsPerPage} = this.state;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = ClinicalCompositions && ClinicalCompositions.length > 0 ? ClinicalCompositions.slice(indexOfFirstItem, indexOfLastItem) : [];

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(ClinicalCompositions.length / itemsPerPage); i++) {
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
  
    const totalPages = Math.ceil(ClinicalCompositions.length / itemsPerPage);
    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage =
      currentPage < Math.ceil(ClinicalCompositions.length / itemsPerPage) ? currentPage + 1 : null;
  
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
        <span className="my-heading">Questionários Gerais</span>
        <br></br><br></br><br></br>
        <table className="table" style={{ tableLayout: 'fixed', width: '170%' }}>
          <thead style={{ backgroundColor: '#57a9d9', color: 'white' }}>
            <tr>
              <th scope="col" style={{ width: '20%', textAlign: 'center' }}>Filtrar por:</th>
            </tr>
          </thead>
        </table>
        <div className="d-flex justify-content-between">
        <div className="col-md-2">
          <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Número de Processo"
            value={searchidcomposition}
            onChange={(e) => {
              this.onChangeSearchidcomposition(e);
              this.searchidcomposition();
            }}
          />
          {searchidcomposition && (
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    this.onChangeSearchidcomposition({ target: { value: "" } });
                    this.searchidcomposition();
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
        <div className="col-md-2">
          <div className="input-group mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="Data de submissão"
            value={searchdata}
            onChange={(e) => {
              this.onChangeSearchdata(e);
              this.searchdata();
            }}
          />
          {searchdata && (
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    this.onChangeSearchdata({ target: { value: "" } });
                    this.searchdata();
                  }}
                >
                  <div><BsXLg color="red"/></div>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="col-md-2">
        <div className="select-wrapper">
          <select
            className="form-control"
            id="estado"
            required
            value={searchestado}
            onChange={(e) => {
              this.onChangeSearchestado(e);
              this.searchestado();
            }}
            name="estado"
          >
            <option value="">Estado</option>
            <option value={0}>Rascunho</option>
            <option value={1}>Terminado</option>
          </select>
          <span className="arrow"></span>
        </div></div>
          </div>
          <br></br>
          <table className="table" style={{tableLayout: 'fixed', width: '170%'}}>
          <thead style={{backgroundColor: '#57a9d9', color: 'white'}}>
        <tr>
        <th scope="col" style={{width: '15%', textAlign: 'center'}}>Número de Processo</th>
          <th scope="col" style={{width: '15%', textAlign: 'center'}}>Número Sequencial</th>
          <th scope="col" style={{width: '19%', textAlign: 'center'}}>Nome</th>
          <th scope="col" style={{width: '17%', textAlign: 'center'}}>Data de submissão</th>
          <th scope="col" style={{width: '17%', textAlign: 'center'}}>Estado</th>
          <th scope="col" style={{width: '17%', textAlign: 'center'}}> </th>
        </tr>
      </thead>
      <tbody>
        {currentItems.length > 0 ? (
              currentItems
                .sort((a, b) => a.idcomposition - b.idcomposition)
                .map((ClinicalCompositions, index) => (
                  <tr key={index}>
              <td style={{backgroundColor: 'white', textAlign: 'center'}}>{ClinicalCompositions.idcomposition}</td>
              <td style={{backgroundColor: 'white', textAlign: 'center'}}>{ClinicalCompositions.num_sequencial}</td>
              <td style={{backgroundColor: 'white', textAlign: 'center'}}>{ClinicalCompositions.nome_utente}</td>
              <td style={{backgroundColor: 'white', textAlign: 'center'}}>
              {new Date(ClinicalCompositions.createdat).toLocaleDateString('pt-PT')}</td>
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
              {ClinicalCompositions.isCompleted === 0 ? (
                <Link to={`/subAvini/${ClinicalCompositions.idcomposition}/${ClinicalCompositions.num_sequencial}`}>
                  <button className="blue-button-small">
                    <CIcon icon={cilPencil} />
                  </button>
                </Link>
              ) : null}
                <Link to={`/vizAvini/${ClinicalCompositions.idcomposition}/${ClinicalCompositions.num_sequencial}`}>
                  <button className="blue-button-small">
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
          ))
        ) : (
          <tr>
            <td colSpan="6" style={{backgroundColor:'white', textAlign: 'center'}}>Não existem questionários registados</td>
          </tr>
        )}
      </tbody>
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