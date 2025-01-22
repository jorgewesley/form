document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('cadastroForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const data = {
        empresa: e.target.empresa.value,
        cnpj: e.target.cnpj.value,
        contato: e.target.contato.value,
        email: e.target.email.value,
        telefone: e.target.telefone.value
      };
      fetch('https://script.google.com/macros/s/AKfycbxaDYr6a08sNeHRuT1nq2xToP-8UYGuYxdkxFlRElhe3_4QpcMkAG6wNZC224TpSgsC/exec', {
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'sucesso') {
          alert('Cadastro realizado com sucesso!');
        } else {
          alert('Erro ao realizar cadastro.');
        }
      })
      .catch(error => {
        alert('Erro ao conectar com o servidor.');
        console.error('Erro:', error);
      });
    });

    // Digitação em loop das strings
    var options = {
      strings: ["Excelência em Telecomunicação Corporativa", "COLOCATION.", "INTERLIGAÇÃO ENTRE FILIAIS.", "CONEXÃO E ESTABILIDADE"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    };
    var typed = new Typed("#frases", options);
  });