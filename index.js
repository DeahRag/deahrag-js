const axios = require('axios');
const { response } = require('express');

const greet = name => 'deahrag-js | Conectando a Discord.....\ndeahrag-js | Conectado a la base de datos.....\ndeahrag-js | Hello ' + name;

const users = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=2')
    return res.data;
}

module.exports = {
    users,
    greet
}