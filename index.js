const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputPersonas = document.getElementById("personas");
const inputDias = document.getElementById("dias");
const botonConfirmar = document.getElementById("confirmar");
const divSeleccion = document.getElementById("seleccion");
const divAsignacion = document.getElementById("asignacion");

botonConfirmar.onclick = () => {
  if (
    inputNombre.value &&
    inputApellido.value &&
    inputPersonas.value &&
    inputDias
  ) {
    const huesped = {
      nombre: inputNombre.value,
      apellido: inputApellido.value,
      personas: inputPersonas.value,
      dias: inputDias.value,
    };
    localStorage.setItem("infoHuesped", JSON.stringify(huesped));
  }
  divSeleccion.remove();
  const cabanaAsignada = document.createElement("h3");
  cabanaAsignada.innerText = `${huesped.nombre} ${huesped.apellido} según tu seleccion, tu presupuesto por ${huesped.personas} personas y ${huesped.dias} es de ${presupuesto}`;
  divAsignacion.append(cabanaAsignada);
  const presupuesto = 0;
};
inputPersonas;


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
