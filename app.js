const app = {
  helloApp: () => {
    return "Hello World";
  },

  stringConverter: () => {
    let goal = "(1-a,b,c),(2-a),(3-a),(4-a,b,c)";
    let target = "";

    let strArray = goal.trim().split("),");
    for (let i = 0; i < strArray.length; i++) {
      let keyValuePairArray = strArray[i].trim().split("-");
      let obj = {};
      let key = keyValuePairArray[0].trim().replace("(", "");
      let value = "{" + keyValuePairArray[1].trim() + "}";
      obj[key] = value;
      if (target.length == 0) target += JSON.stringify(obj);
      else target += "," + JSON.stringify(obj);
    }

    return target;
  },

  toggleButton: (button) => {
    const expandedValue = button.getAttribute("aria-expanded");
    const setValue = expandedValue === "true" ? "false" : "true";
    button.setAttribute("aria-expanded", setValue);
  },
};

module.exports = app;
