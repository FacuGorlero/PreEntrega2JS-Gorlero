
const Producto = function(marca, stock, precio, producto) {
    this.marca = marca;
    this.stock = stock;
    this.precio = precio;
    this.producto = producto
}

let producto1 = new Producto("adidas", 10, 7500,"buzo oversize");
let producto2 = new Producto("adidas", 30, 3500,"remera oversize");
let producto3 = new Producto("adidas", 20, 12500,"pantalon de cuero");
let producto4 = new Producto("adidas", 5, 45000,"zapatillas");
let producto5 = new Producto("nike", 7, 5500,"campera con cierre");
let producto6 = new Producto("nike", 8, 15000,"campera para nieve");
let producto7 = new Producto("kevingstone", 15, 3500,"remeras oversize");
let producto8 = new Producto("kevingstone", 18, 12500,"pantalones de jean");
let producto9 = new Producto("kevingstone", 2, 6500,"buzos");
let producto10 = new Producto("zara", 1, 6500,"remeras relaxfit");
let producto11 = new Producto("zara", 9, 2500,"medias");
let producto12 = new Producto("zara", 12, 1500,"boxers");


let lista = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12]


function mostrarproducto(){
    let marcaproducto = prompt("Ingrese la marca del producto que esta buscando").toUpperCase()
    let resultado = lista.filter((producto)=> producto.marca.toUpperCase().includes(marcaproducto))
    
    if(resultado.length > 0){
        console.table(resultado)
    }else{
        alert("No pudimos encontrar la marca "+ marcaproducto)
    }
}

mostrarproducto()