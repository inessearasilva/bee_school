import React, { Component } from "react";
import UtenteDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";

export default class Utentes extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveUtente = this.retrieveUtente.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveUtente = this.setActiveUtente.bind(this);
    this.removeAllUtente = this.removeAllUtente.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      Utente: [],
      currentUtente: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveUtente();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
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

  searchTitle() {
    this.setState({
      currentUtente: null,
      currentIndex: -1
    });

    UtenteDataService.findByTitle(this.state.searchTitle)
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
    const { searchTitle, Utente, currentUtente, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Lista de Utentes</h4>

          <ul className="list-group">
            {Utente &&
              Utente.map((Utente, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveUtente(Utente, index)}
                  key={index}
                >
                  {Utente.nome_utente}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllUtente}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentUtente ? (
            <div>
              <h4>Utente</h4>
              <div>
                <label>
                  <strong>Número Sequencial:</strong>
                </label>{" "}
                {currentUtente.num_sequencial}
              </div>
              <div>
                <label>
                  <strong>Nome:</strong>
                </label>{" "}
                {currentUtente.nome_utente}
              </div>
              <div>
                <label>
                  <strong>Sexo:</strong>
                </label>{" "}
                {currentUtente.sexo}
              </div>
              <div>
                <label>
                  <strong>Data de nascimento:</strong>
                </label>{" "}
                {currentUtente.data_nascimento}
              </div>

              <Link
                to={"/Utente/" + currentUtente.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Clique num utente...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}