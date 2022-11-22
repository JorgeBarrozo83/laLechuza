const botonConfirmar = document.getElementById("confirmar");

botonConfirmar.addEventListener('click', () => {


  const divSeleccion = document.getElementById("seleccion");
  const divAsignacion = document.getElementById("Asignacion");
  const inputNombre = document.getElementById("nombre").value;
  const inputApellido = document.getElementById("apellido").value;
  const inputPersonas = document.getElementById("personas").value;
  const inputDias = document.getElementById("dias").value;
 
    const huesped = {
      nombre: inputNombre,
      apellido: inputApellido,
      personas: inputPersonas,
      dias: inputDias,
    };
    console.log(huesped)
    localStorage.setItem("infoHuesped", JSON.stringify(huesped));
  

  divSeleccion.remove()

 const presupuesto = 0;
 
  const cabanaAsignada = document.createElement("h3");
  cabanaAsignada.innerText = `${huesped.nombre} ${huesped.apellido} según tu seleccion, tu presupuesto por ${huesped.personas} por ${huesped.dias} dias es de ${presupuesto}`;
  divAsignacion.append(cabanaAsignada);
 



})

const cabanasDisponibles = [];
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
