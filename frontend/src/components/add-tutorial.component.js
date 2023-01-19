import React, { Component } from "react";
import UtenteDataService from "../services/tutorial.service";

export default class Registo_Utente extends Component {
  constructor(props) {
    super(props);
    this.onChangenome_utente = this.onChangenome_utente.bind(this);
    this.onChangeSexo = this.onChangeSexo.bind(this);
    this.onChangeData = this.onChangeData.bind(this);
    this.saveUtente = this.saveUtente.bind(this);
    this.newUtente = this.newUtente.bind(this);

    this.state = {
      num_sequencial: null,
      sexo: "",
      nome_utente: "", 
      data_nascimento: new Date(),

      submitted: false
    };
  }

  onChangenome_utente(e) {
    this.setState({
      nome_utente: e.target.value
    });
  }

  onChangeSexo(e) {
    this.setState({
      sexo: e.target.value
    });
  }

  onChangeData(e) {
    this.setState({
      data_nascimento: e.target.value
    });
  }

  saveUtente() {
    var data = {
      sexo: this.state.sexo,
      nome_utente: this.state.nome_utente,
      data_nascimento: this.state.data_nascimento
    };

    UtenteDataService.create(data)
      .then(response => {
        this.setState({
          num_sequencial: response.data.num_sequencial,
          sexo: response.data.sexo,
          nome_utente: response.data.nome_utente,
          data_nascimento: response.data.data_nascimento,
          

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newUtente() {
    this.setState({
      num_sequencial: null,
      sexo: "",
      nome_utente: "", 
      data_nascimento: new Date(),

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newUtente}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="nome_utente">Nome</label>
              <input
                type="text"
                className="form-control"
                num_sequencial="nome_utente"
                required
                value={this.state.nome_utente}
                onChange={this.onChangenome_utente}
                name="nome_utente"
              />
            </div>

            <div className="form-group">
              <label htmlFor="sexo">Sexo</label>
              <input
                type="text"
                className="form-control"
                num_sequencial="sexo"
                required
                value={this.state.sexo}
                onChange={this.onChangeSexo}
                name="sexo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="data_nascimento">Data de Nascimento</label>
              <input
                type="date"
                className="form-control"
                num_sequencial="data_nascimento"
                required
                value={this.state.data_nascimento}
                onChange={this.onChangeData}
                name="data_nascimento"
              />
            </div>

            <button onClick={this.saveUtente} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}