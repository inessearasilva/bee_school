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
  "itemName": "Avaliação do ombro",
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
        "archetype_id": "openEHR-EHR-OBSERVATION.oxford_shoulder.v0",
        "data_type": "Title",
        "itemName": "Oxford Shoulder Questionnaire Score (OSS)",
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
            "dataType": "DV_ORDINAL",
            "itemName": "1 Worst pain no ombro",
            "itemPath": "items.0.0.items.0",
            "itemsList": [
              {
                "code": "at0109",
                "description": "O paciente tem experienciado dor insuportável no ombro nas últimas 4 semanas.",
                "text": "Intolerável"
              },
              {
                "code": "at0009",
                "description": "O paciente tem experienciado dor severa no ombro nas últimas 4 semanas.",
                "text": "Severa"
              },
              {
                "code": "at0010",
                "description": "O paciente tem experienciado dor moderada no ombro nas últimas 4 semanas.",
                "text": "Moderada"
              },
              {
                "code": "at0011",
                "description": "O paciente tem experienciado dor branda no ombro nas últimas 4 semanas.",
                "text": "Branda"
              },
              {
                "code": "at0012",
                "description": "O paciente não tem experienciado dor no ombro nas últimas 4 semanas.",
                "text": "Nenhuma"
              }
            ],
            "node": {
              "code": "at0008",
              "description": "Relato do paciente da pior dor no ombro experienciada nas últimas 4 semanas.",
              "text": "1 Como descreveria a pior dor que teve no seu ombro?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.oxford_shoulder.v0]/[at0008]",
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
            "itemName": "2 Trouble dressing",
            "itemPath": "items.0.0.items.1",
            "itemsList": [
              {
                "code": "at0019",
                "description": "O paciente teve dificuldade extrema em vestir-se nas últimas 4 semanas devido à dor no ombro.",
                "text": "Dificuldade extrema"
              },
              {
                "code": "at0015",
                "description": "O paciente teve sempre dificuldade em vestir-se nas últimas 4 semanas devido à dor no ombro.",
                "text": "Sempre"
              },
              {
                "code": "at0018",
                "description": "O paciente teve dificuldade moderada em vestir-se nas últimas 4 semanas devido à dor no ombro.",
                "text": "Dificuldade moderada"
              },
              {
                "code": "at0017",
                "description": "O paciente teve alguma dificuldade em vestir-se nas últimas 4 semanas devido à dor no ombro.",
                "text": "Alguma dificuldade"
              },
              {
                "code": "at0016",
                "description": "O paciente não teve dificuldade em vestir-se nas últimas 4 semanas.",
                "text": "Nenhuma dificuldade"
              }
            ],
            "node": {
              "code": "at0014",
              "description": "Relato do paciente da dificuldade em vestir-se devido à dor no ombro.",
              "text": "2 Tem tido alguma dificuldade em vestir-se por causa do seu ombro?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.oxford_shoulder.v0]/[at0014]",
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
            "itemName": "3 Vehicle use",
            "itemPath": "items.0.0.items.2",
            "itemsList": [
              {
                "code": "at0021",
                "description": "O paciente considerou impossível entrar num veículo nas últimas 4 semanas devido à dor no ombro.",
                "text": "Impossibilidade"
              },
              {
                "code": "at0022",
                "description": "O paciente teve difuldade extrema em entrar num veículo nas últimas 4 semanas devido à dor no ombro.",
                "text": "Dificuldade extrema"
              },
              {
                "code": "at0023",
                "description": "O paciente teve dificuldade moderada em entrar num veículo nas últimas 4 semanas devido à dor no ombro.",
                "text": "Dificuldade moderada"
              },
              {
                "code": "at0024",
                "description": "O paciente teve alguma dificuldade em entrar num veículo nas últimas 4 semanas devido à dor no ombro.",
                "text": "Alguma dificuldade"
              },
              {
                "code": "at0025",
                "description": "O paciente não teve dificuldade em entrar num veículo nas últimas 4 semanas.",
                "text": "Nenhuma dificuldade"
              }
            ],
            "node": {
              "code": "at0020",
              "description": "Relato do paciente da dificuldade em entrar num veículo devido à dor no ombro.",
              "text": "3 Tem tido alguma dificuldade em entrar e sair de um carro ou usar transportes públicos por causa do seu ombro?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.oxford_shoulder.v0]/[at0020]",
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
            "itemName": "4 Cutlery use",
            "itemPath": "items.0.0.items.3",
            "itemsList": [
              {
                "code": "at0027",
                "description": "O paciente considerou impossível usar a faca e o garfo nas últimas 4 semanas devido à dor no ombro.",
                "text": "Não, impossível"
              },
              {
                "code": "at0028",
                "description": "O paciente teve dificuldade extrema ao usar a faca e o garfo nas últimas 4 semanas devido à dor no ombro.",
                "text": "Com dificuldade extrema"
              },
              {
                "code": "at0029",
                "description": "O paciente teve dificuldade moderada ao usar a faca e o garfo nas últimas 4 semanas devido à dor no ombro.",
                "text": "Com dificuldade moderada"
              },
              {
                "code": "at0030",
                "description": "O paciente teve alguma dificuldade ao usar a faca e o garfo nas últimas 4 semanas devido à dor no ombro.",
                "text": "Com alguma dificuldade"
              },
              {
                "code": "at0031",
                "description": "O paciente usou a faca e o garfo com facilidade nas últimas 4 semanas.",
                "text": "Sim, facilmente"
              }
            ],
            "node": {
              "code": "at0026",
              "description": "Relato do paciente da dificuldade em usar o garfo e a faca.",
              "text": "4 Tem sido capaz de usar a faca e o garfo ao mesmo tempo?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.oxford_shoulder.v0]/[at0026]",
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
            "itemName": "5 compras para a casa",
            "itemPath": "items.0.0.items.4",
            "itemsList": [
              {
                "code": "at0033",
                "description": "O paciente considerou impossível fazer as compras para a casa devido à dor no ombro nas últimas 4 semanas.",
                "text": "Não, impossível"
              },
              {
                "code": "at0034",
                "description": "O paciente consegue fazer compras para a casa com dificuldade extrema devido à dor no ombro nas últimas 4 semanas.",
                "text": "Com dificuldade extrema"
              },
              {
                "code": "at0035",
                "description": "O paciente consegue fazer compras para a casa com dificuldade moderada devido à dor no ombro nas últimas 4 semanas.",
                "text": "Com dificuldade moderada"
              },
              {
                "code": "at0036",
                "description": "O paciente consegue fazer compras para a casa com alguma dificuldade devido à dor no ombro nas últimas 4 semanas.",
                "text": "Com alguma dificuldade"
              },
              {
                "code": "at0037",
                "description": "O paciente consegue fazer compras para a casa facilmente nas últimas 4 semanas.",
                "text": "Sim, facilmente"
              }
            ],
            "node": {
              "code": "at0032",
              "description": "Relato do paciente da dificuldade em fazer compras para a casa devido à dor no ombro nas últimas 4 semanas.",
              "text": "5 Tem conseguido fazer as compras para a casa sem ajuda?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.oxford_shoulder.v0]/[at0032]",
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
            "itemName": "6 carregar um tabuleiro",
            "itemPath": "items.0.0.items.5",
            "itemsList": [
              {
                "code": "at0039",
                "description": "O paciente considerou impossível carregar um tabuleiro, devido à dor no ombro nas últimas 4 semanas.",
                "text": "Não, impossível"
              },
              {
                "code": "at0040",
                "description": "O paciente conseguiu carregar um tabuleiro com dificuldade extrema, devido à dor no ombro nas últimas 4 semanas.",
                "text": "Com dificuldade extrema"
              },
              {
                "code": "at0041",
                "description": "O paciente conseguiu carregar um tabuleiro com dificuldade moderada, devido à dor no ombro nas últimas 4 semanas.",
                "text": "Com dificuldade moderada"
              },
              {
                "code": "at0042",
                "description": "O paciente conseguiu carregar um tabuleiro com alguma dificuldade, devido à dor no ombro nas últimas 4 semanas.",
                "text": "Com alguma dificuldade"
              },
              {
                "code": "at0043",
                "description": "O paciente conseguiu carregar um tabuleiro facilmente, devido à dor no ombro nas últimas 4 semanas.",
                "text": "Sim, facilmente"
              }
            ],
            "node": {
              "code": "at0038",
              "description": "Relato do paciente da dificuldade em carregar um tabuleiro devido à dor no ombro nas últimas 4 semanas.",
              "text": "6 Tem conseguido levar um tabuleiro com um prato de comida, atravessando uma sala (ex: do balcão para a mesa)?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.oxford_shoulder.v0]/[at0038]",
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
            "itemName": "7 Brush hair",
            "itemPath": "items.0.0.items.6",
            "itemsList": [
              {
                "code": "at0110",
                "description": "O paciente considerou impossível conseguir escovar/pentear o seu cabelo, devido à dor no ombro nas últimas 4 semanas.",
                "text": "Não, impossível"
              },
              {
                "code": "at0111",
                "description": "O paciente conseguiu escovar/pentear o seu cabelo com dificuldade extrema, devido à dor no ombro nas últimas 4 semanas.",
                "text": "Com dificuldade extrema"
              },
              {
                "code": "at0112",
                "description": "O paciente conseguiu escovar/pentear o seu cabelo com dificuldade moderada, devido à dor no ombro nas últimas 4 semanas.",
                "text": "Com dificuldade moderada"
              },
              {
                "code": "at0113",
                "description": "O paciente conseguiu escovar/pentear o seu cabelo com alguma dificuldade, devido à dor no ombro nas últimas 4 semanas.",
                "text": "Com alguma dificuldade"
              },
              {
                "code": "at0114",
                "description": "O paciente conseguiu escovar/pentear o seu cabelo easily, devido à dor no ombro nas últimas 4 semanas.",
                "text": "Sim, facilmente"
              }
            ],
            "node": {
              "code": "at0044",
              "description": "Relato do paciente da dificuldade de escovar/pentear o seu cabelo devido à dor no ombro nas últimas 4 semanas.",
              "text": "7 Tem conseguido escovar/pentear o seu cabelo com o braço afectado?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.oxford_shoulder.v0]/[at0044]",
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
            "itemName": "8 Usual pain no ombro",
            "itemPath": "items.0.0.items.7",
            "itemsList": [
              {
                "code": "at0051",
                "description": "O paciente normalmente experienciou dor severa no ombro nas últimas 4 semanas.",
                "text": "Severa"
              },
              {
                "code": "at0052",
                "description": "O paciente normalmente experienciou dor moderada no ombro nas últimas 4 semanas.",
                "text": "Moderada"
              },
              {
                "code": "at0053",
                "description": "O paciente normalmente experienciou dor branda no ombro nas últimas 4 semanas.",
                "text": "Branda"
              },
              {
                "code": "at0054",
                "description": "O paciente normalmente experienciou dor muito branda no ombro nas últimas 4 semanas.",
                "text": "Muito branda"
              },
              {
                "code": "at0055",
                "description": "O paciente normalmente não experienciou dor no ombro nas últimas 4 semanas.",
                "text": "Nenhuma"
              }
            ],
            "node": {
              "code": "at0050",
              "description": "Relato do paciente da dor experiencida normalmente no ombro nas últimas 4 semanas.",
              "text": "8 Como descreveria a dor que normalmente tem tido no seu ombro?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.oxford_shoulder.v0]/[at0050]",
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
            "itemName": "9 Hanging clothes",
            "itemPath": "items.0.0.items.8",
            "itemsList": [
              {
                "code": "at0057",
                "description": "O paciente considerou impossível pendurar a roupa, devido à dor no ombro nas últimas 4 semanas.",
                "text": "Não, impossível"
              },
              {
                "code": "at0058",
                "description": "O paciente conseguiu pendurar a roupa com dificuldade extrema, devido à dor no ombro nas últimas 4 semanas.",
                "text": "Com dificuldade extrema"
              },
              {
                "code": "at0059",
                "description": "O paciente conseguiu pendurar a roupa com dificuldade moderada, devido à dor no ombro nas últimas 4 semanas.",
                "text": "Com dificuldade moderada"
              },
              {
                "code": "at0060",
                "description": "O paciente conseguiu pendurar a roupa com alguma dificuldade, devido à dor no ombro nas últimas 4 semanas.",
                "text": "Com alguma dificuldade"
              },
              {
                "code": "at0061",
                "description": "O paciente conseguiu pendurar a roupa facilmente, devido à dor no ombro nas últimas 4 semanas.",
                "text": "Sim, facilmente"
              }
            ],
            "node": {
              "code": "at0056",
              "description": "Relato do paciente da dificuldade em pendurar a roupa no armário usando o braço afetado nas últimas 4 semanas.",
              "text": "9 Tem conseguido pendurar as suas roupas no roupeiro, usando o braço afetado?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.oxford_shoulder.v0]/[at0056]",
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
            "itemName": "10 Drying",
            "itemPath": "items.0.0.items.9",
            "itemsList": [
              {
                "code": "at0063",
                "description": "O paciente considerou impossível lavar-se debaixo de ambos os braços, devido à dor no ombro nas últimas 4 semanas.",
                "text": "Não, impossível"
              },
              {
                "code": "at0064",
                "description": "O paciente teve dificuldade extrema em lavar-se debaixo de ambos os braços, devido à dor no ombro nas últimas 4 semanas.",
                "text": "Com dificuldade extrema"
              },
              {
                "code": "at0065",
                "description": "O paciente teve dificuldade moderada em lavar-se debaixo de ambos os braços, devido à dor no ombro nas últimas 4 semanas.",
                "text": "Com dificuldade moderada"
              },
              {
                "code": "at0066",
                "description": "O paciente teve alguma dificuldade em lavar-se debaixo de ambos os braços, devido à dor no ombro nas últimas 4 semanas.",
                "text": "Com alguma dificuldade"
              },
              {
                "code": "at0067",
                "description": "O paciente limpou-se debaixo de ambos os braços facilmente..",
                "text": "Sim, facilmente"
              }
            ],
            "node": {
              "code": "at0062",
              "description": "Relato do paciente da dificuldade em lavar-se debaixo de ambos os braços nas últimas 4 semanas.",
              "text": "10 Tem sido capaz de se lavar debaixo de ambos os braços?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.oxford_shoulder.v0]/[at0062]",
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
            "itemName": "11 Interfered with work",
            "itemPath": "items.0.0.items.10",
            "itemsList": [
              {
                "code": "at0069",
                "description": "O paciente reporta que a dor no ombro interferiu totalmente com o seu trabalho nas últimas 4 semanas.",
                "text": "Totalmente"
              },
              {
                "code": "at0070",
                "description": "O paciente reporta que a dor no ombro interferiu muito com o seu trabalho nas últimas 4 semanas.",
                "text": "Muito"
              },
              {
                "code": "at0071",
                "description": "O paciente reporta que a dor no ombro interferiu moderadamente com o seu trabalho nas últimas 4 semanas.",
                "text": "Moderamente"
              },
              {
                "code": "at0072",
                "description": "O paciente reporta que a dor no ombro interferiu levemente com o seu trabalho nas últimas 4 semanas.",
                "text": "Levemente"
              },
              {
                "code": "at0073",
                "description": "O paciente reporta que a dor no ombro não interferiu com o seu trabalho nas últimas 4 semanas.",
                "text": "Nada"
              }
            ],
            "node": {
              "code": "at0068",
              "description": "Relato do paciente da interferência da dor no ombro com o seu trabalho nas últimas 4 semanas.",
              "text": "11 Até que ponto a dor no seu ombro tem interferido com o seu trabalho normal (tanto o trabalho fora de casa como o trabalho doméstico)?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.oxford_shoulder.v0]/[at0068]",
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
            "itemName": "12 Night pain",
            "itemPath": "items.0.0.items.11",
            "itemsList": [
              {
                "code": "at0075",
                "description": "O paciente tem experienciado dor no ombro todas as noites nas últimas 4 semanas.",
                "text": "Sempre"
              },
              {
                "code": "at0076",
                "description": "O paciente tem experienciado dor no ombro na maioria das noites nas últimas 4 semanas.",
                "text": "A maioria das noites"
              },
              {
                "code": "at0077",
                "description": "O paciente tem experienciado dor no ombro algumas noites nas últimas 4 semanas.",
                "text": "Algumas noites"
              },
              {
                "code": "at0078",
                "description": "O paciente experienciou dor no ombro apenas 1 ou 2 noites nas últimas 4 semanas.",
                "text": "Apenas 1 ou 2 noites"
              },
              {
                "code": "at0079",
                "description": "O paciente não tem experienciado dor no ombro à noite nas últimas 4 semanas.",
                "text": "Nunca"
              }
            ],
            "node": {
              "code": "at0074",
              "description": "Relato do paciente da dor no ombro sentida à noite nas últimas 4 semanas.",
              "text": "12 Tem sido incomodado/a pela dor no seu ombro à noite na cama?"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.oxford_shoulder.v0]/[at0074]",
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
            "itemPath": "items.0.0.items.12",
            "node": {
              "code": "at0104",
              "description": "Pontuação total das Questões 1 a 12.",
              "text": "Pontuação total"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.oxford_shoulder.v0]/[at0104]",
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
            "itemName": "Average score",
            "itemPath": "items.0.0.items.13",
            "node": {
              "code": "at0105",
              "description": "Pontuação média das Questões 1-12.",
              "text": "Pontuação média"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.oxford_shoulder.v0]/[at0105]",
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
            "itemName": "Grading",
            "itemPath": "items.0.0.items.14",
            "itemsList": [
              {
                "code": "at0116",
                "description": "Pode indicar artrite no ombro severa.",
                "text": "Severa"
              },
              {
                "code": "at0117",
                "description": "Pode indicar artrite no ombro moderada a severa.",
                "text": "Moderada a severa"
              },
              {
                "code": "at0118",
                "description": "Pode indicar artrite no ombro branda a moderada.",
                "text": "Branda a moderada"
              },
              {
                "code": "at0119",
                "description": "Pode indicar função articular satisfatória.",
                "text": "Satisfatória"
              }
            ],
            "node": {
              "code": "at0115",
              "description": "Classificação da condição do ombro para a pontuação total.",
              "text": "Classificação da condição do ombro"
            },
            "occurrences": {
              "lowerOccurrences": 0,
              "upperOccurrences": 1
            },
            "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.oxford_shoulder.v0]/[at0115]",
            "ruleMandatory": [],
            "ruleVisibility": [],
            "terminology_id": "local",
            "value": null
          }
        ],
        "node": {
          "code": "at0000",
          "description": "Oxford Shoulder Questionnaire Score.",
          "text": "Oxford Shoulder Questionnaire Score (OSS)"
        },
        "occurrences": {
          "lowerOccurrences": 0,
          "upperOccurrences": 1
        },
        "path": "[openEHR-EHR-COMPOSITION.encounter.v2]/[openEHR-EHR-OBSERVATION.oxford_shoulder.v0]",
        "ruleMandatory": [],
        "ruleVisibility": [],
        "xsi_type": "C_ARCHETYPE_ROOT"
      }
    ]
  ],
  "node": {
    "code": "at0000",
    "description": "Interação, contacto ou tratamento entre o paciente e o profissional de saúde.",
    "text": "Avaliação do ombro"
  },
  "occurrences": {
    "lowerOccurrences": 1,
    "upperOccurrences": 1
  },
  "path": "[openEHR-EHR-COMPOSITION.encounter.v2]",
  "rm_type_name": "COMPOSITION",
  "ruleMandatory": [],
  "ruleVisibility": [],
  "templateId": "7cf76c3a-573f-41cf-9ff9-788f19f7767e",
  "templateName": "Avaliação do ombro",
  "themeColor": "default"
};
export default json;