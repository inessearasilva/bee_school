const json = {
  "Functions": [],
  "InternalFunctions": [],
  "TaskEditable": [
    "All"
  ],
  "TaskInReport": [
    "All"
  ],
  "TaskVisible": [
    "All"
  ],
  "archetypeId": "openEHR-EHR-COMPOSITION.encounter.v2",
  "category": {
    "code": [
      "at0008",
      "at0003"
    ]
  },
  "itemName": "Questionário geral",
  "itemPath": "",
  "items": [
    [
      {
        "Functions": [],
        "InternalFunctions": [],
        "TaskEditable": [
          "All"
        ],
        "TaskInReport": [
          "All"
        ],
        "TaskVisible": [
          "All"
        ],
        "archetype_id": "openEHR-DEMOGRAPHIC-CLUSTER.person_additional_data_iso.v0",
        "cardinality": {
          "interval": {
            "lowerOccurrences": 0,
            "upperOccurrences": "*"
          },
          "ordered": true,
          "unique": false
        },
        "data_type": "Title",
        "itemName": "Person additional demographic data",
        "itemPath": "items.0.0",
        "items": [
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_CODED_TEXT",
            "itemName": "Sexo",
            "itemPath": "items.0.0.items.0",
            "itemsList": [
              {
                "code": "at0010",
                "description": "Masculino",
                "text": "Masculino"
              },
              {
                "code": "at0011",
                "description": "Feminino",
                "text": "Feminino"
              },
              {
                "code": "at0012",
                "description": "é normalmente usado para bebês para os quais o sexo não foi determinado por qualquer motivo, geralmente não deve ser usado em formulários de coleta de dados preenchidos pelo entrevistado e só deve ser usado se a pessoa ou o entrevistado disser voluntariamente que a pessoa é intersexual ou quando isso se tornar claro durante o processo de coleta que o indivíduo não é homem nem mulher",
                "text": "Intersexual or indeterminado"
              },
              {
                "code": "at0013",
                "description": "não deve ser usado em formulários de coleta primária. É principalmente para uso em coletas administrativas ao transferir dados de conjuntos de dados onde o item não foi coletado.",
                "text": "Não declarado/descrito inadequadamente"
              }
            ],
            "node": {
              "code": "at0001",
              "description": "Sexo",
              "text": "Sexo"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-DEMOGRAPHIC-CLUSTER.person_additional_data_iso.v0]/[at0001]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "terminology_id": "local",
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_CODED_TEXT",
            "itemName": "Estado Civil",
            "itemPath": "items.0.0.items.1",
            "itemsList": [
              {
                "code": "local_terms::S",
                "text": "Solteiro"
              },
              {
                "code": "local_terms::M",
                "text": "Casado"
              },
              {
                "code": "local_terms::D",
                "text": "Divorciado"
              },
              {
                "code": "local_terms::W",
                "text": "Viúvo"
              },
              {
                "code": "local_terms::O",
                "text": "Outro"
              }
            ],
            "node": {
              "code": "at0003",
              "description": "Estado Civil",
              "text": "Estado Civil"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-DEMOGRAPHIC-CLUSTER.person_additional_data_iso.v0]/[at0003]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "terminology_id": "local_terms",
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_QUANTITY",
            "itemName": "Idade",
            "itemPath": "items.0.0.items.2",
            "node": {
              "code": "at0004",
              "description": "Idade do paciente.",
              "text": "Idade"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.age.v0]/[at0004]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "units": {
              "unit": "ano(s)"
            },
            "value": {
              "unit": null,
              "value": null
            }
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_QUANTITY",
            "itemName": "Peso",
            "itemPath": "items.0.0.items.3",
            "node": {
              "code": "at0004",
              "description": "O peso do paciente.",
              "text": "Peso"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.body_weight.v1]/[at0004]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "units": {
              "range": {
                "lower": 0,
                "lowerIncluded": "true",
                "upper": 1000,
                "upperIncluded": "true"
              },
              "unit": "kg"
            },
            "value": {
              "unit": null,
              "value": null
            }
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_QUANTITY",
            "itemName": "Altura",
            "itemPath": "items.0.0.items.4",
            "node": {
              "code": "at0004",
              "description": "O comprimento do corpo do topo da cabeça à sola do pé.",
              "text": "Altura"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.height.v1]/[at0004]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "units": {
              "range": {
                "lower": 0,
                "lowerIncluded": "true",
                "upper": 400,
                "upperIncluded": "true"
              },
              "unit": "cm"
            },
            "value": {
              "unit": null,
              "value": null
            }
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_TEXT",
            "itemName": "Profissão",
            "itemPath": "items.0.0.items.5",
            "node": {
              "code": "at0005",
              "description": "Nome da profissão",
              "text": "Profissão"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": "*"
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-CLUSTER.occupation_record.v1]/[at0005]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_QUANTITY",
            "itemName": "Carga horária",
            "itemPath": "items.0.0.items.6",
            "node": {
              "code": "at0019",
              "description": "A quantidade de tempo que o paciente dedica ao seu trabalho por semana.",
              "text": "Carga horária"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-CLUSTER.occupation_record.v1]/[at0019]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "units": {
              "precision": {
                "lowerPrecision": 2,
                "upperPrecision": 2
              },
              "range": {
                "lower": 0,
                "lowerIncluded": "true",
                "upper": 168,
                "upperIncluded": "true"
              },
              "unit": "hora(s)/semana"
            },
            "value": {
              "unit": null,
              "value": null
            }
          }
        ],
        "node": {
          "code": "at0000",
          "description": "Dados sociodemográficos",
          "text": "Dados sociodemográficos"
        },
        "occurrences": {
          "lowerOccurrences": 0,
          "upperOccurrences": 1
        },
        "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-DEMOGRAPHIC-CLUSTER.person_additional_data_iso.v0]",
        "ruleMandatory": [],
        "ruleVisibility": []
      },
      {
        "Functions": [],
        "InternalFunctions": [],
        "TaskEditable": [
          "All"
        ],
        "TaskInReport": [
          "All"
        ],
        "TaskVisible": [
          "All"
        ],
        "archetype_id": "openEHR-EHR-OBSERVATION.gpaq.v0",
        "data_type": "Title",
        "itemName": "Global Physical Activity Questionnaire (GPAQ)",
        "itemPath": "items.0.1",
        "items": [
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_QUANTITY",
            "itemName": "Quantas horas dorme por dia?",
            "itemPath": "items.0.1.items.0",
            "node": {
              "code": "at0006",
              "description": "Quantas horas dorme por dia num dia típico?",
              "text": "Quantas horas dorme por dia?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.gpaq.v0]/[at0006]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "units": {
              "range": {
                "lower": "0",
                "lowerIncluded": "true",
                "upper": "24",
                "upperIncluded": "true"
              },
              "unit": "hora(s)"
            },
            "value": {
              "unit": null,
              "value": null
            }
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_QUANTITY",
            "itemName": "Quantas horas despende em tarefas domésticas por semana?",
            "itemPath": "items.0.1.items.1",
            "node": {
              "code": "at0009",
              "description": "Quantas horas despende em tarefas domésticas por semana?",
              "text": "Quantas horas despende em tarefas domésticas por semana?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.gpaq.v0]/[at0009]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "units": {
              "range": {
                "lower": "0",
                "lowerIncluded": "true",
                "upper": "168",
                "upperIncluded": "true"
              },
              "unit": "hora(s)"
            },
            "value": {
              "unit": null,
              "value": null
            }
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_DURATION",
            "itemName": "Quanto tempo despende em viagens por dia?",
            "itemPath": "items.0.1.items.2",
            "node": {
              "code": "at0023",
              "description": "Quanto tempo despende em viagens por dia?",
              "text": "Quanto tempo despende em viagens por dia?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.gpaq.v0]/[at0023]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "units": {
              "range": {
                "lower": "0",
                "lowerIncluded": "true"
              },
              "unit": [
                "hora(s)",
                "minuto(s)"
              ]
            },
            "value": {
              "unit": null,
              "value": null
            }
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_QUANTITY",
            "itemName": "Quantas horas despende em atividades de lazer por semana?",
            "itemPath": "items.0.1.items.3",
            "node": {
              "code": "at0029",
              "description": "Quantas horas despende em atividades de lazer por semana?",
              "text": "Quantas horas despende em atividades de lazer por semana?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.gpaq.v0]/[at0029]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "units": {
              "range": {
                "lower": "0",
                "lowerIncluded": "true",
                "upper": "24",
                "upperIncluded": "true"
              },
              "unit":
                "hora(s)"
            },
            "value": {
              "unit": null,
              "value": null
            }
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_QUANTITY",
            "itemName": "Quanto tempo costuma passar sentado por dia?",
            "itemPath": "items.0.1.items.4",
            "node": {
              "code": "at0030",
              "text": "Quanto tempo costuma passar sentado por dia?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.gpaq.v0]/[at0030]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "units": {
              "range": {
                "lower": "0",
                "lowerIncluded": "true",
                "upper": "24",
                "upperIncluded": "true"
              },
              "unit": 
                "hora(s)"
            },
            "value": {
              "unit": null,
              "value": null
            }
          }
        ],
        "node": {
          "code": "at0000",
          "description": "Ferramenta de vigilância da OMS para avaliar os níveis de atividade física.",
          "text": "Gestão do tempo"
        },
        "occurrences": {
          "lowerOccurrences": 0,
          "upperOccurrences": 1
        },
        "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.gpaq.v0]",
        "ruleMandatory": [],
        "ruleVisibility": [],
        "xsi_type": "C_ARCHETYPE_ROOT"
      },
      {
        "Functions": [],
        "InternalFunctions": [],
        "TaskEditable": [
          "All"
        ],
        "TaskInReport": [
          "All"
        ],
        "TaskVisible": [
          "All"
        ],
        "archetype_id": "openEHR-EHR-EVALUATION.problem_diagnosis.v1",
        "data_type": "Title",
        "itemName": "Problem/Diagnosis",
        "itemPath": "items.0.2",
        "items": [
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_CODED_TEXT",
            "itemName": "Nome do problema/diagnóstico",
            "itemPath": "items.0.2.items.0",
            "itemsList": [
              {
                "code": "ICD-10: Lesões do ombro::M75.0",
                "text": "Capsulite adesiva do ombro"
              },
              {
                "code": "ICD-10: Lesões do ombro::M75.1",
                "text": "Síndrome do manguito rotador"
              },
              {
                "code": "ICD-10: Lesões do ombro::M75.2",
                "text": "Tendinite bicipital"
              },
              {
                "code": "ICD-10: Lesões do ombro::M75.3",
                "text": "Tendinite calcificante do ombro"
              },
              {
                "code": "ICD-10: Lesões do ombro::M75.4",
                "text": "Síndrome do impacto do ombro"
              },
              {
                "code": "ICD-10: Lesões do ombro::M75.5",
                "text": "Bursite do ombro"
              },
              {
                "code": "ICD-10: Lesões do ombro::M75.6",
                "text": "Rutura do lábio da articulação degenerativa do ombro"
              },
              {
                "code": "ICD-10: Lesões do ombro::M75.8",
                "text": "Outras lesões do ombro"
              },
              {
                "code": "ICD-10: Lesões do ombro::M75.9",
                "text": "Lesão não especificada do ombro"
              }
            ],
            "node": {
              "code": "at0002",
              "description": "Identificação do problema ou diagnóstico pelo nome.",
              "text": "Nome do problema/diagnóstico"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-EVALUATION.problem_diagnosis.v1]/[at0002]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "terminology_id": "ICD-10: Lesões do ombro",
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_TEXT",
            "itemName": "Descrição clínica",
            "itemPath": "items.0.2.items.1",
            "node": {
              "code": "at0009",
              "description": "Descrição narrativa do problema ou diagnóstico.",
              "text": "Descrição clínica"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-EVALUATION.problem_diagnosis.v1]/[at0009]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_DATE_TIME",
            "itemName": "Data de início",
            "itemPath": "items.0.2.items.2",
            "node": {
              "code": "at0077",
              "description": "Data estimada de início da condição.",
              "text": "Data de início"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-EVALUATION.problem_diagnosis.v1]/[at0077]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": {
              "date": null,
              "time": null
            }
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_CODED_TEXT",
            "itemName": "Severidade",
            "itemPath": "items.0.2.items.3",
            "itemsList": [
              {
                "code": "at0047",
                "description": "O problema ou diagnóstico não interfere na atividade normal ou pode causar danos à saúde se não for tratado.",
                "text": "Branda"
              },
              {
                "code": "at0048",
                "description": "O problema ou diagnóstico causa interferência na atividade normal ou prejudicará a saúde se não for tratado.",
                "text": "Moderada"
              },
              {
                "code": "at0049",
                "description": "O problema ou diagnóstico impede a atividade normal ou causará sérios danos à saúde se não for tratado.",
                "text": "Severa"
              }
            ],
            "node": {
              "code": "at0005",
              "description": "Uma avaliação da gravidade geral do problema ou diagnóstico.",
              "text": "Severidade"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-EVALUATION.problem_diagnosis.v1]/[at0005]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "terminology_id": "local",
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_CODED_TEXT",
            "itemName": "Pós-operatório?",
            "itemPath": "items.0.2.items.4",
            "itemsList": [
              {
                "code": "NCDHC Generic Yes No::373067005",
                "text": "Não"
              },
              {
                "code": "NCDHC Generic Yes No::373066001",
                "text": "Sim"
              }
            ],
            "node": {
              "code": "at0069",
              "description": "Paciente em pós-operatório?",
              "text": "Pós-operatório?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-EVALUATION.problem_diagnosis.v1]/[at0069]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "terminology_id": "NCDHC Generic Yes No",
            "value": null
          }
        ],
        "node": {
          "code": "at0000",
          "description": "Detalhes sobre uma única condição de saúde identificada, lesão, deficiência ou qualquer outro problema que afete o bem-estar físico, mental e/ou social de um indivíduo.",
          "text": "Problema/Diagnóstico"
        },
        "occurrences": {
          "lowerOccurrences": 0,
          "upperOccurrences": 1
        },
        "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-EVALUATION.problem_diagnosis.v1]",
        "ruleMandatory": [],
        "ruleVisibility": [],
        "xsi_type": "C_ARCHETYPE_ROOT"
      },
      {
        "Functions": [],
        "InternalFunctions": [],
        "TaskEditable": [
          "All"
        ],
        "TaskInReport": [
          "All"
        ],
        "TaskVisible": [
          "All"
        ],
        "archetype_id": "openEHR-EHR-EVALUATION.physical_activity_summary.v0",
        "data_type": "Title",
        "itemName": "Sumário de atividade física",
        "itemPath": "items.0.3",
        "items": [
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_CODED_TEXT",
            "itemName": "Physical activity level (PAL) status",
            "itemPath": "items.0.3.items.0",
            "itemsList": [
              {
                "code": "at0009",
                "description": "O indivíduo é extremamente inativo, por exemplo, um paciente acamado.",
                "text": "Extremamente inativo"
              },
              {
                "code": "at0010",
                "description": "O indivíduo passa a maior parte do tempo sentado, por exemplo, um funcionário de escritório fazendo pouco ou nenhum exercício.",
                "text": "Sedentário"
              },
              {
                "code": "at0011",
                "description": "O indivíduo é moderadamente ativo, por exemplo, um trabalhador da construção civil ou uma pessoa que corre uma hora por dia.",
                "text": "Moderadamente ativo"
              },
              {
                "code": "at0012",
                "description": "O indivíduo é muito ativo, por exemplo, um trabalhador manual ou uma pessoa nadando duas horas por dia.",
                "text": "Vigorosamente ativo"
              },
              {
                "code": "at0013",
                "description": "O indivíduo é extremamente ativo, por exemplo, um ciclista competitivo.",
                "text": "Extremamente ativo"
              }
            ],
            "node": {
              "code": "at0002",
              "description": "A categoria do nível de atividade física típico ou usual de um indivíduo.",
              "text": "Nível de atividade física"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-EVALUATION.physical_activity_summary.v0]/[at0002]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "terminology_id": "local",
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_CODED_TEXT",
            "itemName": "Há algum fator que o impeça de praticar exercício?",
            "itemPath": "items.0.3.items.1",
            "itemsList": [
              {
                "code": "ICD-10: Problemas relacionados com a dificuldade de gerenciamento de vida::Z73.3",
                "text": "Stress"
              },
              {
                "code": "ICD-10: Problemas relacionados com a dificuldade de gerenciamento de vida::Z73.6",
                "text": "Limitação de atividades por incapacidade"
              },
              {
                "code": "ICD-10: Problemas relacionados com a dificuldade de gerenciamento de vida::Z73.8",
                "text": "Problemas relacionados com a dificuldade de gestão do tempo"
              }
            ],
            "node": {
              "code": "at0005",
              "description": "Fator identificado que previne que o paciente seja fisicamente mais ativo.",
              "text": "Há algum fator que o impeça de praticar exercício?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": "*"
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-EVALUATION.physical_activity_summary.v0]/[at0005]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "terminology_id": "local",
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_QUANTITY",
            "itemName": "Quanto tempo despende semanalmente para atividades físicas?",
            "itemPath": "items.0.3.items.2",
            "node": {
              "code": "at0008",
              "description": "Número típico de minutos de exercício praticado.",
              "text": "Quanto tempo despende semanalmente para atividades físicas?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-EVALUATION.physical_activity_summary.v0]/[at0008]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "units": [
              {
                "range": {},
                "unit": "minutos/semana"
              },
              {
                "range": {},
                "unit": "minutos/dia"
              }
            ],
            "value": {
              "unit": null,
              "value": null
            }
          }
        ],
        "node": {
          "code": "at0000",
          "description": "Um resumo do nível típico de atividade física realizada pelo indivíduo.",
          "text": "Sumário de atividade física"
        },
        "occurrences": {
          "lowerOccurrences": 0,
          "upperOccurrences": 1
        },
        "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-EVALUATION.physical_activity_summary.v0]",
        "ruleMandatory": [],
        "ruleVisibility": [],
        "xsi_type": "C_ARCHETYPE_ROOT"
      },
      {
        "Functions": [],
        "InternalFunctions": [],
        "TaskEditable": [
          "All"
        ],
        "TaskInReport": [
          "All"
        ],
        "TaskVisible": [
          "All"
        ],
        "archetype_id": "openEHR-EHR-OBSERVATION.substance_use.v0",
        "data_type": "Title",
        "itemName": "Uso de substâncias",
        "itemPath": "items.0.4",
        "items": [
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_CODED_TEXT",
            "itemName": "Consome álcool?",
            "itemPath": "items.0.4.items.0",
            "itemsList": [
              {
                "code": "NCDHC Generic Yes No::373067005",
                "text": "Não"
              },
              {
                "code": "NCDHC Generic Yes No::373066001",
                "text": "Sim"
              }
            ],
            "node": {
              "code": "at0004",
              "description": "Identificação da substância.",
              "text": "Consome álcool?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.substance_use.v0]/[at0004]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "terminology_id": "NCDHC Generic Yes No",
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "cardinality": {
              "interval": {
                "lowerOccurrences": 0,
                "upperOccurrences": "*"
              },
              "ordered": false,
              "unique": false
            },
                "dataType": "DV_CODED_TEXT",
                "itemName": "Frequência",
                "itemPath": "items.0.4.items.1",
                "itemsList": [
                  {
                    "code": "at0006",
                    "description": "Consumido todos os dias",
                    "text": "Diariamente"
                  },
                  {
                    "code": "at0007",
                    "description": "Consumido semanalmente",
                    "text": "Semanalmente"
                  },
                  {
                    "code": "at0008",
                    "description": "Consumido irregularmente",
                    "text": "Irregularmente"
                  },
                  {
                    "code": "at0009",
                    "description": "Nunca",
                    "text": "Nunca", "value":1
                  }
                ],
                "node": {
                  "code": "at0005",
                  "description": "Frequência do uso de substância.",
                  "text": "Frequência"
                },
                "occurrences": {
                  "lowerOccurrences": 0,
                  "upperOccurrences": 1
                },
                "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.substance_use.v0]/[at0010]/[at0005]",
                "ruleMandatory": [],
                "ruleVisibility": [],
                "terminology_id": "local",
                "value": null
              },
              {
                "Functions": [],
                "InternalFunctions": [],
                "TaskEditable": [
                  "All"
                ],
                "TaskInReport": [
                  "All"
                ],
                "TaskVisible": [
                  "All"
                ],
                "dataType": "DV_CODED_TEXT",
                "itemName": "É fumador?",
                "itemPath": "items.0.4.items.2",
                "itemsList": [
                  {
                    "code": "NCDHC Generic Yes No::373067005",
                    "text": "Não"
                  },
                  {
                    "code": "NCDHC Generic Yes No::373066001",
                    "text": "Sim"
                  }
                ],
                "node": {
                  "code": "at0004",
                  "description": "Identificação da substância",
                  "text": "É fumador?"
                },
                "occurrences": {
                  "lowerOccurrences": 0,
                  "upperOccurrences": 1
                },
                "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.substance_use.v0]/[at0004]",
                "ruleMandatory": [],
                "ruleVisibility": [],
                "terminology_id": "NCDHC Generic Yes No",
                "value": null
              },
              {
                "Functions": [],
                "InternalFunctions": [],
                "TaskEditable": [
                  "All"
                ],
                "TaskInReport": [
                  "All"
                ],
                "TaskVisible": [
                  "All"
                ],
                "dataType": "DV_QUANTITY",
                "itemName": "Quantidade",
                "itemPath": "items.0.4.items.3",
                "node": {
                  "code": "at0008",
                  "description": "Quantidade",
                  "text": "Se sim, quantos cigarros fuma em média por dia?"
                },
                "occurrences": {
                  "lowerOccurrences": 0,
                  "upperOccurrences": 1
                },
                "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.substance_use.v0]",
                "ruleMandatory": [],
                "ruleVisibility": [],
                "units": [
                  {
                    "range": {},
                    "unit": "cigarros"
                  },
                ],
                "value": {
                  "unit": null,
                  "value": null
                }
              }
        ],
        "node": {
          "code": "at0000",
          "description": "Arquétipo genérico para registrar o uso ou consumo real de uma substância definida no momento presente, em um momento específico ou durante um período de tempo.",
          "text": "Consumo de substâncias"
        },
        "occurrences": {
          "lowerOccurrences": 0,
          "upperOccurrences": 1
        },
        "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.substance_use.v0]",
        "ruleMandatory": [],
        "ruleVisibility": [],
        "xsi_type": "C_ARCHETYPE_ROOT"
      },
      {
        "Functions": [],
        "InternalFunctions": [],
        "TaskEditable": [
          "All"
        ],
        "TaskInReport": [
          "All"
        ],
        "TaskVisible": [
          "All"
        ],
        "archetype_id": "openEHR-EHR-EVALUATION.medication_summary.v0",
        "data_type": "Title",
        "itemName": "Sumário da medicação",
        "itemPath": "items.0.10",
        "items": [
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_TEXT",
            "itemName": "Nome da medicação",
            "itemPath": "items.0.5.items.0",
            "node": {
              "code": "at0002",
              "description": "Nome da medicação usada.",
              "text": "Nome da medicação"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": "*"
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-EVALUATION.medication_summary.v0]/[at0002]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_TEXT",
            "itemName": "Efeito",
            "itemPath": "items.0.5.items.1",
            "node": {
              "code": "at0007",
              "description": "Efeito do uso da medicação.",
              "text": "Efeito"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": "*"
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-EVALUATION.medication_summary.v0]/[at0007]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_CODED_TEXT",
            "itemName": "Tipo de utilização",
            "itemPath": "items.0.5.items.2",
            "itemsList": [
              {
                "code": "continuous",
                "description": "Terapia contínua de longo prazo",
                "text": "Contínua"
              },
              {
                "code": "seasonal",
                "description": "Sazonal",
                "text": "Sazonal"
              },
              {
                "code": "acute",
                "description": "Terapia de curta duração",
                "text": "Esporádica"
              }
            ],
            "node": {
              "code": "at0028",
              "description": "Indicação clínica do uso da medicação.",
              "text": "Tipo de utilização"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": "*"
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-EVALUATION.medication_summary.v0]/[at0028]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "terminology_id": "local",
            "uri": "terminology://fhir.hl7.org/ValueSet/$expand?url=http://hl7.org/fhir/ValueSet/medicationrequest-course-of-therapy",
            "value": null
          }
        ],
        "node": {
          "code": "at0000",
          "description": "Summary or persistent information about all use of a single medication by an individual.",
          "text": "Sumário da medicação"
        },
        "occurrences": {
          "lowerOccurrences": 0,
          "upperOccurrences": 1
        },
        "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-EVALUATION.medication_summary.v0]",
        "ruleMandatory": [],
        "ruleVisibility": [],
        "xsi_type": "C_ARCHETYPE_ROOT"
      },
      {
        "Functions": [],
        "InternalFunctions": [],
        "TaskEditable": [
          "All"
        ],
        "TaskInReport": [
          "All"
        ],
        "TaskVisible": [
          "All"
        ],
        "archetype_id": "openEHR-EHR-OBSERVATION.scoff_questionnaire.v0",
        "data_type": "Title",
        "itemName": "Questionário SCOFF para diagnóstico precoce de transtornos alimentares",
        "itemPath": "items.0.6",
        "items": [
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_ORDINAL",
            "itemName": "Provoca o vómito quando se sente desconfortavelmente cheio?",
            "itemPath": "items.0.6.items.0",
            "itemsList": [
              {
                "code": "at0005",
                "description": "*",
                "text": "Não",
                "value": 0
              },
              {
                "code": "at0006",
                "description": "*",
                "text": "Sim",
                "value": 1
              }
            ],
            "node": {
              "code": "at0004",
              "description": "Provoca o vómito quando se sente desconfortavelmente cheio?",
              "text": "Provoca o vómito quando se sente desconfortavelmente cheio?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.scoff_questionnaire.v0]/[at0004]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_ORDINAL",
            "itemName": "Preocupa-se com a perda de controlo da quantidade que come?",
            "itemPath": "items.0.6.items.1",
            "itemsList": [
              {
                "code": "at0008",
                "description": "*",
                "text": "Não",
                "value": 0
              },
              {
                "code": "at0009",
                "description": "*",
                "text": "Sim",
                "value": 1
              }
            ],
            "node": {
              "code": "at0007",
              "description": "Preocupa-se com a perda de controlo da quantidade que come",
              "text": "Preocupa-se com a perda de controlo da quantidade que come?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.scoff_questionnaire.v0]/[at0007]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_ORDINAL",
            "itemName": "Recentemente, perdeu mais de 5 kg num período de 3 meses?",
            "itemPath": "items.0.6.items.2",
            "itemsList": [
              {
                "code": "at0011",
                "description": "*",
                "text": "Não",
                "value": 0
              },
              {
                "code": "at0012",
                "description": "*",
                "text": "Sim",
                "value": 1
              }
            ],
            "node": {
              "code": "at0010",
              "description": "Recentemente, perdeu mais de 5 kg num período de 3 meses?",
              "text": "Recentemente, perdeu mais de 5 kg num período de 3 meses?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.scoff_questionnaire.v0]/[at0010]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_ORDINAL",
            "itemName": "Acredita que tem peso a mais mesmo que outros digam que está magro?",
            "itemPath": "items.0.6.items.3",
            "itemsList": [
              {
                "code": "at0014",
                "description": "*",
                "text": "Não",
                "value": 0
              },
              {
                "code": "at0015",
                "description": "*",
                "text": "Sim",
                "value": 1
              }
            ],
            "node": {
              "code": "at0013",
              "description": "Acredita que tem peso a mais mesmo que outros digam que está magro?",
              "text": "Acredita que tem peso a mais mesmo que outros digam que está magro?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.scoff_questionnaire.v0]/[at0013]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_ORDINAL",
            "itemName": "Diria que a comida domina a sua vida?",
            "itemPath": "items.0.6.items.4",
            "itemsList": [
              {
                "code": "at0017",
                "description": "*",
                "text": "Não",
                "value": 0
              },
              {
                "code": "at0018",
                "description": "*",
                "text": "Sim",
                "value": 1
              }
            ],
            "node": {
              "code": "at0016",
              "description": "Diria que a comida domina a sua vida?",
              "text": "Diria que a comida domina a sua vida?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.scoff_questionnaire.v0]/[at0016]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_COUNT",
            "itemName": "Pontuação total",
            "itemPath": "items.0.6.items.5",
            "node": {
              "code": "at0019",
              "description": "Um ponto é atribuído para cada \"sim\"; uma pontuação maior que dois (≥2) indica um possível caso de anorexia nervosa ou bulimia nervosa.",
              "text": "Pontuação total"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.scoff_questionnaire.v0]/[at0019]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_TEXT",
            "itemName": "Comentário",
            "itemPath": "items.0.6.items.6",
            "node": {
              "code": "at0020",
              "description": "Narrativa adicional sobre a avaliação do questionário SCOFF, não capturada nos elementos estruturados.",
              "text": "Comentário"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.scoff_questionnaire.v0]/[at0020]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          }
        ],
        "node": {
          "code": "at0000",
          "description": "Ferramenta de triagem para transtornos alimentares.",
          "text": "Questionário SCOFF para diagnóstico precoce de transtornos alimentares"
        },
        "occurrences": {
          "lowerOccurrences": 0,
          "upperOccurrences": 1
        },
        "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.scoff_questionnaire.v0]",
        "ruleMandatory": [],
        "ruleVisibility": [],
        "xsi_type": "C_ARCHETYPE_ROOT"
      },
      {
        "Functions": [],
        "InternalFunctions": [],
        "TaskEditable": [
          "All"
        ],
        "TaskInReport": [
          "All"
        ],
        "TaskVisible": [
          "All"
        ],
        "archetype_id": "openEHR-EHR-OBSERVATION.kessler_k10_scale.v0",
        "data_type": "Title",
        "itemName": "Escala de Angústia Psicológica Kessler (K10)",
        "itemPath": "items.0.7",
        "items": [
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_ORDINAL",
            "itemName": "Nos últimos 30 dias com que frequência se sentiu cansado sem razão aparente?",
            "itemPath": "items.0.7.items.0",
            "itemsList": [
              {
                "code": "at0005",
                "text": "Nunca", 
                "value":1
              },
              {
                "code": "at0006",
                "text": "Raramente", 
                "value":2
              },
              {
                "code": "at0007",
                "text": "Algumas vezes", 
                "value":3
              },
              {
                "code": "at0008",
                "text": "Frequentemente", 
                "value":4
              },
              {
                "code": "at0009",
                "text": "Sempre", 
                "value":5
              }
            ],
            "node": {
              "code": "at0004",
              "description": "Nos últimos 30 dias com que frequência se sentiu cansado sem razão aparente?",
              "text": "Nos últimos 30 dias com que frequência se sentiu cansado sem razão aparente?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.kessler_k10_scale.v0]/[at0004]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_ORDINAL",
            "itemName": "Nos últimos 30 dias com que frequência se sentiu nervoso?",
            "itemPath": "items.0.7.items.1",
            "itemsList": [
              {
                "code": "at0016",
                "text": "Nunca", 
                "value":1
              },
              {
                "code": "at0017",
                "text": "Raramente", 
                "value":2
              },
              {
                "code": "at0018",
                "text": "Algumas vezes", 
                "value":3
              },
              {
                "code": "at0019",
                "text": "Frequentemente", 
                "value":4
              },
              {
                "code": "at0020",
                "text": "Sempre", 
                "value":5
              }
            ],
            "node": {
              "code": "at0015",
              "description": "Nos últimos 30 dias com que frequência se sentiu nervoso?",
              "text": "Nos últimos 30 dias com que frequência se sentiu nervoso?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.kessler_k10_scale.v0]/[at0015]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_ORDINAL",
            "itemName": "Nos últimos 30 dias com que frequência se sentiu tão nervoso que nada o podia acalmar?",
            "itemPath": "items.0.7.items.2",
            "itemsList": [
              {
                "code": "at0022",
                "text": "Nunca", 
                "value":1
              },
              {
                "code": "at0023",
                "text": "Raramente", 
                "value":2
              },
              {
                "code": "at0024",
                "text": "Algumas vezes", 
                "value":3
              },
              {
                "code": "at0025",
                "text": "Frequentemente", 
                "value":4
              },
              {
                "code": "at0026",
                "text": "Sempre", 
                "value":5
              }
            ],
            "node": {
              "code": "at0021",
              "description": "Nos últimos 30 dias com que frequência se sentiu tão nervoso que nada o podia acalmar?",
              "text": "Nos últimos 30 dias com que frequência se sentiu tão nervoso que nada o podia acalmar?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.kessler_k10_scale.v0]/[at0021]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_ORDINAL",
            "itemName": "Nos últimos 30 dias com que frequência se sentiu sem esperança?",
            "itemPath": "items.0.7.items.3",
            "itemsList": [
              {
                "code": "at0028",
                "text": "Nunca", 
                "value":1
              },
              {
                "code": "at0029",
                "text": "Raramente", 
                "value":2
              },
              {
                "code": "at0030",
                "text": "Algumas vezes", 
                "value":3
              },
              {
                "code": "at0031",
                "text": "Frequentemente", 
                "value":4
              },
              {
                "code": "at0032",
                "text": "Sempre", 
                "value":5
              }
            ],
            "node": {
              "code": "at0027",
              "description": "Nos últimos 30 dias com que frequência se sentiu sem esperança?",
              "text": "Nos últimos 30 dias com que frequência se sentiu sem esperança?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.kessler_k10_scale.v0]/[at0027]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_ORDINAL",
            "itemName": "Nos últimos 30 dias com que frequência se sentiu inquieto?",
            "itemPath": "items.0.7.items.4",
            "itemsList": [
              {
                "code": "at0034",
                "text": "Nunca", 
                "value":1
              },
              {
                "code": "at0035",
                "text": "Raramente", 
                "value":2
              },
              {
                "code": "at0036",
                "text": "Algumas vezes", 
                "value":3
              },
              {
                "code": "at0037",
                "text": "Frequentemente", 
                "value":4
              },
              {
                "code": "at0038",
                "text": "Sempre", 
                "value":5
              }
            ],
            "node": {
              "code": "at0033",
              "description": "Nos últimos 30 dias com que frequência se sentiu inquieto?",
              "text": "Nos últimos 30 dias com que frequência se sentiu inquieto?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.kessler_k10_scale.v0]/[at0033]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_ORDINAL",
            "itemName": "Nos últimos 30 dias com que frequência se sentiu tão inquieto que não se conseguia manter calmo?",
            "itemPath": "items.0.7.items.5",
            "itemsList": [
              {
                "code": "at0040",
                "text": "Nunca", 
                "value":1
              },
              {
                "code": "at0041",
                "text": "Raramente", 
                "value":2
              },
              {
                "code": "at0042",
                "text": "Algumas vezes", 
                "value":3
              },
              {
                "code": "at0043",
                "text": "Frequentemente", 
                "value":4
              },
              {
                "code": "at0044",
                "text": "Sempre", 
                "value":5
              }
            ],
            "node": {
              "code": "at0039",
              "description": "Nos últimos 30 dias com que frequência se sentiu tão inquieto que não se conseguia manter calmo?",
              "text": "Nos últimos 30 dias com que frequência se sentiu tão inquieto que não se conseguia manter calmo?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.kessler_k10_scale.v0]/[at0039]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_ORDINAL",
            "itemName": "Nos últimos 30 dias com que frequência se sentiu deprimido?",
            "itemPath": "items.0.7.items.6",
            "itemsList": [
              {
                "code": "at0046",
                "text": "Nunca", 
                "value":1
              },
              {
                "code": "at0047",
                "text": "Raramente", 
                "value":2
              },
              {
                "code": "at0048",
                "text": "Algumas vezes", 
                "value":3
              },
              {
                "code": "at0049",
                "text": "Frequentemente", 
                "value":4
              },
              {
                "code": "at0050",
                "text": "Sempre", "value":5
              }
            ],
            "node": {
              "code": "at0045",
              "description": "Nos últimos 30 dias com que frequência se sentiu deprimido?",
              "text": "Nos últimos 30 dias com que frequência se sentiu deprimido?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.kessler_k10_scale.v0]/[at0045]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_ORDINAL",
            "itemName": "Nos últimos 30 dias com que frequência sentiu que tudo era um fardo?",
            "itemPath": "items.0.7.items.7",
            "itemsList": [
              {
                "code": "at0052",
                "text": "Nunca", 
                "value":1
              },
              {
                "code": "at0053",
                "text": "Raramente", 
                "value":2
              },
              {
                "code": "at0054",
                "text": "Algumas vezes", 
                "value":3
              },
              {
                "code": "at0055",
                "text": "Frequentemente", 
                "value":4
              },
              {
                "code": "at0056",
                "text": "Sempre", 
                "value":5
              }
            ],
            "node": {
              "code": "at0051",
              "description": "Nos últimos 30 dias com que frequência sentiu que tudo era um fardo?",
              "text": "Nos últimos 30 dias com que frequência sentiu que tudo era um fardo?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.kessler_k10_scale.v0]/[at0051]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_ORDINAL",
            "itemName": "Nos últimos 30 dias com que frequência se sentiu tão triste que nada o conseguia animar?",
            "itemPath": "items.0.7.items.8",
            "itemsList": [
              {
                "code": "at0058",
                "text": "Nunca", 
                "value":1
              },
              {
                "code": "at0059",
                "text": "Raramente", 
                "value":2
              },
              {
                "code": "at0060",
                "text": "Algumas vezes", 
                "value":3
              },
              {
                "code": "at0061",
                "text": "Frequentemente", 
                "value":4
              },
              {
                "code": "at0062",
                "text": "Sempre", 
                "value":5
              }
            ],
            "node": {
              "code": "at0057",
              "description": "Nos últimos 30 dias com que frequência se sentiu tão triste que nada o conseguia animar?",
              "text": "Nos últimos 30 dias com que frequência se sentiu tão triste que nada o conseguia animar?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.kessler_k10_scale.v0]/[at0057]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_ORDINAL",
            "itemName": "Nos últimos 30 dias com que frequência se sentiu inútil?",
            "itemPath": "items.0.7.items.9",
            "itemsList": [
              {
                "code": "at0064",
                "text": "Nunca", 
                "value":1
              },
              {
                "code": "at0065",
                "text": "Raramente", 
                "value":2
              },
              {
                "code": "at0066",
                "text": "Algumas vezes", 
                "value":3
              },
              {
                "code": "at0067",
                "text": "Frequentemente", 
                "value":4
              },
              {
                "code": "at0068",
                "text": "Sempre", 
                "value":5
              }
            ],
            "node": {
              "code": "at0063",
              "description": "Nos últimos 30 dias com que frequência se sentiu inútil?",
              "text": "Nos últimos 30 dias com que frequência se sentiu inútil?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.kessler_k10_scale.v0]/[at0063]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_COUNT",
            "itemName": "Pontuação total",
            "itemPath": "items.0.7.items.10",
            "node": {
              "code": "at0014",
              "description": "Pontuação total na Escala Escala de Angústia Psicológica Kessler (K10).",
              "text": "Pontuação total"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.kessler_k10_scale.v0]/[at0014]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          },
          {
            "Functions": [],
            "InternalFunctions": [],
            "TaskEditable": [
              "All"
            ],
            "TaskInReport": [
              "All"
            ],
            "TaskVisible": [
              "All"
            ],
            "dataType": "DV_TEXT",
            "itemName": "Comentário",
            "itemPath": "items.0.7.items.11",
            "node": {
              "code": "at0069",
              "description": "Narrativa adicional sobre a Escala de Angústia Psicológica Kessler geral não capturada em outros campos.",
              "text": "Comentário"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.kessler_k10_scale.v0]/[at0069]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value": null
          }
        ],
        "node": {
          "code": "at0000",
          "description": "A Kessler Psychological Distress Scale (K10) é uma ferramenta para medir ansiedade e depressão por meio de um questionário de 10 itens. Cada questão pertence a um estado emocional e cada uma tem uma escala de resposta de cinco níveis.",
          "text": "Escala de Angústia Psicológica Kessler (K10)"
        },
        "occurrences": {
          "lowerOccurrences": 0,
          "upperOccurrences": 1
        },
        "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.kessler_k10_scale.v0]",
        "ruleMandatory": [],
        "ruleVisibility": [],
        "xsi_type": "C_ARCHETYPE_ROOT"
      }
    ]
  ],
  "node": {
    "code": "at0000",
    "description": "Interação, contato ou evento de cuidado entre um utente e o(s) prestador(es) de saúde.",
    "text": "Questionário geral"
  },
  "occurrences": {
    "lowerOccurrences": 1,
    "upperOccurrences": 1
  },
  "path": "[openEHR-EHR-COMPOSITION.encounter.v2]",
  "rm_type_name": "COMPOSITION",
  "ruleMandatory": [],
  "ruleVisibility": [],
  "templateId": "fa786fe0-4fac-449f-812a-2a7619370c89",
  "templateName": "Initial Evaluation",
  "themeColor": "default"
};
export default json;