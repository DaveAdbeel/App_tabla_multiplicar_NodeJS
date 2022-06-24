const fs = require("fs");
const colors = require("colors");

const createFile = async (base, listar, hasta) => {
    try {
        console.clear();
        
        let salida = "";
        let consola = "";
        for (let i = 1; i <= hasta; i++) {
            consola +=
                `${base}`.cyan +
                ` ${"x".green}` +
                ` ${i} `.yellow +
                `=`.red +
                ` ${base * i}\n`.blue;
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log("		=================".bgBlack);
            console.log(`		===TABLA DEL ${base}===`.bgBlack);
            console.log("		=================".bgBlack);
            console.log(consola);
        }

        fs.writeFileSync(`./out/Tabla-${base}.txt`, salida);
        return `Tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
};

module.exports = { createFile };
