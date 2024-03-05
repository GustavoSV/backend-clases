class NotesManager {
    static quantity = 0;
    static #notes = [];
    create(data) {
        data.id = (NotesManager.quantity === 0) ? 1 : NotesManager.#notes[NotesManager.#notes.length-1].id + 1;
        NotesManager.quantity++;
        data.type ? data.type : "to do"
        data.date || new Date();
        !data.text ? console.log("Ingrese texto") : NotesManager.#notes.push(data);
    }

    read() {
        return NotesManager.#notes;
    }
}

const notas = new NotesManager();
notas.create({text: "mi primer nota"});
notas.create({text: "mi segunda nota"});
notas.create({text: "mi tercer nota"});
notas.create({});
console.log(notas);
console.log(notas.read());