function calcularArea(event) {
    event.preventDefault(); 
    const lado = parseFloat(document.getElementById('lado').value);

    if (lado > 0) {
        const area = lado * lado; // Fórmula da área do quadrado: lado * lado
        document.getElementById('resultado').innerText = `A área é: ${area.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira um valor válido para o lado.';
    }
}
