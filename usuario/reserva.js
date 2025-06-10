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
  const contenedor = document.getElementById("container");

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let html = "";
      data.datos.forEach(habitacion => {
        html += `
          <div class="col-md-4">
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
    .catch(error => {
      contenedor.innerHTML = `<p class="text-danger text-center">Error al cargar habitaciones por tipo.</p>`;
      console.error("Error:", error);
    });
}
