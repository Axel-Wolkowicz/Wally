import {generarEspacio} from "./busqueda.js";
let lista = generarEspacio(100);
console.log (lista);
for (let i = 0; i < lista.length; i++){
    let posicionLista = lista [i];
    if (posicionLista === "Wally"){
        console.log ("Wally esta en la posición " + i);
    }
}