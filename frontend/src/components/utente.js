import React, { Component } from "react";
import UtenteDataService from "../services/tutorial.service";
import { withRouter } from '../common/with-router';

class Registo_Utente extends Component {
  constructor(props) {
    super(props);
    this.onChangenome_utente = this.onChangenome_utente.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getUtente = this.getUtente.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateUtente = this.updateUtente.bind(this);
    this.deleteUtente = this.deleteUtente.bind(this);

    this.state = {
      currentUtente: {
        num_sequencial: null,
        sexo: "",
        nome_utente: "", 
        data_nascimento: new Date()
      },
      message: ""
    };
  }

  componentDnum_sequencialMount() {
    this.getUtente(this.props.router.params.num_sequencial);
  }

  onChangenome_utente(e) {
    const nome_utente = e.target.value;

    this.setState(function(prevState) {
      return {
        currentUtente: {
          ...prevState.currentUtente,
          nome_utente: nome_utente
        }
      };
    });
  }

  onChangeSexo(e) {
    const sexo = e.target.value;
    
    this.setState(prevState => ({
      currentUtente: {
        ...prevState.currentUtente,
        sexo: sexo
      }
    }));
  }

  getUtente(num_sequencial) {
    UtenteDataService.get(num_sequencial)
      .then(response => {
        this.setState({
          currentUtente: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

/*

  updatePublished(status) {
    var data = {
      num_sequencial: this.state.currentUtente.num_sequencial,
      nome_utente: this.state.currentUtente.nome_utente,
      description: this.state.currentUtente.description,
      published: status
    };

    UtenteDataService.update(this.state.currentUtente.num_sequencial, data)
      .then(response => {
        this.setState(prevState => ({
          currentUtente: {
            ...prevState.currentUtente,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
*/

  updateUtente() {
    UtenteDataService.update(
      this.state.currentUtente.num_sequencial,
      this.state.currentUtente
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "A ficha de utente foi atualizada com sucesso!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteUtente() {    
    UtenteDataService.delete(this.state.currentUtente.num_sequencial)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/utente');
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentUtente } = this.state;

    return (
      <div>
        {currentUtente ? (
          <div className="edit-form">
            <h4>Utente</h4>
            <form>
              <div className="form-group">
                <label htmlFor="nome_utente">nome_utente</label>
                <input
                  type="text"
                  className="form-control"
                  num_sequencial="nome_utente"
                  value={currentUtente.nome_utente}
                  onChange={this.onChangenome_utente}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sexo">Sexo</label>
                <input
                  type="text"
                  className="form-control"
                  num_sequencial="sexo"
                  value={currentUtente.sexo}
                  onChange={this.onChangeSexo}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Data de nascimento:</strong>
                </label>
                {currentUtente.data_nascimento}
              </div>
            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteUtente}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateUtente}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Utente...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Registo_Utente);