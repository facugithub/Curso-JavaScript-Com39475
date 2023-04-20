//SEGUNDA PREENTRTEGA//
//AGREGAMOS ALGUNAS FUNCIONALIDADES//
/*1.declaracion de variables y objetos literales
2. Uso de funciones de orden superior 
3. uso de modulos math y date
4. uso de metodos filter,find,map
5.arrays

agregar :
a.objetos literales de los departamentos y casas a alquilar con respectivas caracteristicas
b.determinar fecha de incio y finalizacion de estadia
c.sumar fechas y ejecutar el costo final mas adicionales
d.generar servicios adicionales (tour cervecero-tour rural)
e.poder filtrar y mapear por precio, habitaciones, servicio de limpieza y desayuno
f.opcinal: a partir de 3 dias de estadia, descuento de 15%
g.generar un codigo de reserva con algoritmo de token*/

//los puntos f y g no me dio el tiempo para terminarlos pero dejo la idea para la proxima preengtrega...

//array departamentos y casas de campó

const departamentos = [
  {
    direccion: "25 de mayo 610",
    precioDia: 6500,
    limpieza: true,
    habitaciones: 2,
    zona: "centro",
  },
  {
    direccion: "Entre rios 729",
    precioDia: 4500,
    limpieza: true,
    habitaciones: 2,
    zona: "centro",
  },
  {
    direccion: "Leguizamon 340",
    precioDia: 21000,
    limpieza: true,
    habitaciones: 3,
    zona: "centro",
  },
  {
    direccion: "Ituzaingo 999",
    precioDia: 3500,
    limpieza: false,
    habitaciones: 1,
    zona: "centro",
  },
  {
    direccion: "Pueyrredon 390",
    precioDia: 25000,
    limpieza: true,
    habitaciones: 2,
    zona: "centro",
  },
];
const casasCampo = [
  {
    direccion: "San Martin 211",
    precioDia: 12500,
    limpieza: false,
    habitaciones: 3,
    zona: "rural",
    piscina: false,
  },
  {
    direccion: "Irigoyen 16",
    precioDia: 18500,
    limpieza: false,
    habitaciones: 5,
    zona: "rural",
    piscina: true,
  },
  {
    direccion: "Saavedra 36",
    precioDia: 30000,
    limpieza: false,
    habitaciones: 3,
    zona: "rural",
    piscina: true,
  },
  {
    direccion: "Belgran SN",
    precioDia: 6500,
    limpieza: false,
    habitaciones: 2,
    zona: "rural",
    piscina: false,
  },
  {
    direccion: "Mitre 346",
    precioDia: 21500,
    limpieza: false,
    habitaciones: 8,
    zona: "rural",
    piscina: true,
  },
];
//variables
//fechas a utilizar
let fecha = new Date();
let fechaEstandar = new Date("2023-04-11");

//fomato de fecha amigable
let fechaHoyVisible = fecha.toLocaleDateString();
let fechaSalidaVisible = fechaEstandar.toLocaleDateString();

//dias *** revisar si van a ser necesarias
let diaAlquilerCiudad = 5500;
let diaAlquilerCampo = 12500;

//servicios adicionales campo
let caminatas = 1500;
let cabalgatas = 3200;
let asado_rural = 3500;

//servicios adicionales ciudad
let tour_cerveceria = 5200;
let tour_peñas = 5500;

//constantes
const milisegDia = 86400000; //ochenta y seis millones cuatrocientosmil

//funciones
//funcion calcular dias de ciudad
function diasCiudad(dias) {
  let costoDiasCiudad = dias * diaAlquilerCiudad;
  return costoDiasCiudad;
}
//funcion calcular dias de campo
function diasCampo(dias) {
  let costoDiasCampo = dias * diaAlquilerCampo;
  return costoDiasCampo;
}
//funcion calcular ingreso-salida
function estadia(ingreso, salida) {
  let Dingreso = new Date(ingreso).getTime();
  let Dsalida = new Date(salida).getTime();
  let diasEstadia = (Dsalida - Dingreso) / milisegDia;

  return diasEstadia;
}

//metodo concat para unir arrays
const disponibles = departamentos.concat(casasCampo);
console.log(disponibles);

//adicionales
function adicionalesCiudad() {
  let adicionalCiudad = prompt(
    "Desea algun servicio adicional:\n a-Tour cervecero\n b-Tour de peñas\n x-Salir"
  );
  do {
    if (adicionalCiudad == "a") {
      alert(
        `el tour cervecero tiene un valor adicional de $${tour_cerveceria}`
      );
      break;
    } else if (adicionalCiudad == "b") {
      alert(`el tour de peñas tiene un valor adicional de $${tour_peñas}`);
      break;
    } else {
      alert("ingrese opcion valida");
    }
  } while (adicionalCiudad != "x");
}

function adicionalesCampo() {
  let adicionalCampo = prompt(
    "Desea algun servicio adicional:\n a-Caminatas\n b-Cabalgatas\n c-Asado rural\n x-salir"
  );

  do {
    if (adicionalCampo == "a") {
      alert(`el adicional caminatas tiene un valor adicional de $${caminatas}`);
      break;
    } else if (adicionalCampo == "b") {
      alert(
        `el adicional cabalgatas tiene un valor adicional de $${cabalgatas}`
      );
      break;

    } else if (adicionalCampo == "c") {
      alert(
        `el adicional asado rural tiene un valor adicional de $${asado_rural}`
      );
      break;

    } else {
      alert("ingrese opcion valida");
    }
  } while (adicionalCampo != "x");
}

//array ususarios
let usuariosReservas = [];

//objeto cliente
function nuevoUsuario(nombre, apellido, ciudad, telefono) {
  this.id = usuariosReservas.length + 1; //le damos un id: dentro del array de UsuariosReservas
  this.nombre = nombre;
  this.apellido = apellido;
  this.ciudad = ciudad;
  this.telefono = telefono;
}

//formulario
let nombreUsuario = prompt("Ingrese Nombre:");
let apellidoUsuario = prompt("Ingrese Apellido:");
let ciudadUsuario = prompt("Ingrese Ciudad:");
let telefonoUsuario = parseInt(prompt("ingrese Telefono de contacto:"));

const newUsuario = new nuevoUsuario(
  nombreUsuario,
  apellidoUsuario,
  ciudadUsuario,
  telefonoUsuario
);
console.log(newUsuario.nombre);
usuariosReservas.push(newUsuario);

//front
/*  while (true) {
    inicio = prompt(
      `Bienvenido ${newUsuario.nombre} a nuestra plataforma de Salta Houses, por favor selecciona una opcion:\n a-alojamiento urbano\n b-alojamiento rural `
    );
    if (inicio == "a") {
      let Fingreso = prompt("Ingrese fecha de ingreso:", "2023-04-04");
      let Fsalida = prompt("Ingrese fecha de salida:", "2023-04-06");
      //ejecutamos funcion
      let totalDias=estadia(Fingreso,Fsalida)
/*       alert(`se reservo ${totalDias} dias de reserva`)
 */

do {
  inicio = prompt(
    `Bienvenido ${newUsuario.nombre} a nuestra plataforma de Salta Houses, por favor selecciona una opcion:\n a-alojamiento urbano\n b-alojamiento rural\n c-otras opciones de busqueda \n x-salir`
  );
  if (inicio == "a") {
    alert("Seleccionaste alojamiento urbano");
    let Fingreso = prompt("Ingrese fecha de ingreso:", "2023-04-04");
    let Fsalida = prompt("Ingrese fecha de salida:", "2023-04-06");
    //ejecutamos funcion
    let totalDias = estadia(Fingreso, Fsalida);
    const costoFinalDiasCiudad = diasCiudad(totalDias);
    alert(`el costo por ${totalDias} dias es de ${costoFinalDiasCiudad}`);

    adicionalesCiudad();
    break;
  } else if (inicio == "b") {
    alert("Seleccionaste alojamiento rural");
    let Fingreso = prompt("Ingrese fecha de ingreso:", "2023-04-04");
    let Fsalida = prompt("Ingrese fecha de salida:", "2023-04-06");
    //ejecutamos funcion
    let totalDias = estadia(Fingreso, Fsalida);
    const costoFinalDiasCampo = diasCampo(totalDias);
    alert(`el costo por ${totalDias} dias es de ${costoFinalDiasCampo}`);

    adicionalesCampo();
    break;
  } else if (inicio == "c") {
    let limiteDia = prompt("ingrese su limite de gasto por dia:");
    const economicos = disponibles.filter((el) => el.precioDia <= limiteDia);
    console.log(economicos);
  } else {
    alert("ingrese una opcion valdia");
  }
} while (inicio != "x");
