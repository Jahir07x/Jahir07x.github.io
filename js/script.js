let paginaActual = 0;
const totalPaginas = 8;

function abrirCarta() {
  document.getElementById('carta').classList.add('mostrar');
  document.getElementById('botonAbrir').style.display = 'none';
  actualizarBotones();
}

function cerrarCarta() {
  document.getElementById('carta').classList.remove('mostrar');
  document.getElementById('botonAbrir').style.display = 'block';
  paginaActual = 0;
  mostrarPagina();
  actualizarBotones();
}

function cambiarPagina(valor) {
  paginaActual += valor;
  if (paginaActual < 0) paginaActual = 0;
  if (paginaActual >= totalPaginas) paginaActual = totalPaginas - 1;
  mostrarPagina();
  actualizarBotones();
}

function mostrarPagina() {
  for (let i = 0; i < totalPaginas; i++) {
    document.getElementById('pagina-' + i).style.display = i === paginaActual ? 'block' : 'none';
  }
}

function actualizarBotones() {
  document.getElementById('anterior').disabled = paginaActual === 0;
  document.getElementById('siguiente').disabled = paginaActual === totalPaginas - 1;
}

// Inicializar mostrando la primera página
mostrarPagina();




function abrirCarta() {
  document.getElementById('carta').classList.add('mostrar');
  document.getElementById('botonAbrir').style.display = 'none';
  document.querySelector('.notitas').style.display = 'none';
  actualizarBotones();
}

function cerrarCarta() {
  document.getElementById('carta').classList.remove('mostrar');
  document.getElementById('botonAbrir').style.display = 'block';
  document.querySelector('.notitas').style.display = 'block';
  paginaActual = 0;
  mostrarPagina();
  actualizarBotones();
}

// El resto de funciones (mostrarPagina, cambiarPagina, actualizarBotones) se quedan igual



const audio = document.getElementById('audio');
const barra = document.getElementById('barra');
const tiempo = document.getElementById('tiempo');
const playPauseBtn = document.getElementById('playPause');

function reproducirPausar() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.querySelector('img').src = 'img/pause.png';
  } else {
    audio.pause();
    playPauseBtn.querySelector('img').src = 'img/play.png';
  }
}

audio.ontimeupdate = () => {
  barra.value = (audio.currentTime / audio.duration) * 100;
  tiempo.textContent = formatearTiempo(audio.currentTime);
};

function formatearTiempo(segundos) {
  const min = Math.floor(segundos / 60);
  const seg = Math.floor(segundos % 60).toString().padStart(2, '0');
  return `${min}:${seg}`;
}

function retroceder() {
  audio.currentTime -= 10;
}

function adelantar() {
  audio.currentTime += 10;
}
