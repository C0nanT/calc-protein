function Calcular() {
  const formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const peso = document.getElementById("peso").value;
    const proteina = (peso * 0.13).toFixed(2).replace(".", ",") + "g";
    const carbo = (peso * 0.011).toFixed(2).replace(".", ",") + "g";
    const proteina_r = document.getElementById("proteina_r");
    const carbo_r = document.getElementById("carbo_r");

    document.getElementById("result").classList.remove("nao-ativo");

    proteina_r.textContent = proteina;
    carbo_r.textContent = carbo;
  });
}

Calcular();
