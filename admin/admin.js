

function menuAdmin(opcion) {
  if (opcion === "usuarios") {
    mostrarUsuarios();
  } else if (opcion === "habitaciones") {
    mostrarHabitaciones();
  } else if (opcion === "reservas") {
    fetch("components/reservas.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("contenido").innerHTML = html;
        cargarReservas();
      })
      .catch((error) => {
        console.error("Error al cargar el contenido:", error);
      });
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

function mostrarUsuarios() {
  fetch("components/users.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("contenido").innerHTML = html;
    
      cargarUsuarios();
    })
    .catch((error) => {
      console.error("Error al cargar el contenido:", error);
    });
}


function cargarReservas() {
  fetch('../reserva/read.php')
      .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
      })
      .then(data => {
        data = data.datos; // Assuming the response has a 'datos' property
        var tbody = $("#reservasTable tbody");
        tbody.empty();
        data.forEach(function (reserva) {
          var fila = `<tr>
                  <td>${reserva.id}</td>
                  <td>${reserva.usuario_id}</td>
                  <td>${reserva.habitacion_id}</td>
                  <td>${reserva.fecha_ingreso}</td>
                  <td>${reserva.fecha_salida}</td>
                  <td>${reserva.estado}</td>
              </tr>`;
          tbody.append(fila);
        });
        $("#reservasTable").DataTable().draw();
      })
      .catch(() => {
          alert('Error al cargar las reservas.');
      });
}
