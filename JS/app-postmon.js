'use strict'

const  showAddress = (address) => {
    document.getElementById('endereco').value = address.logradouro;
    document.getElementById('bairro').value = address.bairro;
    document.getElementById('cidade').value = address.cidade;
    document.getElementById('estado').value = address.estado;
};

const requestAPI = async(event) => {
    const cep = event.target.value;
    const url = `https://api.postmon.com.br/v1/cep/${cep}`;
    const data = await fetch(url);
    const address = await data.json()

    showAddress(address);
};

document.getElementById('cep').addEventListener('focusout', requestAPI);