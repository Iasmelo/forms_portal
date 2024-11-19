function calcularArea(event) {
    event.preventDefault(); 

    const largura = parseFloat(document.getElementById('largura').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (largura > 0 && altura > 0) {
        const area = largura * altura; // Fórmula da área do retângulo: largura * altura
        document.getElementById('resultado').innerText = `A área é: ${area.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos para a largura e altura.';
    }
}
