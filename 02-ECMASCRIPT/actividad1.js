const n1 = 100
const n2 = 5
const n3 = -50

const c1 = "    hola"
const c2 = "chjau   "
const c3 = "    jejeej   "

const obj = {
    nombre:  "Gus",
    edad: 36,
    ciudad: "Bucara",
    color: "azul",
    mascota: "perro"
}

const exponencial = n2 ** n1
console.log(exponencial);
const exp2 = n1 ** n1;
console.log(exp2);

const arrayCad1 = ["hola", "chau", "holaaaa"]
console.log(arrayCad1.includes(c2));
console.log(arrayCad1.includes(c3));
const arrayCad2 = [c1.trim(), c2.trim(), c3.trim()]
console.log(arrayCad2.includes("holita"));
console.log(arrayCad2.includes("chapo"));

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const {nombre, edad, ...rest} = obj
console.log(nombre);
console.log(edad);
console.log(rest);

const cadenasYnumeros = {c1, c2, c3, n1, n2, n3}
console.log(cadenasYnumeros);
