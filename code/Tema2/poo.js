// Declaracion de variables a utilizar
var nombre, edad, curso;

//Definicion de la clase Persona
class Persona {
  constructor(_nombre, _edad) {
    nombre = _nombre;
    edad = _edad;
  }

  //Metodo para saludar a la persona
  saludar() {
    return 'Hola, mi nombre es ' + nombre + ' y tengo ' + edad + ' años.';
  }
}

//Definicion de la clase Estudiante que hereda de la clase Persona
class Estudiante extends Persona {
  constructor(_nombre, _edad, _curso) {
    super(_nombre, _edad);
    curso = _curso;
  }

  //Metodo para decir que esta estudiando
  estudiar() {
    return nombre + ' está estudiando el curso de ' + curso ;
  }
}

// Define la funcion del menú
function mostrarMenu() {
  var opcion = prompt(
    "Seleccione una opción:\n" +
      "1. Ingresar información del estuante.\n" +
      "2. Saludo de la persona.\n" +
      "3. Estudios de la persona.\n" +
      "4. Salir.\n" +
      "Ingrese el número de la opción:"
  );

  switch (opcion) {
    case "1":
      ingresarInformacion();
      break;
    case "2":
      mostrarSaludo();
      break;
    case "3":
      mostrarEstudios();
      break;
    case "4":
      window.close();
      return;
    default:
      alert("Opción inválida. Seleccione otra opción.");
      mostrarMenu();
      break;
  }
}

let estudiante;

  function ingresarInformacion() {
    var nombre = prompt("Ingrese el nombre de la persona:");
    var edad = parseInt(prompt("Ingrese la edad de la persona en años:"));
    var curso = prompt("Ingrese la asignatura que esta cursando la persona:");
  
    estudiante = new Estudiante(nombre, edad, curso);
    alert("Información del estudiante almacenada exitosamente.");
  
    mostrarMenu();
  }

  // Define la funcion para mostrar el saludo
  function mostrarSaludo() {
    if (estudiante) {
      var informacion = estudiante.saludar();
      alert(informacion);
      mostrarMenu();
    } else {
      alert("No se ha ingresado información de una persona. Por favor, seleccione la opción 1 para ingresar información.");
      mostrarMenu();
    }
  }

  // Define la funcion para mostrar los estudios
  function mostrarEstudios() {
    if (estudiante) {
      var informacion = estudiante.estudiar();
      alert(informacion);
      mostrarMenu();
    } else {
      alert("No se ha ingresado información de una persona. Por favor, seleccione la opción 1 para ingresar información.");
      mostrarMenu();
    }
  }

  //Llama el metodo de mostrar menu
  mostrarMenu();
  
  