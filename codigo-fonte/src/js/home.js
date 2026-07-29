const imagens = document.querySelectorAll('#hero .hero-image');

let indiceAtual = 0;
const TEMPO_TROCA = 5000;

function alternarFoto() {

  imagens[indiceAtual].classList.remove('ativa');
  indiceAtual = (indiceAtual + 1) % imagens.length;
  imagens[indiceAtual].classList.add('ativa');
}

setInterval(alternarFoto, TEMPO_TROCA);