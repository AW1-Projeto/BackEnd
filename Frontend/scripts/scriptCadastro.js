// Example starter JavaScript for disabling form submissions if there are invalid fields

  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const form = document.querySelector('form')
  
    // Loop over them and prevent submission
    
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      })
  

  const senhaInput = document.querySelector("#senha")
  const confirmaSenha = document.querySelector("#confirmaSenha")

  senhaInput.addEventListener("keyup", ()=>{
    const senha = senhaInput.value;
    let isValid = senha.length >=4 && senha.length <=24 && /[0-9]/.test(senha) && /[a-z]/.test(senha)&& /[A-Z]/.test(senha);
    if(isValid){
        senhaInput.classList.remove("is-invalid")
        senhaInput.classList.add("is-valid")
    } else{
        senhaInput.classList.remove("is-valid")
        senhaInput.classList.add("is-invalid")
    }
  })

  confirmaSenha.addEventListener("keyup", ()=>{
    if(confirmaSenha.value === senhaInput.value){
        confirmaSenha.classList.remove("is-invalid")
        confirmaSenha.classList.add("is-valid")
    } else{
        confirmaSenha.classList.remove("is-valid")
        confirmaSenha.classList.add("is-invalid")
    }
  })

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
        let dados = {
            nome: document.querySelector("#nome").value,
            email: document.querySelector("#email").value,
            senha: senhaInput.value,
        }

        fetch("http://localhost:8000/usuario", {
            method: "POST",
            body: JSON.stringify(dados),
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => window.location.href = "login.html")

    }
})