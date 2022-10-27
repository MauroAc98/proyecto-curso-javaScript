
let op = 0
let rolAsignado = 0
const productos = []
const carrito = []
let indiceProducto = 1

//********************* A D M I N *************************
function agregarProducto() {
    let nombreProducto = prompt("Ingrese nombre del producto")
    let precioProducto = parseInt(prompt("Ingrese precio del producto"))
    let stockProducto = parseInt(prompt("Ingrese stock inicial del producto"))
    productos.push({
        indice: indiceProducto,
        nombre: nombreProducto,
        precio: precioProducto,
        stock: stockProducto
    })
    indiceProducto = indiceProducto + 1
    alert("¡Producto agregado correctamente!")
}

function mostrarProductos() {
    let vacio = false
    if (productos.length != 0) {
        let productosOfrecidos = `LISTA DE PRODUCTOS\n`
        for (const producto of productos) {
            productosOfrecidos += `\n${producto.indice}) - ${producto.nombre} - $ ${producto.precio} por unidad - stock: ${producto.stock}`
        }
        alert(productosOfrecidos)
    } else {
        alert("¡No hay productos para mostrar!")
        vacio = true
    }
    return vacio
}

function buscarProducto() {

    let producto = prompt("Ingrese el producto que desea buscar\n")

    let resultado = productos.findIndex(prod => prod.nombre === producto)

    return resultado
}

function quitarProducto() {
    let indiceDevuelto = buscarProducto()
    if (indiceDevuelto != -1) {
        accion = prompt("¿Desea eliminar el producto? S/N")
        if (accion === 'S' || accion === 's') {
            productos.splice(indiceDevuelto, 1)
            alert("¡El producto se quitó correctamente!")
        } else {
            alert("No se eliminó el producto.")
        }
    } else {
        alert("¡El producto buscado no existe!")
    }
}

//********************* A D M I N *************************


//********************* C L I E N T E *************************

function agregarCarrito() {
    let esVacio = mostrarProductos();
    console.log(esVacio)
    if (!esVacio) {
        stockProductos = `Ingrese el indice correspondiente al producto que desea agregar a su carrito de compra...\n`
        let accionUsuario = parseInt(prompt(stockProductos))
        while (isNaN(accionUsuario)) {
            alert("Por favor, ingrese sólo números")
            accionUsuario = parseInt(prompt(stockProductos))
        }

        while (accionUsuario < 1 || accionUsuario > productos.length) {
            alert("¡ERROR! opción fuera de rango")
            accionUsuario = parseInt(prompt(stockProductos))
        }

        carrito.push(productos[accionUsuario - 1])
        alert(`Agregamos a tu carrito el producto ${productos[accionUsuario - 1].nombre}\n`)
        restarStock(accionUsuario - 1)
    }
}

function restarStock(index) {
    productos[index].stock = productos[index].stock - 1
    alert(`¡El stock del producto ${productos[index].nombre} fue actualizado!`)
}

function mostrarCarrito() {
    if (carrito.length != 0) {
        let productoCarrito = "\nVas a llevar:\n"
        let precioTotal = 0
        for (const itemCarrito of carrito) {
            productoCarrito += `\n - ${itemCarrito.nombre} - $${itemCarrito.precio}`
            precioTotal += itemCarrito.precio
        }
        alert(`Repasemos: \n ${productoCarrito} \n por un total de $${precioTotal}`)
    }else{
        alert("El carrito de compras está vacio")
    }

}

//********************* C L I E N T E *************************

function menu() {
    if (rolAsignado == 0) {
        rolAsignado = elegirRol();
    }
    let acciones = ""
    if (rolAsignado === 1) {
        acciones = `USUARIO ADMIN \n1 - Agregar producto\n 2 - Quitar producto\n 3 - Mostrar productos\n 0 - Salir\n`
    } else if (rolAsignado === 2) {
        acciones = `USUARIO CLIENTE \n1 - Agregar al carrito\n 2 - Mostrar carrito\n 0 - Salir\n`
    }

    op = parseInt(prompt(acciones))
    while (isNaN(op)) {
        alert("Por favor, ingrese sólo números")
        op = parseInt(prompt(acciones))
    }
    while (op < 0 || op > 3) {
        alert("¡ERROR! opción fuera de rango")
        op = parseInt(prompt(acciones))
    }
    return op
}


function elegirRol() {
    let rol = `Elegir el rol para operar dentro del programa \n 1 - ADMIN \n 2 - CLIENTE \n 0 - SALIR \n`

    op = parseInt(prompt(rol))
    while (isNaN(op)) {
        alert("Por favor, ingrese sólo números")
        op = parseInt(prompt(rol))
    }

    while (op < 0 || op > 2) {
        alert("¡ERROR! opción fuera de rango")

        op = parseInt(prompt(rol))
    }
    rolAsignado = op;
    return op
}


//********************* P R I N C I P A L *************************

while (elegirRol() != 0) {
    while (menu() != 0) {
        if (rolAsignado === 1) {
            switch (op) {
                case 1:
                    agregarProducto()
                    break;
                case 2:
                    quitarProducto()
                    break;
                case 3:
                    mostrarProductos()
                    break;
                default:
                    break;
            }
        } else {
            switch (op) {
                case 1:
                    agregarCarrito()

                    break;
                case 2:
                    mostrarCarrito()
                    break;
                default:
                    break;
            }
        }
    }
}

//********************* P R I N C I P A L *************************