'use strict'

// Fazer o cosumo da API de cep para aparecer automaticamente os dado de endereço.


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