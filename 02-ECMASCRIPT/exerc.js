let boole = false;
boole = boole ?? "reasigna el valor por esta cadena"

console.log("boole:", boole);

let cero = 0;
cero = cero ?? "reasigno si es null o undefined"
console.log("cero:", cero);

cero = cero || "reasigno si es null o undefined"
console.log("cero:", cero);

let nula = null
nula = nula ?? "si es nula se reasigna"
console.log("nula:", nula);

const datos = {
    nombre: "Gustavo"
}
datos = datos ?? (apellido ?? "Sepulveda")
console.log(datos);