/**
  Este método permite crear nodos 
  nodo:es un objeto que conrola un valor y un apuntador previo y siguinte
 */
  class Node {
    constructor(_data, _next, _prev) {
        this.data = _data;
        this.next = _next;
        this.prev = _prev;
    }
  }

//Define la clase DoblyLinkedList
class DoublyLinkedList {
    constructor() {
        this.head = null; //cabeza 
        this.tail = null; //cola
    }


//Agregar a la cabeza
addToHead(_data) {
    const newNode = new Node(_data, this.head, null);
    if (this.head) {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    } else {
        this.head = newNode;
        this.tail = newNode;
    }
}

//Agregar al final
addToTail(_data) {
    const newNode = new Node(_data, null, this.tail);
    if (this.tail) {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    } else {
        this.tail = newNode;
        this.head = newNode;
    }
}
 
//Eliminar valores desde la cabeza
removeFromHead() {
    if (!this.head) {
        return null
    };
    const valueToReturn = this.head.data;
    if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
    } else {
        this.head = this.head.next;
        this.head.prev = null;
    }
    return valueToReturn;
}

//Eliminar valores desde la cola
removeFromTail() {
    if (!this.tail) {
        return null
    };
    const valueToReturn = this.tail.data;
    if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
    } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
    return valueToReturn;
}

//Buscar un elemento
findNode(_data) {
    let current = this.head;
    while (current) {
      if (current.data === _data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

//Imprime la lista desde la cabeza
print() {
    let current = this.head;
    let result = ' null <-> ';
    while(current) {
        result += current.data + ' <-> ';
        current = current.next;
    }
    return result += ' null ';
}
}

function menu() {
    const lista = new DoublyLinkedList();

    while (true) {
        const opcion = prompt(
            "Selecciona una opción:\n" +
            "1. Insertar elemento al inicio de la lista\n" +
            "2. Insertar elemento al final de la lista\n" +
            "3. Eliminar elemento desde el inicio de la lista\n" +
            "4. Eliminar elemento desde el final de la lista\n" +
            "5. Imprimir lista\n" +
            "6. Salir"
        );

        switch (opcion) {
            case "1":
                const dataToAddToHead = prompt("Ingrese el valor a agregar al inicio:");
                lista.addToHead(dataToAddToHead);
                alert("Elemento agregado al inicio de la lista.");
                break;
            case "2":
                const dataToAddToTail = prompt("Ingrese el valor a agregar al final:");
                lista.addToTail(dataToAddToTail);
                alert("Elemento agregado al final de la lista.");
                break;
            case "3":
                const removedFromHead = lista.removeFromHead();
                if (removedFromHead !== null) {
                    alert("Elemento eliminado desde el inicio: " + removedFromHead);
                } else {
                    alert("La lista está vacía.");
                }
                break;
            case "4":
                const removedFromTail = lista.removeFromTail();
                if (removedFromTail !== null) {
                    alert("Elemento eliminado desde el final: " + removedFromTail);
                } else {
                    alert("La lista está vacía.");
                }
                break;
            case "5":
                alert("Lista: " + lista.print());
                break;
            case "6":
                window.close()
                return
            default:
                alert("Opción inválida. Por favor, elija una opción válida.");
                break;
        }
    }
}

// Llama a la función del menú para comenzar a interactuar con la lista
menu();