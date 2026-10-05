console.log("Conexion correcta");
// 1. FUNCIONALIDAD DEL BOTÓN "ME GUSTA"
const btnLike = document.getElementById('btn-like');
let cantidadLikes = 4800;
let leDioLike = false;

btnLike.addEventListener('click', function() {
    if (leDioLike === false) {
        cantidadLikes = cantidadLikes + 1; // Suma 1 al contador
        btnLike.textContent = '👍 ' + cantidadLikes;
        leDioLike = true; // Marca que ya le dio like
    } else {
        cantidadLikes = cantidadLikes - 1; // Resta 1 si vuelve a presionar
        btnLike.textContent = '👍 ' + cantidadLikes;
        leDioLike = false;
    }
});


// 2. FUNCIONALIDAD DEL BOTÓN "SUSCRIBIRSE"
const btnSuscribirse = document.getElementById('btn-suscribirse');
const contadorSuscriptores = document.getElementById('contador-suscriptores');
let suscrito = false;

btnSuscribirse.addEventListener('click', function() {
    if (suscrito === false) {
        btnSuscribirse.textContent = 'Suscrito';
        btnSuscribirse.style.backgroundColor = '#606060'; // Cambia el color a gris
        contadorSuscriptores.textContent = '1.200.001 de suscriptores'; // Suma 1 al contador
        suscrito = true;
    } else {
        btnSuscribirse.textContent = 'Suscribirse';
        btnSuscribirse.style.backgroundColor = 'red'; // Vuelve a color rojo
        contadorSuscriptores.textContent = '1.200.000 de suscriptores';
        suscrito = false;
    }
});


// 3. REPRODUCIR VIDEO AL PASAR EL MOUSE SOBRE LA MINIATURA
// Selecciona todos los videos de la columna derecha y de abajo
const listaVideos = document.querySelectorAll('.item-video-lateral video, .tarjeta-video-abajo video');

listaVideos.forEach(function(video) {
    // Al entrar el mouse en el video
    video.addEventListener('mouseenter', function() {
        video.muted = true; // Reproduce sin sonido
        video.play();
    });

    // Al sacar el mouse del video
    video.addEventListener('mouseleave', function() {
        video.pause();      // Detiene la reproducción
        video.currentTime = 0; // Vuelve al segundo 0 (inicio)
    });
});