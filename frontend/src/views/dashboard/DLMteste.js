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
      "purposeID": "12345"
    }]
  }],
  "input": [{
    "rm_type": "STATE_VARIABLE",
    "name": "CHUP",
    "variable": ""
  }],
  "rules": [{
    "uid": "regra1",
    "conditions": {
      "all": [{
        "fact": "items.0.0.items.0.items.0.items.1",
        "operator": "equal",
        "value": "Temporário"
      }]
    },
    "event": {
      "type": "events",
      "params": {
        "message": {
          "item": "items.0.0.items.0.items.3",
          "action": "isNotEditable",
          "value": "Sim"
        }
      }
    }
  }]
};
export default dlm;

/*
  "rules": [{
    "uid": "regra1",
    "conditions": {
      "all": [{
        "fact": "items.0.0.items.4",
        "operator": "greaterThanInclusive",
        "value": "50"
      }]
    },
    "event": {
      "type": "events",
      "params": {
        "message": [{
          "item": "items.0.1.items.7",
          "action": "isVisible",
          "value": "Sim"
        }]
      }
    }
  }]
};
export default dlm;*/