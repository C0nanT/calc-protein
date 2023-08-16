const peso = document.getElementById("peso");

function Proteina(proteina) {
  return (peso.value * proteina).toFixed(2).replace(".", ",") + "g";
}
function Carbo(carbo) {
  return (peso.value * carbo).toFixed(2).replace(".", ",") + "g";
}

function Calcular() {
  const formulario = document.querySelector(".formulario");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // -----------OVO-----------

    const proteinaovo = Proteina(0.12581);
    const carboovo = Carbo(0.00771);
    const proteina_ovo = document.querySelector(".proteina_ovo");
    const carbo_ovo = document.querySelector(".carbo_ovo");
    proteina_ovo.textContent = proteinaovo;
    carbo_ovo.textContent = carboovo;

    // -----------PÃO-----------

    const proteinapao = Proteina(0.0764);
    const carbopao = Carbo(0.5061);
    const proteina_pao = document.querySelector(".proteina_pao");
    const carbo_pao = document.querySelector(".carbo_pao");
    proteina_pao.textContent = proteinapao;
    carbo_pao.textContent = carbopao;

    // -----------FRANGO-----------

    const proteinafrango = Proteina(0.32);
    const carbofrango = Carbo(0);
    const proteina_frango = document.querySelector(".proteina_frango");
    const carbo_frango = document.querySelector(".carbo_frango");
    proteina_frango.textContent = proteinafrango;
    carbo_frango.textContent = carbofrango;

    // -----------MACARRÃO-----------

    const proteinamacarrao = Proteina(0.0515);
    const carbomacarrao = Carbo(0.2751);
    const proteina_macarrao = document.querySelector(".proteina_macarrao");
    const carbo_macarrao = document.querySelector(".carbo_macarrao");
    proteina_macarrao.textContent = proteinamacarrao;
    carbo_macarrao.textContent = carbomacarrao;

    // -----------ARROZ-----------

    const proteinaarroz = Proteina(0.0258);
    const carboarroz = Carbo(0.2351);
    const proteina_arroz = document.querySelector(".proteina_arroz");
    const carbo_arroz = document.querySelector(".carbo_arroz");
    proteina_arroz.textContent = proteinaarroz;
    carbo_arroz.textContent = carboarroz;

    // -----------AVEIA-----------

    const proteinaaveia = Proteina(0.1689);
    const carboaveia = Carbo(0.6627);
    const proteina_aveia = document.querySelector(".proteina_aveia");
    const carbo_aveia = document.querySelector(".carbo_aveia");
    proteina_aveia.textContent = proteinaaveia;
    carbo_aveia.textContent = carboaveia;

    // -----------BATATA-DOCE-----------

    const proteinabatata_doce = Proteina(0.0157);
    const carbobatata_doce = Carbo(0.2012);
    const proteina_batata_doce = document.querySelector(
      ".proteina_batata_doce"
    );
    const carbo_batata_doce = document.querySelector(".carbo_batata_doce");
    proteina_batata_doce.textContent = proteinabatata_doce;
    carbo_batata_doce.textContent = carbobatata_doce;

    // -----------ATUM-----------
    const proteinaatum = Proteina(0.2991);
    const carboatum = Carbo(0);
    const proteina_atum = document.querySelector(".proteina_atum");
    const carbo_atum = document.querySelector(".carbo_atum");
    proteina_atum.textContent = proteinaatum;
    carbo_atum.textContent = carboatum;

    // -----------SALMAO-----------
    const proteinasalmao = Proteina(0.2042);
    const carbosalmao = Carbo(0);
    const proteina_salmao = document.querySelector(".proteina_salmao");
    const carbo_salmao = document.querySelector(".carbo_salmao");
    proteina_salmao.textContent = proteinasalmao;
    carbo_salmao.textContent = carbosalmao;

    // -----------FIM-----------

    document.querySelector(".resultado").classList.remove("nao-ativo");
    document.querySelector(".footer").classList.remove("fixado");
  });
}

Calcular();

// -----------COPIAR E COLAR-----------

// const proteina@@@ = Proteina(0.99);
// const carbo@@@ = Carbo(0.99);
// const proteina_@@@ = document.querySelector(".proteina_@@@");
// const carbo_@@@ = document.querySelector(".carbo_@@@");
// proteina_@@@.textContent = proteina@@@;
// carbo_@@@.textContent = carbo@@@;

//     -----------FIM-----------
