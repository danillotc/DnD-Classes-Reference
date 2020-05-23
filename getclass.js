// GET CLASS
// Este script implementa a alteração do HTML de acordo com o input do usuário, obtendo as informações de cada classe via API

// URL BASE
const BASE = "https://www.dnd5eapi.co/api/";
const TYPE = "classes";

// ATUALIZAR HTML A CADA INPUT
function update(userInput) {
  var id = userInput.toLowerCase();  
  const url = `${BASE}${TYPE}/${id}`;

  // REQUISIÇÃO DOS DADOS DA CLASSE
  fetch(url)
    // DADOS DA RESPOSTA
    .then(response => {
      if (!response.ok) throw new Error ("Requisition error. Status: " + response.status);
      return response.json();
    })

    // PROCESSAMENTO DO PAYLOAD
    .then(payload => updateHTML(payload))

    // TRATAMENTO DE ERRO
    .catch(err => console.log(err));

  // FUNÇÕES
  // ATUALIZAR DOCUMENTO HTML  
  const updateHTML = (data) => {
    console.log(data);
    const newHTML = `
      <div class="name">${data.name}</div>
      <div class="infoblock">
        <span class="info">Hit Die: 1d${data.hit_die}</span>
      </div>
    `;
    const mainHTML = document.querySelector(".main");
    mainHTML.innerHTML = newHTML;
  }
}