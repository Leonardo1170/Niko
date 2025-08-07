// ========== Carrusel ==========
if (document.getElementById("carrusel-img")) {
  const imagenes = [
    "https://th.bing.com/th/id/OIP.EtjSfPZVEHntKVcGq8j57gHaHa?w=800&h=600",
    "https://static3.tcdn.com.br/img/img_prod/719636/tenis_nike_revolution_5_1255_1_20201214002752.jpg",
    "https://th.bing.com/th/id/OIP.7OZ8oVpp3sm9h1Q6VIXntQHaHa?w=800&h=600",
    "https://tse1.mm.bing.net/th/id/OIP.p51VkbQe4aJeVCdhnqbW7AHaHa?pid=ImgDet&w=800&h=600",
    "https://tse4.mm.bing.net/th/id/OIP.h5AZYvHkY6H9Z0dC12UbmAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  ];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % imagenes.length;
    const carruselImg = document.getElementById("carrusel-img");
    carruselImg.src = imagenes[index];
  }, 5000); // cambia cada 5 segundos
}

// ========== Productos ==========
const productos = [
  { id: 1, nombre: "Tenis Urbanos", precio: 1200, imagen: "https://th.bing.com/th/id/OIP.EtjSfPZVEHntKVcGq8j57gHaHa?w=206&h=206&c=7&r=0&o=7&pid=1.7&rm=3", desc: "Diseño casual y moderno para uso diario." },
  { id: 2, nombre: "Tenis Running", precio: 1500, imagen: "https://static3.tcdn.com.br/img/img_prod/719636/tenis_nike_revolution_5_1255_1_20201214002752.jpg", desc: "Ideales para correr largas distancias." },
  { id: 3, nombre: "Tenis Casual", precio: 1100, imagen: "https://th.bing.com/th/id/OIP.7OZ8oVpp3sm9h1Q6VIXntQHaHa?w=218&h=218&c=7&r=0&o=7&pid=1.7&rm=3", desc: "Perfectos para salir o ir al trabajo." },
  { id: 4, nombre: "Tenis Skate", precio: 1300, imagen: "https://tse1.mm.bing.net/th/id/OIP.p51VkbQe4aJeVCdhnqbW7AHaHa?pid=ImgDet&w=192&h=192&c=7&o=7&rm=3", desc: "Durabilidad extra para los amantes del skate." },
  { id: 5, nombre: "Tenis Training", precio: 1400, imagen: "https://www.sportsdirect.com/images/imgzoom/13/13149011_xxl_a3.jpg", desc: "Especiales para entrenamientos en gimnasio." },
  { id: 6, nombre: "Tenis Basketball", precio: 1700, imagen: "https://tse4.mm.bing.net/th/id/OIP.R8XbJiLFtID88owseyyRtQHaFM?pid=ImgDet&w=192&h=134&c=7&o=7&rm=3", desc: "Alta tracción y soporte para jugar basket." },
  { id: 7, nombre: "Tenis Moda", precio: 1600, imagen: "https://http2.mlstatic.com/tenis-tennis-nike-cortez-hombre-D_NQ_NP_662225-MCO25410939042_032017-O.jpg", desc: "Estilo urbano que impone tendencia." },
  { id: 8, nombre: "Tenis Classic", precio: 1000, imagen: "https://tse3.mm.bing.net/th/id/OIP.IAtcZ3j37TDXy4r7A_0QvAHaFM?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Diseño clásico para cualquier ocasión." },
  { id: 9, nombre: "Tenis Air", precio: 1900, imagen: "https://static.netshoes.com.br/produtos/tenis-nike-air-max-alpha-trainer-5-masculino/14/JD8-1026-014/JD8-1026-014_zoom5.jpg?ts=1694995322&ims=544x", desc: "Amortiguación con cámara de aire." },
  { id: 10, nombre: "Tenis Eco", precio: 900, imagen: "https://tse4.mm.bing.net/th/id/OIP.h5AZYvHkY6H9Z0dC12UbmAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Hechos con materiales reciclados." }
];

if (document.getElementById("productos-lista")) {
  const contenedor = document.getElementById("productos-lista");
  productos.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>${p.desc}</p>
      <p><strong>$${p.precio}</strong></p>

      <div class="select-group">
        <label for="talla-${p.id}">Talla:</label>
        <select id="talla-${p.id}" class="select-estilo">
          <option value="" disabled selected hidden>Selecciona una</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
        </select>
      </div>

      <div class="select-group">
        <label for="genero-${p.id}">Género:</label>
        <select id="genero-${p.id}" class="select-estilo">
          <option value="" disabled selected hidden>Selecciona</option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
        </select>
      </div>

      <button onclick="agregarAlCarrito(${p.id})">Agregar al carrito</button>
      <button onclick="comprarAhora(${p.id})">Comprar ahora</button>
    `;
    contenedor.appendChild(div);
  });
}

function agregarAlCarrito(id) {
  const usuario = localStorage.getItem("usuarioActivo");
  let cuentas = JSON.parse(localStorage.getItem("cuentas")) || {};

  if (!usuario || !cuentas[usuario]) {
    alert("Debes iniciar sesión para agregar al carrito.");
    return;
  }

  const talla = document.getElementById(`talla-${id}`).value;
  const genero = document.getElementById(`genero-${id}`).value;

  if (!talla || !genero) {
    alert("Selecciona una talla y género antes de agregar al carrito.");
    return;
  }

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const producto = productos.find(p => p.id === id);
  carrito.push({ ...producto, talla, genero });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito");
}

function comprarAhora(id) {
  const producto = productos.find(p => p.id === id);
  const talla = document.getElementById(`talla-${id}`).value;
  const genero = document.getElementById(`genero-${id}`).value;

  const usuario = localStorage.getItem("usuarioActivo");
  let cuentas = JSON.parse(localStorage.getItem("cuentas")) || {};

  if (!usuario || !cuentas[usuario]) {
    alert("Debes iniciar sesión para comprar.");
    return;
  }

  if (!talla || !genero) {
    alert("Selecciona una talla y género antes de comprar.");
    return;
  }

  let historial = cuentas[usuario].historial || [];
  historial.push({ ...producto, talla, genero });
  cuentas[usuario].historial = historial;
  localStorage.setItem("cuentas", JSON.stringify(cuentas));

  alert(`Has comprado "${producto.nombre}" (Talla ${talla}, Género ${genero}). Gracias 🛍️`);
}

// ========== Carrito ==========
if (document.getElementById("carrito-lista")) {
  const lista = document.getElementById("carrito-lista");
  const totalContenedor = document.getElementById("carrito-total");
  const botonPagar = document.getElementById("boton-pagar");
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  function renderCarrito() {
    lista.innerHTML = "";
    let total = 0;
    carrito.forEach((p, i) => {
      total += p.precio;
      const li = document.createElement("li");
      li.classList.add("carrito-item");
      li.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}" class="carrito-img">
        <div class="carrito-info">
          <h4>${p.nombre}</h4>
          <p>$${p.precio}</p>
          <p>Talla: ${p.talla || 'N/A'}</p>
          <p>Género: ${p.genero || 'N/A'}</p>
        </div>
        <button onclick="eliminar(${i})">Eliminar</button>
      `;
      lista.appendChild(li);
    });
    totalContenedor.innerHTML = `<h3>Total: $${total}</h3>`;
  }

  window.eliminar = function (i) {
    carrito.splice(i, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderCarrito();
  };

  botonPagar.addEventListener("click", () => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

  const usuario = localStorage.getItem("usuarioActivo");
let cuentas = JSON.parse(localStorage.getItem("cuentas")) || {};

if (!usuario || !cuentas[usuario]) {
  alert("Debes iniciar sesión para completar la compra.");
  return;
}

let historial = cuentas[usuario].historial || [];
historial = historial.concat(carrito);
cuentas[usuario].historial = historial;
localStorage.setItem("cuentas", JSON.stringify(cuentas));

    alert("Gracias por tu compra 🎉");
    localStorage.removeItem("carrito");
    carrito = [];
    renderCarrito();
  });

  renderCarrito();
}

// ========== Historial ==========
if (document.getElementById("historial-lista")) {
  const historialLista = document.getElementById("historial-lista");

  const usuario = localStorage.getItem("usuarioActivo");
  let cuentas = JSON.parse(localStorage.getItem("cuentas")) || {};

  // Si no hay sesión, redirige a login
  if (!usuario || !cuentas[usuario]) {
    alert("Debes iniciar sesión para ver tu historial.");
    location.href = "login.html";
  }

  let historial = cuentas[usuario].historial || [];

  function renderHistorial() {
    historialLista.innerHTML = "";

    if (historial.length === 0) {
      historialLista.innerHTML = "<p>No tienes compras aún.</p>";
      return;
    }

    historial.forEach((p, i) => {
      const li = document.createElement("li");
      li.classList.add("carrito-item");
      li.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}" class="carrito-img">
        <div class="carrito-info">
          <h4>${p.nombre}</h4>
          <p>$${p.precio}</p>
          <p>Talla: ${p.talla || 'N/A'}</p>
          <p>Género: ${p.genero || 'N/A'}</p>
        </div>
        <button onclick="devolverProducto(${i})">Devolver</button>
      `;
      historialLista.appendChild(li);
    });
  }

  window.devolverProducto = function(i) {
    historial.splice(i, 1);
    cuentas[usuario].historial = historial;
    localStorage.setItem("cuentas", JSON.stringify(cuentas));
    alert("La devolución ha sido registrada. El dinero se te será depositado en breve 💸");
    location.reload();
  };

  renderHistorial();
}

// ========== Menú hamburguesa ==========
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  if (toggle) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});

// ===== Navegación dinámica de sesión =====
window.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.getElementById("login-link");
  const usuario = localStorage.getItem("usuarioActivo");

  if (usuario && loginLink) {
    loginLink.innerHTML = `<a href="#" onclick="cerrarSesion()">Cerrar sesión (${usuario})</a>`;
  }
});

function cerrarSesion() {
  localStorage.removeItem("usuarioActivo");
  alert("Has cerrado sesión.");
  location.href = "index.html";
}

function iniciarSesion(e) {
  e.preventDefault();
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  let cuentas = JSON.parse(localStorage.getItem("cuentas")) || {};

  if (!cuentas[usuario]) {
    alert("El usuario no existe.");
    return;
  }

  if (cuentas[usuario].clave !== clave) {
    alert("Contraseña incorrecta.");
    return;
  }

  localStorage.setItem("usuarioActivo", usuario);
  alert("Sesión iniciada.");
  location.href = "index.html";
}
