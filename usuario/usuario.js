// Función para abrir el modal de login o registro
let usuarioActual = null; 

function abrirModal(tipo) {
  const modalContent = document.getElementById("loginModalContent")
  const modal = new bootstrap.Modal(document.getElementById("loginModal"))
  console.log(tipo)
  //Sesion
  if (tipo === "log") {
    fetch("../auth/form-login.html")
      .then((res) => res.text())
      .then((html) => {
        modalContent.innerHTML = html
        modal.show()
      })
      .catch((error) => {
        console.error("Error al cargar el formulario:", error)
      })
  } else if (tipo === "reg") {
    fetch("../auth/registro.html")
      .then((res) => res.text())
      .then((html) => {
        modalContent.innerHTML = html
        modal.show()
      })
      .catch((error) => {
        console.error("Error al cargar el formulario:", error)
      })
  } else if (tipo === "re") {
    fetch("../reserva/reserva.html")
      .then((res) => res.text())
      .then((html) => {
        modalContent.innerHTML = html
        modal.show()
      })
      .catch((error) => {
        console.error("Error al cargar el formulario de reserva:", error)
      })
    } ////HABITACIONES
  else if (tipo == "simple") {
  html = `
    <div class="modal-header border-0">
      <h5 class="modal-title text-success fw-bold">Habitación Simple</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
    </div>
    <div class="modal-body">
      <div class="text-center mb-4">
        <img src="img/simple.jpg" class="img-fluid rounded shadow" alt="Habitación Simple" style="max-height: 300px; object-fit: cover;">
      </div>
      <p class="text-muted text-center">Perfecta para viajeros de negocios o quienes buscan una estancia privada y cómoda.</p>
      <hr>
      <h6 class="text-success fw-bold mb-3">Características:</h6>
      <div class="row">
        <div class="col-6">
          <ul class="list-unstyled">
            <li><i class="fa-solid fa-bed text-success me-2"></i>Cama queen size</li>
            <li><i class="fa-solid fa-bath text-success me-2"></i>Baño privado</li>
          </ul>
        </div>
        <div class="col-6">
          <ul class="list-unstyled">
            <li><i class="fa-solid fa-wifi text-success me-2"></i>Wi-Fi gratuito</li>
            <li><i class="fa-solid fa-tv text-success me-2"></i>TV LCD</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="modal-footer border-0">
      <button type="button" class="btn btn-success w-100" data-bs-dismiss="modal">Cerrar</button>
    </div>`;
  modalContent.innerHTML = html;
  modal.show();
} else if (tipo == "doble") {
  html = `
    <div class="modal-header border-0">
      <h5 class="modal-title text-success fw-bold">Habitación Doble</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
    </div>
    <div class="modal-body">
      <div class="text-center mb-4">
        <img src="img/doble.jpg" class="img-fluid rounded shadow" alt="Habitación Doble" style="max-height: 300px; object-fit: cover;">
      </div>
      <p class="text-muted text-center">Ideal para dos personas que buscan comodidad y espacio.</p>
      <hr>
      <h6 class="text-success fw-bold mb-3">Características:</h6>
      <div class="row">
        <div class="col-6">
          <ul class="list-unstyled">
            <li><i class="fa-solid fa-bed text-success me-2"></i>Dos camas individuales</li>
            <li><i class="fa-solid fa-bath text-success me-2"></i>Baño completo</li>
          </ul>
        </div>
        <div class="col-6">
          <ul class="list-unstyled">
            <li><i class="fa-solid fa-wifi text-success me-2"></i>Wi-Fi gratuito</li>
            <li><i class="fa-solid fa-tv text-success me-2"></i>TV LCD</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="modal-footer border-0">
      <button type="button" class="btn btn-success w-100" data-bs-dismiss="modal">Cerrar</button>
    </div>`;
  modalContent.innerHTML = html;
  modal.show();
}

else if (tipo == "familiar") {
  html = `
    <div class="modal-header border-0">
      <h5 class="modal-title text-success fw-bold">Habitación Familiar</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
    </div>
    <div class="modal-body">
      <div class="text-center mb-4">
        <img src="img/familiar.jpeg" class="img-fluid rounded shadow" alt="Habitación Familiar" style="max-height: 300px; object-fit: cover;">
      </div>
      <p class="text-muted text-center">Espacio perfecto para familias, con comodidad y funcionalidad en mente.</p>
      <hr>
      <h6 class="text-success fw-bold mb-3">Características:</h6>
      <div class="row">
        <div class="col-6">
          <ul class="list-unstyled">
            <li><i class="fa-solid fa-bed text-success me-2"></i>Cama king size + 2 individuales</li>
            <li><i class="fa-solid fa-bath text-success me-2"></i>Baño amplio</li>
          </ul>
        </div>
        <div class="col-6">
          <ul class="list-unstyled">
            <li><i class="fa-solid fa-wifi text-success me-2"></i>Wi-Fi gratuito</li>
            <li><i class="fa-solid fa-tv text-success me-2"></i>TV Smart 42”</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="modal-footer border-0">
      <button type="button" class="btn btn-success w-100" data-bs-dismiss="modal">Cerrar</button>
    </div>`;
  modalContent.innerHTML = html;
  modal.show();
}



  // Galeria

    else if (tipo == "Recepción") {
  html = `
    <div class="modal-header">
      <h5 class="modal-title text-success fw-bold">Recepción</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
    </div>
    <div class="modal-body text-center">
      <img src="img/decorar-recepcion-hotel.jpg" class="img-fluid rounded mb-3" alt="Recepción del hotel" style="max-height: 300px; object-fit: cover;">
      <p class="mb-1">Te damos la bienvenida a nuestra recepción, donde comienza tu experiencia con nosotros.</p>
      <p class="text-muted">Nuestro personal estará encantado de ayudarte en todo momento.</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Cerrar</button>
    </div>
  `
  modalContent.innerHTML = html
  modal.show()
} else if (tipo == "Piscina") {
  html = `
    <div class="modal-header">
      <h5 class="modal-title text-success fw-bold">Piscina</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
    </div>
    <div class="modal-body text-center">
      <img src="img/piscina-descanso.jpg" class="img-fluid rounded mb-3" alt="Piscina del hotel" style="max-height: 300px; object-fit: cover;">
      <p class="mb-1">Sumérgete en nuestra piscina climatizada, el espacio perfecto para descansar.</p>
      <p class="text-muted">Disponible todos los días de 8:00 a.m. a 10:00 p.m.</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Cerrar</button>
    </div>
  `
  modalContent.innerHTML = html
  modal.show()
} else if (tipo == "Habitación") {
  html = `
    <div class="modal-header">
      <h5 class="modal-title text-success fw-bold">Habitación</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
    </div>
    <div class="modal-body text-center">
      <img src="img/Suite-Hotel-Fariones-Playa-Lanzarote.jpg" class="img-fluid rounded mb-3" alt="Habitación del hotel" style="max-height: 300px; object-fit: cover;">
      <p class="mb-1">Descansa en nuestras acogedoras habitaciones, cuidadosamente preparadas para ti.</p>
      <p class="text-muted">Con aire acondicionado, Wi-Fi y vistas al jardín o la ciudad.</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Cerrar</button>
    </div>
  `
  modalContent.innerHTML = html
  modal.show()
}



}

// Función para verificar si el usuario está autenticado
function verificarSesion() {
  fetch("../core/verificarsesion.php")
    .then((response) => response.json())
    .then((data) => {
      const usuarioNombre = document.getElementById("usuarioNombre")
      const reservabtn = document.getElementById("reservabtn")
      const reservalnk = document.getElementById("reservalnk")
      if (!usuarioNombre) return

      if (data.autenticado) {
        usuarioActual = data;
        // Usuario autenticado - mostrar información del perfil
        usuarioNombre.innerHTML = `
          <div class="dropdown">
            <button class="btn btn-custom dropdown-toggle" type="button" id="perfilDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-user-circle me-2"></i> ${data.nombre}
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="perfilDropdown">
              <li><a class="dropdown-item" onclick="mostrarPerfil()"><i class="fa-solid fa-id-card me-2"></i> Mi Perfil</a></li>
              <li><a class="dropdown-item" href="../usuario/reservaciones.html"><i class="fa-solid fa-calendar-check me-2"></i> Mis Reservaciones</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item text-danger" href="#" onclick="cerrarSesion()"><i class="fa-solid fa-sign-out-alt me-2"></i> Cerrar Sesión</a></li>
            </ul>
          </div>
        `
        reservabtn.innerHTML = `<a class="nav-link" href="#" onclick=" abrirModal('re')">Reservar</a>
        `
        reservalnk.setAttribute("onclick", "abrirModal('re')")

      
      } else {
        // Usuario no autenticado - mostrar botón de inicio de sesión
        usuarioNombre.innerHTML = `
          <button class="btn btn-custom" type="button" onclick="abrirModal('log')">
            <i class="fa-solid fa-user-circle me-2"></i> Iniciar sesión
          </button>
        `
      }
    })
    .catch((error) => {
      console.error("Error al verificar la sesión:", error)
      // En caso de error, mostrar el botón de inicio de sesión
      const usuarioNombre = document.getElementById("usuarioNombre")
      if (usuarioNombre) {
        usuarioNombre.innerHTML = `
          <button class="btn btn-custom" type="button" onclick="abrirModal('log')">
            <i class="fa-solid fa-user-circle me-2"></i> Iniciar sesión
          </button>
        `
      }
    })
}

// Función para cerrar sesión
function cerrarSesion() {
  if (confirm("¿Estás seguro de que quieres cerrar sesión?")) {
    fetch("../core/cerrarSesion.php")
      .then(() => {
        // Recargar la página después de cerrar sesión
        window.location.reload()
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error)
        // Aún así recargar la página
        window.location.reload()
      })
  }
}

function mostrarPerfil() {
  const modalContent = document.getElementById("loginModalContent")
  const modal = new bootstrap.Modal(document.getElementById("loginModal"))

  const html = `
       <h5 class="modal-title text-success fw-bold">Mi Perfil</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
    </div>
    <div class="modal-body text-center">
      <h6 class="fw-bold">${usuarioActual.nombre} </h6>
      <p class="text-muted mb-2">Correo: ${usuarioActual.correo}</p>
      <hr>
      <button class="btn btn-outline-success mt-2" onclick="editarPerfil()">Editar Perfil</button>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cerrar</button>
    </div>
  `;

  modalContent.innerHTML = html;
  modal.show();
}


// Verificar sesión cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
  verificarSesion()
})

// Hacer las funciones disponibles globalmente
window.abrirModal = abrirModal
window.cerrarSesion = cerrarSesion