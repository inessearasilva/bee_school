const dlm = {
  "description": [{
    "lifecycle_state": "Author draft",
    "original_author": [{
      "name": "GTPCE",
      "organization": "CHUP",
      "date": "current_timestamp"
    }],
    "details": [{
      "language": "pt",
      "purpose": "",
      "purposeID": "1740139"
    }]
  }],
  "input": [{
    "rm_type": "STATE_VARIABLE",
    "name": "",
    "variable": ""
  }],
  "rules": [{
    "uid": "regra1",
    "conditions": {
      "all": [{
        "fact": "items.0.0.items.0.items.0.items.1",
        "text": {
          "code": "at0004",
          "description": "Identificador oficial",
          "text": ""
        }
      }]
    },
    "event": {
      "type": "events",
      "params": {
        "message": [{
          "item": "items.0.0.items.0.items.0.items.1",
          "action": "isVisible",
          "value": {
            "code": "at0005",
            "description": "Identificador temporário",
            "text": "Temporário"
          },
        }]
      }
    }
  }]
};
export default dlm;