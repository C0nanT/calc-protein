const peso = document.getElementById("peso");

function Calcular() {
  const formulario = document.querySelector(".formulario");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    // -----------OVO-----------
    const proteinaovo = (peso.value * 0.12).toFixed(2).replace(".", ",") + "g";
    const carboovo = (peso.value * 0.016).toFixed(2).replace(".", ",") + "g";
    const proteina_ovo = document.querySelector(".proteina_ovo");
    const carbo_ovo = document.querySelector(".carbo_ovo");
    proteina_ovo.textContent = proteinaovo;
    carbo_ovo.textContent = carboovo;
    // -----------PÃO-----------
    const proteinapao = (peso.value * 0.095).toFixed(2).replace(".", ",") + "g";
    const carbopao = (peso.value * 0.51).toFixed(2).replace(".", ",") + "g";
    const proteina_pao = document.querySelector(".proteina_pao");
    const carbo_pao = document.querySelector(".carbo_pao");
    proteina_pao.textContent = proteinapao;
    carbo_pao.textContent = carbopao;
    // -----------FRANGO-----------
    const proteinafrango =
      (peso.value * 0.075).toFixed(2).replace(".", ",") + "g";
    const carbofrango = (peso.value * 0).toFixed(2).replace(".", ",") + "g";
    const proteina_frango = document.querySelector(".proteina_frango");
    const carbo_frango = document.querySelector(".carbo_frango");
    proteina_frango.textContent = proteinafrango;
    carbo_frango.textContent = carbofrango;
    // -----------FIM-----------
    document.querySelector(".resultado").classList.remove("nao-ativo");
  });
}

Calcular();
