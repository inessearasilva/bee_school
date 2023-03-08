import React, { useState, useEffect, useRef } from 'react'
import { Form } from 'protected-aidaforms';
import { json, useParams } from 'react-router-dom'; // import the useParams hook
import jdt from './JSON';
import UtenteDataService from "C:/Users/ines_/fisiosys/frontend/src/services/tutorial.service.js"
import swal from 'sweetalert';
import { replaceValuesJDT } from './SavedValues.js';

console.log('first', jdt);

const Avombronum = () => {

  useEffect(() => {
    const pageReloaded = sessionStorage.getItem('pageReloaded');
    if (!pageReloaded) {
      sessionStorage.setItem('pageReloaded', true);
      window.location.reload();
    } else {
      sessionStorage.removeItem('pageReloaded');
    }
  }, []);


  const { num_sequencial } = useParams(); // get the value of num_sequencial from the route parameter
  const { idcomposition } = useParams();

  const [currentUtente, setCurrentUtente] = useState({
    num_sequencial,
    nome_utente: '',
    data_nascimento: ''
  });

  const [initialComposition, setInitialComposition] = useState({
    num_sequencial,
    id_initialcomposition: ''
  });

  const [dtaCriada, setDtaCriada] = useState(null);
  const [dtaEncerrada, setDtaEncerrada] = useState(null);
  const formRef = useRef(null); // add a reference to the form component

  useEffect(() => {
    UtenteDataService.get(num_sequencial)
      .then(response => {
        setCurrentUtente(prevState => ({ ...prevState, nome_utente: response.data.nome_utente, data_nascimento: response.data.data_nascimento }));
      })
      .catch(error => {
        console.log(error);
      });
  }, [num_sequencial]);

  useEffect(() => {
    UtenteDataService.getid(num_sequencial)
      .then(response => {
        setInitialComposition(prevState => ({ ...prevState, id_initialcomposition: response.data.id_initialcomposition }));
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: 'Erro!',
          text: 'Houve um problema ao obter o id!',
          icon: 'error',
        });
      });
  }, [num_sequencial]);

  const date = new Date(currentUtente.data_nascimento);
  const formattedDate = date.toLocaleDateString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' });


  const referenceModelData = [
    {"itemName": "Número sequencial",
    "item": "num_sequencial",
    "value": currentUtente.num_sequencial
    },
    {"itemName": "Nome",
    "item": "nome_utente",
    "value": currentUtente.nome_utente
    },
    {
     "itemName": "Data de nascimento",
     "item": "data_nascimento",
     "value": currentUtente.data_nascimento
   }
    ];

    const handleSubmit = (values, changedFields) => {
      UtenteDataService.createform({
        idjdt: 1,
        num_sequencial: currentUtente.num_sequencial,
        version: 1,
        createdat: new Date(),
        state: 0,
        id_initialcomposition: initialComposition.id_initialcomposition,
        composition: values,
        reference_model: referenceModelData,
        isCompleted: 1
      })
        .then(response => {
          //console.log("Form data submitted successfully:", response.data);
          setDtaCriada(new Date());
          swal("", "Formulário submetido com sucesso.", "success"); // Show SweetAlert success message
          window.history.back();
        })
        .catch(error => {
          console.log("Error submitting form data:", error);
        });
    };

const handleSave = (values, changedFields) => {
  UtenteDataService.createform({
    idjdt: 1,
    num_sequencial: currentUtente.num_sequencial,
    version: 1,
    createdat: new Date(),
    state: 0,
    id_initialcomposition: initialComposition.id_initialcomposition,
    composition: values,
    reference_model: referenceModelData,
    isCompleted: 0
  })
    .then(response => {
      //console.log("Form data saved successfully:", response.data);
      setDtaCriada(new Date());
      swal("", "Formulário salvo com sucesso.", "success"); // Show SweetAlert success message
      window.history.back();
    })
    .catch(error => {
      console.log("Error saving form data:", error);
    });
};

  const [formValues, setFormValues] = useState({
    num_sequencial,
    composition: ''
  });

  const [newJDT, setNewJDT] = useState(jdt);

  useEffect(() => {
    setNewJDT(jdt);
  }, []);

  useEffect(() => {
    console.clear(); // clear console on every render 
    if (!formValues.composition) { // check if composition is empty or null
      console.log('using original jdt');
      console.log(formValues.num_sequencial);
      setNewJDT(jdt); // use the original jdt template
      console.log('original',jdt);
      console.log('the new',newJDT);
    } else {
      const compositionval = JSON.parse(formValues.composition);
      const newJDT = replaceValuesJDT(jdt, compositionval);
      console.log('using replaced jdt', newJDT);
      setNewJDT(newJDT);
    }
  }, [formValues.composition]);
  
  useEffect(() => {
    UtenteDataService.getformcomp(num_sequencial)
    .then(response => {
      setFormValues(prevState => ({ ...prevState, num_sequencial: response.data.num_sequencial, composition: response.data.composition }));
        //const compositionval = JSON.parse(response.data.composition);
        console.log("newJDT", newJDT);
        //setFormValues(compositionval);
      })
      .catch((error) => {
        console.log('Novo forms');
      });
  }, [num_sequencial]);


  //const novoJDT = replaceValuesJDT(jdt, compositionval);
  //console.log("new:", novoJDT);

  //console.log("Valores:", formValues.composition);
  //const compositionval = JSON.parse(formValues.composition);
  //const newJDT = replaceValuesJDT(jdt, compositionval);
  //const newJDT = replaceValuesJDT(jdt, formValues.composition);

  return ( 
    <>
      {currentUtente.nome_utente !== '' && initialComposition.id_initialcomposition !== '' && newJDT !== '' && (
        <Form
        ref={formRef} // pass the reference to the form component
        onSubmit={handleSubmit}
        onSave={handleSave}
        onCancel={() => {
          swal("", "Cancelado com sucesso", "warning"); // Show SweetAlert warning message
          window.history.back(); // Go back to previous page
        }}
        template={newJDT}
        dlm={{}}
        showPrint={true}
        editMode={true}
        professionalTasks={["Registar Pedido", "Consultar Pedido", "Anular Pedido"]}
        canSubmit={true}
        canSave={true}
        canCancel={true}
        patientData={{
        "numSequencial": currentUtente.num_sequencial,
        "nome": currentUtente.nome_utente,
        "dtaNascimento": currentUtente.data_nascimento,
        "sexo": currentUtente.sexo
        }}
        reportData={{
        dtaEncerrada: dtaEncerrada ? dtaEncerrada.toLocaleString() : null,
        dtaCriada: dtaCriada ? dtaCriada.toLocaleString() : null,
        realizada: "Inês Silva",
        responsavel: "Inês Silva"
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
         {
          "itemName": "Data de nascimento",
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

export default Avombronum;
