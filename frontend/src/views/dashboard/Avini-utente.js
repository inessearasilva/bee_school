import React, { useState, useEffect } from 'react'
import { Form } from 'protected-aidaforms';
import { useParams } from 'react-router-dom'; // import the useParams hook
import json from './InitialEvaluation.js';
import UtenteDataService from "C:/Users/ines_/fisiosys/frontend/src/services/tutorial.service.js"

const Avininum = () => {
  const { num_sequencial } = useParams(); // get the value of num_sequencial from the route parameter
  const [currentUtente, setCurrentUtente] = useState({
    num_sequencial,
    nome_utente: '',
    data_nascimento: ''
  });
  
  useEffect(() => {
    UtenteDataService.get(num_sequencial)
      .then(response => {
        setCurrentUtente(prevState => ({ ...prevState, nome_utente: response.data.nome_utente, data_nascimento: response.data.data_nascimento }));
      })
      .catch(error => {
        console.log(error);
      });
  }, [num_sequencial]);

  const date = new Date(currentUtente.data_nascimento);

  const formattedDate = date.toLocaleDateString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' });
  
  return (
    <>
      {currentUtente.nome_utente !== '' && (
        <Form
          onSubmit={(values, changedFields) => console.log("SUBMITTED VALUES: ", values, "CHANGED FIELDS: ", changedFields)}
          onSave={(values, changedFields) => console.log("SAVED VALUES: ", values, "CHANGED FIELDS: ", changedFields)}
          onCancel={status => console.log("CANCELLED:", status)}
          template={json}
          dlm={{}}
          showPrint={true}
          editMode={true}
          professionalTasks={["Registar Pedido", "Consultar Pedido", "Anular Pedido"]}
          canSubmit={true}
          canSave={true}
          canCancel={true}
          patientData={{
            "numSequencial": currentUtente.num_sequencial,
            "episodio": 21016848,
            "modulo": "INT",
            "processo": 99998888,
            "nome": currentUtente.nome_utente,
            "dtaNascimento": currentUtente.data_nascimento,
            "idade": 77,
            "sexo": "Masculino"
          }}
          reportData={{
            dtaEncerrada: "22-05-2019 13:02",
            dtaCriada: "10-05-2019 18:47",
            realizada: "Joana Pascoal",
            responsavel: "José Costa"
          }}
          referenceModel={[
          {"itemName": "Número sequencial",
         "item": "num_seq",
         "value": currentUtente.num_sequencial,
         "formVisible": true
         },
         {"itemName": "Nome",
         "item": "Nome",
         "value": currentUtente.nome_utente,
         "formVisible": true
         },
         {"itemName": "Data de nascimento",
         "item": "dtaNascimento",
         "value": formattedDate,
         "formVisible": true
         }
          ]}
          submitButtonDisabled={false}
          saveButtonDisabled={false}
        />
      )}
    </>
  );
  
};

export default Avininum;
