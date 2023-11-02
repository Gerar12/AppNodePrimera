const fs = require("fs").promises;
const color = require("colors/safe");

const multiplicar = async (base = 9, li = false, h = 10) => {
  let consola,
    salida = "";

  for (let i = 1; i <= h; i++) {
    consola += `   ${color.gray(base)} ${color.red("x")} ${i} = ${color.gray(
      base * i
    )} \n`;
    salida += `  ${base} x ${i} = ${base * i} \n`;
  }

  try {
    await fs.writeFile(`./salida/tabla-${base}.txt`, salida);
    console.log(`El archivo table-${base}.txt se creo correctamente`);
  } catch (error) {
    console.log(`Hubo un error en la creacion del archivo ${error}`);
  }

  if (li) {
    console.log(color.blue("================="));
    console.log(color.green(`   Table the ${color.red(base)}   `));
    console.log(color.yellow("================="));
    console.log(consola);
  }
};

module.exports = { multiplicar };
