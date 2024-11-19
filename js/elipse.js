        function calcularArea(event) {
            event.preventDefault(); 
            const a = parseFloat(document.getElementById('semiMaior').value); // Semi-eixo maior
            const b = parseFloat(document.getElementById('semiMenor').value); // Semi-eixo menor

            if (a > 0 && b > 0) {
                const area = Math.PI * a * b; // Fórmula da área da elipse
                document.getElementById('resultado').innerText = `A área da elipse é: ${area.toFixed(2)}`;
            } else {
                document.getElementById('resultado').innerText = 'Por favor, insira valores válidos para os semi-eixos.';
            }
        }
