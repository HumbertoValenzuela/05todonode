// npm install --save yargs colors
// node index crear --descripcion "Pasear al perro"
// node index listar
// node index actualizar --descripcion "Pasear al perro" -completa true
// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');
// console.log(argv);
const { crear, getListado, actualizar, borrar } = porHacer;

let comando = argv._[0];

switch ( comando ) {
  case 'crear':
    // console.log('Crear por hacer');
    const tarea = crear( argv.descripcion );
    console.log(tarea);
    break;

  case 'listar':
  // console.log('Mostrar todas las tareas por hacer');
  return getListado();
  break;

  case 'actualizar':
  // console.log('Actualiza una tarea por hacer');
  let actualizado = actualizar( argv.descripcion, argv.completado );
  console.log(actualizado);
  break;

  case 'borrar':
    let borrado = borrar( argv.descripcion );
    console.log(borrado);
    break;
    
  default:
    console.log('Comando no es reconocido');
    break;
}

// PS C:\htmlCSSJavaScript\NodeJS\05todo> node index listar
// { _: [ 'listar' ], '$0': 'index' }
// Mostrar todas las tareas por hacer     
// PS C:\htmlCSSJavaScript\NodeJS\05todo> node index crear 
// { _: [ 'crear' ], '$0': 'index' }
// Crear por hacer
// PS C:\htmlCSSJavaScript\NodeJS\05todo> node index actualizar
// { _: [ 'actualizar' ], '$0': 'index' }
// Actualiza una tarea por hacer
// PS C:\htmlCSSJavaScript\NodeJS\05todo> node index actua     
// { _: [ 'actua' ], '$0': 'index' }
// Comando no es reconocido

// 043 Crear una tarea persistente
// carpeta por-hacer irá la lógica de crear
// configurar el filesystem para dejarlo en un lugar físico
// por-hacer - funcion crear - 
// Persistencia de los datos para que no se pierda la info del arreglo. Entonces grabarlo en un archivo - 
// crear carpeta db
// el objeto guardarlo en un array
// por-hacer.js crear función guardarDB
// transformar el array a json
// 

// 044 Leer información de un archivo JSON y retornarlo a listadoporHacer
// Como se esta en el backend se puede hacer un require directo al archivo y la función al detectar un archivo JSON automaticamente lo serializa. Por tanto lo convierte en un archivo de JS 
// La función crear cambiarlo a que agregue en el archivo. Se debe agregar la función cargarDB
// node index crear -d "Estudiar"
// Solo retorna la que acabamos de crear
// Validando: al borrar el contenido JSON da error
// Unexpected end of JSON input. Indica que no encuentra formato JSON
// cargarDB - try catch - En el catch si esta vacio entonces listadoPorHacer =[]

// 045 Comando para listar todas las tareas por hacer

// 046 Actualizar una tarea por hacer
// Modificar el Estado a True 
// Cargar la BD, buscar con findIndex. sino encuentra retorna -1. si encuentra cambiar el campo completado y guardar en el archivo json