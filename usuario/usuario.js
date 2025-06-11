// Función para abrir el modal de login o registro
function abrirModal(tipo = "log") {
  const modalContent = document.getElementById("loginModalContent")
  const modal = new bootstrap.Modal(document.getElementById("loginModal"))

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
        // Usuario autenticado - mostrar información del perfil
        usuarioNombre.innerHTML = `
          <div class="dropdown">
            <button class="btn btn-custom dropdown-toggle" type="button" id="perfilDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-user-circle me-2"></i> ${data.nombre}
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="perfilDropdown">
              <li><a class="dropdown-item" href="../usuario/perfil.html"><i class="fa-solid fa-id-card me-2"></i> Mi Perfil</a></li>
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

// Verificar sesión cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
  verificarSesion()
})

// Hacer las funciones disponibles globalmente
window.abrirModal = abrirModal
window.cerrarSesion = cerrarSesion