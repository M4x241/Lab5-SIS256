function cargarUsuarios() {
  console.log("Fetching data from read.php...");
  fetch("read.php")
    .then((response) => response.json())
    .then((data) => {
      data = data.datos;
      const tableBody = document.getElementById("usersTableBody");
      tableBody.innerHTML = ""; // Clear existing rows
      let i = 0;
      data.forEach((user) => {
        const row = document.createElement("tr");
        i++;
        row.innerHTML = `
            <td>${i}</td>
            <td>${user.nombre} ${user.apellido}</td>
            <td>${user.correo}</td>
            <td>
              <button class="btn btn-primary btn-sm" onclick="editUser(${user.id})">Editar</button>
              <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">Borrar</button>
            </td>
          `;
        tableBody.appendChild(row);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function deleteUser(id) {
  url = "delete.php?id=" + id;
  console.log("Función derccc ejecutadsa con ID:", id);
  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response data:", data);
      if (data.success) {
        alert("Usuario Eliminado");
        cargarUsuarios();
      } else {
        alert("Error al eliminar el usuario: " + data.message);
        console.error("Error deleting user:", data.message);
      }
    })
    .catch((error) => console.error("Error:", error));
}

function editUser(id) {
  fetch("read_id.php?id=" + id)
    .then((response) => response.json())
    .then((data) => {
      const user = data.datos;
      console.log("User data:", data);
      abrirModalEditarUsuario(user);
      // Show the edit modal or form here
    })
    .catch((error) => console.error("Error fetching user data:", error));
}



function abrirModalAnadirHabitacion() {
  document.getElementById("formAnadirHabitacion").reset();
  var modal = new bootstrap.Modal(
    document.getElementById("anadirHabitacionModal")
  );
  modal.show();
}

function abrirModalEditarUsuario(usuario) {
  // usuario: objeto con datos del usuario a editar
  document.getElementById("usuarioId").value = usuario.id || "";
  document.getElementById("usuarioNombre").value = usuario.nombre || "";
  document.getElementById("usuarioEmail").value = usuario.correo || "";
  document.getElementById("usuarioRol").value = usuario.rol || "user";
  document.getElementById("usuarioPassword").value = usuario.password || "";
  document.getElementById("usuarioApellido").value = usuario.apellido || "";
  var modal = new bootstrap.Modal(
    document.getElementById("editarUsuarioModal")
  );
  modal.show();
}