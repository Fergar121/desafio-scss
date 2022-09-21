const stockDisponible = document.getElementById('stockDisponible');

const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const precioTotal = document.getElementById('precioTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarcarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
})

stock.forEach((producto)=> {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML=`
    <h3>${producto.nombre}</h3>
    <p class="PrecioProductos">Precio: ${producto.precio}</p>
    <button id="agregar ${producto.id}" class="button-agregar">Agregar<i class fas-fa-shopping-cart</button>
    `
    stockDisponible.appendChild(div)
    const boton = document.getElementById('agregar ${producto.id}')
    addEventListener('click', () => {
        agregarAlcarrito(producto.id)
    })
})

const agregarAlcarrito = (proID) => {
    const existe = carrito.some (prod => prod.id === prod.id)

    if(existe){
        const prod = carrito.map(prod => {
            if (prod.id === proId){
                prod.cantidad
            }
        })
        
    }else {
            const item = stockDisponible.find (prod => prod.id === prodId)
        carrito.push(item) 
      
        console.log (agregarAlcarrito)
        }
     actualizarcarrito()
}

const eliminarDelcarrito = (proID) =>{
    const item = carrito.find((prod) =>prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarcarrito()
}


const actualizarcarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement ('div')
        div.className= ('productosencarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelcarrito(${prod.id}" class="boton-eliminar">< i class="fas fa-trash-alt"></button>
        `
        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })

    contadorCarrito.innertext = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
}