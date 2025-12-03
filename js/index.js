// Hola Mundo
// console.log("Hola Mundo!");

// Variables
/*
let num1 = 4;
let num2 = 5;

let incremento = num1++;
let decremento = num1--;
let resultadoSuma = num1 + num2;
let resultadoResta = num1 - num2;
let resultadoDiv = num1 / num2;
let resultadoMult = num1 * num2;
let resultadoMod = num1 % num2;

console.log("incremento "+incremento);
console.log("decremento "+decremento);
console.log("Suma "+resultadoSuma);
console.log("Resta "+resultadoResta);
console.log("Division "+resultadoDiv);
console.log("Multiplicación "+resultadoMult);
console.log("Modulo "+resultadoMod);
*/

//Funciones

// Ejecutar cuando la página se haya cargado
document.addEventListener("DOMContentLoaded", () => {
  actualizarCarrito();
});

// Agregar producto al carrito
document.getElementById("boton-agregar").addEventListener("click", function () {
  const producto = { id: 1, nombre: "Producto 1", precio: 10 };

  // Obtener carrito actual o crear uno vacío
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Agregar el producto
  carrito.push(producto);

  // Guardar carrito actualizado
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Actualizar vista
  actualizarCarrito();
});

// Vaciar carrito
document.getElementById("vaciar-carrito").addEventListener("click", function () {
  localStorage.removeItem("carrito"); // Elimina el carrito del almacenamiento
  actualizarCarrito(); // Limpia la lista en pantalla
});

// Función para mostrar el carrito
function actualizarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const listaCarrito = document.getElementById("lista-carrito");

  listaCarrito.innerHTML = "";

  if (carrito.length === 0) {
    const li = document.createElement("li");
    li.textContent = "El carrito está vacío.";
    listaCarrito.appendChild(li);
    return;
  }

  carrito.forEach(producto => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    listaCarrito.appendChild(li);
  });
}