const botonConfirmar = document.getElementById("confirmar");
 const checkIn= document.getElementById("checkIn");
 const checkOut= document.getElementById("checkOut");

 botonConfirmar.addEventListener("click", () => {
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
   console.log(huesped);
   localStorage.setItem("infoHuesped", JSON.stringify(huesped));

   divSeleccion.remove();
  
 
 
  const presupuesto=0
 
   const cabanaAsignada = document.createElement("h3");
   cabanaAsignada.innerText = `${huesped.nombre} ${huesped.apellido} según tu seleccion, tu presupuesto por ${huesped.personas} por ${huesped.dias} dias es de ${presupuesto}`;
   divAsignacion.append(cabanaAsignada);

 

   Swal.fire({
     title: ` ${huesped.personas}`,
     text: `${huesped.nombre} ${huesped.apellido} según tu seleccion, tu presupuesto por ${huesped.personas} por ${huesped.dias} dias es de ${presupuesto}`,
     imageUrl: (src = "./img/cabana-2dorm-3.jpg"),
     imageWidth: 500,
     imageHeight: 300,
     imageAlt: "Cabaña Asignada",
   });
 });
 let fecha1= new Date(checkIn)
 let fecha2= new Date(checkOut)
 let milisegundosDia= 24 * 60 *60 *1000;
 let milisegundosTrancurridos= Math.abs(fecha1.getTime()- fecha2.getTime());
 let diasHospedaje= Math.round(milisegundosTrancurridos/milisegundosDia);
 console.log(diasHospedaje)

 function tarifa() {
   if(diasHospedaje>=7){
     return cabanasDisponibles.prebajo
   } else{
      cabanasDisponibles.precio
   }
 }



const cabanasDisponibles = [];
class Cabanas {
  constructor(nombre, id, precio, prebajo, img) {
    this.nombre = nombre;
    this.id = id;
    this.precio = precio;
    this.prebajo= prebajo;
    this.img=img;
  }
}
const retama = new Cabanas("Retama", 1, 8000, 6000, "./img/cabana-2dorm-4-1.jpg");
cabanasDisponibles.push(retama);
const amapola = new Cabanas("Amapola", 2, 10000, 8000, "./img/cabana-1dorm-6-1.jpg");
cabanasDisponibles.push(amapola);
const lechuza = new Cabanas("Lechuza", 3, 14000, 12000, "./img/cabana-2dorm-3.jpg");
cabanasDisponibles.push(lechuza);

console.log(JSON.stringify(cabanasDisponibles))


//const productosCabanas= await fetch(
 // "cabanas.json"
 // )