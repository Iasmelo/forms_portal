        function calcularArea(event) {
            event.preventDefault(); 
            const lado = parseFloat(document.getElementById('lado').value);

            if (lado > 0) {
                const area = 6 * Math.pow(lado, 2); // Fórmula da área total do cubo
                document.getElementById('resultado').innerText = `A área total do cubo é: ${area.toFixed(2)}`;
            } else {
                document.getElementById('resultado').innerText = 'Por favor, insira um valor válido para o lado.';
            }
        }
