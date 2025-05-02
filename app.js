function converter() {
    let celsius = parseFloat(document.getElementById("graus").value);
    let tipo = document.getElementById("tipo-graus").value;
    let resultadoTexto = document.getElementById("resultado");

    if (isNaN(celsius)) {
        resultadoTexto.innerHTML = "<label class='texto__paragrafo'>Digite um valor válido.</label>";
        return;
    }

    let resultado = "";

    if (tipo === "fahrenheit") {
        let fahrenheit = (celsius * 9/5) + 32;
        resultado = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
    } else if (tipo === "kelvin") {
        let kelvin = celsius + 273.15;
        resultado = `${celsius}°C = ${kelvin.toFixed(2)}K`;
    }

    resultadoTexto.innerHTML = `<label class='texto__paragrafo'>Resultado da conversão: ${resultado}</label>`;
}

