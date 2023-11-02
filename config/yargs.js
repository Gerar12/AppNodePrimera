const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description: "Esto dice la tabla a procesar",
  })
  .option("l", {
    alias: "li",
    type: "boolean",
    default: false,
    description: "Esto lista la tabla de multiplicar",
  })
  .option("h", {
    alias: "has",
    type: "number",
    default: 10,
    description: "Esto es asta donde quieres tu tabla",
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw new Error(
        `El argumento '--base' debe ser un número, pero se recibió '${argv.b}'`
      );
    }
    return true;
  }).argv;

module.exports = argv;
