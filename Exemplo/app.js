'use strict'


const mostrarDados = (data) => {
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = `
        <table border ="1">
            <tr>
                <th>Cidade</th>
                <th>Estado</th>
            </tr>
            <tr>
                <th>${data.loocalidade}</th>
                <th>${data.uf}</th>
            </tr>
        </table>
    `;
}

const getAPI = () => {
    const url = "https://viacep.com.br/ws/01001000/json/";

    fetch(url).then(res => (res.json())
        .then(data => mostrarDados(data)));
}

document.getElementById('consumir')
    .addEventListener('click', getAPI);