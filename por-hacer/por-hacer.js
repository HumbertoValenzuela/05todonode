const fs = require('fs');
const  colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
  
  return new Promise( ( resolve, reject ) => {
    let data = JSON.stringify( listadoPorHacer );

    fs.writeFile(`db/data.json`, data, ( error ) => {
      if (error) 
        reject(error);
      else
        resolve(`data.json`);
    })
  })
}

const cargarDB = () => {

  try {
    listadoPorHacer = require('../db/data.json');
    // console.log(listadoPorHacer);    
  } catch (error) {
    listadoPorHacer = [];
  }
}

const crear = ( descripcion) => {

  cargarDB();

  let porHacer = {
    descripcion,
    completado: false
  };

  // push del objeto dentro del array
  listadoPorHacer.push( porHacer );

  guardarDB()
    .then( archivo => console.log(archivo))
    .catch( error => console.log(error));

return porHacer;
}

const getListado = () => {

  cargarDB();
  for (const tarea of listadoPorHacer) {
    console.log('=====Listado por HAcer======='.green);
    console.log(tarea.descripcion);
    console.log('Estado: ', tarea.completado);
    console.log('============================='.green);
  }
  
}

const actualizar = ( descripcion, completado = true ) => {

  cargarDB();// cargar el Array listadoPorHAcer

  let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion)

  if ( index >= 0 ) {    

    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;

  } else {

    return false;
  }

}

const borrar = ( descripcion ) => {
  cargarDB();

  let nuevoListado = listadoPorHacer.filter( borrar => 
    borrar.descripcion !== descripcion)

  if ( listadoPorHacer.length === nuevoListado.length ) {
    return false
  } else {
    listadoPorHacer = nuevoListado;
    guardarDB();
    return true
  }
}

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
}