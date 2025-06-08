function menuAdmin(opcion) {
  if (opcion === "usuarios") {
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
      dasboard();
    })
    .catch((error) => {
      console.error("Error al cargar el contenido:", error);
    });
}
