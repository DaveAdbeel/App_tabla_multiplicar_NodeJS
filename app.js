const { createFile } = require("./helpers/multiply");
const argv = require("./config/yargsConf");
const colors = require("colors");

createFile(argv.b, argv.l, argv.h)
    .then((TableBase) => console.log(`[+] `.green + `${TableBase}`.rainbow + ` creada correctamente`.green))
    .catch((err) => console.log(`[-] `.red + `${err}`.yellow));
