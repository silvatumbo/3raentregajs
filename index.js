// clase productos

class indumentaria {
    constructor(tipo, nombre, precio) {
        this.tipo = tipo
        this.nombre = nombre
        this.precio = precio
    }
}

//productos
const remera = new indumentaria(1, 'remera', 700)
const short = new indumentaria(2, 'short', 400)
const gorro = new indumentaria(3, 'gorro', 300)
const equipo = new indumentaria(4, 'equipo', 1000)

const productos = [remera, short, gorro, equipo]

let productoSeleccionado = prompt('Elige que deseas comprar: Remera-Short-Equipo-Gorro')
let contCompra = true
const carrito = []

while (contCompra === true) {
    const indumentaria = productos.find((producto) => producto.nombre === productoSeleccionado.toLocaleLowerCase().trim()
    )
if (indumentaria) {
    carrito.push(indumentaria)
} else {
    productoSeleccionado = prompt (
        'Elige un producto válido Remera, Short, Gorro, Equipo'
    )
    continue
}

const eleccion = prompt('Desea seguir comprando? si/no')
if (eleccion === 'si') {
    productoSeleccionado = prompt(
        'Elige que deseas comprar: Remera-Short-Equipo-Gorro'
    )
} else {
    contCompra = false
}
}
let totalcompra = 0
for (const indumentaria of carrito) {
    totalcompra = totalcompra + indumentaria.precio
}
alert('El valor de su compra es '+totalcompra)