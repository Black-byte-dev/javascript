  function
        atualizarHora() {
            const agora = new Date();
            let hora = agora.getHours();
            let minuto = agora.getMinutes();
            let segundo = agora.getSeconds();

            // Adiciona um zero à esquerda se o valor for menor que 10
            hora = hora < 10 ? '0' + hora : hora;
            minuto = minuto < 10 ? '0' + minuto : minuto;
            segundo = segundo < 10 ? '0' + segundo : segundo;

            document.getElementById('hora').textContent = hora;
            document.getElementById('minuto').textContent = minuto;
            document.getElementById('segundo').textContent = segundo;

            // Atualiza a imagem com base na hora do dia
            const imagens = document.querySelectorAll('section div:nth-child(2) img');
            imagens.forEach(img => img.style.display = 'none'); // Esconde todas as imagens

            if (hora >= 6 && hora < 12) {
                imagens[0].style.display = 'block'; // Manhã
            } else if (hora >= 12 && hora < 18) {
                imagens[1].style.display = 'block'; // Tarde
            } else {
                imagens[2].style.display = 'block'; // Noite
            }
        }

        // Chama a função ao carregar a página e atualiza a cada segundo
        atualizarHora();
        setInterval(atualizarHora, 1000);

        function atualizarBackground() {
            const agora = new Date();
            const hora = agora.getHours();
            let cor;

            if (hora >= 6 && hora < 12) {
                cor = '#FFFAE3'; // Manhã: amarelo claro
            } else if (hora >= 12 && hora < 18) {
                cor = '#FFE4B5'; // Tarde: laranja claro
            } else {
                cor = '#2C3E50'; // Noite: azul escuro
            }

            document.body.style.backgroundColor = cor;
        }

        // Chama a função ao carregar a página e atualiza a cada segundo
        atualizarBackground();
        setInterval(atualizarBackground, 1000);