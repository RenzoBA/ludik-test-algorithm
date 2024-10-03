# Resolución de un Problema Algorítmico

Este algoritmo desarrollado con JavaScript filtra y lista URLs de un archivo de texto .txt que se pasa como argumento al momento de ejecutar el script. El algoritmo encuentra URLs únicas que pertenecen a dominios que contienen la palabra "shop" y que terminan en la extensión ".html".

## Requisitos

- Node.js instalado en tu máquina. Puedes descargarlo desde [nodejs.org](https://nodejs.org/). Nota: Para este desarrollo se ha utilizado Node v22.3.0.

## Cómo Probar el Algoritmo

1. **Clona o descarga el repositorio:**
   Clona o descarga el repositorio en tu máquina y asegúrate de que el archivo `url-filter.js` y `test_urls.txt` estén en la misma carpeta.

2. **Prepara el archivo de URLs:**
   Ajusta el archivo `test_urls.txt` según tu listado de URLs si decides utilizar este archivo para probar el script. Este archivo contiene las URLs que serán procesadas por el algoritmo.

3. **Ejecuta el script:**
   Abre una terminal en la carpeta donde se encuentran los archivos (`url-filter.js` y `test_urls.txt`) y ejecuta el siguiente comando: `node url-filter.js .\test_urls.txt`


4. **Resultados:**
El script mostrará en la terminal el número total de URLs que cumplen con los criterios y también listará las URLs únicas que fueron encontradas.

## Funcionamiento del Algoritmo

- El algoritmo lee el archivo línea por línea para evitar consumir demasiada memoria.
- Utiliza un `Set` para almacenar URLs únicas y eliminar duplicados.
- Filtra las URLs que contienen "shop" en el dominio y terminan con ".html".

## Contacto

Si tienes alguna pregunta o necesitas soporte adicional, contáctame a mi [LinkedIn](https://www.linkedin.com/in/renzo-bocanegra-dev/)

