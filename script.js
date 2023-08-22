const peso = document.getElementById("peso");
const alimentos = [
  {
    nome: "OVO",
    proteina: 0.13381,
    carbo: 0.00601,
    preco: 0.12,
    proteinaClass: ".proteina_ovo",
    carboClass: ".carbo_ovo",
    precoClass: ".preco_ovo",
  },
  {
    nome: "PÃO",
    proteina: 0.0924,
    carbo: 0.4661,
    preco: 0.16,
    proteinaClass: ".proteina_pao",
    carboClass: ".carbo_pao",
    precoClass: ".preco_pao",
  },
  {
    nome: "FRANGO",
    proteina: 0.27,
    carbo: 0,
    preco: 0.04,
    proteinaClass: ".proteina_frango",
    carboClass: ".carbo_frango",
    precoClass: ".preco_frango",
  },
  {
    nome: "MACARRÃO",
    proteina: 0.1115,
    carbo: 0.7625,
    preco: 0.11,
    proteinaClass: ".proteina_macarrao",
    carboClass: ".carbo_macarrao",
    precoClass: ".preco_macarrao",
  },
  {
    nome: "ARROZ",
    proteina: 0.0258,
    carbo: 0.2351,
    preco: 999,
    proteinaClass: ".proteina_arroz",
    carboClass: ".carbo_arroz",
    precoClass: ".preco_arroz",
  },
  {
    nome: "AVEIA",
    proteina: 0.1689,
    carbo: 0.6627,
    preco: 999,
    proteinaClass: ".proteina_aveia",
    carboClass: ".carbo_aveia",
    precoClass: ".preco_aveia",
  },
  {
    nome: "BATATA-DOCE",
    proteina: 0.0157,
    carbo: 0.2012,
    preco: 999,
    proteinaClass: ".proteina_batata_doce",
    carboClass: ".carbo_batata_doce",
    precoClass: ".preco_batata_doce",
  },
  {
    nome: "ATUM",
    proteina: 0.2991,
    carbo: 0,
    preco: 999,
    proteinaClass: ".proteina_atum",
    carboClass: ".carbo_atum",
    precoClass: ".preco_atum",
  },
  {
    nome: "SALMÃO",
    proteina: 0.2042,
    carbo: 0,
    preco: 999,
    proteinaClass: ".proteina_salmao",
    carboClass: ".carbo_salmao",
    precoClass: ".preco_salmao",
  },
];

function calcularValoresAlimento(alimento) {
  const proteinaCalculada =
    (peso.value * alimento.proteina).toFixed(2).replace(".", ",") + "g";
  const carboCalculado =
    (peso.value * alimento.carbo).toFixed(2).replace(".", ",") + "g";
  const precoValor = ("R$" + alimento.preco).replace(".", ",");

  const proteinaElement = document.querySelector(alimento.proteinaClass);
  const carboElement = document.querySelector(alimento.carboClass);
  const precoElement = document.querySelector(alimento.precoClass);

  proteinaElement.textContent = proteinaCalculada;
  carboElement.textContent = carboCalculado;
  precoElement.textContent = precoValor;
}

function Calcular() {
  const formulario = document.querySelector(".formulario");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    alimentos.forEach((alimento) => {
      calcularValoresAlimento(alimento);
    });

    document.querySelector(".resultado").classList.remove("nao-ativo");
    document.querySelector(".footer").classList.remove("fixado");
  });
}

Calcular();
// ---------------------A FUNÇÃO CalcularPrecoPorGrama AINDA NÃO ESTÁ PRONTA------------------------------------------------------------
// Pretendo automatizar ela também, no momento ela só funciona chamando no Console

function CalcularPrecoPorGrama(preco, peso, proteina) {
  const preco100g = (preco * 100) / peso;
  const precoPorGrama = preco100g / proteina;
  return precoPorGrama;
}
// ------------------------------------------------------------------------------------------------

// Essa é a primeira versão do código JS para a página, deixei apenas para guardar de recordação :D

// const peso = document.getElementById("peso");

// function Proteina(proteina) {
//   return (peso.value * proteina).toFixed(2).replace(".", ",") + "g";
// }
// function Carbo(carbo) {
//   return (peso.value * carbo).toFixed(2).replace(".", ",") + "g";
// }

// function Calcular() {
//   const formulario = document.querySelector(".formulario");
//   formulario.addEventListener("submit", function (event) {
//     event.preventDefault();

//     // -----------OVO-----------

//     const proteinaovo = Proteina(0.12581);
//     const carboovo = Carbo(0.00771);
//     const proteina_ovo = document.querySelector(".proteina_ovo");
//     const carbo_ovo = document.querySelector(".carbo_ovo");
//     proteina_ovo.textContent = proteinaovo;
//     carbo_ovo.textContent = carboovo;

//     // -----------PÃO-----------

//     const proteinapao = Proteina(0.0764);
//     const carbopao = Carbo(0.5061);
//     const proteina_pao = document.querySelector(".proteina_pao");
//     const carbo_pao = document.querySelector(".carbo_pao");
//     proteina_pao.textContent = proteinapao;
//     carbo_pao.textContent = carbopao;

//     // -----------FRANGO-----------

//     const proteinafrango = Proteina(0.32);
//     const carbofrango = Carbo(0);
//     const proteina_frango = document.querySelector(".proteina_frango");
//     const carbo_frango = document.querySelector(".carbo_frango");
//     proteina_frango.textContent = proteinafrango;
//     carbo_frango.textContent = carbofrango;

//     // -----------MACARRÃO-----------

//     const proteinamacarrao = Proteina(0.0515);
//     const carbomacarrao = Carbo(0.2751);
//     const proteina_macarrao = document.querySelector(".proteina_macarrao");
//     const carbo_macarrao = document.querySelector(".carbo_macarrao");
//     proteina_macarrao.textContent = proteinamacarrao;
//     carbo_macarrao.textContent = carbomacarrao;

//     // -----------ARROZ-----------

//     const proteinaarroz = Proteina(0.0258);
//     const carboarroz = Carbo(0.2351);
//     const proteina_arroz = document.querySelector(".proteina_arroz");
//     const carbo_arroz = document.querySelector(".carbo_arroz");
//     proteina_arroz.textContent = proteinaarroz;
//     carbo_arroz.textContent = carboarroz;

//     // -----------AVEIA-----------

//     const proteinaaveia = Proteina(0.1689);
//     const carboaveia = Carbo(0.6627);
//     const proteina_aveia = document.querySelector(".proteina_aveia");
//     const carbo_aveia = document.querySelector(".carbo_aveia");
//     proteina_aveia.textContent = proteinaaveia;
//     carbo_aveia.textContent = carboaveia;

//     // -----------BATATA-DOCE-----------

//     const proteinabatata_doce = Proteina(0.0157);
//     const carbobatata_doce = Carbo(0.2012);
//     const proteina_batata_doce = document.querySelector(
//       ".proteina_batata_doce"
//     );
//     const carbo_batata_doce = document.querySelector(".carbo_batata_doce");
//     proteina_batata_doce.textContent = proteinabatata_doce;
//     carbo_batata_doce.textContent = carbobatata_doce;

//     // -----------ATUM-----------

//     const proteinaatum = Proteina(0.2991);
//     const carboatum = Carbo(0);
//     const proteina_atum = document.querySelector(".proteina_atum");
//     const carbo_atum = document.querySelector(".carbo_atum");
//     proteina_atum.textContent = proteinaatum;
//     carbo_atum.textContent = carboatum;

//     // -----------SALMAO-----------

//     const proteinasalmao = Proteina(0.2042);
//     const carbosalmao = Carbo(0);
//     const proteina_salmao = document.querySelector(".proteina_salmao");
//     const carbo_salmao = document.querySelector(".carbo_salmao");
//     proteina_salmao.textContent = proteinasalmao;
//     carbo_salmao.textContent = carbosalmao;

//     // -----------FIM-----------

//     document.querySelector(".resultado").classList.remove("nao-ativo");
//     document.querySelector(".footer").classList.remove("fixado");
//   });
// }

// Calcular();

// // -----------COPIAR E COLAR-----------

// // const proteina@@@ = Proteina(0.99);
// // const carbo@@@ = Carbo(0.99);
// // const proteina_@@@ = document.querySelector(".proteina_@@@");
// // const carbo_@@@ = document.querySelector(".carbo_@@@");
// // proteina_@@@.textContent = proteina@@@;
// // carbo_@@@.textContent = carbo@@@;

// //     -----------FIM-----------
