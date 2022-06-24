const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        default: 5,
        describe: "Es la base de la tabla de multiplicacion",
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        demandOption: false,
        default: false,
        describe: "Muestra la tabla de multiplicacion creada en tu terminal",
    }).option("h", {
        alias: "hasta",
        type: "number",
        demandOption: false,
        default: 10,
        describe: "El limite de nuestra tabla de multiplicar",
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw new Error("Ingrese una base valida para realizar");
        }

        if (isNaN(argv.l)) {
            throw new Error("Ingrese un argumento valido para ingresar si quiere ver la lista o no");
        }
        if (isNaN(argv.h)) {
            throw new Error("Ingrese una limite valido para realizar");
        }


        return true;
    }).argv;

module.exports = argv;
