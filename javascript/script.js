class Objeto{
    constructor(objeto, precio, cantidad){
    this.objeto = objeto,
    this.precio = parseFloat(precio), // convierte el precio a numero
    this.cantidad = parseInt(cantidad)// convierte la cantidad en numero entero
    }
}

const compra = [];
let continuar = true;


//Ciclo para agregar mas de un objeto


while (continuar){
let objeto = prompt("Ingresa que objeto queres comprar")
let precio = prompt("¿cuanto sale ese objeto?")
let cantidad = prompt("¿cuantos queres?")

let nuevoObjeto = new Objeto(objeto, precio, cantidad);
compra.push(nuevoObjeto); // Agregar la nueva instancia al array compra

let respuesta = prompt("¿quiere agregar otro objeto?  (si/no)") . toLowerCase();
     if (respuesta !== "si"){
        continuar = false
     }

}

console.log(compra); // Muestra el array compra para verificar

// Función para calcular el total de la compra
function totalCompra (objeto, precio, cantidad){
    let total = 0
    for (let item of compra){
        total += item.precio * item.cantidad
    }
    return total;
}

// Calcular el total de la compra y mostrarlo
let total = totalCompra(compra);
console.log("el total de su compra es: $"+ total )