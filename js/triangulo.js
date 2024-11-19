function calcularArea(event) {
    console.log('Função calcularArea chamada'); // Para testar se a função está sendo chamada
    event.preventDefault(); // Evita o recarregamento da página
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (base > 0 && altura > 0) {
        const area = (base * altura) / 2; // Fórmula da área do triângulo
        document.getElementById('resultado').innerText = `A área é: ${area.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos para a base e altura.';
    }
}
