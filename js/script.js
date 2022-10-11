let op
let nombreProducto = ""
let precioUnitario = 0
let cantidad = 0
let precioTotal = 0
let accion

function menu() {
    console.log("-----------------------")
    console.log("1 - Agregar producto")
    console.log("2 - Quitar producto")
    console.log("3 - Mostrar producto")
    console.log("0 - Salir")
    console.log("-----------------------")
    op = Number(prompt("Ingrese una opción"))
    return op
}

function agregarProducto() {
    nombreProducto = prompt("Ingresar nombre del producto")
    while (nombreProducto == "") {
        console.log("Ingresar el nombre del producto es obligatorio.")
    }
    precioUnitario = Number(prompt("Ingresar precio unitario del producto"))
    while (precioUnitario <= 0) {
        console.log("Ingresar el precio unitario del producto es obligatorio.")
    }
    cantidad = Number(prompt("Ingresar cantidad del producto"))
    while (cantidad <= 0) {
        console.log("La cantidad del producto es obligatorio y debe ser mayor a cero.")
    }
    for (let i = 0; i < cantidad; i++) {
        precioTotal = precioUnitario * cantidad;
    }

    console.log("El producto: " + nombreProducto + " se agregó con éxito.")
}


function mostrarProducto() {
    if (nombreProducto != "") {
        console.log("******************")
        console.log("Nombre del producto: " + nombreProducto)
        console.log("Precio Unitario: " + precioUnitario.toFixed(2))
        console.log("Cantidad: " + cantidad)
        console.log("TOTAL: " + precioTotal.toFixed(2))
        console.log("******************")
    } else {
        console.log("Todavia no se agregó ningún producto.")
    }
}

function quitarProducto() {
    if (nombreProducto != "") {
        accion = prompt("¿Desea eliminar el producto? S/N")
        if (accion === 'S' || accion === 's') {
            nombreProducto = ""
            precioUnitario = 0
            cantidad = 0
            precioTotal = 0
            console.log("¡El producto se quitó correctamente!")
        } else {
            console.log("No se eliminó el producto.")
        }

    } else {
        console.log("Todavia no se agregó ningún producto.")
    }
}


while (menu() != 0) {

    switch (op) {
        case 1:
            agregarProducto()
            break;
        case 2:
            quitarProducto()
            break;
        case 3:
            mostrarProducto()
            break;
        default:
            break;
    }
}

alert("FIN DEL PROGRAMA")