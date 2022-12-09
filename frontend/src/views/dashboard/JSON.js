const json = {
  "Functions": [],
  "InternalFunctions": [],
  "Refset": [],
  "TaskEditable": [
  "All"
  ],
  "TaskInReport": [
  "All"
  ],
  "TaskVisible": [
  "All"
  ],
  "archetypeId": "openEHR-EHR-COMPOSITION.report-procedure.v1",
  "itemName": "Triagem de MCD",
  "itemPath": "",
  "items": [
  [
  {
  "Functions": [],
  "InternalFunctions": [],
  "Refset": [],
  "TaskEditable": [
  "All"
  ],
  "TaskInReport": [
  "All"
  ],
  "TaskVisible": [
  "All"
  ],
  "archetype_id": "openEHR-EHR-SECTION.adhoc.v1",
  "data_type": "Title",
  "itemName": "Triagem",
  "itemPath": "items.0.0",
  "items": [
  {
  "Functions": [],
 "InternalFunctions": [],
  "Refset": [],
 "TaskEditable": [
  "All"
  ],
 "TaskInReport": [
  "All"
  ],
 "TaskVisible": [
  "All"
  ],
 "archetype_id": "openEHR-EHR-ACTION.imaging_exam.v0",
  "data_type": "Title",
  "itemName": "Validação do pedido",
  "itemPath": "items.0.0.items.0",
  "items": [
  {
  "Functions": [],
 "InternalFunctions": [],
 "Refset": [],
 "TaskEditable": [],
 "TaskInReport": [],
 "TaskVisible": [],
 "dataType": "DV_CODED_TEXT",
  "itemName": "Planeada",
  "itemPath": "items.0.0.items.0.items.0",
  "itemsList": [
  {
  "code": "at0003",
  "description": "O exame de imagem foi triado",
  "text": "Validado"
}
],
"node": {
"code": 526,
"text": "Planeada"
},
"occurrences": {
"lowerOccurrences": 0,
"upperOccurrences": 1
},
"path": "[openEHR-EHR-COMPOSITION.report-procedure.v1]/[openEHREHR-SECTION.adhoc.v1]/[openEHR-EHR-ACTION.imaging_exam.v0]/[526]",
"ruleMandatory": [],
"ruleVisibility": [],
"terminology": "local",
"terminology_id": "local",
"value": null
},
{
"Functions": [],
"InternalFunctions": [],
"Refset": [],
"TaskEditable": [],
"TaskInReport": [],
"TaskVisible": [],
"dataType": "DV_CODED_TEXT",
"itemName": "Exame",
"itemPath": "items.0.0.items.0.items.1",
"node": {
"code": "at0017",
"description": "Nome do exame a ser realizado",
"text": "Exame"
},
"occurrences": {
"lowerOccurrences": 0,
"upperOccurrences": 1
},
"path": "[openEHR-EHR-COMPOSITION.report-procedure.v1]/[openEHREHR-SECTION.adhoc.v1]/[openEHR-EHR-ACTION.imaging_exam.v0]/[at0017]",
"ruleMandatory": [],
"ruleVisibility": [],
"terminology": "external",
"terminology_id": "external",
"uri": "$Getvariable",
"value": null
},
{
"Functions": [],
"InternalFunctions": [],
"Refset": [],
"TaskEditable": [
"All"
],
"TaskInReport": [
"All"
],
"TaskVisible": [
"All"
],
"constraints": [
{
"default_dataType": "DV_CODED_TEXT",
"default_value": {},
"field": "items[at0018]",
"path": "[openEHR-EHR-COMPOSITION.reportprocedure.v1]/[openEHR-EHR-SECTION.adhoc.v1]/[openEHR-EHRACTION.imaging_exam.v0]/[at0018]",
"rm_attribute_name": "value"
}
],
"dataType": "DV_CODED_TEXT",
"itemName": "Decisão",
"itemPath": "items.0.0.items.0.items.2",
"itemsList": [
{
"code": "local_terms::2",
"text": "Executar no CHUPorto"
},
{
"code": "local_terms::3",
"text": "Executar no exterior"
},
{
"code": "local_terms::4",
"text": "Executar no CHUPorto/Exterior"
},
{
"code": "local_terms::5",
"text": "Recusado"
}
],
"node": {
"code": "at0018",
"description": "Avaliação da adequabilidade do pedido de exame",
"text": "Decisão"
},
"occurrences": {
"lowerOccurrences": 1,
"upperOccurrences": 1
},
"path": "[openEHR-EHR-COMPOSITION.report-procedure.v1]/[openEHREHR-SECTION.adhoc.v1]/[openEHR-EHR-ACTION.imaging_exam.v0]/[at0018]",
"ruleMandatory": [],
"ruleVisibility": [],
"terminology": "local_terms",
"terminology_id": "local_terms",
"value": {
"code": "local_terms::2",
"text": "Executar no CHUPorto"
}
},
{
"Functions": [],
"InternalFunctions": [],
"Refset": [],
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
"itemName": "Motivo",
"itemPath": "items.0.0.items.0.items.3",
"node": {
"code": "at0019",
"description": "Descrição dos argumentos que sustentam a tomada de decisão",
"text": "Motivo"
},
"occurrences": {
"lowerOccurrences": 0,
"upperOccurrences": 1
},
"path": "[openEHR-EHR-COMPOSITION.report-procedure.v1]/[openEHREHR-SECTION.adhoc.v1]/[openEHR-EHR-ACTION.imaging_exam.v0]/[at0019]",
"ruleMandatory": [],
"ruleVisibility": [],
"value": null
},
{
"Functions": [],
"InternalFunctions": [],
"Refset": [],
"TaskEditable": [
"All"
],
"TaskInReport": [
"All"
],
"TaskVisible": [
"All"
],
"archetype_id": "openEHR-EHR-CLUSTER.triage_priority-CHUP.v0",
"data_type": "Title",
"itemName": "Priorização do Exame",
"itemPath": "items.0.0.items.0.items.4",
"items": [
{
"Functions": [],
"InternalFunctions": [],
"Refset": [],
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
"itemName": "Prioridade",
"itemPath": "items.0.0.items.0.items.4.items.0",
"itemsList": [
{
"code": "SNOMED::103391001",
"text": "Urgente"
},
{
"code": "SNOMED::260528009",
"text": "Média"
},
{
"code": "SNOMED::394848005",
"text": "Sem Prioridade"
}
],
"node": {
"code": "at0001",
"description": "Categoria de prioridade da triagem.",
"text": "Prioridade"
},
"occurrences": {
"lowerOccurrences": 0,
"upperOccurrences": 1
},
"path": "[openEHR-EHR-COMPOSITION.reportprocedure.v1]/[openEHR-EHR-SECTION.adhoc.v1]/[openEHR-EHRACTION.imaging_exam.v0]/[openEHR-EHR-CLUSTER.triage_priority-CHUP.v0]/[at0001]",
"ruleMandatory": [],
"ruleVisibility": [],
"terminology": "SNOMED",
"terminology_id": "SNOMED",
"value": null
},
{
"Functions": [],
"InternalFunctions": [],
"Refset": [],
"TaskEditable": [
"All"
],
"TaskInReport": [
"All"
],
"TaskVisible": [
"All"
],
"dataType": "DV_DATE",
"itemName": "Meta",
"itemPath": "items.0.0.items.0.items.4.items.1",
"node": {
"code": "at0.1",
"description": "Período dentro do qual o exame deverá ser realizado",
"text": "Meta"
},
"occurrences": {
"lowerOccurrences": 0,
"upperOccurrences": 1
},
"path": "[openEHR-EHR-COMPOSITION.reportprocedure.v1]/[openEHR-EHR-SECTION.adhoc.v1]/[openEHR-EHRACTION.imaging_exam.v0]/[openEHR-EHR-CLUSTER.triage_priority-CHUP.v0]/[at0.1]",
"ruleMandatory": [],
"ruleVisibility": [],
"value": "2022-12-02"
}
],
"node": {
"code": "at0000.1",
"text": "Priorização do Exame"
},
"occurrences": {
"lowerOccurrences": 0,
"upperOccurrences": 1
},
"path": "[openEHR-EHR-COMPOSITION.report-procedure.v1]/[openEHREHR-SECTION.adhoc.v1]/[openEHR-EHR-ACTION.imaging_exam.v0]/[openEHR-EHRCLUSTER.triage_priority-CHUP.v0]",
"ruleMandatory": [],
"ruleVisibility": []
},
{
"Functions": [],
"InternalFunctions": [],
"Refset": [],
"TaskEditable": [
"All"
],
"TaskInReport": [
"All"
],
"TaskVisible": [],
"dataType": "DV_TEXT",
"itemName": "Comentários",
"itemPath": "items.0.0.items.0.items.5",
"node": {
"code": "at0020",
"description": "Narrativa adicional sobre a actividade ou etapa do percurso não registada noutros campos.",
"text": "Comentários"
},
"occurrences": {
"lowerOccurrences": 0,
"upperOccurrences": 1
},
"path": "[openEHR-EHR-COMPOSITION.report-procedure.v1]/[openEHREHR-SECTION.adhoc.v1]/[openEHR-EHR-ACTION.imaging_exam.v0]/[at0020]",
"ruleMandatory": [],
"ruleVisibility": [],
"value": null
}
],
"node": {
"code": "at0000",
"description": "Avaliação do pedido",
"text": "Validação do pedido"
},
"occurrences": {
"lowerOccurrences": 0,
"upperOccurrences": 1
},
"path": "[openEHR-EHR-COMPOSITION.report-procedure.v1]/[openEHR-EHRSECTION.adhoc.v1]/[openEHR-EHR-ACTION.imaging_exam.v0]",
"ruleMandatory": [],
"ruleVisibility": [],
"xsi_type": "C_ARCHETYPE_ROOT"
}
],
"node": {
"code": "at0000",
"description": "Triagem de MCD",
"text": "Triagem"
},
"occurrences": {
"lowerOccurrences": 0,
"upperOccurrences": 1
},
"path": "[openEHR-EHR-COMPOSITION.report-procedure.v1]/[openEHR-EHRSECTION.adhoc.v1]",
"ruleMandatory": [],
"ruleVisibility": [],
"xsi_type": "C_ARCHETYPE_ROOT"
}
]
],
"node": {
"code": "at0000.1",
"description": "Documento utilizado para transmitir informações a outras pessoas sobre qualquer procedimento ou operação realizada.",
"text": "Triagem de MCD"
},
"occurrences": {
"lowerOccurrences": 1,
"upperOccurrences": 1
},
"path": "[openEHR-EHR-COMPOSITION.report-procedure.v1]",
"rm_type_name": "COMPOSITION",
"ruleMandatory": [],
"ruleVisibility": [],
"templateId": "3e63b514-7115-4ac4-bf18-186715360428",
"templateName": "MCD:Triagem V1",
"terminology": "",
"themeColor": "default"
};
export default json;