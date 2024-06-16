let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirAtalho(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirAtalho('h1','Jogo do número Secreto' );
    exibirAtalho('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirAtalho('h1', 'Acertoou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'Tentativas';
        let mensagemTentativa = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa} sua pigzona comedora de côco!`;
        exibirAtalho('p', mensagemTentativa)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
       if (chute > numeroSecreto) {
        exibirAtalho('p', 'O numéro secreto é menor');
      } else {
        exibirAtalho('p', 'O número secreto é maior');
      }
      tentativas++;
      limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

 if(quantidadeDeElementosNaLista == numeroEscolhido) {
    listaDeNumerosSorteados = [];
 }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}