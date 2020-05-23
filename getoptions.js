// GET OPTIONS
// Este script implementa a obtenção, via API, de todas classes disponíveis em Dungeons and Dragons e disponibiliza para a seleção do usuário

// URL BASE
const url = "https://www.dnd5eapi.co/api/classes";

// REQUISIÇÃO DE TODAS CLASSES DISPONÍVEIS
fetch(url)
    // DADOS DA RESPOSTA
    .then(resposta => {
        if(!resposta.ok) throw new Error("Requisition error. Status: "+ resposta.status);
        return resposta.json();
    })
    // PROCESSAMENTO DO PAYLOAD
    .then(data => {
        classes = createArray(data);
        writeHTML(classes);
    })
    // TRATAMENTO DE ERRO
    .catch(err => console.log(err));


// FUNÇÕES
// CRIAR ARRAY COM TODAS CLASSES
function createArray(data) {
    let classes = [];
    for (let i=0; i<data.count; i++){
        classes.push(data.results[i].name);
    }
    return classes;
}

// ESCREVER DOCUMENTO HTML
function writeHTML (classes) {
    var options = document.getElementById("options");
    for (let i=0; i<classes.length; i++) {
        let newHTML = (`
            <input type="radio" name="classes" id=""${classes[i]}"" value="${classes[i]}" onclick="update('${classes[i]}')">
            <label for="${classes[i]}">${classes[i]}</label><br>
        `);
        options.innerHTML += newHTML;
    }
}