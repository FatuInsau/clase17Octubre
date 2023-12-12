// 11 - canciones
// Tenemos un array de objetos, que representa un listado de bandas
// Cada objeto representa una banda, y tiene las propidades id, nombre, fundacion, activa
// Mostrar en consola cada banda del array, con la siguiente lógica:
// Si la banda está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] está activa desde el año [AÑO DE FUNDACIÓN]"
// Si la banda NO está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] no está activa"

var bandas = [
  { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
  { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
  { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
  { id: 4, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
  { id: 5, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];

bandas.forEach( (itemBanda)=>{
    if(itemBanda.activa) {
        console.log(`${itemBanda.nombre} está activa desde el año ${itemBanda.fundacion}`)
    } else {
        console.log( itemBanda.nombre+" no está activa")
    }
} )

///// RESULTADO
// Nirvana no está activa
// Foo Fighters está activa desde el año 1994
// Led Zeppelin no está activa
// Queens of the Stone Age está activa desde el año 1997
// Pearl Jam está activa desde el año 1990