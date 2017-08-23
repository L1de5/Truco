let numeros = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
let nipes = ['copas', 'ouro', 'paus', 'espada'];
let i = 0;
var ponto1 = 0;
var ponto2 = 0;
var pontos = 30;
var bt = document.querySelector('#iniciar')
var mao = [];
var maott = [];
function distribuir(){
  mao = [];
    for(var i = 0; i < 3; i++){
      let n = numeros[Math.floor(Math.random()*numeros.length)];
      let np = nipes[Math.floor(Math.random()*nipes.length)];
      let maot = [ n, np];
      if(maott.indexOf(maot) < 0){
        mao.unshift(maot);
        maott.unshift(maot);
      }
    }
    return mao
}
var mao1 = distribuir();
var mao2 = distribuir();
document.write(mao1[0]);
document.write(mao1[1]);
document.write(mao1[2]);
document.write(mao2[0]);
document.write(mao2[1]);
document.write(mao2[2]);

console.log(mao);

// codigao

let numeros = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
let nipes = ['copas', 'ouro', 'paus', 'espada'];
var ponto1 = ponto2 = 0;
var pontos = 30;
var bt = document.querySelector('#iniciar');
var mao = [] = maott = [];

var sorteia = ()=> ""+numeros[Math.floor(Math.random()*numeros.length)] + nipes[Math.floor(Math.random()*nipes.length)];

var distribuir = function  (){
  mao = [];
    for(var i = 0; i < 3; i++){
      let carta = sorteia();
      if(maott.indexOf(carta) == -1)maott+=(","+carta);
    }
    return mao
}
var mao1 = distribuir();
var mao2 = distribuir();
document.write(mao1[0]);
document.write(mao1[1]);
document.write(mao1[2]);
document.write(mao2[0]);
document.write(mao2[1]);
document.write(mao2[2]);

console.log(mao);
