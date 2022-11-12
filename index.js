//alert("¡Bienvenido a Cabañas La Lechuza. Bienvenido a Potrerillos!");
const inputNombre= document.getElementById("nombre")
const inputApellido= document.getElementById("apellido")
const inputPersonas= document.getElementById("personas")
const inputDias= document.getElementById("dias")
const botonConfirmar= document.getElementById("confirmar")
const divSeleccion= document.getElementById("seleccion")
const divAsignacion= document.getElementById("asignacion")

botonConfirmar.onclick =() => {
    if(inputNombre.value && inputApellido.value && inputPersonas.value && inputDias){
    const huesped={
        nombre: inputNombre.value ,
        apellido: inputApellido.value ,
        personas: inputPersonas.value ,
        dias: inputDias.value ,
    }
    localStorage.setItem("infoHuesped" , JSON.stringify (huesped))
}
divSeleccion.remove()
const cabanaAsignada= document.createElement("h3")
cabanaAsignada.innerText= `${usario.nombre} ${usuario.apellido} segun tu seleccion, tu presupuesto por ${usuario.personas} personas y ${usuario.dias} es de ${presupuesto}`
divAsignacion.append(cabanaAsignada)

let presupuesto=0
}

let presupuesto=0


const cabanasDisponibles=[]
class Cabanas {
    constructor(nombre, id, precio) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
    }
}
const retama = new Cabanas("Retama", 1, 8000);
cabanasDisponibles.push(retama);
const amapola = new Cabanas("Amapola", 2, 10000);
cabanasDisponibles.push(amapola);
const lechuza = new Cabanas("Lechuza", 3, 14000);
cabanasDisponibles.push(lechuza);

//let cabanaElegida = parseInt(prompt("Elije la cabaña por la cantidad de personas 1.Retama(2 pers.) - 2.Amapola (3 o 4 pers.) - 3.Lechuza (5 o 6 pers.) "))

//let cabanaQueToca


//let elijeCabana = false;

//while (elijeCabana === false) {
   // if (cabanaElegida === retama.id) {
       // elijeCabana = true
       // cabanaQueToca = retama
   // } else if (cabanaElegida === amapola.id) {
        //elijeCabana = true
        //cabanaQueToca = amapola
    //} else if (cabanaElegida === lechuza.id) {
        //elijeCabana = true
        //cabanaQueToca = lechuza
   // } else {
       // cabanaElegida = parseInt(prompt("Elije la cabaña por la cantidad de personas 1.Retama(2 pers.) - 2.Amapola (3 o 4 pers.) - 3.Lechuza (5 o 6 pers.) "))
   // }
//}

//console.log("cabaña elejida", cabanaQueToca);

//let presupuesto=0
//let diasVacaciones = parseInt(prompt("¿Cuantos dias quieres hospedarte?"));
//console.log(diasVacaciones)
//costoEstadia(diasVacaciones, cabanaQueToca)

//function costoEstadia(dias, cabana) {
     //presupuesto = dias * cabana.precio

    //return presupuesto
    
//}
//let presupuestoFinal= costoEstadia(diasVacaciones, cabanaQueToca);
//alert (`Tu presupuesto de la cabaña ${cabanaQueToca.nombre} por ${diasVacaciones} dias es de $ ${presupuesto}`);
