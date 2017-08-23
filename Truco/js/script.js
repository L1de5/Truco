
let numeros = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
let nipes = ['copas', 'ouro', 'paus', 'espada'];
var ponto1 = ponto2 = 0;
var pontos = 30;
var bt = document.querySelector('#iniciar');
var mao = [], maott = [];

var sorteia = () => ""+numeros[Math.floor(Math.random()*numeros.length)] + nipes[Math.floor(Math.random()*nipes.length)];

var distribuir = function  (){
  mao = [];
    for(var i = 0; i < 3; i++){
      let carta = sorteia();
      if(maott.indexOf(carta) == -1){
        mao += ","+carta;
        maott += ","+carta;
      }
      else{
        i--;
      }
    }
    return mao
}
var mao1 = distribuir();
var mao2 = distribuir();
document.write(mao1);
document.write(mao2);
