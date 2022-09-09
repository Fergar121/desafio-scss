
 let seccionesZapatillas = Number(prompt("Ingrese la seccion: 1 nike 2 Verano 3 rave 4 Buzos"));

 switch (seccionesZapatillas) {

     case 1:
        alert("Productos nike: Nike Air 70= 6000, Nike Airmax Colors= 5500, Nike Zoom= 4700");
        break;

     case 2:
       alert("Productos de Verano: Floops = 3500, Ojotas= 2700, Sandalias=4900");
        break;

     case 3:
         alert("Productos Rave = Rave Beige Lisas = 5500, Rave Negra = 6700, Rave gris= 4900");
         break;

     case 4:
         alert("Buzos: Buzo Dolce&Gabana = 5000, Buzo Tommy hilfigher= 5000, Buzo Gucci = 5000");
        break;

    default:
         alert("Error al ingresar la seccion");
        break;
};

// Crear un array que este vacio en los corchetes llamado productos
// Crear una funcion crearProductos() que construya un objeto el cual es el producto y pida las propiedades del mismo
// Crear una funcion que agregue los productos al array productos

let addProductos = [];

let proceso = true;

// debo crear una clase con su respectivo nombre, asi tambien pongo los valores del producto que este tenga, para esto se utiliza el "constructor" y el this en los valores

class producto{
    constructor (nombre, precio, stock){
    // aca se utiliza el this, un punto y el nombre del valor. 
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock ;
    }
};

// Funcion contructora de productos, esta sirve para crear los productos en base a los valores que di

function creadorProductos(){
    let nuevoProducto = [];
    let nombre = "";
    let precio = 0;
    let stock = 0; 

    nombre = prompt("introduzca el nombre del producto");
    precio = Number(prompt("inserte el precio"));
    stock = Number(prompt("inserte el numero de stock disponible"));

    nuevoProducto = new producto(nombre, precio, stock);

    return nuevoProducto;
};

// ahora creo una funcion para poder agregar los productos y que se retorne al producto creado

 function productoNuevo(){
     return (addProductos.push(creadorProductos()))
 };

// ahora, armo la estructura para poder insertar los productos en la consola o en el navegador

while (proceso){
    let consulta; 
    alert("inserte los datos del nuevo producto a crear");
    productoNuevo();

    do{
        pregunta = Number(prompt("Introducir datos de otro producto? Introduzca 1- si 2- no"))
        // aca aplico las opciones que quiero, entre agregar otro producto o no se utiliza el if

        if (pregunta == 1){
        alert("Seleccion la opcion 1, agregar otro producto");
        }
        else if(pregunta == 2){
            alert("Seleccionaste la opcion 2, no agregar otro producto");
            proceso = false; 
            // aca arriba, utilizo la variable proceso de arriba y la defino como falsa ya que el usuario no quiere agregar mas productos y asi logro cortar con la "cadena" para seguir agregando productos
            // en caso de no elegir una opcion correcta, utilizo el alert y else
        }
        else {
            alert("Opcion incorrecta");
        }
    }
    while (consulta < 1 || consulta > 2);
}

console.log(addProductos)