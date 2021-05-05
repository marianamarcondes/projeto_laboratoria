//Exibir o prompt solicitando o nome
const name = prompt("Informe seu nome: ");

//getElementById para printar a frase com a váriavel nome dentro da div no HTML
let phrase = document.getElementById("greetings");
    phrase.innerHTML = "Olá, " + name + "!";

// inicio do quiz
var begin = prompt("Coloque o número correspondente a sua resposta: \n Quer iniciar o teste? \n 1. Sim \n 2. Não");
if (begin == 1) {    
    var q1 = prompt("Qual número corresponde a capital da Austrália? \n 1. Sidney \n 2. Camberra \n 3.Campbell");
        if (q1 == 2) {
        let phrase = document.getElementById("right");
        phrase.innerHTML = "Camberra";        
            } else {
        let phrase = document.getElementById("wrong");
        phrase.innerHTML = "Campbell e Sidney";
    }

    var q2 = prompt("Qual número corresponde a uma música da Lady Gaga? \n 1. Bad Romance \n 2. Macarena \n 3. Bohemian Rhapsody");
        if (q2 == 1) {
        let phrase = document.getElementById("right1");
        phrase.innerHTML = "Bad Romance";
            } else {
        let phrase = document.getElementById("wrong1");
        phrase.innerHTML = "Macarena e Bohemian Rhapsody";
    }
    
    var q3 = prompt("Qual número corresponde a soma de 17 + 58? \n 1. 75 \n 2. 83 \n 3. 65");
        if (q3 == 1) {
        let phrase = document.getElementById("right2");
        phrase.innerHTML = " 75 ";
            } else {
        let phrase = document.getElementById("wrong2");
        phrase.innerHTML = "83 e 65";
    }
    
    var q4 = prompt("Qual número corresponde ao primeiro presidente do Brasil?  \n 1. Floriano Peixoto \n 2. Lula \n 3. Deodoro da Fonseca");
        if (q4 == 3) {
        let phrase = document.getElementById("right3");
        phrase.innerHTML = "Deodoro da Fonseca";
            } else {
        let phrase = document.getElementById("wrong3");
        phrase.innerHTML = "Floriano Peixoto e Lula";
    }
} else {
    alert("Jogo encerrado.");
} 






