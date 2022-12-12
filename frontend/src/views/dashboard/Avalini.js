import React from 'react'
import {Form} from 'protected-aidaforms';
import json from './JSON.js';
//import dlm from './DLMteste.js';

const Avini = () => {

  return (
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
 "numSequencial": 1904865,
 "episodio": 21016848,
 "modulo": "INT",
 "processo": 99998888,
 "nome": "Manuel Utente Teste Teste Teste",
 "dtaNascimento": "1945-08-15",
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
  {"itemName": "Número mecanográfico",
  "item": "num_mecanografico",
  "value": "123456",
  "formVisible": true
  },
  {"itemName": "Número sequencial",
  "item": "num_seq",
  "value": 1347095,
  "formVisible": true
  },
  {"itemName": "Nome",
  "item": "Nome",
  "value": "José da Silva Pinto",
  "formVisible": true
  }
  ]}
  submitButtonDisabled={false}
  saveButtonDisabled={false}
 />
  );
}

export default Avini