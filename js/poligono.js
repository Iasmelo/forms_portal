        function calcularArea(event) {
            event.preventDefault(); 
            const n = parseInt(document.getElementById('lados').value); // Número de lados
            const l = parseFloat(document.getElementById('comprimento').value); // Comprimento de cada lado

            if (n >= 3 && l > 0) {
                const area = (1 / 4) * n * Math.pow(l, 2) * (1 / Math.tan(Math.PI / n)); // Fórmula da área
                document.getElementById('resultado').innerText = `A área do polígono regular é: ${area.toFixed(2)}`;
            } else {
                document.getElementById('resultado').innerText = 'Por favor, insira valores válidos para o número de lados (mínimo 3) e comprimento.';
            }
        }
