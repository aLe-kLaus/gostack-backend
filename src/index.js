const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 3',
        'Projeto 4', 
        'Proejto 5',
    ]);
});

app.put('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 5',
        'Projeto 6',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 7',
        'Projeto 8',
    ]);
});

app.listen(3333, () => {
    console.log('Back-end started!')
});