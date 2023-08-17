function executeCadastro() {
    var nome = document.getElementById('nome').value;
    var numero = document.getElementById('numero').value;
    var idade = document.getElementById('idade').value;
  
    var resultadoElement = document.getElementById('resultado');
    var resultado = {};
  
    if (nome && numero && idade) {
      resultado.message = `Nome: ${nome}, Número: ${numero}, Idade: ${idade}`;
    } else {
      resultado.message = 'Por favor, preencha todos os campos.';
    }
  
    resultadoElement.innerText = resultado.message;
  }