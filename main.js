const caixaPrincipal= document.queryselector(".caixa-principal");
const caixaPerguntas= document.queryselector(".caixa-perguntas");
const caixaAlternativas= document.queryselector(".caixa-alternativas");
const caixaResultado= document.queryselector(".caixa-resultado");
const textoResultado= document.queryselector(".texto-resultado");





const perguntas =[
    {
      enunciado:"Você gosta bolo?",
      alternativas:[
        {
            texto:"sim",
            afirmacao:"Você é uma pessoa normal"
        },
            
        {
            texto:"não",
            afirmacao:"Você é chato pra carambolas"
        }
    ]
    },
    {
        enunciado:"Você dorme?",
        alternativas:[
          {
              texto:"sim",
              afirmacao:"Você é uma pessoa normal"
          },
              
          {
              texto:"não",
              afirmacao:"Você é muito estranho"
          }
      ]
    }

]


function mostraPergunta(){
    if(atual>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativa();

}
    