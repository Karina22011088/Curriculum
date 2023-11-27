/**
    * Definición de la clase Nodo
    * 
    * @param valor recibe un tipo de dato nodo
    */
class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
  }
}

// Definición de la clase Árbol
class Arbol {
  constructor() {
    this.raiz = null;
  }

  /**
    * Función para agregar un dato al árbol
    * 
    * @param valor recibe un tipo de dato nodo
    */
  agregarDato(valor) {
    const nodo = new Nodo(valor);

    if (this.raiz === null) {
      this.raiz = nodo;
      alert("Nodo agregado como raíz del árbol.");
    } else {
      this.agregarNodo(this.raiz, nodo);
    }
  }

  /**
    * Función para agregar un nodo al árbol
    * 
    * @param nodoPadre recibe un tipo de dato nodo
    * @param nodoNuevo recibe un tipo de dato nodo
    */
  agregarNodo(nodoPadre, nodoNuevo) {
    if (nodoNuevo.valor < nodoPadre.valor) {
      if (nodoPadre.izquierda === null) {
        nodoPadre.izquierda = nodoNuevo;
        alert("Nodo agregado a la izquierda.");
      } else {
        this.agregarNodo(nodoPadre.izquierda, nodoNuevo);
      }
    } else {
      if (nodoPadre.derecha === null) {
        nodoPadre.derecha = nodoNuevo;
        alert("Nodo agregado a la derecha.");
      } else {
        this.agregarNodo(nodoPadre.derecha, nodoNuevo);
      }
    }
  }

  /**
    * Función para buscar un nodo en el árbol
    * 
    * @param valor recibe un tipo de dato nodo
    * @return devuelve si el nodo fue encontrado en el arbol
    */
  buscarDato(valor) {
    const encontrado = this.buscarNodo(this.raiz, valor);
    if (encontrado) {
      alert("Nodo encontrado en el árbol.");
    } else {
      alert("Nodo no encontrado en el árbol.");
    }
  }

  buscarNodo(nodo, valor) {
    if (nodo === null) {
      return false;
    }

    if (valor === nodo.valor) {
      return true;
    } else if (valor < nodo.valor) {
      return this.buscarNodo(nodo.izquierda, valor);
    } else {
      return this.buscarNodo(nodo.derecha, valor);
    }
  }

  /**
    * Función para eliminar un nodo del árbol
    * 
    * @param valor recibe un tipo de dato nodo
    * @return devuelve si el nodo fue encontrado en el arbol
    */
  eliminarDatoNodo(valor) {
    if (this.raiz === null) {
      alert("El árbol está vacío.");
      return;
    }

    let encontrado = false;
    let nodoPadre = null;
    let nodoActual = this.raiz;

    while (nodoActual !== null) {
      if (valor === nodoActual.valor) {
        encontrado = true;
        break;
      } else if (valor < nodoActual.valor) {
        nodoPadre = nodoActual;
        nodoActual = nodoActual.izquierda;
      } else {
        nodoPadre = nodoActual;
        nodoActual = nodoActual.derecha;
      }
    }

    if (!encontrado) {
      alert("Nodo no encontrado en el árbol.");
      return;
    }

    if (nodoActual.izquierda === null && nodoActual.derecha === null) {
      if (nodoPadre === null) {
        this.raiz = null;
      } else if (nodoActual === nodoPadre.izquierda) {
        nodoPadre.izquierda = null;
      } else {
        nodoPadre.derecha = null;
      }
      alert("Nodo eliminado del árbol.");
    } else if (nodoActual.izquierda === null) {
      if (nodoPadre === null) {
        this.raiz = nodoActual.derecha;
      } else if (nodoActual === nodoPadre.izquierda) {
        nodoPadre.izquierda = nodoActual.derecha;
      } else {
        nodoPadre.derecha = nodoActual.derecha;
      }
      alert("Nodo eliminado del árbol.");
    } else if (nodoActual.derecha === null) {
      if (nodoPadre === null) {
        this.raiz = nodoActual.izquierda;
      } else if (nodoActual === nodoPadre.izquierda) {
        nodoPadre.izquierda = nodoActual.izquierda;
      } else {
        nodoPadre.derecha = nodoActual.izquierda;
      }
      alert("Nodo eliminado del árbol.");
    }    else {
      const nodoReemplazo = this.encontrarNodoReemplazo(nodoActual);
      if (nodoPadre === null) {
        this.raiz = nodoReemplazo;
      } else if (nodoActual === nodoPadre.izquierda) {
        nodoPadre.izquierda = nodoReemplazo;
      } else {
        nodoPadre.derecha = nodoReemplazo;
      }
      nodoReemplazo.izquierda = nodoActual.izquierda;
      alert("Nodo eliminado del árbol.");
    }
  }

  /**
    * Función para poner un nodo de reemplaxo en el árbol
    * 
    * @param nodo recibe un tipo de dato nodo
    * @return devuelve el nodo reemplazado
    */
  encontrarNodoReemplazo(nodo) {
    let nodoPadreReemplazo = nodo;
    let nodoReemplazo = nodo;
    let nodoActual = nodo.derecha;

    while (nodoActual !== null) {
      nodoPadreReemplazo = nodoReemplazo;
      nodoReemplazo = nodoActual;
      nodoActual = nodoActual.izquierda;
    }

    if (nodoReemplazo !== nodo.derecha) {
      nodoPadreReemplazo.izquierda = nodoReemplazo.derecha;
      nodoReemplazo.derecha = nodo.derecha;
    }

    return nodoReemplazo;
  }

  // Función para mostrar el árbol en Preorden RID
  mostrarArbolPreOrden() {
    if (this.raiz === null) {
      alert("El árbol está vacío.");
      return;
    }

    this.mostrarNodoPreOrden(this.raiz, "", "");
  }

  mostrarNodoPreOrden(nodo, prefijo, descripcion) {
    if (nodo === null) {
      return;
    }

    alert(prefijo + descripcion + nodo.valor);

    const prefijoIzquierdo = prefijo + "├─ (I) ";
    const prefijoDerecho = prefijo + "└─ (D) ";

    this.mostrarNodoPreOrden(nodo.izquierda, prefijoIzquierdo, "Nodo izquierdo: ");
    this.mostrarNodoPreOrden(nodo.derecha, prefijoDerecho, "Nodo derecho: ");
  }

  // Inorden IRD
  mostrarArbolInOrden() {
    if (this.raiz === null) {
      alert("El árbol está vacío.");
      return;
    }
  
    this.mostrarNodoInOrden(this.raiz, "", "");
  }
  
  mostrarNodoInOrden(nodo, prefijo, descripcion) {
    if (nodo === null) {
      return;
    }
  
    const prefijoIzquierdo = prefijo + "├─ (I)   ";
    const prefijoDerecho = prefijo + " └─ (D)   ";
  
    this.mostrarNodoInOrden(nodo.izquierda, prefijoIzquierdo, "Nodo izquierdo: ");
  
    alert(prefijo + descripcion + nodo.valor);
  
    this.mostrarNodoInOrden(nodo.derecha, prefijoDerecho, "Nodo derecho: ");
  }

  // Postorden IDR
  mostrarArbolPostOrden() {
    if (this.raiz === null) {
      alert("El árbol está vacío.");
      return;
    }
  
    this.mostrarNodoPostOrden(this.raiz, "", "");
  }
  
  mostrarNodoPostOrden(nodo, prefijo, descripcion) {
    if (nodo === null) {
      return;
    }
  
    const prefijoIzquierdo = prefijo + "├─ (I)   ";
    const prefijoDerecho = prefijo + " └─ (D)   ";
  
    this.mostrarNodoPostOrden(nodo.izquierda, prefijoIzquierdo, "Nodo izquierdo: ");
    this.mostrarNodoPostOrden(nodo.derecha, prefijoDerecho, "Nodo derecho: ");
  
    alert(prefijo + descripcion + nodo.valor);
  }

  //Eliminar arbol  
  eliminarArbol() {
    this.raiz = null;    
    alert("El árbol se ha eliminado.");
  }

   
}

// Crear un objeto Árbol
const arbol = new Arbol();

// Función para mostrar el menú
function mostrarMenu() {
  const opcion = prompt(
    `Seleccione una opción:
    1. Agregar nodo
    2. Buscar nodo
    3. Eliminar nodo
    4. Mostrar árbol en Pre-Orden
    5. Mostrar árbol en In-Orden
    6. Mostrar árbol en Post-Orden
    7. Eliminar árbol
    8. Salir
    Ingrese el número de la opción seleccionada:`
  );

  switch (opcion) {
    case "1":
      const valorAgregar = prompt("Ingrese el valor del nodo a agregar:");
      arbol.agregarDato(parseInt(valorAgregar));
      mostrarMenu();
      break;
    case "2":
      const valorBuscar = prompt("Ingrese el valor del nodo a buscar:");
      arbol.buscarDato(parseInt(valorBuscar));
      mostrarMenu();
      break;
    case "3":
      const valorEliminar = prompt("Ingrese el valor del nodo a eliminar:");
      arbol.eliminarDatoNodo(parseInt(valorEliminar));
      mostrarMenu();
      break;
    case "4":
      arbol.mostrarArbolPreOrden();
      mostrarMenu();
      break;
    case "5":
      arbol.mostrarArbolInOrden();
      mostrarMenu();
      break;
    case "6":
      arbol.mostrarArbolPostOrden();
      mostrarMenu();
      break;
    case "7":
      arbol.eliminarArbol();
      mostrarMenu();
      break;
    case "8":
      window.close()
      return;
    default:
      alert("Opción inválida. Por favor, seleccione una opción válida.");
      mostrarMenu();
      break;
  }
}

// Iniciar el programa mostrando el menú
mostrarMenu();