alert('Hola mundo') //El uso de comillas simples ('') o dobles (""), en JScript es indiferente, pero con la particularidad de usar las mismas en la línea de código
//En JScript, el uso de ";" no es obligatorio

//Declaración de variables
// let numeroSecreto = 6;
let numeroSecreto = Math.floor(Math.random()*10) + 1; //Creación de un número pseudoaleatorio desde 1 hasta 10;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez'
let maxIntentos = 3;

while(numeroUsuario!=numeroSecreto){ //Comparación de desigualdad '!='
    ;
    numeroUsuario = parseInt(prompt("Me indicas un número entero entre 1 y 10 por favor:")); //Solicitando un número al usuario
    console.log(numeroUsuario + ' ' + intentos); //Muestra la variable en la cónsola del navegador
    console.log(numeroSecreto)
    /*
    Código de comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Condición de acierto
        // alert(`FELICIDADES! Acertaste con el número: ${numeroUsuario} en ${intentos} ${palabraVeces}`);
        alert(`FELICIDADES! Acertaste con el número: ${numeroUsuario} en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);

        // El uso de las comillas invertidas `` se realiza para las "templates string", en donde se adicionan variables en cadenas de texto
        // La sintaxis ${} es usada para llamar una variable en cadena de texto
    }else{
        //Condición de fallo
        if(numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        } else alert('El número secreto es mayor');

        //alert('Lo siento, pero no acertaste el número, así que vuelve a intentarlo');
        //numeroUsuario = prompt("Me indicas un número entero entre 1 y 10 por favor:");
    }

    intentos ++;
    palabraVeces = 'veces';

    // Limitar el número de intentos
    if(intentos > maxIntentos){
        alert(`Has alcanzado la máxima cantidad de ${maxIntentos} intentos. ADIOS!`);
        break; //este break rompe el ciclo WHILE cuando se cumpla la condición
    }
}