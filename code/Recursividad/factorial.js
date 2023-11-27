/**
    * Calcula el factorial con un ciclo for
    * 
    * @param numero recibe el valor del numero al que se va a calcular el factorial
    */
function factorialFor(numero) {
    let resultado=1
    if(numero==1 || numero==0){
        return resultado
    } else {
       for(i=2; i<= numero;i++){
        resultado=resultado*i
       } 
       return resultado
    }
}

/**
    * Calcula el factorial de manera recursiva
    * 
    * @param numero recibe el valor del numero al que se va a calcular el factorial
    */
function factorialRecursivo(numero) {
    if (numero === 0 || numero === 1) {
        return 1
    }
    return numero * factorialRecursivo(numero - 1)
}

//Funcion para mostrar el menu
function mostrarMenu() {
    var opcion = prompt(
      "Seleccione una opción:\n" +
        "1. Calcular factorial con for.\n" +
        "2. Calcular factorial con recursión.\n" +
        "3. Salir.\n" +
        "Ingrese el número de la opción:"
    )
  
    switch (opcion) {
      case "1":
        var numero=prompt("Introduce un numero: ")
        var res=factorialFor(numero)
        alert("El factorial es: " + res)
        mostrarMenu()
        break
      case "2":
        var numero=prompt("Introduce un numero: ")
        var res=factorialRecursivo(numero)
        alert("El factorial es: " + res)        
        mostrarMenu()
        break
      case "3":
        window.close()
        return
      default:
        alert("Opción inválida. Seleccione otra opción.")
        mostrarMenu()
        break
    }
  }

  //Llama a la funcion para mostrar el menu
  mostrarMenu()