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
              "itemName": "1 Worst pain in shoulder",
              "itemPath": "items.0.0.items.0",
              "itemsList": [
                {
                  "code": "at0109",
                  "description": "The patient has experienced unbearable pain in shoulder during past 4 weeks.",
                  "text": "Intolerável"
                },
                {
                  "code": "at0009",
                  "description": "The patient has experienced severe pain in shoulder during past 4 weeks.",
                  "text": "Severa"
                },
                {
                  "code": "at0010",
                  "description": "The patient has experienced moderate pain in shoulder during past 4 weeks.",
                  "text": "Moderada"
                },
                {
                  "code": "at0011",
                  "description": "The patient has experienced mild pain in shoulder during past 4 weeks.",
                  "text": "Branda"
                },
                {
                  "code": "at0012",
                  "description": "The patient has experienced no pain in shoulder during past 4 weeks.",
                  "text": "Nenhuma"
                }
              ],
              "node": {
                "code": "at0008",
                "description": "Patient-reported extent of worst pain in shoulder during past 4 weeks.",
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
                  "description": "The patient has no extreme difficulty dressing in the last 4 weeks because of pain in the shoulder.",
                  "text": "Dificuldade extrema"
                },
                {
                  "code": "at0015",
                  "description": "The patient has trouble dressing all of the time in the last 4 weeks because of pain in the shoulder.",
                  "text": "Sempre"
                },
                {
                  "code": "at0018",
                  "description": "The patient has no moderate trouble dressing in the last 4 weeks because of pain in the shoulder.",
                  "text": "Dificuldade moderada"
                },
                {
                  "code": "at0017",
                  "description": "The patient has no little trouble dressing in the last 4 weeks because of pain in the shoulder.",
                  "text": "Alguma dificuldade"
                },
                {
                  "code": "at0016",
                  "description": "The patient has no trouble dressing in the last 4 weeks because of pain in the shoulder.",
                  "text": "Nenhuma dificuldade"
                }
              ],
              "node": {
                "code": "at0014",
                "description": "Patient-reported trouble dressing because of pain shoulder.",
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
                  "description": "The patient found it impossible to get into a vehicle during the past 4 weeks due to pain in shoulder.",
                  "text": "Impossibilidade"
                },
                {
                  "code": "at0022",
                  "description": "The patient has extreme difficulty at all getting into a vehicle during the past 4 weeks due to pain in shoulder.",
                  "text": "Dificuldade extrema"
                },
                {
                  "code": "at0023",
                  "description": "The patient has moderate trouble at all getting into a vehicle during the past 4 weeks due to pain in shoulder.",
                  "text": "Dificuldade moderada"
                },
                {
                  "code": "at0024",
                  "description": "The patient has very little trouble at all getting into a vehicle during the past 4 weeks due to pain in shoulder.",
                  "text": "Alguma dificuldade"
                },
                {
                  "code": "at0025",
                  "description": "The patient has no trouble at all getting into a vehicle during the past 4 weeks due to pain in shoulder.",
                  "text": "Nenhuma dificuldade"
                }
              ],
              "node": {
                "code": "at0020",
                "description": "Patient-reported extent to which they are able to access vehicles due to pain in their shoulder.",
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
                  "description": "The patient found it impossible to use a knife and fork during past 4 weeks because of pain in the shoulder.",
                  "text": "Não, impossível"
                },
                {
                  "code": "at0028",
                  "description": "The patient has extreme difficulty using a knife and fork during past 4 weeks because of pain in the shoulder.",
                  "text": "Com dificuldade extrema"
                },
                {
                  "code": "at0029",
                  "description": "The patient has moderate difficulty using a knife and fork during past 4 weeks because of pain in the shoulder.",
                  "text": "Com dificuldade moderada"
                },
                {
                  "code": "at0030",
                  "description": "The patient has little difficulty using a knife and fork during the past 4 weeks because of pain in the shoulder.",
                  "text": "Com alguma dificuldade"
                },
                {
                  "code": "at0031",
                  "description": "The patient found it easy to use a knife and fork during the past 4 weeks because of pain in the shoulder..",
                  "text": "Sim, facilmente"
                }
              ],
              "node": {
                "code": "at0026",
                "description": "Patient-reported extent to which they pain in shoulder during past 4 weeks when using a knife and fork.",
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
              "itemName": "5 Household shopping",
              "itemPath": "items.0.0.items.4",
              "itemsList": [
                {
                  "code": "at0033",
                  "description": "The patient found it impossible to complete household shopping because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Não, impossível"
                },
                {
                  "code": "at0034",
                  "description": "The patient can complete household shopping with extreme difficulty because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Com dificuldade extrema"
                },
                {
                  "code": "at0035",
                  "description": "The patient can complete household shopping with moderate difficulty because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Com dificuldade moderada"
                },
                {
                  "code": "at0036",
                  "description": "The patient can complete household shopping with little difficulty because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Com alguma dificuldade"
                },
                {
                  "code": "at0037",
                  "description": "The patient can complete household shopping easily because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Sim, facilmente"
                }
              ],
              "node": {
                "code": "at0032",
                "description": "Patient-reported extent to which they complete household shopping because of pain in shoulder in past 4 weeks.",
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
              "itemName": "6 Carry a tray",
              "itemPath": "items.0.0.items.5",
              "itemsList": [
                {
                  "code": "at0039",
                  "description": "The patient found it impossible to complete carry a tray, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Não, impossível"
                },
                {
                  "code": "at0040",
                  "description": "The patient could carry a tray with extreme difficulty, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Com dificuldade extrema"
                },
                {
                  "code": "at0041",
                  "description": "The patient could carry a tray with moderate difficulty, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Com dificuldade moderada"
                },
                {
                  "code": "at0042",
                  "description": "The patient could carry a tray with little difficulty, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Com alguma dificuldade"
                },
                {
                  "code": "at0043",
                  "description": "The patient could carry a tray with easily, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Sim, facilmente"
                }
              ],
              "node": {
                "code": "at0038",
                "description": "Patient-reported extent to which they were able to carry a tray because of pain in the shoulder in past 4 weeks.",
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
                  "description": "The patient found it impossible to complete carry a tray, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Não, impossível"
                },
                {
                  "code": "at0111",
                  "description": "The patient could brush/comb their hair with extreme difficulty, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Com dificuldade extrema"
                },
                {
                  "code": "at0112",
                  "description": "The patient could brush/comb their hair with moderate difficulty, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Com dificuldade moderada"
                },
                {
                  "code": "at0113",
                  "description": "The patient could brush/comb their hair with little difficulty, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Com alguma dificuldade"
                },
                {
                  "code": "at0114",
                  "description": "The patient could brush/comb their hair easily, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Sim, facilmente"
                }
              ],
              "node": {
                "code": "at0044",
                "description": "Patient-reported extent to which they could brush/comb their hair due to pain in shoulder during past 4 weeks.",
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
              "itemName": "8 Usual pain in shoulder",
              "itemPath": "items.0.0.items.7",
              "itemsList": [
                {
                  "code": "at0051",
                  "description": "The patient usually experienced severe pain in their shoulder over the last 4 weeks.",
                  "text": "Severa"
                },
                {
                  "code": "at0052",
                  "description": "The patient usually experienced moderate pain in their shoulder over the last 4 weeks.",
                  "text": "Moderada"
                },
                {
                  "code": "at0053",
                  "description": "The patient usually experienced mild pain in their shoulder over the last 4 weeks.",
                  "text": "Branda"
                },
                {
                  "code": "at0054",
                  "description": "The patient usually experienced very mild pain in their shoulder over the last 4 weeks.",
                  "text": "Muito branda"
                },
                {
                  "code": "at0055",
                  "description": "The patient usually experienced no pain in their shoulder over the last 4 weeks.",
                  "text": "Nenhuma"
                }
              ],
              "node": {
                "code": "at0050",
                "description": "Patient-reported extent to which they usually experience pain in shoulder during past 4 weeks.",
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
                  "description": "The patient found it impossible to hang clothes, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Não, impossível"
                },
                {
                  "code": "at0058",
                  "description": "The patient could hang clothes with great difficulty, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Com dificuldade extrema"
                },
                {
                  "code": "at0059",
                  "description": "The patient could hang clothes with moderate difficulty, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Com dificuldade moderada"
                },
                {
                  "code": "at0060",
                  "description": "The patient could hang clothes with little difficulty, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Com alguma dificuldade"
                },
                {
                  "code": "at0061",
                  "description": "The patient could hang clothes easily, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Sim, facilmente"
                }
              ],
              "node": {
                "code": "at0056",
                "description": "Patient-reported extent to which they could hang clothes in a wardrobe using the effected arm during past 4 weeks.",
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
                  "description": "The patient found it impossible to dry under both arms, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Não, impossível"
                },
                {
                  "code": "at0064",
                  "description": "The patient found it extremely difficult to dry under both arms, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Com dificuldade extrema"
                },
                {
                  "code": "at0065",
                  "description": "The patient found it moderately difficult to dry under both arms, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Com dificuldade moderada"
                },
                {
                  "code": "at0066",
                  "description": "The patient found it a little difficult to dry under both arms, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Com alguma dificuldade"
                },
                {
                  "code": "at0067",
                  "description": "The patient found it easy to dry under both arms, because of shoulder pain all of the time during past 4 weeks.",
                  "text": "Sim, facilmente"
                }
              ],
              "node": {
                "code": "at0062",
                "description": "Patient-reported extent to which they could dry under both arms during past 4 weeks.",
                "text": "10 Tem sido capaz de se lavar e limpar debaixo de ambos os braços?"
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
                  "description": "The patient reports that the pain in shoulder has interfered totally with their work in last 4 weeks.",
                  "text": "Totalmente"
                },
                {
                  "code": "at0070",
                  "description": "The patient reports that the pain in shoulder has interfered greatly with their work in last 4 weeks.",
                  "text": "Muito"
                },
                {
                  "code": "at0071",
                  "description": "The patient reports that the pain in shoulder has interfered moderately with their work in last 4 weeks.",
                  "text": "Moderamente"
                },
                {
                  "code": "at0072",
                  "description": "The patient reports that the pain in shoulder has interfered a little bit with their work in last 4 weeks.",
                  "text": "Levemente"
                },
                {
                  "code": "at0073",
                  "description": "The patient reports that the pain in shoulder has not interfered with their work in last 4 weeks.",
                  "text": "Nada"
                }
              ],
              "node": {
                "code": "at0068",
                "description": "Patient-reported extent to which pain in shoulder has interfered with work during past 4 weeks.",
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
                  "description": "The patient has experienced shoulder pain every night in past 4 weeks.",
                  "text": "Sempre"
                },
                {
                  "code": "at0076",
                  "description": "The patient has experienced shoulder pain most nights in past 4 weeks.",
                  "text": "A maioria das noites"
                },
                {
                  "code": "at0077",
                  "description": "The patient has experienced shoulder pain some nights in past 4 weeks.",
                  "text": "Algumas noites"
                },
                {
                  "code": "at0078",
                  "description": "The patient has experienced shoulder pain only 1 or 2 nights in past 4 weeks.",
                  "text": "Apenas 1 ou 2 noites"
                },
                {
                  "code": "at0079",
                  "description": "The patient has experienced shoulder pain no nights in past 4 weeks.",
                  "text": "Nunca"
                }
              ],
              "node": {
                "code": "at0074",
                "description": "Patient-reported extent of pain in shoulder at night during past 4 weeks.",
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
                "description": "Total score from Questions 1 to 12.",
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
                "description": "Average score from Questions 1-12.",
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
                  "description": "May indicate severe shoulder arthritis.",
                  "text": "Severa"
                },
                {
                  "code": "at0117",
                  "description": "May indicate moderate to severe shoulder arthritis.",
                  "text": "Moderada a severa"
                },
                {
                  "code": "at0118",
                  "description": "May indicate mild to moderate shoulder arthritis.",
                  "text": "Branda a moderada"
                },
                {
                  "code": "at0119",
                  "description": "May indicate satisfactory joint function.",
                  "text": "Satisfatória"
                }
              ],
              "node": {
                "code": "at0115",
                "description": "Grading system for total score.",
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
      "description": "Interaction, contact or care event between a subject of care and healthcare provider(s).",
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