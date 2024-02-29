const super1 = { nombre: "Batman"}
const super2 = { nombre: "Mujer Maravilla"}
const super3 = { nombre: "Superman"}
let super4 = { nombre: "Flash"}
const super5 = { nombre: "Acuaman"}

function printName(obj) {
    return `el nombre del superhéroe es ${obj.nombre}`
}

console.log(printName(super2));
console.log(printName(super4));
console.log(super5.nombre);

super5.edad = 32;
super5.ciudad = "Asgard";
console.log(super5);

super4 = {nombre: "she Hulk"}
console.log(super4);

function printAll(array) {
    for (let item of array) {
        const template = printName(item);
        console.log(template);
    }
}

const array1 = [super1, super2];
printAll(array1);
printAll([super3, super4, super5]);