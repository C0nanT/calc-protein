function Calcular_ovo() {
  const formulario = document.querySelector(".formulario_ovo");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const peso = document.getElementById("peso_ovo").value;
    const proteina = (peso * 0.12).toFixed(2).replace(".", ",") + "g";
    const carbo = (peso * 0.016).toFixed(2).replace(".", ",") + "g";
    const proteina_ovo = document.querySelector(".proteina_ovo");
    const carbo_ovo = document.querySelector(".carbo_ovo");

    document.querySelector(".result_ovo").classList.remove("nao-ativo");

    proteina_ovo.textContent = proteina;
    carbo_ovo.textContent = carbo;
  });
}
// --------------------------------------------------------------------------------------------------------------------
function Calcular_frango() {
  const formulario = document.querySelector(".formulario_frango");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const peso = document.getElementById("peso_frango").value;
    const proteina = (peso * 0.075).toFixed(2).replace(".", ",") + "g";
    const carbo = (peso * 0).toFixed(2).replace(".", ",") + "g";
    const proteina_frango = document.querySelector(".proteina_frango");
    const carbo_frango = document.querySelector(".carbo_frango");

    document.querySelector(".result_frango").classList.remove("nao-ativo");

    proteina_frango.textContent = proteina;
    carbo_frango.textContent = carbo;
  });
}
// --------------------------------------------------------------------------------------------------------------------
function Calcular_pao() {
  const formulario = document.querySelector(".formulario_pao");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const peso = document.getElementById("peso_pao").value;
    const proteina = (peso * 0.095).toFixed(2).replace(".", ",") + "g";
    const carbo = (peso * 0.51).toFixed(2).replace(".", ",") + "g";
    const proteina_pao = document.querySelector(".proteina_pao");
    const carbo_pao = document.querySelector(".carbo_pao");

    document.querySelector(".result_pao").classList.remove("nao-ativo");

    proteina_pao.textContent = proteina;
    carbo_pao.textContent = carbo;
  });
}

Calcular_frango();
Calcular_ovo();
Calcular_pao();
