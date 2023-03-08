import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import UtenteDataService from 'C:/Users/ines_/fisiosys/frontend/src/services/tutorial.service.js';
import swal from 'sweetalert';

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
    UtenteDataService.update(currentUtente.num_sequencial, currentUtente)
      .then((response) => {
        console.log(response.data);
        swal({
          title: 'Sucesso!',
          text: 'A ficha de utente foi atualizada com sucesso!',
          icon: 'success',
        });
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
        <div className='edit-form'>
          <h4>Editar Utente</h4>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='nome_utente'>Nome</label>
              <input
                type='text'
                className='form-control'
                id='nome_utente'
                value={currentUtente.nome_utente}
                onChange={onChangeNomeUtente}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='sexo'>Sexo</label>
              <input
                type='text'
                className='form-control'
                id='sexo'
                value={currentUtente.sexo}
                onChange={onChangeSexo}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='data_nascimento'>Data de Nascimento</label>
              <input
                type='date'
                className='form-control'
                name='data_nascimento'
                value={currentUtente.data_nascimento}
                onChange={onChangeDataNascimento}
              />
            </div>
    
                <button type="submit" className="btn btn-success">
                  Salvar
                </button>
              </form>
            </div>
          ) : (
            <div>
              <br />
            </div>
          )}
        </div>
      );
          
        };

        export default Edit;
