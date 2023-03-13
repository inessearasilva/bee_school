import React, { Component } from "react";
import UtenteDataService from "../services/tutorial.service";
import image from "../assets/images/patient-icon-9247.png";
import swal from 'sweetalert';

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
      swal("", "Preencha todos os campos, por favor.", "warning");
      return;
    }
    
    // Get the current date
    const currentDate = new Date();
    
    // Convert the entered date string to a Date object
    const enteredDate = new Date(this.state.data_nascimento);
    
    // Compare the entered date with the current date
    if (enteredDate > currentDate) {
      swal({
        title: 'Erro!',
        text: 'A data de nascimento não pode ser no futuro.',
        icon: 'error',
      });
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
        this.clearFields();
        swal("", "Utente registado com sucesso.", "success");
        window.location.href = "http://localhost:3000/#/"
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  

  clearFields() {
    this.setState({
      num_sequencial: null,
      sexo: "",
      nome_utente: "", 
      data_nascimento: "dd/mm/aaaa",
      submitted: false
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
      <div className="list row d-flex justify-content-center">
        <h3 className="my-heading">Registo de Utentes</h3>
        <br></br><br></br><br></br>
        <table className="table" style={{ tableLayout: 'fixed', width: '100%' }}>
          <thead style={{ backgroundColor: '#57a9d9', color: 'white' }}>
            <tr>
              <th scope="col" style={{textAlign:'center', height: '40px'}}>Dados Pessoais</th>
            </tr>
          </thead>
          </table>
      <div className="submit-form">
          <div>
            <div className="submit-form" style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ width: '60%' }}>
    <div className="form-group" style={{ width: '80%' }}>
      <label htmlFor="nome_utente" style={{color: '#3c4b64', fontFamily: 'Arial, sans-serif'}}><strong>Nome</strong></label>
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
    <br />
    <div className="form-group" style={{ width: '80%', color: '#f8f9fa'}} >
  <label htmlFor="sexo" style={{color: '#3c4b64', fontFamily: 'Arial, sans-serif'}}><strong>Sexo</strong></label>
  <div className="select-wrapper">
    <select
      className="form-control"
      id="sexo"
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
    <span className="arrow"></span>
  </div>
</div>

    <br />
    <div className="form-group" style={{ width: '80%' }}>
      <label htmlFor="data_nascimento" style={{color: '#3c4b64', fontFamily: 'Arial, sans-serif'}}><strong>Data de Nascimento</strong></label>
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
    <br />
    <button onClick={this.saveUtente} type="button" className="btn btn-primary" style={{backgroundColor: "#57a9d9", borderColor: "#57a9d9"}}>
      Registar
    </button>
  </div>
  <div className="d-flex justify-content-center" style={{ width: '40%' }}>
    <img src={image} alt="image" style={{ width: '45%' }} />
  </div>
</div>
</div>
      </div>
      </div>
    );
  }
}
