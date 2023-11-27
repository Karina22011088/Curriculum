
class GrafoNoDirigido {
    constructor() {
      this.nodos = new Map()
    }
    /**
    * Agrega un nodo al grafo
    *
    * @param nodo recibe un tipo de dato nodo
    */
    agregarNodo(nodo) {
      this.nodos.set(nodo, new Set())
    }
  
    /**
    * Agrega una arista al grafo
    *
    * @param nodo1 recibe un tipo de dato nodo
    * @param nodo2 recibe un tipo de dato nodo
    */
    agregarArista(nodo1, nodo2) {
      if (!this.nodos.has(nodo1) || !this.nodos.has(nodo2)) {
        throw new Error("Los nodos no existen en el grafo.")
      }
  
      this.nodos.get(nodo1).add(nodo2)
      this.nodos.get(nodo2).add(nodo1)
    }
  
    /**
    * Saber si existe una arista en el grafo
    *
    * @param nodo1 recibe un tipo de dato nodo
    * @param nodo2 recibe un tipo de dato nodo
    * @return devuelve si existe la arista entre los nodos ingresados
    */
    tieneArista(nodo1, nodo2) {
      if (!this.nodos.has(nodo1) || !this.nodos.has(nodo2)) {
        return false
      }
  
      return this.nodos.get(nodo1).has(nodo2)
    }
  
    /**
    * Obtener los vecinos de un nodo
    *
    * @param nodo recibe un tipo de dato nodo
    * @return devuelve el arreglo con los nodos vecinos al nodo agregado
    */
    obtenerVecinos(nodo) {
      if (!this.nodos.has(nodo)) {
        throw new Error("El nodo no existe en el grafo.")
      }
  
      return Array.from(this.nodos.get(nodo))
    }
  }
  
  // Función para agregar un nodo al grafo
  function agregarNodo() {
    const nodo = prompt("Ingrese el nombre del nodo:");
  
    const regex = /^[A-Z]+$/;
    if (regex.test(nodo)) {
      grafo.agregarNodo(nodo);
      alert(`Nodo "${nodo}" agregado al grafo.`);
    } else {
      alert("Ingrese un nombre de nodo válido en mayúsculas sin números ni otros caracteres.");
    }
  }
  
  // Función para agregar una arista al grafo
  function agregarArista() {
    const nodo1 = prompt("Ingrese el nombre del primer nodo:")
    const nodo2 = prompt("Ingrese el nombre del segundo nodo:")
    grafo.agregarArista(nodo1, nodo2)
    alert(`Arista entre "${nodo1}" y "${nodo2}" agregada al grafo.`)
  }
  
  // Función para verificar la existencia de una arista en el grafo
  function verificarArista() {
    const nodo1 = prompt("Ingrese el nombre del primer nodo:")
    const nodo2 = prompt("Ingrese el nombre del segundo nodo:")
    const existeArista = grafo.tieneArista(nodo1, nodo2)
    alert(`Existe arista entre "${nodo1}" y "${nodo2}": ${existeArista}`);
  }
  
  // Función para obtener los vecinos de un nodo en el grafo
  function obtenerVecinos() {
    const nodo = prompt("Ingrese el nombre del nodo:")
    const vecinos = grafo.obtenerVecinos(nodo)
    alert(`Vecinos de "${nodo}": ${vecinos.join(", ")}`)
  }
  
  const grafo = new GrafoNoDirigido()
  
  // Función para mostrar el menú y procesar las opciones
  function mostrarMenu() {
    const opcion = prompt(
      `Seleccione una opción:
      1. Agregar nodo
      2. Agregar arista
      3. Verificar existencia de arista
      4. Obtener vecinos de un nodo
      5. Salir
      Ingrese el número de la opción seleccionada:`
    )
  
    switch (opcion) {
      case "1":
        agregarNodo()
        mostrarMenu()
        break
      case "2":
        agregarArista()
        mostrarMenu()
        break
      case "3":
        verificarArista()
        mostrarMenu()
        break;
      case "4":
        obtenerVecinos()
        mostrarMenu()
        break
      case "5":
        alert("¡Hasta luego!")
        window.close()
        return;
      default:
        alert("Opción no válida. Intente nuevamente.")
        mostrarMenu()
    }
  }
  
  // Mostrar el menú
  mostrarMenu()