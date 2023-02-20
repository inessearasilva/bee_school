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
      data_nascimento: "dd/mm/aaaa",

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
    if (!this.state.nome_utente || !this.state.sexo || this.state.data_nascimento === "dd/mm/aaaa") {
      alert("Preencha todos os campos, por favor.");
      return;
  }
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
      data_nascimento: "dd/mm/aaaa",

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div className="submitted">
            <h4 className="submitted-message">Utente adicionado com sucesso!</h4>
            <button className="btn btn-success" onClick={this.newUtente}>Voltar</button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="nome_utente"><strong>Nome</strong></label>
              <input
                type="text"
                className="form-control"
                id="nome_utente"
                required
                value={this.state.nome_utente}
                onChange={this.onChangenome_utente}
                name="nome_utente"
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="sexo"><strong>Sexo</strong></label>
              <select
                className="form-control"
                num_sequencial="sexo"
                required
                value={this.state.sexo}
                onChange={this.onChangeSexo}
                name="sexo"
              >
                <option value="">Selecione uma opção</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Prefiro não dizer">Prefiro não dizer</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            <br></br>
            <div className="form-group">
            <label htmlFor="data_nascimento"><strong>Data de Nascimento</strong></label>
              <input
                type="date"
                className="form-control"
                id="data_nascimento"
                required
                value={this.state.data_nascimento}
                onChange={this.onChangeData}
                name="data_nascimento"
              />
            </div>
            <br></br>
            <button onClick={this.saveUtente} type="button" className="btn btn-primary" style={{backgroundColor: "#57a9d9", borderColor: "#57a9d9"}}>
              Adicionar
            </button>
          </div>
        )}
      </div>
    );
  }
}
