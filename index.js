import { todasAsLinguagens } from "./languages.js";

const gerarTexto = () => {
  // 1 - PEGAR A LINGUAGEM OK
  const idioma = document.documentElement.lang;

  // 2 - MAPEAR OS TEXTOS EM UM OBJETO OK
  // 3 - MOSTRAR NA TELA
  const teste = document.getElementsByClassName("teste")[0];
  teste.innerHTML = todasAsLinguagens[idioma]?.welcome;
};

window.gerarTexto = gerarTexto;
