const somesh = require("./components/constituents_json.js") 
const symbols = somesh.map((item) => {
    return item.Symbol
  })
  console.log(symbols[0])