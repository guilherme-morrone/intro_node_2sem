const express = require('express');

const app = express();

//const porta = process.env.PORT || 3333;

const porta = 3333;

//define a porta - ver qual está disponível no servidor
app.listen(porta, () => {
    console.log('Servidor iniciando na porta: ' + porta);
});

app.get('/', (request, response) =>{
    response.send('Hello, Word!!!');
});