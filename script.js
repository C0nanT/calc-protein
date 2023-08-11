function Calcular_ovo() {
  const formulario = document.querySelector(".formulario_ovo");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const peso = document.getElementById("peso_ovo").value;
    const proteina = (peso * 0.13).toFixed(2).replace(".", ",") + "g";
    const carbo = (peso * 0.011).toFixed(2).replace(".", ",") + "g";
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
    const proteina = (peso * 0.27).toFixed(2).replace(".", ",") + "g";
    const carbo = (peso * 0.003).toFixed(2).replace(".", ",") + "g";
    const proteina_frango = document.querySelector(".proteina_frango");
    const carbo_frango = document.querySelector(".carbo_frango");

    document.querySelector(".result_frango").classList.remove("nao-ativo");

    proteina_frango.textContent = proteina;
    carbo_frango.textContent = carbo;
  });
}

Calcular_frango();
Calcular_ovo();
