//passo 1
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//passo 2
    botoesCarrossel.forEach((botao, indice) => {
          botao.addEventListener('click', () => {

                DesativarBotaoSelecionado();

                SelecionarBotaoCarrossel(botao);

               EsconderImagemAtiva();

               MostrarImagemDeFundo(indice);
               
          })
    })

function MostrarImagemDeFundo(indice) {
      imagens[indice].classList.add('ativa');
}

function SelecionarBotaoCarrossel(botao) {
      botao.classList.add('selecionado');
}

function EsconderImagemAtiva() {
      const imagemAtiva = document.querySelector('.ativa');
      imagemAtiva.classList.remove('ativa');
}

function DesativarBotaoSelecionado() {
      const botaoSelecionado = document.querySelector('.selecionado');
      botaoSelecionado.classList.remove('selecionado');
}
