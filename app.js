const { multiplicar } = require("./helpers/multiplicar.js");
const argv = require("./config/yargs");

console.clear();

multiplicar(argv.b, argv.li, argv.h);
