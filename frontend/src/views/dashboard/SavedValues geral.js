import objPath from "object-path";

const replaceValuesJDT = (jdt, composition) => {
    if (!composition) {
      // handle the case where composition is undefined or null
      return jdt;
    }
  
    // make a copy of the jdt
    let newJDT = { ...jdt };
  
    // regular expression to remove everything in the composition except the itemPath
    const regex = /((?!value|start|end|date|time|unit).)*/g;
  
    // get all itemPaths from the composition using the regular expression
    const compositionKeys = Object.keys(composition).map((key) =>
      key.match(regex)[0].slice(0, -1)
    );
  
    // array to hold the values of selected options
    const selectedOptionValuesSet1 = [];
    const selectedOptionValuesSet2 = [];
  
    // iterate through each itemPath in the composition
    for (let index in compositionKeys) {
      let itemPath = compositionKeys[index];
  
      // get the corresponding item in the JDT
      let obj = objPath.get(newJDT, itemPath);
  
      // if the item is found, replace its value with the value from the composition
      if (obj !== undefined) {
        switch (obj.dataType) {
          case "DV_DATE_TIME":
            obj.value.date = composition[itemPath.concat(".value.date")];
            obj.value.time = composition[itemPath.concat(".value.time")];
            break;
          case "DV_DURATION":
          case "DV_QUANTITY":
            obj.value.value = composition[itemPath.concat(".value.value")];
            obj.value.unit = composition[itemPath.concat(".value.unit")];
            break;
          case "DV_INTERVAL<DV_DATE>":
          case "DV_INTERVAL<DV_COUNT>":
          case "DV_INTERVAL<DV_TIME>":
            obj.value.start = composition[itemPath.concat(".value.start")];
            obj.value.end = composition[itemPath.concat(".value.end")];
            break;
          case "DV_INTERVAL<DV_DATE_TIME>":
            obj.value.date.start = composition[itemPath.concat(".value.date.start")];
            obj.value.date.end = composition[itemPath.concat(".value.date.end")];
            obj.value.time.start = composition[itemPath.concat(".value.time.start")];
            obj.value.time.end = composition[itemPath.concat(".value.time.end")];
            break;
          case "DV_INTERVAL<DV_QUANTITY>":
            obj.value.value.start = composition[itemPath.concat(".value.value.start")];
            obj.value.value.end = composition[itemPath.concat(".value.value.end")];
            obj.value.unit = composition[itemPath.concat(".value.unit")];
            break;
          default:
            // for all other data types, replace the value property
            if (composition[itemPath.concat(".value")]) {
                obj.value = composition[itemPath.concat(".value")];
      
                // if the value property is a number, add it to the selectedOptionValues array
                if (obj.value && typeof obj.value.value === "number") {
                  if (obj.itemPath.startsWith("items.0.6")) {
                    selectedOptionValuesSet1.push(obj.value.value);
                  } else if (obj.itemPath.startsWith("items.0.7")) {
                    selectedOptionValuesSet2.push(obj.value.value);
                  }
                }
            }
        }
      }
    }
  
    // calculate the total score by summing the values of selected options 
    const totalScoreSet1 = selectedOptionValuesSet1.reduce((acc, curr) => acc + curr, 0);
    
    if (totalScoreSet1 > 1) {
      objPath.set(newJDT, "items.0.6.items.6.value", 'Possível caso de anorexia nervosa ou bulimia nervosa.');
    } else if ( (selectedOptionValuesSet1.length === 4 && totalScoreSet1 === 0 ) || (selectedOptionValuesSet1.length === 5 && totalScoreSet1 < 2 ) ){
      objPath.set(newJDT, "items.0.6.items.6.value", 'Risco relativamente baixo de ter um transtorno alimentar.');
    } else {
      objPath.set(newJDT, "items.0.6.items.6.value", null);
    }
  
    // calculate the total score by summing the values of selected options
    const totalScoreSet2 = selectedOptionValuesSet2.reduce((acc, curr) => acc + curr, 0);

    if (totalScoreSet2 > 9 && totalScoreSet2 < 51) {
      if (totalScoreSet2 > 0 && totalScoreSet2 < 20 ) {
        objPath.set(newJDT, "items.0.7.items.11.value", 'Probabilidade de estar bem mentalmente.');
      } else if ( totalScoreSet2 > 19 && totalScoreSet2 < 25 ){
        objPath.set(newJDT, "items.0.7.items.11.value", 'Probabilidade de ter um transtorno mental leve.');
      } else if ( totalScoreSet2 > 24 && totalScoreSet2 < 30 ){
        objPath.set(newJDT, "items.0.7.items.11.value", 'Probabilidade de ter um transtorno mental moderado.');
      } else if ( totalScoreSet2 > 29 ){
        objPath.set(newJDT, "items.0.7.items.11.value", 'Probabilidade de ter um transtorno mental grave.');
      } else {
        objPath.set(newJDT, "items.0.7.items.11.value", null);
      } 
    } else {
    objPath.set(newJDT, "items.0.7.items.11.value", null);
    }

    // update the Total Score item in the JDT with the calculated value
    objPath.set(newJDT, "items.0.6.items.5.value", totalScoreSet1);
  
    // update the Total Score item in the JDT with the calculated value
    objPath.set(newJDT, "items.0.7.items.10.value", totalScoreSet2);

    return newJDT;
  };

  export { replaceValuesJDT };
  