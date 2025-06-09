function cargarUsuarios(){
    console.log("Fetching data from read.php...");
    fetch("read.php")
      .then((response) => response.json())
      .then((data) => {
        data = data.datos;
        const tableBody = document.getElementById("usersTableBody");
        tableBody.innerHTML = ""; // Clear existing rows
        data.forEach((user) => {
          const row = document.createElement("tr");
          row.innerHTML = `
              <td>${user.id}</td>
              <td>${user.nombre} ${user.apellido}</td>
              <td>${user.correo}</td>
              <td>
                <button class="btn btn-primary btn-sm" onclick="editUser(${user.id})">Editars</button>
                <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">Borrar</button>
              </td>
            `;
          tableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
}

