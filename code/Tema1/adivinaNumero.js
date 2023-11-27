var numeroSecreto = Math.trunc(Math.random() * 20) +1; //Crea un numero aleatorio
var intentos=7;
var logrado=0;

function adivinaNumero(numero, vidas, logrado){
    while(true){ //Empieza el ciclo
        vidas=vidas-1
        logrado += 1
        var usuario = prompt("Pense un número entre el 1 y el 20. ¿Cuál es?")
        if(usuario == 0){ //Evalua que se este cumpliendo una condicion
            break
        }
        else if(vidas == 0){
            alert("Has perdido")
            break
        }
        else if(usuario == numero){
            alert("Has gando al intento "+logrado)
            break
        }
        else if(usuario < numero){
            alert("El número es menor, vuelve a intentarlo")
        }
        else if(usuario > numero){
            alert("El número es mayor, vuelve a intentarlo")
        }
    }
}

adivinaNumero(numeroSecreto, intentos, logrado) //Se llama a la funcion y se ponen los parametros

