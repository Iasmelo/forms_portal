
function calcular(event) {
    event.preventDefault(); 
    const a = parseFloat(document.getElementById('aresta').value); // Aresta
    const anguloGraus = parseFloat(document.getElementById('angulo').value); // Ângulo em graus
    const theta = anguloGraus * (Math.PI / 180); // Converte para radianos

    if (a > 0 && anguloGraus > 0 && anguloGraus < 180) {
        // Fórmulas de área e volume
        const area = 2 * Math.pow(a, 2) * (1 + Math.sqrt(1 + Math.pow(1 / Math.tan(theta), 2)));
        const volume = Math.pow(a, 3) * Math.sqrt(1 - 3 * Math.pow(Math.cos(theta), 2) + 2 * Math.pow(Math.cos(theta), 3));

        document.getElementById('resultado').innerHTML = `
            A área total do romboedro é: ${area.toFixed(2)}<br>
            O volume do romboedro é: ${volume.toFixed(2)}
        `;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos para a aresta e o ângulo.';
    }
}
