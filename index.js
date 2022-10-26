alert("¡Bienvenido a Cabañas La Lechuza. Bienvenido a Potrerillos!");
class Cabanas {
    constructor(nombre, id, precio) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
    }
}
const retama = new Cabanas("retama", 1, 8000);
const amapola = new Cabanas("amapola", 2, 10000);
const lechuza = new Cabanas("lechuza", 3, 14000);

let cabanaElegida = parseInt(prompt("Elije la cabaña por la cantidad de personas 1.Retama(2 pers.) - 2.Amapola (3 o 4 pers.) - 3.Lechuza (5 o 6 pers.) "))

let cabanaQueToca


let elijeCabana = false;

while (elijeCabana === false) {
    if (cabanaElegida === retama.id) {
        elijeCabana = true
        cabanaQueToca = retama
    } else if (cabanaElegida === amapola.id) {
        elijeCabana = true
        cabanaQueToca = amapola
    } else if (cabanaElegida === lechuza.id) {
        elijeCabana = true
        cabanaQueToca = lechuza
    } else {
        cabanaElegida = parseInt(prompt("Elije la cabaña por la cantidad de personas 1.Retama(2 pers.) - 2.Amapola (3 o 4 pers.) - 3.Lechuza (5 o 6 pers.) "))
    }
}

console.log("cabaña elejida", cabanaQueToca);
let presupuesto

let diasVacaciones = parseInt(prompt("¿Cuantos dias quieres hospedarte?"));

costoEstadia(diasVacaciones, cabanaQueToca)

function costoEstadia(dias, cabana) {
    let presupuesto = dias * cabana.precio

    return presupuesto
    
}
let presupuestoFinal= costoEstadia(diasVacaciones, cabanaQueToca);
alert (`Tu presupuesto de la cabaña ${cabanaQueToca} por ${diasVacaciones} es de $ ${presupuesto}`);
