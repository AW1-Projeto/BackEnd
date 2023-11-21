console.log("oi")

document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:8000/jogo') // Substitua pelo caminho correto do seu serviço
        .then(response => response.json())
        .then(jogos => preencherDadosJogos(jogos))
        .catch(error => console.error('Erro ao buscar dados dos jogos:', error));
});

function preencherDadosJogos(jogos) {
    const gameInfoElement = document.getElementById("game-info");

    jogos.forEach(jogo => {
        // Adaptar o código conforme necessário para o seu layout
        const jogoHtml = `<div>
                            <p>Time 1: ${jogo.time1}</p>
                            <p>Time 2: ${jogo.time2}</p>
                            <p>Data: ${jogo.data}</p>
                            <p>Horário: ${jogo.horario}</p>
                            <p>Jogado: ${jogo.jogado ? 'Sim' : 'Não'}</p>
                            <p>Placar: ${jogo.placar}</p>
                        </div>`;

        gameInfoElement.innerHTML += jogoHtml;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    function getJogos() {
        fetch('http://localhost:8000/jogo')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }
                return response.json();
            })
            .then(data => exibirJogos(data))
            .catch(error => console.error('Erro ao obter jogos:', error));
    }

    function exibirJogos(jogos) {
        const container = document.getElementById('game-info');
        container.innerHTML = '';

        jogos.forEach(jogo => {
            const card = `<div>
                            <p>Time 1: ${jogo.time1}</p>
                            <p>Time 2: ${jogo.time2}</p>
                            <p>Data: ${jogo.data}</p>
                            <p>Horário: ${jogo.horario}</p>
                            <p>Jogado: ${jogo.jogado ? 'Sim' : 'Não'}</p>
                            <p>Placar: ${jogo.placar}</p>
                        </div>`;

            container.insertAdjacentHTML('beforeend', card);
        });
    }
    getJogos();
});
