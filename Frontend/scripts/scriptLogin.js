const form = document.querySelector('form')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let dados = {
        email: document.querySelector("#email").value,
        senha: document.querySelector("#senha").value
    }

    fetch("http://localhost:8000/login", {
        method: "POST", // Altere para POST, pois você está enviando dados confidenciais
        body: JSON.stringify(dados),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(resposta => {
        if (resposta.status === 200) {
            return resposta.json();
        } else {
            throw new Error('Credenciais inválidas');
        }
    })
    .then(resultado => {
        console.log(resultado.message);
        window.location.href = "Home.html";
    })
    .catch(error => {
        console.error(error.message);
        // Exibir mensagem de erro no frontend, se necessário
    });
});
