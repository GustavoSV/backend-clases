// las clases se declaran con:
// la palabra reservada class 
// PascalCase
// en singular
// representativa del recurso
// en inglés

class Persona {
    static numeroPersonas = 0;  // propiedad de la clase
    constructor(nombre, edad, ciudad, vida) {
        // this hace referencia a la instancia
        this.nombre = nombre
        this.edad = edad
        this.ciudad = ciudad
        this.vida = vida || 100 // el operador OR se usa mucho para poner un valor por defecto
        Persona.numeroPersonas++
    }

    comer(cantidad) {
        this.vida < 150
        ? (this.vida = this.vida + cantidad)
        : (console.log("NO puede comer más"))
    }

    entrenar(cantidad) {
        if (this.vida > 50) {
            this.vida = this.vida - cantidad;
        } else {
            console.log(this.nombre, "NO puede entrenar más");
        }
        
    }

    mudarse(ciudad) {
        this.ciudad = ciudad;
        this.vida = this.vida - 20;
    }
}

const persona1 = new Persona("Gustavo", 45, "Bogotá", 30);
persona1.comer(30);
const persona2 = new Persona("María", 32, "Bucaramanga");
persona2.comer(180);
persona2.entrenar(40);
const persona3 = new Persona("José", 56, "Cali", 150);
persona3.entrenar(90);
console.log(persona3);
persona3.entrenar(20);
console.log(persona3);
persona3.entrenar(60);
console.log(persona3);
persona3.entrenar(20);
persona3.entrenar(20);
const persona4 = new Persona("Sofia", 42, "Socorro", 90);
persona4.comer(120);
persona4.mudarse("Londres");

console.log(persona1);
console.log(persona2);
console.log(persona3);
console.log(persona4);
console.log("# intancias:", Persona.numeroPersonas);