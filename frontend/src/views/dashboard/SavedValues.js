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
    const selectedOptionValues = [];
  
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
            obj.value = composition[itemPath.concat(".value")];
            
            // if the value property is a number, add it to the selectedOptionValues array
            if (typeof obj.value === "number") {
              selectedOptionValues.push(obj.value);
            }
        }
      }
    }
  
    // calculate the total score by summing the values of selected options
    const totalScore = selectedOptionValues.reduce((acc, curr) => acc + curr, 0);
  
    // update the Total Score item in the JDT with the calculated value
    objPath.set(newJDT, "items.0.0.items.12.value", totalScore);
  
    return newJDT;
  };
  
  export { replaceValuesJDT };
  