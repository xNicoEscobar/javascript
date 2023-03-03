// ------inputs con condicionales y ciclos------//

let nombre_usuario = prompt("Por favor, ingrese su nombre.")
if (nombre_usuario == "" && Number) {
    alert("Ingrese un nombre válido")
} else { }

let nombre_juego = prompt("Bienvenido " + nombre_usuario + ", esto es un calculador de impuestos de juegos por Steam. \nPor favor, ingrese el nombre de su juego")
if (nombre_juego == "") {
    alert("Por favor, ingrese el nombre del juego.")
} else { }


(alert("A continuación, le calcularemos el precio final con los 800 impuestos aplicados que tenemos en nuestra querida Argentina 🤑 😎"))
let imp_totales = 1.79



let precio_juego = prompt("ingrese el valor del "+nombre_juego+" en números sin puntos ni comas. Si desea salir escriba fin");
while (true) {
    if (!isNaN(precio_juego) && precio_juego != null && precio_juego != "") {
        alert('Calculando precio...');
        break;
    } else if (precio_juego == 'fin') {
        break;
    } else {
        alert('Ingrese un valor correcto');
        continue;

    }
}


let valor_final = precio_juego * imp_totales

alert("El juego: " + nombre_juego + ", va a tener un valor final de: $" + valor_final + " argentinos.\nLos impuestos aplicados a la fecha de hoy son: \nIVA Servicios digitales = +21% \nPercepción impuesto IIBB provincia = +5% \nPercepción impuesto RG AFIP 4815 = +45% \nImpuesto PAIS = +8%")



/*

-------------declaración de impuestos a aplicar-------------

    IVA = 21%
    Servicios_digitales = 5%
    Percepcion = 45%
    Impuesto PAIS = 8%
------------------------------
    impuestos totales = 79%
------------------------------


*/

//------------------elementos basura------------------//


// alert("Su juego: "+nombre_juego+", va a tener un valor final de: $"+valor_final+" argentinos.\nLos impuestos aplicados a la fecha de hoy son: \nIVA Servicios digitales = +21% \nPercepción impuesto IIBB provincia = +5% \nPercepción impuesto RG AFIP 4815 = +45% \nImpuesto PAIS = +8%")