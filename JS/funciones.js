function formEncuesta() {
    while (true) {
        
        let pregunta1 = prompt("Pregunta 1.\n¿Cuál fue la modalidad del trámite que realizaste?\n" 
                               + modvirtual + "\n" + modvirtualPresencial + "\n" + modpresencial);
        
        // Convertir la entrada a número
        modtramite = parseInt(pregunta1);
        console.log("Modalidad del trámite:", modtramite);

        // Si la entrada es un número entre 0 y 5, salir del bucle
        if (!isNaN(modtramite) && modtramite >= 0 && modtramite <= 5) {
            break;
        } else {
            // Si la opción no es válida, mostrar un mensaje de error y repetir la pregunta
            alert("Por favor, ingresa el número de la opción elegida: 0, 1, 2, 3, 4 o 5.");
        }
    } 

    while (true) {
        let pregunta2 = prompt("Pregunta 2. \n" +"¿Cuánto tiempo estimas que dedicaste a leer y comprender los requisitos del trámite? \n" + valort0 + "\n" + valort1 + "\n" + valort2 + "\n" + valort3 + "\n" + valort4 + "\n" + valort5); 
                
        // Convertir la entrada a número
        tiempoLectura = parseInt(pregunta2);
        console.log("Tiempo de lectura:", tiempoLectura);

        // Si la entrada es un número entre 0 y 5, salir del bucle
        if (!isNaN(tiempoLectura) && tiempoLectura >= 0 && tiempoLectura <= 5) {
            break;
        } else {
            // Si la opción no es válida, mostrar un mensaje de error y repetir la pregunta
            alert("Por favor, ingresa el número de la opción elegida: 0, 1, 2, 3, 4 o 5.");
        }
    } 
    
    while (true) {
        let pregunta3 = prompt("Pregunta 3. \n" + "¿Cuánto tiempo estimas que dedicaste a llenar los formularios y recolectar la documentación necesaria para el trámite? \n" + valort0 + "\n" + valort1 + "\n" + valort2 + "\n" + valort3 + "\n" + valort4 + "\n" + valort5); 
                
        // Convertir la entrada a número
        tiempoLlenado = parseInt(pregunta3);
        console.log("Tiempo de llenado de formularios:", tiempoLlenado);

        // Si la entrada es un número entre 0 y 5, salir del bucle
        if (!isNaN(tiempoLlenado) && tiempoLlenado >= 0 && tiempoLlenado <= 5) {
            break;
        } else {
            // Si la opción no es válida, mostrar un mensaje de error y repetir la pregunta
            alert("Por favor, ingresa el número de la opción elegida: 0, 1, 2, 3, 4 o 5.");
        }
    } 
    
    while (true) {
        let pregunta4 = prompt("Pregunta 4. \n" + "¿Cuánto tiempo tomaste en desplazarte hacia la institución estatal y de regreso? \n" + valort0 + "\n" + valort1 + "\n" + valort2 + "\n" + valort3 + "\n" + valort4 + "\n" + valort5);  
                
        // Convertir la entrada a número
        tiempoTraslado = parseInt(pregunta4);
        console.log("Tiempo de traslado:", tiempoTraslado);

        // Si la entrada es un número entre 0 y 5, salir del bucle
        if (!isNaN(tiempoTraslado) && tiempoTraslado >= 0 && tiempoTraslado <= 5) {
            break;
        } else {
            // Si la opción no es válida, mostrar un mensaje de error y repetir la pregunta
            alert("Por favor, ingresa el número de la opción elegida: 0, 1, 2, 3, 4 o 5.");
        }
    } 
    
    while (true) {
        let pregunta5 = prompt("Pregunta 5. \n" + "¿Cuánto tiempo te llevó iniciar el trámite? \n" + valort0 + "\n" + valort1 + "\n" + valort2 + "\n" + valort3 + "\n" + valort4 + "\n" + valort5);  
                
        // Convertir la entrada a número
        tiempoInicio = parseInt(pregunta5);
        console.log("Tiempo de inicio del trámite:", tiempoInicio);

        // Si la entrada es un número entre 0 y 5, salir del bucle
        if (!isNaN(tiempoInicio) && tiempoInicio >= 0 && tiempoInicio <= 5) {
            break;
        } else {
            // Si la opción no es válida, mostrar un mensaje de error y repetir la pregunta
            alert("Por favor, ingresa el número de la opción elegida: 0, 1, 2, 3, 4 o 5.");
        }
    } 
    
    while (true) {
        let pregunta6 = prompt("Pregunta 6. \n" + "¿Cuánto tiempo transcurrió desde que iniciaste el trámite hasta que recibiste la resolución final? \n" + valortd0 + "\n" + valortd1 + "\n" + valortd2 + "\n" + valortd3 + "\n" + valortd4 + "\n" + valortd5); 
                
        // Convertir la entrada a número
        tiempoResol = parseInt(pregunta6);
        console.log("Tiempo de inicio del trámite:", tiempoResol);

        // Si la entrada es un número entre 0 y 5, salir del bucle
        if (!isNaN(tiempoResol) && tiempoResol >= 0 && tiempoResol <= 5) {
            break;
        } else {
            // Si la opción no es válida, mostrar un mensaje de error y repetir la pregunta
            alert("Por favor, ingresa el número de la opción elegida: 0, 1, 2, 3, 4 o 5.");
        }
    } 
    
    let pregunta7 = tiempoResol * 1692;
    VST = parseInt(pregunta7);
    alert ("Valor social del tiempo: " + VST + "\n" + "Presione [Aceptar] para continuar con la encuesta." );
    console.log("Valor social del tiempo:", VST);

    while (true) {
        let pregunta8 = prompt("Pregunta 8. \n" + "¿Cuánto dinero te costó el trámite? \n"  + "Digita el valor sin puntos ni comas." + "\n" + "Si el trámite no tiene costo de tarifa, digita 0 (cero).");
        tarifaTramite = parseInt(pregunta8);
        console.log("Tarifa tramite:", tarifaTramite);

        // Si la entrada es un número mayor o igual a 0, salir del bucle
        if (!isNaN(tarifaTramite) && tarifaTramite >= 0) {
            break;
        } else {
            // Si la opción no es válida, mostrar un mensaje de error y repetir la pregunta
            alert("Por favor, ingresa un número sin puntos ni comas." + "\n" + "Si el trámite no tiene costo de tarifa, digita 0 (cero).");
        }
    } 

        while (true) {
        let pregunta9= prompt("Pregunta 9. \n" +"¿Cuántas veces tuviste que ir a la institución estatal para completar este trámite? \n" + cantVisitas0 + "\n" + cantVisitas1 + "\n" + cantVisitas2 + "\n" + cantVisitas3 + "\n" + cantVisitas4 + "\n" + cantVisitas5); 
                
        // Convertir la entrada a número
        visitasIE = parseInt(pregunta9) * 2;
        console.log("Cantidad de visitas a la IE:", pregunta9);

        
        // Si la entrada es un número entre 0 y 5, salir del bucle
        if (!isNaN(visitasIE) && visitasIE >= 0 && visitasIE <= 5) {
            break;
        } else {
            // Si la opción no es válida, mostrar un mensaje de error y repetir la pregunta
            alert("Por favor, ingresa el número de la opción elegida: 0, 1, 2, 3, 4 o 5.");
        }
    
    while (true) {
        let pregunta10 = prompt("Pregunta 10. \n" + "¿Cuánto dinero gastaste en transporte para ir a la IE a realizar este trámite? \n"  + "Digita el valor del boleto de ida, sin puntos ni comas." + "\n" + "Si no tuviste costo de transporte, digita 0 (cero).");
        costoTrans = parseInt(pregunta10) * visitasIE;
        console.log("Costo de trasnsporte:", costoTrans);

       // Si la entrada es un número mayor o igual a 0, salir del bucle
        if (!isNaN(tiempoResol) && tiempoResol >= 0 && tiempoResol <= 5) {
            break;
        } else {
            // Si la opción no es válida, mostrar un mensaje de error y repetir la pregunta
            alert("Por favor, digita el valor del boleto de ida, sin puntos ni comas." + "\n" + "Si no tuviste costo de transporte, digita 0 (cero).");
        }
    }  

    let resultadoFinal = tiempoLectura + tiempoLlenado + tiempoTraslado + tiempoInicio + VST + tarifaTramite + visitasIE + costoTrans;
    
    alert("El valor de la carga burocrática de tu trámite es: " + resultadoFinal);
    console.log("Carga burocrática total:", resultadoFinal);
// Almacenar respuestas
respuestas.modtramite = modtramite;
respuestas.tiempoLectura = tiempoLectura;
respuestas.tiempoLlenado = tiempoLlenado;
respuestas.tiempoTraslado = tiempoTraslado;
respuestas.tiempoInicio = tiempoInicio;
respuestas.tiempoResol = tiempoResol;
respuestas.VST = VST;
respuestas.tarifaTramite = tarifaTramite;
respuestas.visitasIE = visitasIE;
respuestas.costoTrans = costoTrans;
respuestas.cargaBurocratica = resultadoFinal;

respuestasEncuestas.push({ ...respuestas }); // Agregar objeto a array
console.log("Objeto de respuestas:", respuestas);

// Acumular en el array correspondiente según modalidad
switch (modtramite) {
    case 1: // Solo virtual
        cargaBurocraticaSoloVirtual.push(resultadoFinal);
        break;
    case 2: // Virtual y presencial
        cargaBurocraticaVirtualYPresencial.push(resultadoFinal);
        break;
    case 3: // Solo presencial
        cargaBurocraticaSoloPresencial.push(resultadoFinal);
        break;
}
        
}

function ejecutarEncuestas() {
    while (contadorEncuestas < maxEncuestas) {
        formEncuesta(); // Llama a la función de la encuesta
        contadorEncuestas++; // Incrementa el contador
    }
    alert("Has completado todas las encuestas."); // Mensaje final
}


function calcularPromedio(array) {
    if (array.length === 0) return 0; // Evitar división por cero
    const suma = array.reduce((accum, curr) => accum + curr, 0);
    return suma / array.length;
}

}

