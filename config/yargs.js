const descripcion = {
  demand: true,
  // --descripcion -d
  alias: 'd',
  desc: 'Descripción de la tarea por hacer'
}

const optCrear = {
  descripcion 
}

const optActualizar = {
  descripcion,
  completado: {
    alias: 'c',     
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
  }
}

const optBorrar = {
  descripcion
}

const argv = require('yargs')
      .command('crear', 'Crear un elemento por hacer', optCrear)
      .command('actualizar', 'Actualiza el estado completado de tarea', optActualizar)
      .command('borrar', 'borrar una tarea', optBorrar)
      .help()
      .argv;

module.exports = {
  argv
}
