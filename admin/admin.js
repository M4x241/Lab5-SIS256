

function menuAdmin(opcion) {
  if (opcion === "usuarios") {
    mostrarUsuarios();
  } else if (opcion === "habitaciones") {
    mostrarHabitaciones();
  } else if (opcion === "notificaciones") {
  } else if (opcion === "eventos") {
  }
}

function mostrarHabitaciones() {
  fetch("dashboard.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("contenido").innerHTML = html;
      document.getElementById("titulo_seccion").innerHTML = "Dashboard";
      dasboard();
    })
    .catch((error) => {
      console.error("Error al cargar el contenido:", error);
    });
}

function mostrarUsuarios() {
  fetch("components/users.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("contenido").innerHTML = html;
      document.getElementById("titulo_seccion").innerHTML = "Usuarios";
    
      cargarUsuarios();
    })
    .catch((error) => {
      console.error("Error al cargar el contenido:", error);
    });
}