"use strict";
/*********** FETCHING DE DATOS EN TS ***********/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.Type = exports.Language = exports.DefaultBranch = void 0;
var DefaultBranch;
(function (DefaultBranch) {
    DefaultBranch["Dev"] = "dev";
    DefaultBranch["Main"] = "main";
    DefaultBranch["Master"] = "master";
})(DefaultBranch || (exports.DefaultBranch = DefaultBranch = {}));
var Language;
(function (Language) {
    Language["HTML"] = "HTML";
    Language["JavaScript"] = "JavaScript";
    Language["ObjectiveC"] = "Objective-C";
    Language["TypeScript"] = "TypeScript";
})(Language || (exports.Language = Language = {}));
var Type;
(function (Type) {
    Type["Organization"] = "Organization";
    Type["User"] = "User";
})(Type || (exports.Type = Type = {}));
var Visibility;
(function (Visibility) {
    Visibility["Public"] = "public";
})(Visibility || (exports.Visibility = Visibility = {}));
const API_URL = "https://github.com/search/repositories?q=javascript"; // retorna una API con todos los repos que contengan la palabra javascript
// Lo comento porque tira error await
// const response = await fetch(API_URL)
// El error se produce porque las expresiones await solo se permiten en el nivel superior de un archivo 
// cuando el archivo es un modulo. Para solucionar esto, cambiamos la extension .ts por .mts
// if(!response.ok){
//     throw new Error('Request Failed') 
// }
// Lo comento porque tira error await
// const data = await response.json() as GitHubAPIResponse
// data.items.map(repo => {
//     return {name: repo.name, id: repo.id}
// })
// Si quiero obtener url: repo.link tengo un error porque no existe el metodo .id 
// Esto es gracias al tipo GitHubAPIResponse
