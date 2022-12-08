Swal.fire({
  title: "Bienvenido",
  text: "Al darler OK veras una vista previa de nuestras cabañas y su capacidad. Pulsa confirmar para tener mas info",
  imageUrl: (src = "./img/Potrerillos (1).jpg"),
  imageWidth: 500,
  imageHeight: 300,
  imageAlt: "Presentación",
});

const divCards = document.querySelector(".cards");

const mostrarCabanas = async () => {
  const cabanasFectch = await fetch("./cabanas.json");
  const cabanasJson = await cabanasFectch.json();
  console.log(cabanasJson);
  cabanasJson.forEach((cab) => {
    const { nombre, id, precio, prebajo, img, descripcion } = cab;
    divCards.innerHTML += `
     <div class="card" style="width: 4rem;">
   <img src="${img}" >
   <div class="card-body">
     <h4 class="card-title">${nombre}</h4>
     <p>${descripcion}</p>
     <button id="seleccionar-${id}">SELECCIONAR</button>
   </div>
 </div>
 `;

 
  });

  cabanasJson.forEach((cab) => {
    const botonSeleccionar = document.getElementById(`seleccionar-${cab.id}`);
    botonSeleccionar.addEventListener("click", () => {
      localStorage.setItem("cabElejida",JSON.stringify(cab))
      
      console.log(cab)
      divCards.remove();
    });
  });
};
mostrarCabanas();

const botonConfirmar = document.getElementById("confirmar");

botonConfirmar.addEventListener("click", () => {
  const divSeleccion = document.getElementById("seleccion");
  const inputNombre = document.getElementById("nombre");
  const inputApellido = document.getElementById("apellido");
  const inputMes = document.getElementById("mes");
  const inputDias = document.getElementById("dias");

  const huesped = {
    nombre: inputNombre.value,
    apellido: inputApellido.value,
    mes: inputMes.value,
    dias: inputDias.value,
  };
  localStorage.setItem("infoReserva",JSON.stringify (huesped))
  console.log(huesped)
  

  
});
const objHuesped = JSON.parse(localStorage.getItem("infoReserva"));
const objCabana= JSON.parse(localStorage.getItem("cabElejida"));
  
const presupuesto = 0;
function tarifa(objHuesped, objCabana) {
  objHuesped.dias >= 6 && objHuesped.mes < 4
    ? objCabana.precio * objHuesped.dias
    : objCabana.prebajo * objHuesped.dias;
}
const presupuestoFinal = presupuesto + tarifa;


console.log(presupuestoFinal)
// //     console.log(huesped);
// //     localStorage.setItem("infoHuesped", JSON.stringify(huesped));
//    divSeleccion.remove();

const cabanasDisponibles = [];
class Cabanas {
  constructor(nombre, id, precio, prebajo, img, descripcion) {
    this.nombre = nombre;
    this.id = id;
    this.precio = precio;
    this.prebajo = prebajo;
    this.img = img;
    this.descripcion = descripcion;
  }
}
const retama = new Cabanas(
  "Retama",
  1,
  8000,
  6000,
  (src = "./img/cabana-2dorm-4-1.jpg"),
  "Cabaña para dos personas"
);
cabanasDisponibles.push(retama);
const amapola = new Cabanas(
  "Amapola",
  2,
  10000,
  8000,
  (src = "./img/cabana-1dorm-6-1.jpg"),
  "Cabaña para cuatro personas"
);
cabanasDisponibles.push(amapola);
const lechuza = new Cabanas(
  "Lechuza",
  3,
  14000,
  12000,
  (src = "./img/cabana-2dorm-3.jpg"),
  "Cabaña para seis personas"
);
cabanasDisponibles.push(lechuza);

//console.log(JSON.stringify(cabanasDisponibles))