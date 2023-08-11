function Calcular() {
  const formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const peso = document.getElementById("peso").value;
    const proteina = (peso * 0.13).toFixed(2).replace(".", ",") + "g";
    const carbo = (peso * 0.011).toFixed(2).replace(".", ",") + "g";
    const proteina_ovo = document.getElementById("proteina_ovo");
    const carbo_ovo = document.getElementById("carbo_ovo");

    document.getElementById("result").classList.remove("nao-ativo");

    proteina_ovo.textContent = proteina;
    carbo_ovo.textContent = carbo;
  });
}

Calcular();
