function cargarContenido(abrir) {
    var contenedores = document.getElementsByClassName(abrir);
    fetch('../layout/' + abrir + '.html')
        .then(response => response.text())
        .then(data => {
            for (let i = 0; i < contenedores.length; i++) {
                contenedores[i].innerHTML = data;
            }
        })
        .catch(error => console.error("Error al cargar el contenido de " + abrir, error));
}
