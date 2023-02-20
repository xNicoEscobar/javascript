
// ------inputs con condicionales y ciclos------//

let nombre_usuario = prompt("Por favor, ingrese su nombre.")
if (nombre_usuario == "" && Number){
    alert("Ingrese un nombre válido")
}else{}

let nombre_juego = prompt("Bienvenido "+nombre_usuario+", esto es un calculador de impuestos de juegos por Steam. \nPor favor, ingrese el nombre de su juego")
if(nombre_juego == ""){
    alert("Por favor, ingrese el nombre del juego.")
}else{}

    
let precio_juego = Number(prompt("Ahora, ingrese el precio del "+nombre_juego+" tal cual le figura por Steam. Le calcularemos el precio final con los 800 impuestos aplicados que tenemos en Argentina 🤑 😎"))
let imp_totales = 1.79


let valor_final = precio_juego * imp_totales 

if (precio_juego == "" && String){
    alert("Por favor, ingrese un valor en números sin puntos ni comas")
}else{alert("Su juego: "+nombre_juego+", va a tener un valor final de: $"+valor_final+" argentinos.\nLos impuestos aplicados a la fecha de hoy son: \nIVA Servicios digitales = +21% \nPercepción impuesto IIBB provincia = +5% \nPercepción impuesto RG AFIP 4815 = +45% \nImpuesto PAIS = +8%")}



// if(isNaN(precio_juego)){
    //     alert("Por favor, ingresá el valor del juego en números sin puntos ni comas.")
    // }else{
        // }
        
//-------------declaración de impuestos a aplicar-------------/


// alert("Su juego: "+nombre_juego+", va a tener un valor final de: $"+valor_final+" argentinos.\nLos impuestos aplicados a la fecha de hoy son: \nIVA Servicios digitales = +21% \nPercepción impuesto IIBB provincia = +5% \nPercepción impuesto RG AFIP 4815 = +45% \nImpuesto PAIS = +8%")






// let iva = 0.21
// let servicios_digitales = 0.05
// let percepcion = 0.45
// let imp_pais = 0.08