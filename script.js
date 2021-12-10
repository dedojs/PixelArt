function iniciar() {
  gerar_cor();
}
window.addEventListener('load', iniciar);

//variaveis
const line = document.getElementById('pixel-board');
const board = document.querySelectorAll('.pixel');
const pallet = document.getElementById('color-palette');
criarBoard(5);
//função criada baseada na fonte: site wallacemaxters.com.br
//Função gera os numeros rgb de forma aleatoria, e utiliza um parseInt para pegar um numero inteiro entre 0 e 255, sendo que o valor informado como parâmetro da função é a opacidade da cor.
function gerar_cor(opacidade = 1) {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);

  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}

// Cor dos quadrados gerado aleatoriamente
function colors() {
  let p1 = document.getElementById('p1');
  p1.style.backgroundColor = 'rgb(0,0,0)';
  p1.classList.add('selected');

  let p2 = document.getElementById('p2');
  p2.style.backgroundColor = gerar_cor(1);
  console.log('cor p2=', (p2.style.backgroundColor = gerar_cor(1)));

  let p3 = document.getElementById('p3');
  p3.style.backgroundColor = gerar_cor(1);
  console.log('cor p3=', (p3.style.backgroundColor = gerar_cor(1)));

  let p4 = document.getElementById('p4');
  p4.style.backgroundColor = gerar_cor(1);
  console.log('cor p4=', (p4.style.backgroundColor = gerar_cor(1)));
}
colors();
//cor do titulo sendo gerada aleatoriamente
let title = (document.getElementById('title').style.color = gerar_cor(1));

//input, pegando a quantidade de quadrados
let numero;
const quantidade = document.getElementById('board-size');
function getNumber() {
  numero = parseInt(quantidade.value);
  console.log('numero=', numero);
  if (quantidade.value < 1 || quantidade.value === NaN) {
    alert('/Board inválido!/');
  } else if (quantidade.value < 5) {
    criarBoard(5);
  } else if (quantidade.value > 50) {
    criarBoard(50);
  } else {
    criarBoard(numero);
  }
}

//botões
//botao gerar quadrados
let botao = document.getElementById('generate-board');
botao.addEventListener('click', getNumber);

//botao apagar quadrados
function deletar() {
  var list = document.getElementById('pixel-board');
  while (list.hasChildNodes()) {
    line.removeChild(line.firstChild);
  }
}

//função para resetar cores
function resetar() {
  deletar();
  criarBoard(5);
  line.style.backgroundColor = 'white';
}

// criar quadrado
function criarQuadrado(num) {
  let square = document.createElement('li');
  square.className = 'pixel';
  square.style.backgroundColor = 'rgb(255,255,255)';
  line.appendChild(square);
  return square;
}

//cria a caixa com todos os quadrados
function criarBoard(numero) {
  deletar();
  let n = numero * numero;
  let tamanho = numero * 43 + 5 + 'px';
  let tam = (document.getElementById('pixel-board').style.maxWidth = tamanho);
  //console.log(tamanho)
  console.log(document.getElementById('pixel-board').style.maxWidth);
  for (let i = n; i > 0; i -= 1) {
    criarQuadrado();
  }
}

// identificando quadrados
function clicaPixel(element) {
  let alvo = element.target;
  alvo.style.backgroundColor = cor;
  console.log(alvo);
}
//evento de click para pintar
line.addEventListener('click', clicaPixel);
//cor inicial
let cor = 'black';

function pegaCor(element) {
  cor = element.target.style.backgroundColor;
  let alvo = element.target;
  console.log('cor', cor);

  // - Pintando quadrados
  if (alvo.className != 'target' && alvo == p1) {
    alvo.classList.add('target');
    alvo.classList.add('selected');
    p2.classList.remove('target', 'selected');
    p3.classList.remove('target', 'selected');
    p4.classList.remove('target', 'selected');
  } else if (alvo.className != 'target' && alvo == p2) {
    alvo.classList.add('target');
    alvo.classList.add('selected');
    p1.classList.remove('target', 'selected');
    p3.classList.remove('target', 'selected');
    p4.classList.remove('target', 'selected');
  } else if (alvo.className != 'target' && alvo == p3) {
    alvo.classList.add('target');
    alvo.classList.add('selected');
    p1.classList.remove('target', 'selected');
    p2.classList.remove('target', 'selected');
    p4.classList.remove('target', 'selected');
  } else if (alvo.className != 'target' && alvo == p4) {
    alvo.classList.add('target');
    alvo.classList.add('selected');
    p1.classList.remove('target', 'selected');
    p2.classList.remove('target', 'selected');
    p3.classList.remove('target', 'selected');
  }
}

pallet.value = 'black';
localStorage.setItem('pallet-color', pallet.value);

pallet.addEventListener('click', pegaCor);
