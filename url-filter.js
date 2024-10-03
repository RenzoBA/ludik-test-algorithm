const fs = require("fs");
const readline = require("readline");

// Función para leer y procesar las URLs
async function processURLs(filePath) {
  // Creamos un set para almacenar URLs únicas y evitar duplicados
  const uniqueURLs = new Set();

  // Usamos readline para procesar el archivo línea por línea (sin cargar todo a memoria)
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let urlCount = 0;

  // Recorremos el archivo línea por línea
  for await (const line of rl) {
    const url = line.trim();

    // Verificamos si la URL contiene "shop" en el dominio y termina en ".html"
    if (url.includes("shop") && url.endsWith(".html")) {
      if (!uniqueURLs.has(url)) {
        uniqueURLs.add(url);
        urlCount++;
      }
    }
  }

  // Mostramos el resultado
  console.log("Total de URLs que cumplen con los criterios:", urlCount);
  console.log("Aquí están las URLs únicas:", [...uniqueURLs]);
}

// Tomamos el nombre del archivo de los argumentos
const args = process.argv.slice(2); // Obtenemos los argumentos a partir de la posición 2
if (args.length < 1) {
  console.error(
    "Por favor, proporciona la ruta del archivo de URLs como argumento."
  );
  process.exit(1); // Salimos con código de error
}

// Llamamos a la función con la ruta del archivo proporcionada por el usuario
const filePath = args[0];
processURLs(filePath);
