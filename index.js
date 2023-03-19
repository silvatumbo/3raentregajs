const divProductos = document.getElementById('divProductos')

// clase productos

class indumentaria {
    constructor(tipo, nombre, precio) {
        this.tipo = tipo
        this.nombre = nombre
        this.precio = precio
    }
}

const ropa = [
    new indumentaria(1, 'Remera', 700),
    new indumentaria(2, 'Short', 400),
    new indumentaria(3, 'Gorro', 300),
    new indumentaria(4, 'Medias', 200),
    new indumentaria(5, 'Equipo', 1000),
    new indumentaria(6, 'Pelotas', 500)
]

ropa.forEach(prod => {
    divProductos.innerHTML += `<div class="card">
    <div class="card-body">
      <h5 class="card-title">${prod.nombre}</h5>
      <p class="card-text">${prod.precio}</p>
      <button id=${prod.tipo} class="btn btn-success">AGREGAR</button>
    </div>
    </div>`
}
)

const carrito = []

const botonesAgregar = document.querySelectorAll('.btn-success')
botonesAgregar.forEach((boton) => {
    boton.onclick = () => {
        const indumentaria = ropa.find((prod) => prod.tipo === parseInt(boton.tipo))

        const prodCarrito = {
            tipo: ropa.tipo,
            nombre: ropa.nombre,
            precio: ropa.precio,
            cantidad: 1,
        }

        const indexProd = carrito.findIndex((prod) => prod.tipo === prodCarrito.tipo)
        if (indexProd === -1) {
            carrito.push(prodCarrito)
        } else {
            carrito[indexProd].cantidad++
        }
    }
})

// boton finalizar
const botonFinalizar = document.querySelector('#finalizar')
const thead = document.querySelector('#thead')
const tbody = document.querySelector('#tbody')
const parrafoTotal = document.querySelector('#total')
botonFinalizar.onclick = () => {
    divProductos.remove()
    botonFinalizar.remove()
    thead.innerHTML = `<tr>
  <th scope="col">Producto</th>
  <th scope="col">Cantidad</th>
  <th scope="col">Total</th>
  </tr>`

    let totalCompra = 0
    carrito.forEach(prod => {
        totalCompra += prod.cantidad * prod.precio
        tbody.innerHTML += `
      <tr>
        <td>${prod.nombre}</td>
        <td>${prod.cantidad}</td>
        <td>${prod.cantidad * prod.precio}</td>
      </tr>
      `
    })
    parrafoTotal.innerText = `El total de tu compra es ${totalCompra}`
}