

document.addEventListener('DOMContentLoaded', function () {
    function getNoticias() {
        fetch('http://localhost:8000/noticia')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }
                return response.json();
            })
            .then(data => exibirNoticias(data))
            .catch(error => console.error('Erro ao obter notícias:', error));
    }

    function exibirNoticias(noticias) {
        const container = document.getElementById('noticias-container');
        container.innerHTML = '';

        noticias.forEach(noticia => {
            const card = `
            <div class="col-md-4">
                <div class="card mb-4 box-shadow card-size">
                    <img class="card-img-top" src="${noticia.imagem}" alt="${noticia.titulo}">
                    <div class="card-body">
                        <h3 class="card-text">${noticia.titulo}</h3>
                        <p class="card-text">${noticia.preview}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <!-- Substitua o botão por um link -->
                                <a href="${noticia.linkNoticia}" class="btn btn-sm btn-outline-secondary" target="_blank">Ver notícia completa</a>
                            </div>
                            <small class="text-muted">15 mins</small>
                        </div>
                    </div>
                </div>
            </div>
        `;

            container.insertAdjacentHTML('beforeend', card);
        });
    }

    getNoticias();
});
