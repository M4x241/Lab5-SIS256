function cargarContenido(abrir) {
  var contenedores = document.getElementsByClassName(abrir);
  fetch("../layout/" + abrir + ".html")
    .then((response) => response.text())
    .then((data) => {
      for (let i = 0; i < contenedores.length; i++) {
        contenedores[i].innerHTML = data;
      }
    })
    .catch((error) =>
      console.error("Error al cargar el contenido de " + abrir, error)
    );
}

//esta es una funcion donde solo se cargan el tipo de habitaciones

function cargarTiposDeHabitacion(objeto) {
  let lista = objeto.datos;
  let html = "";

  for (let i = 0; i < lista.length; i++) {
    html += `
      <div class="col-md-4">
  
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <h5 class="card-title fw-bold" style="color:#41663C;">
                <i class="fa-solid fa-bed me-2"></i>${lista[i].nombre}
              </h5>
              <p class="card-text">
                Superficie: ${lista[i].superficie}<br>
                Camas: ${lista[i].nro_camas}<br>
                Precio: Bs. ${lista[i].precio}
              </p>
            </div>
          </div>
      
      </div>
    `;
  }

  return html;
}

function cargar() {
  var url = `../habitacion/readTipoHabitacion.php`;
  var contenedor = document.getElementById("container");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      contenedor.innerHTML = cargarTiposDeHabitacion(data);
    })
    .catch((error) => {
      contenedor.innerHTML = `<p class="text-danger text-center">Error al cargar habitaciones.</p>`;
      console.error("Error:", error);
    });
}

//funcion que carga todas las habitaciones segun el tipo elegido

function cargarhabbitacionportipo(id) {
  const url = `../habitacion/readHabiportipoHabi.php?id_tipoHabitacion=${id}`;
  const contenedor = document.getElementById("contenido");

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      data.datos.forEach((habitacion) => {
        html += `
          <div class="col-md-4 d-flex justify-content-center" >
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title fw-bold" style="color:#41663C;">
                  Habitación ${habitacion.numero}
                </h5>
                <p class="card-text">
                  Piso: ${habitacion.piso}<br>
                  Tipo: ${habitacion.tipo_nombre}<br>
                  Superficie: ${habitacion.superficie}<br>
                  Camas: ${habitacion.nro_camas}
                </p>
              </div>
            </div>
          </div>
        `;
      });

      contenedor.innerHTML = html;
    })
    .catch((error) => {
      contenedor.innerHTML = `<p class="text-danger text-center">Error al cargar habitaciones por tipo.</p>`;
      console.error("Error:", error);
    });
}

//desde aqui irian las reservas

function cargarContenReservas() {
  const contenido = document.getElementById("contenido");
  if (!contenido) return;

  // Guardamos el contenido principal
  window.contenidoPrincipal = contenido.innerHTML;
}

function mostrarTpoHabitaciones() {
  const contenido = document.getElementById("contenido");
  if (!contenido) return;

  fetch("../habitacion/readTipoHabitacion.php")
    .then((response) => response.json())
    .then((data) => {
      const lista = data.datos;
      let html = `
        <section class="py-5">
          <div class="container">
            <h2 class="text-center fw-bold mb-4" style="color: #41663c">Reservar una Habitación</h2>
            <p class="text-center mb-4">Seleccione el tipo de habitación que desea reservar.</p>
            <div class="row justify-content-center">
              <div class="col-md-6">
                <ul class="list-group">
      `;

      for (let i = 0; i < lista.length; i++) {
        html += `
          <li class="list-group-item d-flex justify-content-between align-items-center">
            ${lista[i].nombre}
            <a class="btn btn-outline-success btn-sm" href="javascript:cargarhabbitacionportipo(${lista[i].id})">Seleccionar</a>
          </li>
        `;
      }

      html += `
                </ul>
                <div class="mt-4 text-center">
                  <button class="btn btn-secondary" onclick="volver()">Volver</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;

      contenido.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error al cargar los tipos de habitación", error);
      contenido.innerHTML = `<p class="text-danger text-center">No se pudieron cargar los tipos de habitación.</p>`;
    });
}

function volver() {
  const contenido = document.getElementById("contenido");
  if (contenido && window.contenidoPrincipal) {
    contenido.innerHTML = window.contenidoPrincipal;
  }
}
/* javascript:cargarhabbitacionportipo(${lista[i].id}) */