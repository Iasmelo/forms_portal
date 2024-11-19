        function calcularArea(event) {
            event.preventDefault(); 
            const comprimento = parseFloat(document.getElementById('comprimento').value);
            const largura = parseFloat(document.getElementById('largura').value);
            const altura = parseFloat(document.getElementById('altura').value);

            if (comprimento > 0 && largura > 0 && altura > 0) {
                const area = 2 * (largura * comprimento + largura * altura + comprimento * altura); // Fórmula da área total
                document.getElementById('resultado').innerText = `A área total é: ${area.toFixed(2)}`;
            } else {
                document.getElementById('resultado').innerText = 'Por favor, insira valores válidos para comprimento, largura e altura.';
            }
        }
