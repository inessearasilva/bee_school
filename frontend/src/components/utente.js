import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import UtenteDataService from 'C:/Users/ines_/fisiosys/frontend/src/services/tutorial.service.js';
import swal from 'sweetalert';
import image from "../assets/images/patient-icon-9247.png";

const Edit = () => {
  const { num_sequencial } = useParams();
  const [currentUtente, setCurrentUtente] = useState({
    num_sequencial,
    nome_utente: '',
    sexo: '',
    data_nascimento: '',
  });

  const onChangeNomeUtente = (e) => {
    const nome_utente = e.target.value;
    setCurrentUtente((prevState) => ({
      ...prevState,
      nome_utente: nome_utente,
    }));
  };

  const onChangeSexo = (e) => {
    const sexo = e.target.value;
    setCurrentUtente((prevState) => ({
      ...prevState,
      sexo: sexo,
    }));
  };

  const onChangeDataNascimento = (e) => {
    const data_nascimento = e.target.value;
    setCurrentUtente((prevState) => ({
      ...prevState,
      data_nascimento: data_nascimento,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  
  // Get the current date
  const currentDate = new Date();
  
  // Convert the entered date string to a Date object
  const enteredDate = new Date(currentUtente.data_nascimento);
  
  // Compare the entered date with the current date
  if (enteredDate > currentDate) {
    swal({
      title: 'Erro!',
      text: 'A data de nascimento não pode ser no futuro.',
      icon: 'error',
    });
    return;
  }
  
    UtenteDataService.update(currentUtente.num_sequencial, currentUtente)
      .then((response) => {
        console.log(response.data);
        swal({
          title: 'Sucesso!',
          text: 'A ficha de utente foi atualizada com sucesso!',
          icon: 'success',
        });
        window.location.href = "http://localhost:3000/#/";
      })
      .catch((e) => {
        console.log(e);
        swal({
          title: 'Erro!',
          text: 'Houve um problema ao atualizar a ficha de utente!',
          icon: 'error',
        });
      });
  };

  useEffect(() => {
    UtenteDataService.get(num_sequencial)
      .then((response) => {
        setCurrentUtente((prevState) => ({
          ...prevState,
          nome_utente: response.data.nome_utente,
          sexo: response.data.sexo,
          data_nascimento: response.data.data_nascimento,
        }));
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: 'Erro!',
          text: 'Houve um problema ao obter a ficha de utente!',
          icon: 'error',
        });
      });
  }, [num_sequencial]);

  return (
    <div>
      {currentUtente ? (
        <div className="list row d-flex justify-content-center">
          <span className="my-heading">Edição da Ficha de Utente</span>
        <br></br><br></br><br></br>
        <table className="table" style={{ tableLayout: 'fixed', width: '100%' }}>
          <thead style={{ backgroundColor: '#57a9d9', color: 'white' }}>
            <tr>
              <th scope="col" style={{textAlign:'center', height: '40px'}}>Dados Pessoais</th>
            </tr>
          </thead>
          </table>
          <div className="submit-form" style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '60%' }}>
          <form onSubmit={onSubmit}>
            <div className='form-group' style={{ width: '80%' }}>
            <label htmlFor="nome_utente" style={{color: '#3c4b64', fontFamily: 'Arial, sans-serif'}}><strong>Nome</strong></label>
              <input
                type='text'
                className='form-control'
                id='nome_utente'
                value={currentUtente.nome_utente}
                onChange={onChangeNomeUtente}
              />
            </div>
            <br />
            <div className='form-group' style={{ width: '80%' }}>
            <label htmlFor="sexo" style={{color: '#3c4b64', fontFamily: 'Arial, sans-serif'}}><strong>Sexo</strong></label>
            <div className="select-wrapper">
              <select
                className="form-control"
                id="sexo"
                required
                value={currentUtente.sexo}
                onChange={onChangeSexo}
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
            <div className='form-group' style={{ width: '80%' }}>
            <label htmlFor="data_nascimento" style={{color: '#3c4b64', fontFamily: 'Arial, sans-serif'}}><strong>Data de Nascimento</strong></label>
              <input
                type='date'
                className='form-control'
                name='data_nascimento'
                value={currentUtente.data_nascimento}
                onChange={onChangeDataNascimento}
              />
            </div>
            <br />
                <button type="submit" className="btn btn-primary" style={{backgroundColor: "#57a9d9", borderColor: "#57a9d9"}}>
                  Guardar
                </button>
              </form>
              </div>
              <div className="d-flex justify-content-center" style={{ width: '40%' }}>
              <img src={image} alt="image" style={{ width: '45%' }} />
              </div>
            </div></div>
          ) : (
            <div>
              <br />
            </div>
          )}
        </div>
      );
          
        };

        export default Edit;
