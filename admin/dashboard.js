function dasboard() {
  var input = document.getElementsByName("tipo");

  input.forEach(function (element) {
    element.addEventListener("change", function () {
      let tipo = this.value;
      console.log("Tipo seleccionado: " + tipo);
      renderizarTabla(tipo);
    });
  });
  tablahabitaciones();
}
function renderizarTabla(tipo) {
  if (tipo == "general") {
    console.log("Renderizando tabla de general");
    tablahabitaciones();
  }
  if (tipo == "fechas") {
    console.log("Renderizando tabla de fechas");
    tablafechas();
  }
  if (tipo == "tipohabitacion") {
    console.log("Renderizando tabla de tipo de habitaciones");
    tablatipohabitacion();
  }
}
function tablahabitaciones() {
  let contardis = 0;
  let contarman = 0;
  let total = 0;

  // habitaciones.forEach(function (habitacion) {
  //   if (habitacion.estado == "Disponible") {
  //     contardis++;
  //   }
  //   if (habitacion.estado == "Ocupada") {
  //     contarres++;
  //   }
  //   if (habitacion.estado == "Mantenimiento") {
  //     contarman++;
  //   }
  // });
  console.log("Total habitaciones: " + total);

  html = `
<label for="">Disponibles</label>
<div class="progress">

  <div id="barradisponible" class="progress-bar bg-success" role="progressbar" style="width: ${
    (contardis / total) * 100
  }%" aria-valuenow="${contardis}" aria-valuemin="0" aria-valuemax="${total}"></div>
</div>
<label for="">Mantenimiento</label>
<div class="progress">
      <br />

  <div id="barramantenimiento"  class="progress-bar bg-warning" role="progressbar" style="width: ${
    (contarman / total) * 100
  }%" aria-valuenow="${contarman}" aria-valuemin="0" aria-valuemax="${total}"></div>
</div>
`;
  fetch("components/Hgeneral.html")
    .then((response) => response.text())
    .then((html2) => {
      html += html2;
      document.getElementById("tabla").innerHTML = html;
      // document.getElementById("tabla").innerHTML = html;
    })
    .catch((error) => {
      console.error("Error al cargar el contenido:", error);
    });
  cargarHabitaciones();
}
async function cargarHabitaciones() {
  let nDISPONIBLE = 0;
  let nMANTENIMIENTO = 0;
  fetch("../habitacion/readhabitacion.php")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data = data.datos;
      console.log(data);
      const tbody = document.querySelector("tbody");
      tbody.innerHTML = ""; // Limpiar el contenido actual
      let i = 0;
      data.forEach((habitacion) => {
        const tr = document.createElement("tr");
        i++;
        let estado = habitacion.estado;
        console.log("Estado de la habitación:", estado);
        if (habitacion.estado === "DISPONIBLE") {
          nDISPONIBLE++;
          console.log("Habitación disponible:", habitacion.numero);
        }
        if (habitacion.estado === "MANTENIMIENTO") {
          nMANTENIMIENTO++;
        }
        tr.innerHTML = `
              <td>${i}</td>
              <td>${habitacion.numero}</td>
              <td>${habitacion.tipo_nombre}</td>
              <td><span class="badge ${
                habitacion.estado === "DISPONIBLE" ? "bg-success" : "bg-danger"
              }">${habitacion.estado}</span></td>
              <td>Bs. ${habitacion.precio}</td>
              <td>
                  <button class="btn btn-sm btn-primary me-2" onclick="editarEstadoHabitacion(${
                    habitacion.id
                  }, '${habitacion.estado}')">Estado</button>
                  <button class="btn btn-sm btn-danger" onclick="eliminarHabitacion(${
                    habitacion.id
                  })">Eliminar</button>
              </td>
          `;
        tbody.appendChild(tr);
        console.log("htabitaciones disponibles:", nDISPONIBLE);
        console.log("htabitaciones mantenimiento:", nMANTENIMIENTO);
        document.getElementById("barradisponible").style.width = `${
          (nDISPONIBLE / (nDISPONIBLE + nMANTENIMIENTO)) * 100
        }%`;
        document
          .getElementById("barradisponible")
          .setAttribute("aria-valuenow", nDISPONIBLE);
        document.getElementById("barramantenimiento").style.width = `${
          (nMANTENIMIENTO / (nDISPONIBLE + nMANTENIMIENTO)) * 100
        }%`;
        document
          .getElementById("barramantenimiento")
          .setAttribute("aria-valuenow", nMANTENIMIENTO);
      });
    })
    .catch((error) =>
      console.error("Error al cargar las habitaciones:", error)
    );
}

function tablatipohabitacion() {
  console.log("Renderizando tabla de tipo de habitaciones");
  let tipos = [
    {
      tipo: "Individual",
      descripcion: "Habitación individual con cama sencilla",
    },
    { tipo: "Doble", descripcion: "Habitación doble con dos camas" },
    {
      tipo: "Suite",
      descripcion: "Habitación suite con cama king size y sala de estar",
    },
  ];
  let html = `
<table class="table table-striped table-bordered">
    <tr>
        <th>Tipo</th>
        <th colspan="${habitaciones.length}">Estado de Habitaciones</th>
    </tr>
`;
  tipos.forEach(function (tipo) {
    html += `
        <tr>
            <td>${tipo.tipo}</td>`;

    habitaciones.forEach(function (habitacion) {
      if (habitacion.tipo === tipo.tipo) {
        html += `
                <td class=${habitacion.estado}> ${habitacion.habitacion}</td>
                `;
      }
    });
  });
  html += `
</table>
`;
  document.getElementById("tabla").innerHTML = html;
}

function tablafechas() {
  // Implementar la lógica para renderizar la tabla de fechas
  console.log("Renderizando tabla de fechas");

  let fechaActual = new Date();
  let mesActual = fechaActual.getMonth();

  let anioActual = fechaActual.getFullYear();
  let diasEnMes = new Date(anioActual, mesActual + 1, 0).getDate();

  let html = `
<button class="btn btn-primary" onclick="cambiarMes(-1)">Anterior</button>
<button class="btn btn-primary" onclick="cambiarMes(1)">Siguiente</button>
<h3>${fechaActual.toLocaleString("default", {
    month: "long",
  })} ${anioActual}</h3>
<table class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>Dom</th>
            <th>Lun</th>
            <th>Mar</th>
            <th>Mié</th>
            <th>Jue</th>
            <th>Vie</th>
            <th>Sáb</th>
        </tr>
    </thead>
    <tbody>
`;

  let primerDiaMes = new Date(anioActual, mesActual, 1).getDay();
  let dia = 1;

  for (let i = 0; i < 6; i++) {
    html += `<tr>`;
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < primerDiaMes) || dia > diasEnMes) {
        html += `<td></td>`;
      } else {
        html += `<td>${dia}</td>`;
        dia++;
      }
    }
    html += `</tr>`;
    if (dia > diasEnMes) break;
  }

  html += `
    </tbody>
</table>
`;

  console.log(html);
  document.getElementById("tabla").innerHTML = html;
}

cambiarMes = function (incremento) {
  let fechaActual = new Date();
  let mesActual = fechaActual.getMonth() + incremento;
  let anioActual = fechaActual.getFullYear();

  if (mesActual < 0) {
    mesActual = 11;
    anioActual--;
  } else if (mesActual > 11) {
    mesActual = 0;
    anioActual++;
  }

  let diasEnMes = new Date(anioActual, mesActual + 1, 0).getDate();
  let primerDiaMes = new Date(anioActual, mesActual, 1).getDay();

  let html = `
<button class="btn btn-primary" onclick="cambiarMes(-1)">Anterior</button>
<button class="btn btn-primary" onclick="cambiarMes(1)">Siguiente</button>
<h3>${new Date(anioActual, mesActual).toLocaleString("default", {
    month: "long",
  })} ${anioActual}</h3>
<table class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>Dom</th>
            <th>Lun</th>
            <th>Mar</th>
            <th>Mié</th>
            <th>Jue</th>
            <th>Vie</th>
            <th>Sáb</th>
        </tr>
    </thead>
    <tbody>
`;
  let dia = 1;
  for (let i = 0; i < 6; i++) {
    html += `<tr>`;
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < primerDiaMes) || dia > diasEnMes) {
        html += `<td></td>`;
      } else {
        html += `<td>${dia}</td>`;
        dia++;
      }
    }
    html += `</tr>`;
    if (dia > diasEnMes) break;
  }
};

function editarEstadoHabitacion(id, estado) {
  console.log("Editar estado de habitación con ID:", id, "Estado:", estado);
  // http://localhost/Lab5-SIS256/admin/editestadohabitacion.php
  const formdata = new FormData();
  formdata.append("id", id);
  formdata.append("estado", estado);
  fetch("editestadohabitacion.php", {
    method: "POST",
    body: formdata,
  })
    .then((response) => response.json())
    .then((resultado) => {
      alert("Respuesta del servidor: " + resultado.message);
    })
    .catch((error) => {
      alert("Error en la solicitud: " + error);
    });
  cargarHabitaciones();
}

function eliminarHabitacion(id) {
  console.log("Eliminar habitación con ID:", id);
  const formdata = new FormData();
  formdata.append("id", id);
  fetch("../habitacion/deleteHabitacion.php", {
    method: "POST",
    body: formdata,
  })
    .then((response) => response.json())
    .then((resultado) => {
      alert("Respuesta del servidor: " + resultado.message);
      cargarHabitaciones();
    })
    .catch((error) => {
      alert("Error en la solicitud: " + error);
    });
}