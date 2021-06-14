'use strict'

// Fazer o cosumo da API de cep para aparecer automaticamente os dado de endereço.

const  showData = (data) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;

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