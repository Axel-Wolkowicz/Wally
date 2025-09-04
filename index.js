import {generarEspacio} from "./busqueda.js";
let lista = generarEspacio(100);
console.log (lista);
for (let i = 0; i < lista.length; i++){
    let nombre = lista [i];
    if (nombre === "Wally"){
        console.log ("Wally esta en la posición " + i);
    }
}
for (let i=0; i < lista.length; i++){
    let primeraLetra = lista[i].charAt(0);
    if (primeraLetra === "W"){
        console.log ("Arranca por W el nombre en la posición " + i);
    }
}
for (let i = 0; i < lista.length; i++){
    let dobleEle = "ll";
    if (lista[i].includes(dobleEle)){
        console.log("Doble L en la posición " + i);
    }
}
