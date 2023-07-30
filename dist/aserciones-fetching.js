"use strict";
/*********** FETCHING DE DATOS EN TS ***********/
const API_URL = "https://github.com/search/repositories?q=javascript"; // retorna una API con todos los repos que contengan la palabra javascript
const response = await fetch(API_URL);
// El error se produce porque las expresiones await solo se permiten en el nivel superior de un archivo 
// cuando el archivo es un modulo. Para solucionar esto, cambiamos la extension .ts por .mts
