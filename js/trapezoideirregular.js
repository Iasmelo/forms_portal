function calcularArea(event) {
    event.preventDefault(); 
    const baseMaior = parseFloat(document.getElementById('baseMaior').value);
    const baseMenor = parseFloat(document.getElementById('baseMenor').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (baseMaior > 0 && baseMenor > 0 && altura > 0) {
        const area = 0.5 * (baseMaior + baseMenor) * altura; // Fórmula da área
        document.getElementById('resultado').innerText = `A área do trapezoide é: ${area.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos para as bases e a altura.';
    }
}