/**
    * Calcula la potencia con un ciclo for
    * 
    * @param base recibe un tipo de dato que es la base de la potencia
    * @param potencia recibe el numero al cual se va a elebar la base
    */
function potenciaFor(base, potencia) {
    let resultado = 1
    for (let i = 1; i <= potencia; i++) {
      resultado = resultado * base
    }
    return resultado
  }
  
  /**
    * Calcula la potencia de manera recursiva
    * 
    * @param base recibe un tipo de dato que es la base de la potencia
    * @param potencia recibe el numero al cual se va a elebar la base
    */
  function potenciaRecursiva(base, potencia) {
    if (potencia === 0) {
      return 1
    }
    return base * potenciaRecursiva(base, potencia - 1)
  }
  
  //Funcion para mostrar un menu
  function mostrarMenu() {
    var opcion = prompt(
      "Selecciona una opción:\n" +
      "1 Calcular potencia con bucle for.\n" +
      "2 Calcular potencia con recursión: \n" +
      "3 Salir.\n" +
      "Ingrese el número de la opción"
    );
  
    switch (opcion) {
      case "1":
        var base = prompt("Introduce la base:");
        var potencia = prompt("Introduce el potencia:");
        var res = potenciaFor(base, potencia);
        alert("El resultado de la potencia es: " + res);
        mostrarMenu();
        break;
      case "2":
        var base = prompt("Introduce la base:");
        var potencia = prompt("Introduce el potencia:");
        var res = potenciaRecursiva(base, potencia);
        alert("El resultado de la potencia es: " + res);
        mostrarMenu();
        break;
      case "3":
        window.close()
        return;
      default:
        alert("Opcion invalida. Seleccione otra opción");
        mostrarMenu();
        break;
    }
  }
  
  //Llama la funcion del menu 
  mostrarMenu();