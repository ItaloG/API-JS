'use strict'

// Fazer o cosumo da API de cep para aparecer automaticamente os dado de endereço.

const  showData = (data) => {
    const endereco = document.getElementById('endereco');
    const bairro = document.getElementById('bairro');
    const cidade = document.getElementById('cidade');
    const estado = document.getElementById('estado');
    
    console.log(data);
    endereco.value = data.logradouro;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    estado.value = data.uf;
};

/**
 *  Recebe um evento, faz uma requisição à API e retorna os dados da requisição
 * @param {HTML} event 
 * @returns String
 */
const requestAPI = (event) => {
    const cep = event.target.value;

    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    fetch(url).then(res => (res.json())
              .then(data => showData(data)));
};


document.getElementById('cep').addEventListener('focusout', requestAPI);