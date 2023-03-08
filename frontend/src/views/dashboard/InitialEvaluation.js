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
  "itemName": "Avaliação Inicial",
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
            "itemName": "Sex",
            "itemPath": "items.0.0.items.0",
            "itemsList": [
              {
                "code": "at0010",
                "description": "Male",
                "text": "Masculino"
              },
              {
                "code": "at0011",
                "description": "Female",
                "text": "Feminino"
              },
              {
                "code": "at0012",
                "description": "is normally used for babies for whom sex has not been determined for whatever reason, should not generally be used on data collection forms completed by the respondent and should only be used if the person or respondent volunteers that the person is intersex or where it otherwise becomes clear during the collection process that the individual is neither male nor female",
                "text": "Intersexual or indeterminado"
              },
              {
                "code": "at0013",
                "description": "is not to be used on primary collection forms. It is primarily for use in administrative collections when transferring data from data sets where the item has not been collected.",
                "text": "Prefiro não dizer"
              }
            ],
            "node": {
              "code": "at0001",
              "description": "The sex of the subject.",
              "text": "Sexo"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": "*"
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
            "dataType": "DV_QUANTITY",
            "itemName": "Chronological age",
            "itemPath": "items.0.10.items.0",
            "node": {
              "code": "at0004",
              "description": "Duration of time since birth.",
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
              "range": {
                "lower": "0",
                "lowerIncluded": "true",
                "upper": "130",
                "upperIncluded": "true"
              },
              "unit": "anos"
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
            "itemName": "Weight",
            "itemPath": "items.0.11.items.0",
            "node": {
              "code": "at0004",
              "description": "The weight of the individual.",
              "text": "Peso"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.body_weight.v2]/[at0004]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "units": [
              {
                "range": {
                  "lower": 0,
                  "lowerIncluded": "true",
                  "upper": 1000,
                  "upperIncluded": "true"
                },
                "unit": "kg"
              },
            ],
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
            "itemName": "Height/Length",
            "itemPath": "items.0.12.items.0",
            "node": {
              "code": "at0004",
              "description": "The length of the body from crown of head to sole of foot.",
              "text": "Altura"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.height.v2]/[at0004]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "units": [
              {
                "range": {
                  "lower": 0,
                  "lowerIncluded": "true",
                  "upper": 1000,
                  "upperIncluded": "true"
                },
                "unit": "cm"
              },
            ],
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
            "dataType": "DV_CODED_TEXT",
            "itemName": "Marital status",
            "itemPath": "items.0.0.items.1",
            "itemsList": [
              {
                "code": "at0010",
                "description": "Single",
                "text": "Solteiro"
              },
              {
                "code": "at0011",
                "description": "Married",
                "text": "Casado"
              },
              {
                "code": "at0012",
                "description": "Divorced",
                "text": "Divorciado"
              },
              {
                "code": "at0013",
                "description": "Widowed",
                "text": "Viúvo"
              }
            ],
            "node": {
              "code": "at0003",
              "description": "Marital status",
              "text": "Estado civil"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": "*"
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-DEMOGRAPHIC-CLUSTER.person_additional_data_iso.v0]/[at0003]",
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
            "dataType": "DV_TEXT",
            "itemName": "Job title/role",
            "itemPath": "items.0.1.items.0",
            "node": {
              "code": "at0005",
              "description": "The main job title or the role of the individual.",
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
            "itemName": "Time allocated",
            "itemPath": "items.0.1.items.1",
            "node": {
              "code": "at0019",
              "description": "The amount of time an individual is allocated to carry out the job or role per specified period of this occupation record.",
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
                  "upperIncluded": "false"
                },
                "unit": "horas/semana"
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
            "dataType": "DV_ORDINAL",
            "itemName": "O seu trabalho é maioritariamente sedentário?",
            "itemPath": "items.0.4.items.0",
            "itemsList": [
              {
                "code": "at0005",
                "description": "*",
                "text": "Não"
              },
              {
                "code": "at0006",
                "description": "*",
                "text": "Sim"
              }
            ],
            "node": {
              "code": "at0004",
              "description": "O seu trabalho é maioritariamente sedentário?",
              "text": "O seu trabalho é maioritariamente sedentário?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-CLUSTER.occupation_record.v1]/[at0019]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "value":  null
          }
        ],
        "node": {
          "code": "at0000",
          "description": "Person additional demographic data: sex and marital status",
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
            "dataType": "DV_TEXT",
            "itemName": "Problem/Diagnosis name",
            "itemPath": "items.0.2.items.0",
            "itemsList": [],
            "node": {
              "code": "at0002",
              "description": "Identification of the problem or diagnosis, by name.",
              "text": "Descrição do problema/diagnóstico"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-EVALUATION.problem_diagnosis.v1]/[at0002]",
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
            "dataType": "DV_TEXT",
            "itemName": "Cause",
            "itemPath": "items.0.2.items.1",
            "node": {
              "code": "at0078",
              "description": "A cause, set of causes, or manner of causation of the problem or diagnosis.",
              "text": "Causa"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": "*"
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-EVALUATION.problem_diagnosis.v1]/[at0078]",
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
            "itemName": "Date/time of onset",
            "itemPath": "items.0.2.items.2",
            "node": {
              "code": "at0077",
              "description": "Estimated or actual date/time that signs or symptoms of the problem/diagnosis were first observed.",
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
            "itemName": "Severity",
            "itemPath": "items.0.2.items.3",
            "itemsList": [
              {
                "code": "at0047",
                "description": "The problem or diagnosis does not interfere with normal activity or may cause damage to health if left untreated.",
                "text": "Branda"
              },
              {
                "code": "at0048",
                "description": "The problem or diagnosis causes interference with normal activity or will damage health if left untreated.",
                "text": "Moderada"
              },
              {
                "code": "at0049",
                "description": "The problem or diagnosis prevents normal activity or will seriously damage health if left untreated.",
                "text": "Severa"
              }
            ],
            "node": {
              "code": "at0005",
              "description": "An assessment of the overall severity of the problem or diagnosis.",
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
          }
        ],
        "node": {
          "code": "at0000",
          "description": "Details about a single identified health condition, injury, disability or any other issue which impacts on the physical, mental and/or social well-being of an individual.",
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
        "itemName": "Physical activity summary",
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
                "description": "The individual is extremely inactive, for example a bedridden patient.",
                "text": "Extremamente inativo"
              },
              {
                "code": "at0010",
                "description": "The individual spends most of their time sitting, for example an office worker getting little or no exercise.",
                "text": "Sedentário"
              },
              {
                "code": "at0011",
                "description": "The individual is moerately active, for example a construction worker or a person running one hour daily.",
                "text": "Moderadamente ativo"
              },
              {
                "code": "at0012",
                "description": "The individual is very active, for example a manual labourer or a person swimming two hours daily.",
                "text": "Vigorosamente ativo"
              },
              {
                "code": "at0013",
                "description": "The individual is extremely active, for example a competitive cyclist.",
                "text": "Extremamente ativo"
              }
            ],
            "node": {
              "code": "at0002",
              "description": "The category of the typical, or usual, physical activity level of an individual.",
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
            "dataType": "DV_TEXT",
            "itemName": "Barrier",
            "itemPath": "items.0.3.items.3",
            "node": {
              "code": "at0005",
              "description": "Identified factor that prevents the individual to become more physically active.",
              "text": "Há algum fator que o impeça de praticar exercício?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": "*"
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-EVALUATION.physical_activity_summary.v0]/[at0005]",
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
            "itemName": "Typical moderate exercise",
            "itemPath": "items.0.3.items.4",
            "node": {
              "code": "at0008",
              "description": "Typical number of minutes of moderate exercise.",
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
                "unit": "hora(s)/semana"
              },
            ],
            "value": {
              "unit": null,
              "value": null
            }
          },
        ],
        "node": {
          "code": "at0000",
          "description": "A summary of the typical level of physical activity undertaken by the individual.",
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
        "archetype_id": "openEHR-EHR-OBSERVATION.scoff_questionnaire.v0",
        "data_type": "Title",
        "itemName": "Eating disorder screening (SCOFF)",
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
            "dataType": "DV_ORDINAL",
            "itemName": "Do you make yourself sick because you feel uncomfortably full?",
            "itemPath": "items.0.4.items.0",
            "itemsList": [
              {
                "code": "at0005",
                "description": "*",
                "text": "Não"
              },
              {
                "code": "at0006",
                "description": "*",
                "text": "Sim"
              }
            ],
            "node": {
              "code": "at0004",
              "description": "Do you make yourself sick because you feel uncomfortably full?",
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
            "itemName": "Do you worry that you have lost control over how much you eat?",
            "itemPath": "items.0.4.items.1",
            "itemsList": [
              {
                "code": "at0008",
                "description": "*",
                "text": "Não"
              },
              {
                "code": "at0009",
                "description": "*",
                "text": "Sim"
              }
            ],
            "node": {
              "code": "at0007",
              "description": "Do you worry that you have lost control over how much you eat?",
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
            "itemName": "Have you recently lost more than one stone (14 lb, 6,5 kg) in a 3-month period?",
            "itemPath": "items.0.4.items.2",
            "itemsList": [
              {
                "code": "at0011",
                "description": "*",
                "text": "Não"
              },
              {
                "code": "at0012",
                "description": "*",
                "text": "Sim"
              }
            ],
            "node": {
              "code": "at0010",
              "description": "Have you recently lost more than one stone (14 lb, 6,5 kg) in a 3-month period?",
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
            "itemName": "Do you believe yourself to be fat when others say you are too thin?",
            "itemPath": "items.0.4.items.3",
            "itemsList": [
              {
                "code": "at0014",
                "description": "*",
                "text": "Não"
              },
              {
                "code": "at0015",
                "description": "*",
                "text": "Sim"
              }
            ],
            "node": {
              "code": "at0013",
              "description": "Do you believe yourself to be fat when others say you are too thin?",
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
            "itemName": "Would you say that food dominates your life?",
            "itemPath": "items.0.4.items.4",
            "itemsList": [
              {
                "code": "at0017",
                "description": "*",
                "text": "Não"
              },
              {
                "code": "at0018",
                "description": "*",
                "text": "Sim"
              }
            ],
            "node": {
              "code": "at0016",
              "description": "Would you say that food dominates your life?",
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
            "itemName": "Total score",
            "itemPath": "items.0.4.items.5",
            "node": {
              "code": "at0019",
              "description": "Atribui-se um ponto para cada \"Sim\"; uma pontuação maior que dois (≥2) indica um possível caso de anorexia nervosa ou bulimia nervosa.",
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
            "itemName": "Comment",
            "itemPath": "items.0.4.items.6",
            "node": {
              "code": "at0020",
              "description": "Additional narrative about the assessment of the SCOFF questionnaire, not captured in the structured elements.",
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
          "description": "Screening tool for eating disorders.",
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
        "archetype_id": "openEHR-EHR-OBSERVATION.substance_use.v0",
        "data_type": "Title",
        "itemName": "Substance Use",
        "itemPath": "items.0.5",
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
            "itemName": "Alcohol",
            "itemPath": "items.0.5.items.0",
            "itemsList": [
              {
                "code": "at0017",
                "description": "*",
                "text": "Não"
              },
              {
                "code": "at0018",
                "description": "*",
                "text": "Sim"
              }
            ],
            "node": {
              "code": "at0004",
              "description": "Identification of substance",
              "text": "Consome álcool?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.substance_use.v0]/[at0004]",
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
            "itemName": "Frequency",
            "itemPath": "items.0.5.items.1.items.0",
            "itemsList": [
              {
                "code": "at0006",
                "description": "Used every day",
                "text": "Diariamente"
              },
              {
                "code": "at0007",
                "description": "Used at least weekly",
                "text": "Semanalmente"
              },
              {
                "code": "at0008",
                "description": "Used irregularly",
                "text": "Raramente"
              },
              {
                "code": "at0009",
                "description": "Not used at all",
                "text": "Nunca"
              }
            ],
            "node": {
              "code": "at0005",
              "description": "Frequency of use of substance",
              "text": "Se sim, com que com que frequência"
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
            "dataType": "DV_ORDINAL",
            "itemName": "Alcohol",
            "itemPath": "items.0.6.items.0",
            "itemsList": [
              {
                "code": "at0017",
                "description": "*",
                "text": "Não"
              },
              {
                "code": "at0018",
                "description": "*",
                "text": "Sim"
              }
            ],
            "node": {
              "code": "at0004",
              "description": "Identification of substance",
              "text": "É fumador?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.substance_use.v0]/[at0004]",
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
            "itemName": "Quantidade",
            "itemPath": "items.0.6.items.1.items.0",
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
          "description": "Generic archetype to record the actual use or consumption of a defined substance at the present time, a specific time or over a period of time.",
          "text": "Uso de substâncias"
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
        "itemName": "Medication summary",
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
            "dataType": "DV_TEXT",
            "itemName": "Medication name",
            "itemPath": "items.0.7.items.0",
            "node": {
              "code": "at0002",
              "description": "Name of medication used.",
              "text": "Nome da medicação"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
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
            "itemName": "Therapeutic intent",
            "itemPath": "items.0.7.items.1",
            "node": {
              "code": "at0007",
              "description": "The therapeutic intent for use of the medication during this episode.",
              "text": "Para que efeito?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
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
            "itemName": "Utilização",
            "itemPath": "items.0.5.items.1.items.0",
            "itemsList": [
              {
                "code": "at0006",
                "description": "Terapia contínua de longo prazo",
                "text": "Contínua"
              },
              {
                "code": "at0007",
                "description": "Sazonal",
                "text": "Sazonal"
              },
              {
                "code": "at0008",
                "description": "Terapia de curta duração",
                "text": "Esporádica"
              }
            ],
            "node": {
              "code": "at0028",
              "description": "The overall clinical indication for the use of the medication.",
              "text": "Utilização"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": "*"
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-EVALUATION.medication_summary.v0]/[at0028]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "terminology_id": "local",
            "value": null
          }
        ],
        "node": {
          "code": "at0000",
          "description": "Summary or persistent information about all use of a single medication by an individual.",
          "text": "Sumário de medicação"
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
        "archetype_id": "openEHR-EHR-OBSERVATION.gpaq.v0",
        "data_type": "Title",
        "itemName": "Global Physical Activity Questionnaire (GPAQ)",
        "itemPath": "items.0.8",
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
            "itemName": "Sleep - hours/day?",
            "itemPath": "items.0.8.items.2",
            "node": {
              "code": "at0006",
              "description": "How much time do you sleep on a typical day?",
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
              "precision": {
                "lowerPrecision": 0,
                "upperPrecision": 0
              },
              "range": {
                "lower": 0,
                "lowerIncluded": "true",
                "upper": 24,
                "upperIncluded": "true"
              },
              "unit": "horas/dia"
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
            "itemName": "9. Travel/day",
            "itemPath": "items.0.8.items.4",
            "node": {
              "code": "at0023",
              "description": "How much time do you spend  for travel on a typical day?",
              "text": "Quanto tempo despende em viagens por dia?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.gpaq.v0]/[at0023]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "units": [
              {
                "range": {
                  "lower": 0,
                  "lowerIncluded": "true",
                  "upper": 1000,
                  "upperIncluded": "true"
                },
                "unit": "min/dia"
              },
            ],
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
            "dataType": "DV_CODED_TEXT",
            "itemName": "Second Job?",
            "itemPath": "items.0.8.items.0",
            "itemsList": [
              {
                "code": "at0031",
                "description": "*",
                "text": "Sim"
              },
              {
                "code": "at0032",
                "description": "*",
                "text": "Não"
              }
            ],
            "node": {
              "code": "at0004",
              "description": "Do you have a second job?",
              "text": "Exerce um outro trabalho renumerado?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.gpaq.v0]/[at0004]",
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
            "itemName": "Second Job - hours/week?",
            "itemPath": "items.0.8.items.1",
            "node": {
              "code": "at0005",
              "description": "In a typical week, how many hours a week do you spend at your second job?",
              "text": "Se sim, quantas horas por semana dedica ao seu outro trabalho?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.gpaq.v0]/[at0005]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "units": {
              "precision": {
                "lowerPrecision": 0,
                "upperPrecision": 0
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
            "itemName": "Housework - hours/week?",
            "itemPath": "items.0.8.items.3",
            "node": {
              "code": "at0009",
              "description": "How much time do you spend doing housework in a week?",
              "text": "Quantas horas despende por semana em tarefas domésticas?"
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
              "unit": "hora(s)/semana"
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
            "itemName": "Leisure - hours/week",
            "itemPath": "items.0.8.items.5",
            "node": {
              "code": "at0025",
              "description": "In a typical week, on how many days do you do vigorous-intensity sports, fitness or recreational activities?",
              "text": "Quantas horas despende por semana em atividades de lazer?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.gpaq.v0]/[at0025]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "units": {
              "precision": {
                "lowerPrecision": 0,
                "upperPrecision": 0
              },
              "range": {
                "lower": 0,
                "lowerIncluded": "true",
                "upper": 7,
                "upperIncluded": "true"
              },
              "unit": "hora(s)/semana"
            },
            "value": {
              "unit": null,
              "value": null
            }
          },
        ],
        "node": {
          "code": "at0000",
          "description": "WHO surveillance tool to assess levels of physical activity.",
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
        "archetype_id": "openEHR-EHR-OBSERVATION.kessler_k10_scale.v0",
        "data_type": "Title",
        "itemName": "Kessler Psychological Distress Scale (K10)",
        "itemPath": "items.0.9",
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
            "itemPath": "items.0.9.items.0",
            "itemsList": [
              {
                "code": "at0005",
                "text": "Nunca"
              },
              {
                "code": "at0006",
                "text": "Raramente"
              },
              {
                "code": "at0007",
                "text": "Algumas vezes"
              },
              {
                "code": "at0008",
                "text": "Frequentemente"
              },
              {
                "code": "at0009",
                "text": "Sempre"
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
            "itemPath": "items.0.9.items.1",
            "itemsList": [
              {
                "code": "at0016",
                "text": "Nunca"
              },
              {
                "code": "at0017",
                "text": "Raramente"
              },
              {
                "code": "at0018",
                "text": "Algumas vezes"
              },
              {
                "code": "at0019",
                "text": "Frequentemente"
              },
              {
                "code": "at0020",
                "text": "Sempre"
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
            "itemPath": "items.0.9.items.2",
            "itemsList": [
              {
                "code": "at0022",
                "text": "Nunca"
              },
              {
                "code": "at0023",
                "text": "Raramente"
              },
              {
                "code": "at0024",
                "text": "Algumas vezes"
              },
              {
                "code": "at0025",
                "text": "Frequentemente"
              },
              {
                "code": "at0026",
                "text": "Sempre"
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
            "itemPath": "items.0.9.items.3",
            "itemsList": [
              {
                "code": "at0028",
                "text": "Nunca"
              },
              {
                "code": "at0029",
                "text": "Raramente"
              },
              {
                "code": "at0030",
                "text": "Algumas vezes"
              },
              {
                "code": "at0031",
                "text": "Frequentemente"
              },
              {
                "code": "at0032",
                "text": "Sempre"
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
            "itemPath": "items.0.9.items.4",
            "itemsList": [
              {
                "code": "at0034",
                "text": "Nunca"
              },
              {
                "code": "at0035",
                "text": "Raramente"
              },
              {
                "code": "at0036",
                "text": "Algumas vezes"
              },
              {
                "code": "at0037",
                "text": "Frequentemente"
              },
              {
                "code": "at0038",
                "text": "Sempre"
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
            "itemPath": "items.0.9.items.5",
            "itemsList": [
              {
                "code": "at0040",
                "text": "Nunca"
              },
              {
                "code": "at0041",
                "text": "Raramente"
              },
              {
                "code": "at0042",
                "text": "Algumas vezes"
              },
              {
                "code": "at0043",
                "text": "Frequentemente"
              },
              {
                "code": "at0044",
                "text": "Sempre"
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
            "itemPath": "items.0.9.items.6",
            "itemsList": [
              {
                "code": "at0046",
                "text": "Nunca"
              },
              {
                "code": "at0047",
                "text": "Raramente"
              },
              {
                "code": "at0048",
                "text": "Algumas vezes"
              },
              {
                "code": "at0049",
                "text": "Frequentemente"
              },
              {
                "code": "at0050",
                "text": "Sempre"
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
            "itemPath": "items.0.9.items.7",
            "itemsList": [
              {
                "code": "at0052",
                "text": "Nunca"
              },
              {
                "code": "at0053",
                "text": "Raramente"
              },
              {
                "code": "at0054",
                "text": "Algumas vezes"
              },
              {
                "code": "at0055",
                "text": "Frequentemente"
              },
              {
                "code": "at0056",
                "text": "Sempre"
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
            "itemPath": "items.0.9.items.8",
            "itemsList": [
              {
                "code": "at0058",
                "text": "Nunca"
              },
              {
                "code": "at0059",
                "text": "Raramente"
              },
              {
                "code": "at0060",
                "text": "Algumas vezes"
              },
              {
                "code": "at0061",
                "text": "Frequentemente"
              },
              {
                "code": "at0062",
                "text": "Sempre"
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
            "itemPath": "items.0.9.items.9",
            "itemsList": [
              {
                "code": "at0064",
                "text": "Nunca"
              },
              {
                "code": "at0065",
                "text": "Raramente"
              },
              {
                "code": "at0066",
                "text": "Algumas vezes"
              },
              {
                "code": "at0067",
                "text": "Frequentemente"
              },
              {
                "code": "at0068",
                "text": "Sempre"
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
            "itemName": "Total score",
            "itemPath": "items.0.9.items.10",
            "node": {
              "code": "at0014",
              "description": "The total score on the Kessler Psychological Distress Scale (K10).",
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
            "itemName": "Comment",
            "itemPath": "items.0.9.items.11",
            "node": {
              "code": "at0069",
              "description": "Additional narrative about the overall Kessler Psychological Distress Scale not captured in other fields.",
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
          "description": "The Kessler Psychological Distress Scale (K10) is a tool for measuring anxiety and depression through a 10-item questionnaire. Each question pertains to an emotional state and each has a five-level response scale.",
          "text": "Kessler Psychological Distress Scale (K10)"
        },
        "occurrences": {
          "lowerOccurrences": 0,
          "upperOccurrences": 1
        },
        "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.kessler_k10_scale.v0]",
        "ruleMandatory": [],
        "ruleVisibility": [],
        "xsi_type": "C_ARCHETYPE_ROOT"
      },
    ]
  ],
  "node": {
    "code": "at0000",
    "description": "Interaction, contact or care event between a subject of care and healthcare provider(s).",
    "text": "Avaliação inicial"
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
  "templateName": "Avaliação inicial",
  "themeColor": "default"
}

export default json;
