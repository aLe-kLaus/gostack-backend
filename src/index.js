const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
    return response.json([
        'Project 1',
        'Project 2',
    ]);
});

app.post('/projects', (request, response) => {
    return response.json([
        'Project 3',
        'Project 4', 
        'Project 5',
    ]);
});

app.put('/projects/:id', (request, response) => {
    return response.json([
        'Project 5',
        'Project 6',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Project 7',
        'Project 8',
    ]);
});

app.listen(3333, () => {
    console.log('Back-end started!')
});