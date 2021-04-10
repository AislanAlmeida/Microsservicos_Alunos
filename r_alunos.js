const express = require('express');
const router = express.Router();
const alunoService = require('../services/alunoService');

router.get('/',async(req,res) =>{
    let alunos = await alunoService.obterAlunos();
    res.status(200).json(alunos);
})

router.get('/:id',async(req,res)=>{
    let id = req.params.id;
    let aluno = await alunoService.obterAlunoPorId(id);
    res.status(200).json(aluno);
})

router.post('/',async(req,res) =>{
    let nome = req.body.nome;
    if(nome){
        let aluno = await alunoService.inserirAluno(nome);
        res.status(201).json(aluno);
    }else{
        res.status(400).json({mensagem:'Dados Incompletos'});
    }

})
module.exports = router;