const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({limit:'10mb',extended:false}));

const routerAlunos = require('./routes/r_alunos');

app.use('/alunos',routerAlunos);

app.listen(3001,() => console.log('Server Microsserviços Alunos - ATIVO ==> porta 3000'));