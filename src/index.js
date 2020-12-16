const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
    return response.json([
        'Project 1',
        'Project 1',
    ]);
});

app.post('/projects', (request, response) => {
    return response.json([
        'Project 1',
        'Project 1', 
        'Project 1',
    ]);
});

app.put('/projects/:id', (request, response) => {
    return response.json([
        'Project 1',
        'Project 1',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Project 1',
        'Project 1',
    ]);
});

app.listen(3333, () => {
    console.log('Back-end started!')
});