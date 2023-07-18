document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Obter os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    // Dados do novo usuário a serem enviados ao servidor
    const novoUsuario = {
      nome: nome,
      email: email,
      senha: senha
    };
  
    // Fazer a requisição usando a API Fetch
    fetch("caminho/do/seu/servidor/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(novoUsuario)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Erro na requisição.");
      }
    })
    .then(data => {
      document.getElementById("mensagem").innerText = "Cadastro realizado com sucesso!";
      // Aqui você pode redirecionar o usuário para uma página de sucesso, por exemplo.
    })
    .catch(error => {
      document.getElementById("mensagem").innerText = "Erro no cadastro. Tente novamente mais tarde.";
      console.error(error);
    });
  });
  