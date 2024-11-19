function calcularArea(event) {
    event.preventDefault(); 
    const raio = parseFloat(document.getElementById('raio').value);

    if (raio > 0) {
        const area = Math.PI * Math.pow(raio, 2); // Fórmula da área do círculo: π * r²
        document.getElementById('resultado').innerText = `A área é: ${area.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira um valor válido para o raio.';
    }
}
