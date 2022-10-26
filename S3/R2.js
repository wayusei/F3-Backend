let fs = require("fs");

// Función de utilidad para crear una promesa por conseguir el contenido de un
// archivo de forma asíncrona.
let obtenerArchivo = function (archivo) {
  return new Promise(function (resolve, reject) {
    fs.readFile(__dirname + "/" + archivo, "utf-8", function (err, datos) {
      if (err) {
        return reject(err);
      }

      datos = datos.replace(/\r?\n/g, "");

      resolve(datos);
    });
  });
};

console.log("Promesas inicializadas.");

let files = Promise.all([
  obtenerArchivo("archivo1.txt"),
  obtenerArchivo("archivo2.txt"),
  obtenerArchivo("archivo3.txt"),
]);

// Mostrar los archivos que fueron leídos exitosamente
files.then(function (collection) {
  console.log("Promesas completadas:");

  collection.forEach(function (datos, i) {
    console.log("Archivo " + (i + 1) + ":", datos);
  });
});